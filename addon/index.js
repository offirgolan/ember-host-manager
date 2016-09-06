import config from 'ember-get-config';
import getHost from 'ember-host-manager/utils/get-host';
import getHostName from 'ember-host-manager/utils/get-host-name';

export const hosts = config['host-manager'].hosts;
export default getHost(getHostName());
