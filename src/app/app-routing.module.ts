import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
*/

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule
  ]
})
export class AppRoutingModule { }
