'use strict';

/* Filters */

angular.module('DCFilters', []).filter('nameOfFilter', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
