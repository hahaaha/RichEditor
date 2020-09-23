import { createElement } from './util'
import Global from './global'
import { chageIconStatus } from './topTool'
import selection from './selection'

function createInput(root: Element) {
    let element = createElement(root, "div", "editor_content")
    element['contentEditable'] = "true"
    element['onmouseup'] = function(e) {
        selection.saveSelection()
    }
    element['onclick'] = function (e) {
        e.preventDefault()
        Global.bold = document.queryCommandState('bold')
        if (document.queryCommandValue('formatBlock')!=="div"&&document.queryCommandValue('formatBlock')!=="") {
            Global.head = true
        } else {
            Global.head = false
        }
        chageIconStatus()
    }
}

export { createInput }