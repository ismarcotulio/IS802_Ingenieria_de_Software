import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule

  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }
