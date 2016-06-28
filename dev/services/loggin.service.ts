import {Injectable} from "angular2/core";

@Injectable()

export class LogginService {
  log(message: string) {
    console.log(message);
  }
}
