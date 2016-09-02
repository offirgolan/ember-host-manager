import Ember from 'ember';
import HostManagerInitializer from 'dummy/initializers/host-manager';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | host manager', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  HostManagerInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
