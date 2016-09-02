import Ember from 'ember';
import host from '../config/host';

export default Ember.Controller.extend({
  hostManager: Ember.inject.service(),

  init() {
    this._super(...arguments);
    console.log(this.get('hostManager.host'), host);
  }
});
