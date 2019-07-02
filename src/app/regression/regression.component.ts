import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as Handsontable from 'handsontable';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-regression',
  templateUrl: './regression.component.html',
  styleUrls: ['./regression.component.scss', './../../assets/styles/index.scss']
})
export class RegressionComponent implements OnInit {

  title: string;
  trainingset: number[][];
  testset: number[][];
  predictionset: number[][];

  linearModel: tf.Sequential; // tensorflow sequential model
  lastprediction: number; // last prediction value to be displayed
  chart: any;

  ngOnInit() {
    this.title = 'Linear Regression';
    // initialize table with sample data
    this.trainingset = [
      [1.0, 1.426],
      [2.0, 2.022],
      [3.0, 3.24],
      [4.0, 6.52],
      [5.0, 6.466],
      [6.0, 10.005],
      [7.0, 12.722],
      [8.0, 10.616],
      [9.0, 9.259],
      [10.0, 17.136],
      [11.0, 14.668],
      [12.0, 17.568],
      [13.0, 22.87],
      [14.0, 20.979],
      [15.0, 29.156],
    ];
    this.testset = [];
    this.predictionset = [];
    // set up chart
    this.chart = new Chart('canvas', {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'prediction',
          borderColor: "#26A65B",
          pointBorderColor: "#26A65B",
          pointBackgroundColor: "#26A65B",
          pointHoverBackgroundColor: "#26A65B",
          pointHoverBorderColor: "#26A65B",
          pointBorderWidth: 8,
          pointHoverRadius: 8,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          borderWidth: 4,
          data: []
        },{
          label: 'test',
          borderColor: "#F9690E",
          pointRadius: 0,
          fill: false,
          showLine: true,
          spanGaps: true,
          data: []
        },{
          label: 'training',
          borderColor: "#19B5FE",
          pointBorderColor: "#19B5FE",
          pointBackgroundColor: "#19B5FE",
          pointHoverBackgroundColor: "#19B5FE",
          pointHoverBorderColor: "#19B5FE",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          borderWidth: 4,
          data: []
        }]
      }
    });
    this.updateChart();

    // train the model as soon as the component is initialized
    this.trainLinearModel();
  }

  async updateChart()
  {
    this.updateChartTraining();
    this.updateChartTest();
    this.updateChartPrediction();
  }

  async updateChartTraining(){
    // training set
    this.chart.data.datasets[2].data = [];
    this.trainingset.forEach(element => {
      var sample = {x: element[0], y:element[1]};
      this.chart.data.datasets[2].data.push(sample);
    });
    this.chart.update();
  }

  async updateChartTest(){
    // test set
    this.chart.data.datasets[1].data = [];
    this.testset.forEach(element => {
      var sample = {x: element[0], y:element[1]};
      this.chart.data.datasets[1].data.push(sample);
    });
    this.chart.update();
  }

  async updateChartPrediction(){
    // predictions set
    console.log('Updating predictions in graph...');
    this.chart.data.datasets[0].data = [];
    this.predictionset.forEach(element => {
      var sample = {x: element[0], y:element[1]};
      console.log(sample);
      this.chart.data.datasets[0].data.push(sample);
    });
    this.chart.update();
  }

  async trainLinearModel(): Promise<any> {
    console.log('Start training linear regression model...');

    // define a new model for linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // prepare the model for training, specifying a loss function and an optimizer
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // get training data
    const col1 = this.trainingset.map(function(value, index) { return value[0]; });
    const col2 = this.trainingset.map(function(value, index) { return value[1]; });
    const xs = tf.tensor1d(col1);
    const ys = tf.tensor1d(col2);

    // train
    await this.linearModel.fit(xs, ys);
    console.log('Model trained: ', this.linearModel);

    // run on test set
    this.predictTestSet();

    // reset predictions
    this.predictionset = [];

    //update graph
    this.updateChart();
  }

  predictTestSet(){
    // Generate test set and run predictions
    console.log('Predicting test set...');
    this.testset = [];
    const col1 = this.trainingset.map(function(value, index) { return value[0]; });
    const amin = Math.min.apply(null, col1);
    const amax = Math.max.apply(null, col1);
    const arange = amax - amin;
    console.log('amin: ', amin, '; amax: ', amax, '; arange: ', arange);
    const nrange = arange * 1.4;
    const nmin = amin - arange * 0.2;
    const nmax = amax + arange * 0.2;
    console.log('nmin: ', amin, '; nmax: ', amax, '; nrange: ', arange);
    const nstep = nrange / 50;
    var i;
    var sample: number;
    var pred: number;
    for(i = 0; i<=50;i++){
      sample = nmin + i * nstep;
      var output = this.linearModel.predict(tf.tensor2d([sample], [1, 1])) as any;
      pred = output.dataSync()[0];
      //console.log(pred);
      this.testset.push([sample, pred]);
    }
    console.log('Test set predicted');
    this.updateChartTest();
  }

  predictLinearValue(val) {
    const st = Date.now();
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    var pred: number;
    pred = output.dataSync()[0];
    this.lastprediction = pred;
    console.log('Value predicted in ' + (Date.now() - st) + 'ms: ', pred);
    // update chart
    this.predictionset.push([val, pred]);
    this.updateChartPrediction();
  }

}
