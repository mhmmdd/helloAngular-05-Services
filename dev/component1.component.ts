import {Component} from 'angular2/core';
import {LogginService} from "./services/loggin.service";

@Component({
  selector: 'component-1',
  template: `
    <input type="text" #message />
    <button (click)="onLog(message.value)">Send</button>
  `,
  providers: [LogginService]
})

export class Component1Component {
  constructor(private _logginService: LogginService) {}

  onLog(message: string) {
    this._logginService.log(message);
  }
}
