import { createElement } from './util'
import Global from './global'
import { chageIconStatus } from './topTool'

function createInput(root: Element) {
    let element = createElement(root, "div", "editor_content")
    element['contentEditable'] = "true"
    element['onclick'] = function (e) {
        e.preventDefault()
        Global.bold = document.queryCommandState('bold')
        console.log(document.queryCommandState('formatBlock'))
        console.log(document.queryCommandValue('formatBlock'))
        if (document.queryCommandValue('formatBlock')!=="div"&&document.queryCommandValue('formatBlock')!=="") {
            Global.head = true
        } else {
            Global.head = false
        }
        chageIconStatus()
    }
}

export { createInput }