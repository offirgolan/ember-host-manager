/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-host-manager',

  included: function(app) {
    while (app.app) {
      app = app.app;
    }

    this.eachAddonInvoke('included', [app]);

    this._super.included.apply(this, [app]);
  },

  config: function(environment) {
    var configDirectory = path.dirname(this.project.configPath());
    var fullPath = path.join(configDirectory, 'hosts.js');

    return {
      HOST_MANAGER: {
        HOSTS: require(fullPath)(environment)
      }
    };
  }
};
