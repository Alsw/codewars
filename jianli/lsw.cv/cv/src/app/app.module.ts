import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SkillComponent } from './main/skill/skill.component';
import { MyProductComponent } from './main/my-product/my-product.component';
import { ShowMessageDirective } from './main/my-product/show-message.directive';
import 'rxjs/add/operator/map';
import { CloseMessageDirective } from './main/my-product/close-message.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SkillComponent,
    MyProductComponent,
    ShowMessageDirective,
    CloseMessageDirective
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
