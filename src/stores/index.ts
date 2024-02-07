import * as Rx from 'rxjs';
import Vue from 'vue';

import { routerReload$, routerAction$ } from './router';

declare module 'vue/types/vue' {
    export interface Vue {
        $store: {
            routerReload$: Rx.BehaviorSubject<string>;
            routerAction$: Rx.Subject<string>;
        };
    }
}

Vue.prototype.$store = {
    routerReload$: routerReload$,
    routerAction$: routerAction$,
};
