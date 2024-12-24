import {callback} from "../utils/utils.js";
export let gpujs;
export let tfjs;
export let ml5;
export let gna;
export const lib = {
  addscript: function (url, type) {
    var el = document.createElement("script");
    el.src = url;
    el.id = type;
    document.head.appendChild(el);
  },
  import: function (lib) {
    let run;
    if ((lib = "gpujs" || "gpu.js")) {
      try {
        run = `addscript("https://raw.githubusercontent.com/gpujs/gpu.js/master/dist/gpu-browser.min.js","gpujs");`;
        Function(run);
        run = null;
        gpujs = true;
      } catch (err) {
        callback(5, "Error in Muru.Library.Import.GPUjs\n" + err);
      }
    }
    if (
      (lib =
        "tf" ||
        "tfjs" ||
        "tensorflow.js" ||
        "Tensorflow.js" ||
        "TF.js" ||
        "tf.js")
    ) {
      try {
        run = `addscript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js","tfjs");`;
        Function(run);
        run = null;
        tfjs = true;
      } catch (err) {
        callback(6, "Error in Muru.Library.Import.TensorflowJS\n" + err);
      }
    }
    if ((lib = "ml5" || "ml5.js" || "ML5.js" || "ml5js")) {
      try {
        run = `addscript("https://unpkg.com/ml5@1/dist/ml5.min.js","ml5js");`;
        Function(run);
        run = null;
        ml5 = true;
      } catch (err) {
        callback(7, "Error in Muru.Library.Import.ml5js\n" + err);
      }
    }
    if (
      "tfqna" ||
      "tfjsgna" ||
      "tensorflow.js-gna" ||
      "Tensorflow.js-gna" ||
      "TF.js-gna" ||
      "tf.js-gna" ||
      "tfmodelqna" ||
      "tfjsmodelgna" ||
      "tensorflow.jsmodelgna" ||
      "Tensorflow.jsmodelgna" ||
      "TF.jsmodelgna" ||
      "tf.jsmodelgna" ||
      "gna" ||
      "model-gna" ||
      "model-berd-gna" ||
      "model-ansered"
    ) {
      try {
        run = `addscript("https://cdn.jsdelivr.net/npm/@tensorflow-models/qna","model-gna");`;
        Function(run);
        run = null;
        gna = true;
      } catch (err) {
        callback(
          8,
          "Error in Muru.Library.Import.Tensorflowjs-QnaModel\n" + err
        );
      }
    }
  },
  remove: function (lib) {
    let run;
    if ((lib = "gpujs" || "gpu.js")) {
      run = `addscript("https://raw.githubusercontent.com/gpujs/gpu.js/master/dist/gpu-browser.min.js","gpujs");`;
      Function(run);
      run = null;
      gpujs = false;
    }
    if (
      (lib =
        "tf" ||
        "tfjs" ||
        "tensorflow.js" ||
        "Tensorflow.js" ||
        "TF.js" ||
        "tf.js")
    ) {
      run = `addscript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@2.0.0/dist/tf.min.js","tfjs");`;
      Function(run);
      run = null;
      tfjs = false;
    }
    if ((lib = "ml5" || "ml5.js" || "ML5.js" || "ml5js")) {
      run = `addscript("https://unpkg.com/ml5@1/dist/ml5.min.js","ml5js");`;
      Function(run);
      run = null;
      ml5 = false;
    }
  },
};
