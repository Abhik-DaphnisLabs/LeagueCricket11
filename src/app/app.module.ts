import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home';
import { CricketComponent } from './cricket';
import { AboutComponent } from './about';
import { ContactUsComponent } from './contactUs';
import { PaymentComponent } from './payment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    CricketComponent,
    AboutComponent,
    ContactUsComponent,
    PaymentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//end