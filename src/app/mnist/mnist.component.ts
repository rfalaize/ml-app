import { Component, ViewChild, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import { collectExternalReferences } from '@angular/compiler';
import {MnistModel} from './mnistmodel';
import { Model } from '@tensorflow/tfjs';
import { IModelSubscriber } from './imodelsubscriber';
import * as Chart from 'chart.js';
import { DrawableDirective } from './drawable.directive';

@Component({
  selector: 'mnist-component',
  templateUrl: './mnist.component.html',
  styleUrls: ['./mnist.component.scss', './../../assets/styles/index.scss']
})

export class MnistComponent implements OnInit, IModelSubscriber {
  status: string;
  statusElement: HTMLElement;
  messageElement: HTMLElement;
  imagesElement: HTMLElement;
  lossLabelElement: HTMLElement;
  accuracyLabelElement: HTMLElement;
  model: MnistModel;
  isTrained: boolean;
  updateValues: any[];
  histogram: any;
  chart: any;
  readonly colorOrange = "#FFA631";
  readonly colorGreen = "#26C281";

  @ViewChild(DrawableDirective) canvas;
  predictions: number[];
  prediction: any;
  

  ngOnInit() {
    console.log('Starting application...');
    this.isTrained = false;
    this.statusElement = document.getElementById('status');
    this.messageElement = document.getElementById('message');
    this.imagesElement = document.getElementById('images');
    this.lossLabelElement = document.getElementById('loss-label');
    this.accuracyLabelElement = document.getElementById('accuracy-label');
    this.reset();
  }
  
  async reset() {
    // predictions histogram
    this.histogram = new Chart('predictions-histogram', {
      type: 'bar',
      data: {
        labels: ['0','1','2','3','4','5','6','7','8','9'],
        datasets: [
          {
            label: "probabilities",
            data: []
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: false,
          text: 'Probabilities'
        },
        scales: {
          xAxes: [{ gridLines: { display: false } }],
          yAxes: [{ gridLines: { display: false },
              display: true,
              ticks: {
                min: 0,
                max: 1
              }
          }]
        }
      }
    });

    // training chart
    this.chart = new Chart('training-graph', {
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
    this.prediction = "";
  }

  async initializeModel() {
    this.model = new MnistModel();
    this.model.addSubscriber(this);
    this.updateValues = [];
    await this.model.loaddataset();
    await this.model.train();
    this.isTrained = true;
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

  async predictImage(imageData: ImageData) {
    console.log('Predicting image...');
    const pred = await tf.tidy(() => {

      // Convert the canvas pixels to 
      let img = tf.fromPixels(imageData, 1);
      img = img.reshape([1, 28, 28]);
      img = tf.expandDims(img, 3);
      img = tf.cast(img, 'float32');

      // Make and format the predications
      const output = this.model.model.predict(img) as any;

      // Save predictions on the component
      this.predictions = Array.from(output.dataSync()); 
      console.log('Predictions: ', this.predictions);

      this.histogram.data.datasets[0].data = this.predictions;
      var colors = new Array(10).fill('#ffe6cc');
      //highlight max
      var imax = this.predictions.indexOf(Math.max(...this.predictions));
      colors[imax] = this.colorOrange;
      this.histogram.data.datasets[0].backgroundColor = colors,
      this.histogram.update();
    });

  }

  clearCanvas(){
    console.log('Clearing canvas...');
    this.canvas.clear();
    this.predictions = new Array(10).fill(0);
    this.histogram.data.datasets[0].data = this.predictions;
    this.histogram.update();
  }

}