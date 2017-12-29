import {Directive, OnInit} from '@angular/core';
import {DirectiveServiceService} from '../services/directive-service.service';

@Directive({
  selector: '[appDirective3]'
})
export class Directive3Directive implements OnInit{

  constructor(private service: DirectiveServiceService) { }
  ngOnInit() {
    setTimeout(() => {
      this.getDirective();
    }, 2000);
  }
  getDirective() {
    const template = this.service.getItem('my-super-template');
    console.log(template);
  }
}
