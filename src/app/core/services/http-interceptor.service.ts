import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    console.log("interceptor:Before " + req);
    req = req.clone({
      headers: new HttpHeaders({
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET , PUT , POST , DELETE",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization, Origin, Accept, Accept-Encoding",
        "Access-Control-Expose-Headers": "server,access-control-allow-headers,access-control-allow-methods,access-control-allow-credentials,access-control-expose-headers,access-control-max-age,p3p,content-encoding,x-host,x-content-type-options,content-length,content-type,date,connection,vary,x-org,x-final-url,access-control-allow-origin"
      })
    });
    console.log("interceptor:After" + req);


    return next.handle(req);
  }
}
