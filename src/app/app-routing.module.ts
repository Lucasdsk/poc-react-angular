import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './views/home/home.component';
import { ListingComponent } from './views/listing/listing.component';

const appRoutes: Routes = [
  {
    path: "home"  ,
    component: HomeComponent
  },
  {
    path: "listing",
    component: ListingComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
