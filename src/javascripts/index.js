import application from "CssFolder/application.scss"
import {sayHello as greetings} from "ScriptsFolder/greetings"
import $ from "jquery-3.6.0.min"

greetings()
$('body').append('<div style="background:yellow;padding:10px;">Hello jQuery!</div>')