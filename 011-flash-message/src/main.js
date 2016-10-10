import Vue from 'vue';
import App from './app';
import * as filters from './filters';

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});
