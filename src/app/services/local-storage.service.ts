import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
  constructor() {}

  saveItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key));
  };

  removeItem = (key: string) => {
    localStorage.removeItem(key);
  };
}
