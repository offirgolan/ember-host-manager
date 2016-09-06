# Ember Host Manager

[![Build Status](https://travis-ci.org/offirgolan/ember-host-manager.svg)](https://travis-ci.org/offirgolan/ember-host-manager)
[![npm version](https://badge.fury.io/js/ember-host-manager.svg)](http://badge.fury.io/js/ember-host-manager)
[![Dependency Status](https://david-dm.org/offirgolan/ember-host-manager.svg)](https://david-dm.org/offirgolan/ember-host-manager)
[![devDependency Status](https://david-dm.org/offirgolan/ember-host-manager/dev-status.svg)](https://david-dm.org/offirgolan/ember-host-manager#info=devDependencies)

Host management solution for ambitious Ember applications

## Features

- Easily manage different host configurations
  - Specify different API settings
  - Declare feature flags for specific hosts / environments
  - and much more!
- Access the current host config anywhere in your app
- Host override allows you to grab your host name from anywhere
- Fallback config if nothing matches
- Test configuration
  - Simple mirage integration

## Installation

```shell
ember install ember-host-manager
```

## Helpful Links

- [Changelog](CHANGELOG.md)

## Looking for help?

If it is a bug [please open an issue on GitHub](http://github.com/offirgolan/ember-host-manager/issues).

## Usage

### Hosts Configuration

When you install this addon, a `config/hosts.js` file will be created which will hold all the different hosts and their
configurations.

It will look something like this:

```js
module.exports = function(/* environment */) {
  return {
    /*
      If present, the host configuration will be pulled based on the given
      string.

      ex) `APP_HOST=myapp.com ember s`
     */
    //hostOverride: process.env.APP_HOST,

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

Lets add some host configurations for our dev and prod environments.

```js
module.exports = function(/* environment */) {
  return {
    /* Fallback to prod */
    'default': {
      apiHost: 'http://myapp.prod.api/',
      apiNamespace: 'v2'
    },

    /* Use mirage in tests with `api` namespace */
    'test': {
      apiHost: '',
      apiNamespace: 'api'
    },

    /*
      Dev Hosts

      These must be added to /etc/hosts and mapped
      to localhost
    */
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
    },

    /* Production Hosts */
    'myapp.com' {
      apiHost: 'http://myapp.prod.api/',
      apiNamespace: 'v2'
    },

    'myapp.com:443' {
      apiHost: 'https://myapp.prod.api/',
      apiNamespace: 'v2'
    }
  };
};
```

__Note:__ _You will need to add the following to your `/etc/hosts` config to get the
dev hosts to work. Once done, you can open your browser and navigate to any of the
3 specified hosts which will then use their appropriate config._

```bash
# MyApp Dev Environments
localhost dev.myapp.com
localhost stg.myapp.com
localhost prod.myapp.com
```

### Accessing the Host Config

There are two ways you can access the current host config:

**1. Import**

```js
// Get the current host
import host from 'ember-host-manager';

// Get all available hosts
import { hosts } from 'ember-host-manager'
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

### The Host Manager Service

The Host Manager service not only gives you access to the current host via the `host`
property, but allows you to get any host config via the `getHost` method.

```js
export default Ember.Controller.extend({
  hostManager: Ember.inject.service(),

  init() {
    this._super(...arguments);

    const prodHost = this.get('hostManager').getHost('myapp.com');
    this.set('someProp', prodHost.get('someProp'));
  }
});
```
