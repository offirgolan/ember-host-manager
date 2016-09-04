import config from 'ember-get-config';

export default function getHost(hostName) {
  const hosts = config['host-manager'].hosts;
  const env = config.environment;

  if(env === 'test') {
    return hosts['test'];
  } else {
    return hosts[hostName] || hosts['default'];
  }
}
