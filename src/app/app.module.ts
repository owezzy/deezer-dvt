import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app.component';
import {HttpClientModule} from "@angular/common/http";
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
import {NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, POSITION, SPINNER} from "ngx-ui-loader";

const primaryColour = '#ffd740';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: primaryColour,
  bgsColor: primaryColour,
  bgsOpacity: 5,
  overlayColor: 'rgba(74, 74, 74, 0.2)',
  overlayBorderRadius: '50',
  fgsPosition: POSITION.centerCenter,
  bgsPosition: POSITION.bottomCenter,
  blur: 8,
  fgsSize: 144,
  bgsSize: 50,
  bgsType: SPINNER.squareJellyBox, // background spinner type - Arts
  fgsType: SPINNER.threeStrings, // foreground spinner type - Http
  hasProgressBar: true,
  pbColor: primaryColour,
  pbThickness: 2,
};

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
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      exclude: [
        'http://localhost:4200/'

      ]
    }),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
