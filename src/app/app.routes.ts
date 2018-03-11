import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TopkekComponent } from "./topkek/topkek.component";

export const appRoutes: Routes = [
    { path: '', component: TopkekComponent },
    { path: 'topkek', component: TopkekComponent },
  ];
  