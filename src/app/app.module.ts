import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { AppComponent } from './app.component';
import { RegressionComponent } from './regression/regression.component';
import { MnistComponent } from './mnist/mnist.component';
import { RouterModule, Routes } from '@angular/router';
import { DrawableDirective } from './mnist/drawable.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegressionComponent,
    MnistComponent,
    DrawableDirective
  ],
  imports: [
    BrowserModule, 
    HotTableModule.forRoot(),
    RouterModule.forRoot([
      { path: 'regression', component: RegressionComponent },
      { path: 'mnist', component: MnistComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
