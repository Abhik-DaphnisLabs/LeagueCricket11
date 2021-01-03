import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home';
import { CricketComponent } from './cricket';
import { AboutComponent } from './about';
import { ContactUsComponent } from './contactUs';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    CricketComponent,
    AboutComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
