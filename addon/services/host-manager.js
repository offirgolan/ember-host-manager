import Ember from 'ember';
import config from 'ember-get-config';
import host from 'ember-host-manager';

const {
  computed
} = Ember;

export default Ember.Service.extend({
  host: computed(function() {
    return host;
  }).readOnly(),

  getHost(hostName) {
    const hosts = config['host-manager'].hosts;
    return hosts[hostName];
  }
});
