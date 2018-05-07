import { Component, ViewChild, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import { collectExternalReferences } from '@angular/compiler';
import {MnistModel} from './mnistmodel';
import { Model } from '@tensorflow/tfjs';
import { IModelSubscriber } from './imodelsubscriber';
import * as Chart from 'chart.js';

@Component({
  selector: 'mnist-component',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.scss']
})

export class MnistComponent implements OnInit, IModelSubscriber {
  status: string;
  statusElement: HTMLElement;
  messageElement: HTMLElement;
  imagesElement: HTMLElement;
  lossLabelElement: HTMLElement;
  accuracyLabelElement: HTMLElement;
  model: MnistModel;
  updateValues: any[];
  chart: any;
  readonly colorOrange = "#FFA631";
  readonly colorGreen = "#26C281";

  ngOnInit() {
    console.log('Starting application...');
    this.statusElement = document.getElementById('status');
    this.messageElement = document.getElementById('message');
    this.imagesElement = document.getElementById('images');
    this.lossLabelElement = document.getElementById('loss-label');
    this.accuracyLabelElement = document.getElementById('accuracy-label');
    this.reset();
  }
  
  async reset() {
    // set up chart
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          datasets: [{
            label: 'loss',
            data: [],
            borderWidth: 3,
            borderColor: this.colorOrange,
            fill: false,
            showLine: true,
            spanGaps: true,
            yAxisID: 'A'
          },
          {
            label: 'accuracy',
            data: [],
            borderWidth: 3,
            borderColor: this.colorGreen,
            fill: false,
            showLine: true,
            spanGaps: true,
            yAxisID: 'B'
          }
        ]
      },
      options: {
        legend: { display: true, position: 'top' },
        title: {
          display: true,
          text: 'Training statistics'
        },
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            gridLines: { display: false },
            ticks: { fontColor: this.colorOrange },
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            gridLines: { display: false },
            ticks: { fontColor: this.colorGreen },
          }]
        }
      }
    });
    // create new model
    this.initializeModel();
  }

  async initializeModel() {
    this.model = new MnistModel();
    this.model.addSubscriber(this);
    this.updateValues = [];
    await this.model.loaddataset();
    await this.model.train();
    var testResults = await this.model.predictNextBatch();
    console.log('Test results: ', testResults);
    this.showTestResults(testResults.batch, testResults.predictions, testResults.labels);
  }

  async getTrainingUpdate(data)
  {
    this.updateValues.push(data);
    // update chart
    this.chart.data.labels.push(data.batch);
    this.chart.data.datasets[0].data.push(data.loss);
    this.chart.data.datasets[1].data.push(data.accuracy);
    this.chart.update();
  }

  showTestResults(batch, predictions, labels) {
    const testExamples = batch.xs.shape[0];
    let totalCorrect = 0;
    for (let i = 0; i < testExamples; i++) {
      const image = batch.xs.slice([i, 0], [1, batch.xs.shape[1]]);

      const div = document.createElement('div');
      div.className = 'pred-container';

      const canvas = document.createElement('canvas');
      canvas.className = 'prediction-canvas';
      this.draw(image.flatten(), canvas);

      const pred = document.createElement('div');

      const prediction = predictions[i];
      const label = labels[i];
      const correct = prediction === label;

      pred.className = `pred ${(correct ? 'pred-correct' : 'pred-incorrect')}`;
      pred.innerText = `pred: ${prediction}`;

      div.appendChild(pred);
      div.appendChild(canvas);

      this.imagesElement.appendChild(div);
    }
  }
  
  draw(image, canvas) {
    const [width, height] = [28, 28];
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    const imageData = new ImageData(width, height);
    const data = image.dataSync();
    for (let i = 0; i < height * width; ++i) {
      const j = i * 4;
      imageData.data[j + 0] = data[i] * 255;
      imageData.data[j + 1] = data[i] * 255;
      imageData.data[j + 2] = data[i] * 255;
      imageData.data[j + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

}