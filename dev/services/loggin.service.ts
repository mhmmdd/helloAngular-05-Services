import {Injectable} from "angular2/core";

@Injectable()

export class LogginService {
  private _lastMessage = '';

  log(message: string) {
    console.log('Current Message: ' + message + ', Last Messagee: ' + this._lastMessage);
    this._lastMessage = message;
  }
}
