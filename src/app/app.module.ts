import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AddComponent } from './shopping-list/add/add.component';
import { ProductsComponent } from './shopping-list/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    AddComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
