import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {map, Subscription} from "rxjs";
import {ViewArtistPageActions} from "../actions";
@Component({
  selector: 'app-view-artist',
  template: `
    <app-selected-artist-page></app-selected-artist-page>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewArtistPageComponent implements OnInit {
  actionsSubscription: Subscription;


  constructor(store: Store, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map((params) =>
      {
        console.log(params)
      return   ViewArtistPageActions.selectArtist({ id: params['id'] })}))
      .subscribe((action) => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }
}
