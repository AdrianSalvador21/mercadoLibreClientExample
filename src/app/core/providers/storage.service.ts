
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private cookiePrefix = 'sl_';

  constructor() {
  }

  /**
   * [read - read key to local storage]
   * @param   {key}  key  [key to read in local storage]
   */
  read(key: string): any {
    const value = localStorage.getItem(`${this.cookiePrefix}.${key}`);
    return value === 'null' ? null : JSON.parse(value);
  }

  /**
   * [save - saves given data to local storage]
   * @param   {string}  key    [key to save in local storage]
   * @param   {any}  value  [value for given key]
   */
  save(key: string, value: any): void {
    value = value === undefined ? null : JSON.stringify(value);
    localStorage.setItem(`${this.cookiePrefix}.${key}`, value);
  }
}
