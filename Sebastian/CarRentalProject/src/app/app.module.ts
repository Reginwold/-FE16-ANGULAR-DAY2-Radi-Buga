import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactPageComponent,
    HomePageComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
