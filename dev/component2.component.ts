import {Component} from 'angular2/core';
import {LogginService} from "./services/loggin.service";
import {CalculatorService} from "./services/calculator.service";
import {DataService} from "./services/data.service";

@Component({
  selector: 'component-2',
  template: `
    <div>
      <h1>Loggin Service</h1>
      <input type="text" #message />
      <button (click)="onLog(message.value)">Send</button>
    </div>
    <div>
      <h1>Calculator Service</h1>
      <p>Add or multiply these two number:</p>
      <input type="text" #num1 />
      <input type="text" #num2 />
      <br/>
      <button (click)="onMultiply(num1.value, num2.value)">Multiply</button>
      <button (click)="onAdd(num1.value, num2.value)">Add</button>
      <br/>
      <p>Result: {{result}}</p>
    </div>
    <div>
      <h1>Data Service</h1>
      <button (click)="onGetData()">Get some data</button>
      <p>Data {{data}}</p>
      <input type="text" #newData>
      <button (click)="onInsert(newData.value)">Insert new Data</button>
    </div>
  `,
  providers: [LogginService, CalculatorService]
})

export class Component2Component {
  result: string;
  data: string;

  constructor(private _logginService: LogginService, private _calculatorService: CalculatorService, private _dataService: DataService) {}

  onLog(message: string) {
    this._logginService.log(message);
  }

  onMultiply(num1: string, num2: string) {
    this.result = ''+this._calculatorService.multiply(+num1, +num2);
  }

  onAdd(num1: string, num2: string) {
    this.result = ''+this._calculatorService.add(+num1, +num2);
  }

  onGetData() {
    this.data = this._dataService.getRandomString();
  }

  onInsert(value: string) {
    this._dataService.insert(value);
  }
}
