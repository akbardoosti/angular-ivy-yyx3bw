import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartComponent } from './cart/cart.component';
import { ChartComponent } from './chart/chart.component';
import { ChartContainerComponent } from './chart-container/chart-container.component';
import { WpxFormComponent } from './wpx-form/wpx-form.component';
import { WpxNavComponent } from './wpx-nav/wpx-nav.component';
import { WpxInputComponent } from './wpx-input/wpx-input.component';
import { ChartHeaderComponent } from './chart-header/chart-header.component';
import { ChartBodyComponent } from './chart-body/chart-body.component';
import { ChartFooterComponent } from './chart-footer/chart-footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    CartContainerComponent,
    CartComponent,
    ChartComponent,
    ChartContainerComponent,
    WpxFormComponent,
    WpxNavComponent,
    WpxInputComponent,
    ChartHeaderComponent,
    ChartBodyComponent,
    ChartFooterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
