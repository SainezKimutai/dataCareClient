import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

export class AppCustomPreloader implements PreloadingStrategy {
  // tslint:disable-next-line: ban-types
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
