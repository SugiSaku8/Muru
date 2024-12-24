import {callback} from "../utils/utils.js";
export let finsers;
export const runtime = {
  model: {
    qna: {
      init: function () {
        if (typeof qna === 'undefined') {
          callback(
            9,
            "Tensorflow-Model-Qna requested by Muru has not been imported.\nImport Tensorflow-Model-Quna using Muru.Library."
          );
        } else {
          qna.load().then((model) => {
            finsers = function (q, p) {
              model.findAnswers(q, p).then((a) => {
                return a;
              });
            };
          });
        }
      },
      use: function (q, p) {
        try{
        finsers(q, p);
        }catch(err){
            callback(20,"Tensorflow-Model-Quna\nTensorflow-Model-Quna job commissioned by Muru to Muru.Runtime.Model failed at model runtime.\nThis error is not due to a lack of import of the library requested by Tensorflow-Model-Quna.")
        }
      },
    },
      onnx:{
        load:async function(modelpath){
          const session = await ort.InferenceSession.create(modelpath);
          return session;
        },
        RI:async function(session, inputIds, targetIds) {
          const inputTensor = new ort.Tensor('int64', inputIds, [1, 100]);
          const targetTensor = new ort.Tensor('int64', targetIds, [1, 100]);
      
          const feeds = {
              input_ids: inputTensor,
              target_ids: targetTensor
          };
      
          const results = await session.run(feeds);
          return results.output.data; 
      },
      init:async function(modelpath){
        const modelPath = modelpath; 
        const session = await loadModel(modelPath);
      },
      use:async function(input,lyrics){
        const combinedInput = `${input} ${lyrics}`;
        const tokenizedInput = tokenizer.encode(combinedInput, { max_length: 100, padding: 'max_length', truncation: true });
        const inputIds = tokenizedInput.input_ids;
        const targetIds = tokenizedInput.input_ids; 
        const output = await muru.runtime.model.onnix.RI(session, inputIds, targetIds);
        console.log(`Input: ${input_info}\nLyrics: ${lyrics}\nOutput: ${output}\n`);
        return output;
      }
      }
  },
};
