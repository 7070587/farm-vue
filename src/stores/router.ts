import * as Rx from 'rxjs';

export const routerReload$: Rx.BehaviorSubject<string> = new Rx.BehaviorSubject(undefined);

export const routerAction$: Rx.Subject<string> = new Rx.Subject();
