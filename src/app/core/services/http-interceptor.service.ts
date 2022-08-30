import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {tapResponse} from "@ngrx/component-store";
import {InterceptorService} from "./interceptor.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private interceptorService: InterceptorService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    console.log("interceptor:Before " , req);
    req = req.clone({
      headers: null,
      // withCredentials: true
    });
    console.log("interceptor:After", req);
    return next.handle(req).pipe(
      tapResponse(
        (incoming: HttpResponse<any>) => {
          console.log('-------HttpResponse---------', incoming);
          this.interceptorService.handleInterceptorResponse(incoming);
        },
        (err: HttpErrorResponse) => {
          console.log('-------HttpErrorResponse---------', err);
          this.interceptorService.handleInterceptorResponse(err);
        }
      ));
  }
}
