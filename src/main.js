// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Bring what we need to from RxJS
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

// Patch the Observable Prototype with only what we need
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'

// Bring in vue-rx for RxJS Vue bindings
import VueRx from 'vue-rx'

import App from './App'

Vue.config.productionTip = false

// Register vue-rx as a plugin
Vue.use(VueRx, {
  Observable,
  Subject
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
