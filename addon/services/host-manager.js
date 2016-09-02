import Ember from 'ember';
import getHost from 'ember-host-manager/utils/get-host';
import getHostName from 'ember-host-manager/utils/get-host-name';

const {
  computed
} = Ember;

export default Ember.Service.extend({
  _hostName: computed(function() {
    return this.getWithDefault('hostName', getHostName());
  }).readOnly(),

  host: computed(function() {
    return this.getHost(this.get('_hostName')) || this.getHost('default');
  }).readOnly(),

  getHost(hostname) {
    return getHost(hostname);
  }
});
