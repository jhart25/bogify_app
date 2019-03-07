var cp = require('child_process');
var async = require('async');

function Songlists(opts, callback) {
  var Songlists = [1,2,3,4,5];
  async.map(Songlists, function (Songs, cb) {
    // Gets executed for every item in the list
    // when exec is done it calls the cb
    cp.exec(Songlists(Songs), cb)
  }, function (error, results) {
    // results is an array with all stdouts of the commands you ran.
    // do stuff to it here.
    // And return using the callback that was used in the beginning.
    callback(error, results)
  })
}

function Songlists(Songs) {
  return 'my awesome Songlists ' + Songs;
}
