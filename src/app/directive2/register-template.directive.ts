import {Directive, TemplateRef, Input, OnInit, Renderer2, ElementRef} from '@angular/core';
import { DirectiveServiceService } from '../services/directive-service.service';


@Directive({
  selector: '[appRegisterTemplate]'
})
export class RegisterTemplateDirective implements OnInit{
  @Input() appRegisterTemplate;
  constructor(
    private service: DirectiveServiceService,
    private templateRef: TemplateRef<any>
  ) {
  }
  ngOnInit() {
    this.register();
    console.log('registred');
  }
  register() {
    this.service.register(this.appRegisterTemplate, this.templateRef);
  }
}
