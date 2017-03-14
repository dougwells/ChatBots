'use strict';

module.exports = function(ctx, cb) {
  // ctx -> Context. Data sent TO this micro service
  // cb  -> Callback.  Sends data BACK to app calling this service

  console.log(ctx);
  return cb(null, {});

}
