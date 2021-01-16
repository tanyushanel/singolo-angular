import { SocialeComponent } from './sociale/sociale.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LogoComponent } from './logo/logo.component';
import { PhoneComponent } from './slider/phones/phone/phone.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    QuoteComponent,
    HomeComponent,
    MenuComponent,
    LogoComponent,
    PhoneComponent,
    SocialeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
