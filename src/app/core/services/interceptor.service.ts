import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {SnackBarService} from "./snack-bar.service";
import {BehaviorSubject} from "rxjs";

interface HttpStatusCode {
  [key: number]: Array<StatusDetails>;
}

interface StatusDetails {
  message: string | null;
  uiMessage?: string | null;
}

const httpStatusCodesObject: HttpStatusCode = {
  0: [{
    message: "Unknown Error",
    uiMessage: "Please Click the Enable Cors Button on the Search Bar to fix this problem"
  }],
  200: [{message: "OK"}]

}

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  private corsStatusSubject$ = new BehaviorSubject<boolean>(false)

  public corsStatusObservable$ = this.corsStatusSubject$.asObservable()
  public CORS_ENDPOINT = 'https://cors-anywhere.herokuapp.com/corsdemo'

  constructor(
    private uiService: SnackBarService,
  ) {
  }

  private isEmptyString = (str): boolean =>
    str === undefined ||
    str === null ||
    String(str).trimStart().trimEnd().match(/^ *$/) !== null;

  private runInterceptorActions(statusRules: StatusDetails) {
    if (!this.isEmptyString(statusRules.uiMessage)) {
      this.uiService.showToast(
        statusRules.uiMessage,
        'Close',
      );
    }

  }

  handleInterceptorResponse(
    httpResponse: HttpErrorResponse | HttpResponse<any>
  ) {
    const statusCode = httpResponse.status;

    if (httpStatusCodesObject.hasOwnProperty(statusCode)) {
      const statusErrorDetails = httpStatusCodesObject[statusCode];

      for (const statusRules of statusErrorDetails) {
        if (httpResponse instanceof HttpResponse) {
          {
            this.corsStatusSubject$.next(true)
            this.runInterceptorActions(statusRules);
            break;
          }
        } else if (httpResponse instanceof HttpErrorResponse) {
          if (
            (!this.isEmptyString(statusRules.message) &&
              httpResponse.statusText.includes(
                statusRules.message
              )) ||
            statusRules.message === null
          ) {
            this.corsStatusSubject$.next(false)
            this.runInterceptorActions(statusRules);

            break;
          }
        } else {
          console.error(
            '--------handleInterceptorResponse---Should Never Execute-------------'
          );
        }
      }
    }
  }
}
