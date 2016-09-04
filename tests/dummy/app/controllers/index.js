import Ember from 'ember';
import host from 'ember-host-manager';

export default Ember.Controller.extend({
  hostManager: Ember.inject.service(),

  init() {
    this._super(...arguments);
    console.log(this.get('hostManager.host'), host);
  }
});
