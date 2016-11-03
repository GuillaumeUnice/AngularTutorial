import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { ConnectComponent } from './connect.component';

@NgModule({
    imports:        [CommonModule, SharedModule],
    declarations:   [ConnectComponent],
    exports:        [ConnectComponent]
})
export class ConnectModule { }