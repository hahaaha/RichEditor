import { createElement } from './util'

function createInput(root: Element) {
    let element = createElement(root, "div", "editor_content")
    element['contentEditable'] = "true"
}

export { createInput }