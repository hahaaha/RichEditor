import './css/index.css'
import { createTopTool } from './topTool'
import { createInput } from './input'

window.onload = function () {
    let editor = document.getElementById("editor")
    if (editor) {
        createTopTool(editor)
        createInput(editor)
    } else {
        throw new Error("no set container")
    }

}