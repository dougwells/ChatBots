'use strict';

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = function(ctx, cb) {
  // ctx -> Context. Data sent TO this micro service
  // cb  -> Callback.  Sends data BACK to app calling this service

  let getResult = getRandom(1,4);
  console.log("Let", getResult)

  if(ctx.data.replyData == getResult) {
    console.log("true", getResult)
    return cb(null, {
      result: "Yeah!  You won!",
      resultVal: String(getResult)
    })

  } else {
    console.log("false", getResult)
    return cb(null, {
      result: "Sorry. You did not win this time...",
      resultVal: String(getResult)
    })
  }

}
