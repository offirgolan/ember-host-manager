import _getHost from 'ember-host-manager/utils/get-host';
import getHostName from 'ember-host-manager/utils/get-host-name';

export const getHost = _getHost;
export default getHost(getHostName());
