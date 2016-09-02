import config from 'ember-get-config';

export default function getHost(hostName) {
  const hosts = config.HOST_MANAGER.HOSTS;
  const env = config.environment;

  if(env === 'test') {
    return hosts['test'];
  } else {
    return hosts[hostName] || hosts['default'];
  }
}
