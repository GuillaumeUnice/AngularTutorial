import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    imports:        [FormsModule, HttpModule],
    exports:        [FormsModule, HttpModule]
})
export class SharedModule { }