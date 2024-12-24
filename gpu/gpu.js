import {callback} from "../utils/utils.js";
export const gpu = {
  change: function () {
    try{
    tf.setBackend("webgl");
    console.log("Now the back end:"+tf.getBackend());
    }catch(err){
      callback(10,"Error in Muru.GPU.Change"+err+"\nNote: Perhaps your device does not support the hardware acceleration by Chromium130.x. Please check the requirements on the official website. \If your device supports hardware allocation with Chromium130.x and you are still getting this error, please report it to the official site.")
    }
  },
  cpu: function () {
    try{
    tf.setBackend("cpu");
    console.log("Now the back end:"+tf.getBackend());
    }catch(err){
    callback(11,"Error in Muru.GPU.cpu"+err)
    }
  },
  wasm:function(){
    try{
    tf.setBackend("wasm");
    console.log("Now the back end:"+tf.getBackend());
    }catch(err){
      callback(12,"Error in Muru.GPU.wasm"+err)
    }
  },
};
