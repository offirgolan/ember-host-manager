/*jshint node:true*/

module.exports = function(/* environment */) {
  return {
    /*
      If the host doesn't resolve to any of the defined configs here,
      this will be the config used
     */
    'default': {
      apiHost: '',
      apiNamespace: 'api'
    },

    /*
      This is the host config that will be used in the test environment
     */
    'test': {
      apiHost: '',
      apiNamespace: 'api'
    },

    'localhost:4200': {
      boop: 'boop'
    }
  };
};
