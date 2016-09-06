import Ember from 'ember';
import {default as host, hosts } from 'ember-host-manager';

const {
  computed
} = Ember;

export default Ember.Service.extend({
  host: computed(function() {
    return host;
  }).readOnly(),

  getHost(hostName) {
    return hosts[hostName];
  }
});
