import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';


const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsPageComponent
  }
];

@NgModule({
  declarations: [AboutUsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,
    RouterModule
  ]
})
export class AboutUsModule { }
