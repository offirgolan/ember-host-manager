/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-host-manager',

  included: function(app) {
    // START - Code required to get ember-get-config to work
    // https://github.com/null-null-null/ember-get-config#usage
    while (app.app) {
      app = app.app;
    }

    this.eachAddonInvoke('included', [app]);
    this._super.included.apply(this, [app]);
    // END
  },

  config: function(environment) {
    var configDirectory = path.dirname(this.project.configPath());
    var hostsConfig = path.join(configDirectory, 'hosts.js');
    var hosts = [];

    try {
      hosts = require(hostsConfig)(environment);
    } catch(e) {}

    return {
      'host-manager': {
        hosts: hosts
      }
    };
  }
};
