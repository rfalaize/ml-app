import * as tf from '@tensorflow/tfjs';

import { MnistData } from './mnistdata';
import { IModelSubscriber } from './imodelsubscriber';

export class MnistModel {
    data: MnistData;
    model: any;
    readonly BATCH_SIZE = 64;
    readonly TRAIN_BATCHES = 150;
    readonly TEST_BATCH_SIZE = 1000;
    readonly TEST_ITERATION_FREQUENCY = 5;
    subscribers: IModelSubscriber[]; //store reference to subscribers

    constructor(){
        this.init();
        this.subscribers = [];
    }

    addSubscriber(subscriber: IModelSubscriber) {
        this.subscribers.push(subscriber);
    }

    init() {
        console.log('Creating new model...');
        this.model = tf.sequential();

        this.model.add(tf.layers.conv2d({
            inputShape: [28, 28, 1],
            kernelSize: 5,
            filters: 8,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'varianceScaling'
        }));
        this.model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));
        this.model.add(tf.layers.conv2d({
            kernelSize: 5,
            filters: 16,
            strides: 1,
            activation: 'relu',
            kernelInitializer: 'varianceScaling'
        }));
        this.model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));
        this.model.add(tf.layers.flatten());
        this.model.add(tf.layers.dense(
            {units: 10, kernelInitializer: 'varianceScaling', activation: 'softmax'}));
          
        const LEARNING_RATE = 0.15;
        const optimizer = tf.train.sgd(LEARNING_RATE);

        this.model.compile({
            optimizer: optimizer,
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy'],
        });
    }

    async train() {
        console.log('Start training model...');
        const lossValues = [];
        const accuracyValues = [];
      
        for (let i = 0; i < this.TRAIN_BATCHES; i++) {
            const batch = this.data.nextTrainBatch(this.BATCH_SIZE);

            let testBatch;
            let validationData;
            // Every few batches test the accuracy of the mode.
            if (i % this.TEST_ITERATION_FREQUENCY === 0) {
                testBatch = this.data.nextTestBatch(this.TEST_BATCH_SIZE);
                validationData = [testBatch.xs.reshape([this.TEST_BATCH_SIZE, 28, 28, 1]), testBatch.labels];
            }
      
            // The entire dataset doesn't fit into memory so we call fit repeatedly with batches
            const history = await this.model.fit(
                batch.xs.reshape([this.BATCH_SIZE, 28, 28, 1]), batch.labels,
                {batchSize: this.BATCH_SIZE, validationData, epochs: 1});
        
            const loss = history.history.loss[0];
            const accuracy = history.history.acc[0];

            // Send loss / accuracy updates
            var updateValue = {'batch': i, 'loss': loss, 'set': 'train', accuracy: null};
            if (testBatch != null) updateValue.accuracy = accuracy;     
            this.subscribers.forEach(element => {
                try { element.getTrainingUpdate(updateValue); } 
                catch { console.log('Could not send update to subscriber'); }
            });

            batch.xs.dispose();
            batch.labels.dispose();
            if (testBatch != null) {
                testBatch.xs.dispose();
                testBatch.labels.dispose();
            }
        
            await tf.nextFrame();
        }
        console.log('Model trained.');
    }

    async predictNextBatch() {
        console.log('Start predictions...');
        const testExamples = 100;
        const batch = this.data.nextTestBatch(testExamples);
        var output = null;
        var predictions = null;
        var labels = null;
        tf.tidy(() => {
            output = this.model.predict(batch.xs.reshape([-1, 28, 28, 1]));
            const axis = 1;
            labels = Array.from(batch.labels.argMax(axis).dataSync());
            predictions = Array.from(output.argMax(axis).dataSync());
        });
        console.log('Predictions done');
        return {'batch': batch, 'predictions': predictions, 'labels': labels};
    }
        
    async loaddataset() {
        console.log('Start loading mnist dataset...');
        this.data = new MnistData();
        await this.data.load();
        console.log('Data loaded');
    }
        
    async run() {
        await this.loaddataset();
        await this.train();
        this.predictNextBatch();
    }

}