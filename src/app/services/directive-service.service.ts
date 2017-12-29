import { Injectable } from '@angular/core';

@Injectable()
export class DirectiveServiceService {
  map = new Map();
  constructor() {}

  register(key, value) {
    this.map.set(key, value);
  }
  getItem(key) {
    return this.map.get(key);
  }

}
