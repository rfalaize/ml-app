import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HotTableModule } from '@handsontable/angular';
import { AppComponent } from './app.component';
import { RegressionComponent } from './regression/regression.component';
import { MnistComponent } from './mnist/mnist.component';
import { RouterModule, Routes } from '@angular/router';
import { DrawableDirective } from './mnist/drawable.directive';
import { ChartsComponent } from './charts/charts.component';
import { QuantumComputingComponent } from './quantum-computing/quantum-computing.component';
import { MapsComponent } from './maps/maps.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    RegressionComponent,
    MnistComponent,
    DrawableDirective,
    ChartsComponent,
    QuantumComputingComponent,
    MapsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, 
    HotTableModule.forRoot(),
    RouterModule.forRoot([
      { path: 'regression', component: RegressionComponent },
      { path: 'mnist', component: MnistComponent },
      { path: 'quantum-computing', component: QuantumComputingComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
