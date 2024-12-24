  
# Muru
Muru is a machine learning backend system developed by CarnationStudio.
## Usage
Muru is divided into four main components
- muru.lib
- muru.gpu
- muru.runtime
- muru.callback  

muru.lib allows you to import and remove libraries related to Muru.    
muru.gpu allows you to change the backend devices used by Muru.    
muru.runtime allows EasyRun to easily run models.    
muru.callback handles problems that occur in Muru and   provides information as a CallBack.    


### Usage of muru.lib
muru.lib has one API.  
#### `muru.lib.import(lib)`API  
You can import any library that Muru supports.  
The `lib` part is the name of the library as a `String`.  
The available libraries are as follows.  
- Legend: library name => import name
- Tensorflow.js => tfjs
- GPU.js => gpujs
- ml5.js => ml5.js
- Tensorflow-Model-Quna=> tfjsqna  
Example: Import Tensorflow.js library  
```javascript
import muru from 'Path-to-Muru';.
//import muru
muru.lib.import(“tfjs”);
// import Tensorflow.js here
```

### Usage of muru.gpu
muru.gpu has three components.  
#### `muru.gpu.change()`API
This API changes the backend device to the GPU.    
Example: ``muru.gpu.change()
```javascript
import muru from 'Path-to-Muru';
//import muru
muru.gpu.change()
// change backend device to GPU.
```

#### `muru.gpu.cpu()`API
This API changes the backend device to the CPU.  
If you change the backend device to CPU, you will get only about 1/100 of the performance when using GPU.  
Example: 
```javascript
import muru from 'Path-to-Muru';
//import muru
muru.gpu.cpu();
//set backend device to CPU
```

#### `muru.gpu.wasm`API
This API changes the backend device to WASM (WebAssembly).  
The performance will be dramatically improved compared to CPU.  
Example: 
```javascript
import muru from 'Path-to-Muru';
//import muru
muru.gpu.wasm();
//set backend device to wasm
```

### Usage of `muru.runtime`
muru.runtime has one API.
#### `muru.runtime.model`API
This API allows importing trained models.    
Usage:
```javascript
import muru from 'Path-to-Muru';
//import muru

muru.runtime.model.modelName.init();//init();//initialize model
muru.runtime.model.model name.use(input);//use model
/*Example: Qna model in Tensorflow.js (BERT Q&A model)*/
muru.runtime.model.qna.init();//initialize Qna
let result = muru.runtime.model.qna.use(q,a);//enter question a about q
console.log(result);//display output
```
#### `muru.runtime.model.onnx`API
This API allows you to run ONNX models.  
Usage:
```javascript
import muru from 'Path-to-Muru';
//import muru
(async () => {
   muru.runtime.onnx.init(modelpath);  
   //initialization ONNX model
   let result = await async muru.runtime.onnx.use(Input,Input2)
   //If you do not want Input2, enter a space instead of null.
   console.log(result);
   //Show Results
})();
```

### Credits
#### ©Carnation Studio 2022-2024
#### Muru BackEnd Runtime For JavaScript
#### Provided under the Mozilla Public License Version 2.0.
#### See the License file for the detailed license.