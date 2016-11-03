import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { ConnectModule } from './components/connect/connect.module';
import { AppComponent } from './app.component';

@NgModule({
    imports:        [BrowserModule, SharedModule, ConnectModule],
    declarations:   [AppComponent],
    bootstrap:      [AppComponent]
})
export class AppModule { }