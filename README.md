# Ember Host Manager

[![Build Status](https://travis-ci.org/offirgolan/ember-host-manager.svg)](https://travis-ci.org/offirgolan/ember-host-manager)
[![npm version](https://badge.fury.io/js/ember-host-manager.svg)](http://badge.fury.io/js/ember-host-manager)
[![Code Climate](https://codeclimate.com/github/offirgolan/ember-host-manager/badges/gpa.svg)](https://codeclimate.com/github/offirgolan/ember-host-manager)
[![Test Coverage](https://codeclimate.com/github/offirgolan/ember-host-manager/badges/coverage.svg)](https://codeclimate.com/github/offirgolan/ember-host-manager/coverage)
[![Dependency Status](https://david-dm.org/offirgolan/ember-host-manager.svg)](https://david-dm.org/offirgolan/ember-host-manager)
[![devDependency Status](https://david-dm.org/offirgolan/ember-host-manager/dev-status.svg)](https://david-dm.org/offirgolan/ember-host-manager#info=devDependencies)

Host management solution for ember apps

## Installation

```shell
ember install ember-host-manager
```

## Helpful Links

- ### [Changelog](CHANGELOG.md)

## Looking for help?

If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-host-manager/issues).

## Usage

In this example we are gonna setup 3 environments for our Ember app (`dev`, `staging`, and `prod`).

### Setup the hosts config

When you install this addon, a file called `hosts.js` will be created under the **config** directory. This is where we define
all our different hosts and their appropriate configs

It will look something like this:

```js
module.exports = function(/* environment */) {
  return {
    /*
      If the host doesn't resolve to any of the defined configs here,
      this will be the config used
     */
    'default': {},

    /*
      This is the host config that will be used in the test environment
     */
    'test': {}
  };
};
```

Lets add our host specific configurations

```js
'dev.myapp.com:4200': {
  apiHost: 'http://myapp.dev.api/',
  apiNamespace: 'v2'
},

'stg.myapp.com:4200': {
  apiHost: 'http://myapp.stg.api/',
  apiNamespace: 'v2'
},

'prod.myapp.com:4200': {
  apiHost: 'http://myapp.prod.api/',
  apiNamespace: 'v2'
}
```

### Access the host config

There are two ways you can access the current host config:

**1. Import**

```js
import host from 'ember-host-manager';
```

**1. Service**

```js
// adapters/application.js

export default DS.RESTAdapter.extend({
  // Inject the hostManager service
  hostManager: Ember.inject.service(),

  // hostManager.host has the config for the current host
  host: computed.readOnly('hostManager.host.apiHost'),
  namespace: computed.readOnly('hostManager.host.apiNamespace')
});
```

### Modify /etc/hosts

Don't forget to add your environments to your `/etc/hosts` file!

```bash
sudo vim /etc/hosts
```

```bash
# MyApp Environments
localhost dev.myapp.com
localhost stg.myapp.com
localhost prod.myapp.com
```
