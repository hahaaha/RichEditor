import { createElement } from './util'

function createTopTool(root: Element) {
    let topTool = createElement(root, "div", "topTool")
    createBtn(topTool,"B",bold)
    createBtn(topTool,"H",head)
    createBtn(topTool,"A",color)
}

let createBtn = function (root: Element,icon:string,func:any) {
    let btn = document.createElement('span')
    btn.innerText = icon
    btn.className = "icon"
    btn.onmousedown = func
    root.appendChild(btn)
}

function bold(e) {
    e.preventDefault()
    document.execCommand("bold", false, null)
}

function head(e) {
    e.preventDefault()
    document.execCommand("formatBlock", false, "H1")
}

function color(e) {
    e.preventDefault()
    document.execCommand("foreColor", false, "#ccc")
}


export { createTopTool }