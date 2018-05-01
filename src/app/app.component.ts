import { Component, OnInit } from '@angular/core';

import * as tf from '@tensorflow/tfjs';
import * as Handsontable from 'handsontable';
// import { Chart } from 'chart.js';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './../../bootflat/css/site.min.css']
})
export class AppComponent implements OnInit {
  title: string;
  dataset: any[];
  linearModel: tf.Sequential; // tensorflow sequential model
  predictions: any; // prediction values to be displayed in the front-end
  chart: any;

  ngOnInit() {
    this.title = 'Linear Regression';
    // initialize table with sample data
    this.dataset = [
      [3.2, 1.6],
      [4.4, 2.7],
      [5.5, 3.5],
    ];
    // set up chart
    this.chart = new Chart('canvas', {
      type: 'scatter',
      data: {
          datasets: [{
              label: '# of Votes',
              data: this.dataset,
              borderWidth: 1
          }]
      }
    });
    // train the model as soon as the component is initialized
    this.trainLinearModel();
  }

  async trainLinearModel(): Promise<any> {
    const st = Date.now();
    console.log('Start training linear regression model...');

    // define a new model for linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // prepare the model for training, specifying a loss function and an optimizer
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // get training data
    const col1 = this.dataset.map(function(value, index) { return value[0]; });
    const col2 = this.dataset.map(function(value, index) { return value[1]; });
    const xs = tf.tensor1d(col1);
    const ys = tf.tensor1d(col2);

    // train
    await this.linearModel.fit(xs, ys);

    console.log('Model trained in ' + (Date.now() - st) + 'ms');
  }

  predictLinearValue(val) {
    const st = Date.now();

    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.predictions = Array.from(output.dataSync())[0];

    console.log('Value predicted in ' + (Date.now() - st) + 'ms: ', this.predictions);
  }

  initChart() {
    this.chart.data.labels.push('X');
    // this.dataset.forEach();
    this.chart.update();
  }

  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
  }

}
