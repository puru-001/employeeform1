import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatButtonModule} from '@angular/material/button';




@NgModule({
  imports: [
    MatToolbarModule, MatGridListModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatButtonModule,
  ],
  exports: [MatToolbarModule, MatGridListModule,MatInputModule,MatFormFieldModule,MatRadioModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
  MatButtonModule]
})
export class MaterialModule { }
