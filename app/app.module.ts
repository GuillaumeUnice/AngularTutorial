import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { ConnectModule } from './components/connect/connect.module';
import { AboutModule } from './components/about/about.module';
import { AppComponent } from './app.component';

@NgModule({
    imports:        [BrowserModule, SharedModule, ConnectModule, AboutModule],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent]
})
export class AppModule { }