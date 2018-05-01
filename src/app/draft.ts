import { Component, OnInit } from '@angular/core';

import { ThrowStmt } from '@angular/compiler';
import * as tf from '@tensorflow/tfjs';
import * as Handsontable from 'handsontable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;

  linearModel: tf.Sequential; // tensorflow sequential model
  predictions: any; // prediction values to be displayed in the front-end

  ngOnInit() {
    this.title = 'Linear regression';

    // train some randomly generated static data as soon as the component is initialized
    this.trainNewModel();
  }

  async trainNewModel(): Promise<any> {
    // define a new model for linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));

    // prepare the model for training, specifying a loss function and an optimizer
    this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

    // training data, completely random stuff
    const xs = tf.tensor1d([3.2, 4.4, 5.5]);
    const ys = tf.tensor1d([1.6, 2.7, 3.5]);

    // train
    await this.linearModel.fit(xs, ys);

    console.log('Model trained!');
  }

  predictLinearValue(val) {
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.predictions = Array.from(output.dataSync())[0];
    console.log('Predicted value: ', this.predictions);
  }

  test() {
    console.log('click');
  }

}
