import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
