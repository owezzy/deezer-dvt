import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ArtistsModule} from "./artists/artists.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {MaterialModule} from "./material";
import { CoreModule } from './core';
import {metaReducers, ROOT_REDUCERS} from "./Store";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {EffectsModule} from "@ngrx/effects";
import {RouterEffects} from "./core/effects";
import {HttpInterceptorService} from "./core/services";



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArtistsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },

    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Deezer Music',
      // logOnly: environment.production,
    }),
    EffectsModule.forRoot([RouterEffects]),

    CoreModule,
  ],
  providers: [        { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
