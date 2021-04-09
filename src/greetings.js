import {log} from "./console-log"

function sayHello(){
    let tool = "webpack"
    alert(`Привет от ${tool}, welcome to ES6!`)
    log("Can you find me?")
}

export  {sayHello}