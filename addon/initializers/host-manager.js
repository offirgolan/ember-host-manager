/* global define */

import config from 'ember-get-config';
import getHost from 'ember-host-manager/utils/get-host';
import getHostName from 'ember-host-manager/utils/get-host-name';

const hostConfig = getHost(getHostName());

define(config.modulePrefix + '/config/host', [], function() {
  return { 'default': hostConfig };
});

export function initialize() {}

export default {
  name: 'host-manager',
  initialize
};
