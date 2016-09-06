import Ember from 'ember';
import config from 'ember-get-config';
import { hosts } from 'ember-host-manager';

const {
  isPresent
} = Ember;

export default function getHost(hostName) {
  const env = config.environment;

  hostName = isPresent(hosts.hostOverride) ? hosts.hostOverride : hostName;

  if(env === 'test') {
    return hosts['test'];
  }

  return hosts[hostName] || hosts['default'];
}
