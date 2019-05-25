import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  /**
   * 用于加载模块
   */
  imports: [
    BrowserModule,
    CustomerDashboardModule
  ],
  /**
   * 显示服务商是谁，也就是用了什么服务
   */
  providers: [UserService],
  bootstrap: [AppComponent]
})


export class AppModule {

 }
