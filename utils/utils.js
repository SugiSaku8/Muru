export function callback(code,info){
        let confo;
        if(code > 0 && code < 5){
            confo = "'Muru BackEnd'=>RunTime Error\nEither the environment was not as required by Muru,\n or Muru itself is causing the problem."
        }
        if(code > 5 && code < 10){
            confo = "'Muru Library':'muru.lib'=>Library import Error\nThe library requested by Muru was not imported."
        }
        if(code > 10 && code < 20){
            confo = "'Muru GPU':'muru.gpu'=>Some error occurred in Muru GPU."
        }
        if(code > 20 && code < 30){
            confo = "'Muru EasyModelRun':'muru.runtime.model'=>Run of Model performed by Muru.EasyRun failed."
        }
        let result = `Muru BackEnd CallBack:\nCode:${code}\nCodeInfo:${confo}\nMassage:${info}`
        console.log(result)
    }