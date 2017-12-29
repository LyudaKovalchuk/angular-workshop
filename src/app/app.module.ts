import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StyleDirective } from './directive/style.directive';
import { RegisterTemplateDirective } from './directive2/register-template.directive';
import { DirectiveServiceService } from './services/directive-service.service';
import { Directive3Directive } from './directive3/directive3.directive';


@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    RegisterTemplateDirective,
    Directive3Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [DirectiveServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
