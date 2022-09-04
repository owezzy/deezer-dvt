// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  Deezer_API:'https://api.deezer.com',
  Deezer_API_LOCAL:'http://localhost:3000/api',
  HEROKU_API: 'https://dvt-deezer-proxy.herokuapp.com/api',
  AWS_API_ENDPOINT: 'https://z6pd7bhx5qawqgv553akbxgwae0jmkyg.lambda-url.eu-west-2.on.aws',
  ngrx_logs: true,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
