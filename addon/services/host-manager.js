import Ember from 'ember';
import { default as host, getHost } from 'ember-host-manager';

const {
  computed
} = Ember;

export default Ember.Service.extend({
  getHost,
  host: computed(function() {
    return host;
  }).readOnly()
});
