import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { MenuComponent } from './menu/menu.component'


@NgModule({
  declarations: [
    AppComponent,
    PageAcceuilComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule, 
    BrowserAnimationsModule,

    RouterModule.forRoot(
      [

      { path: "menu", component: MenuComponent, pathMatch:"full" },
      { path: "page-acceuil", component: PageAcceuilComponent, pathMatch:"full" },
      { path: "", redirectTo: "page-acceuil", pathMatch:"full" },
      ],
      
      {useHash: true}
      ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
