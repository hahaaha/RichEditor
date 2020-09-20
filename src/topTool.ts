import { createElement } from './util'
import Global from './global'

let tool: any = {}

function createTopTool(root: Element) {
    let topTool = createElement(root, "div", "topTool")
    let B = createBtn(topTool, "B", bold)
    tool.b = B
    let H = createBtn(topTool, "H", head)
    tool.h = H
    createColor(topTool, color)
}

let createBtn = function (root: Element, icon: string, func: any) {
    let btn = document.createElement('span')
    btn.innerText = icon
    btn.className = "icon"
    btn.onmousedown = func
    root.appendChild(btn)
    return btn
}

let createColor = function (root: Element, color: Function) {
    let input = document.createElement('input')
    input.type = "color"
    input.value = ""
    input.onchange = function (e) {
        color(e)
    }
    root.append(input)
}

function bold(e) {
    e.preventDefault()
    document.execCommand("bold", false, null)
    Global.bold = !Global.bold
    chageIconStatus()
}

function head(e) {
    e.preventDefault()
    if (document.queryCommandValue('formatBlock')) {
        document.execCommand("formatBlock", false, "div")
        Global.head = false
    } else {
        document.execCommand("formatBlock", false, "H1")
        Global.head = true
    }
    chageIconStatus()
}

function color(e) {
    e.preventDefault()
    console.log(e)
    document.execCommand("foreColor", false, e.target.value)
}

function chageIconStatus() {
    console.log("ccc")
    let b: Element = tool.b
    let h: Element = tool.h
    IconStatus(b,Global.bold)
    IconStatus(h,Global.head)
    // let hClassName: string[] = h.className.split(" ")
    // if (Global.bold && bClassName[bClassName.length - 1] !== "bold") {
    //     console.log("aa")
    //     console.log(Global.bold)
    //     bClassName.push("bold")
    //     b.className = bClassName.join(" ")
    // }

    // if (!Global.bold && bClassName[bClassName.length - 1] === "bold") {
    //     console.log("dd")
    //     bClassName.pop()
    //     b.className = bClassName.join(" ")
    // }

    // if (Global.head && hClassName[length - 1] !== "bold") {
    //     console.log(Global.bold)
    //     hClassName.push("bold")
    //     h.className = hClassName.join(" ")
    // }

    // if (!Global.head && hClassName[length - 1] === "bold") {
    //     hClassName.pop()
    //     h.className = hClassName.join(" ")
    // }
}

function IconStatus(icon:Element,status:boolean) {
    console.log(status)
    let className: string[] = icon.className.split(" ")
    let length = className.length
    if (status && className[length - 1] !== "bold") {
        console.log(Global.bold)
        className.push("bold")
        icon.className = className.join(" ")
    }

    if (!status && className[length - 1] === "bold") {
        className.pop()
        icon.className = className.join(" ")
    }
}


export { createTopTool, chageIconStatus }