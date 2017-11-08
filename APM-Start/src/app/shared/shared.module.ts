import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from "./star.component";
import { ConvertToSpaces } from "../shared/convert-to-spaces.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpaces
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
