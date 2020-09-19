import './css/index.css'

window.onload = function () {
    let editor = document.getElementById("editor")
    create(editor)
}

let create = (root:Element) => {
    let content = document.createElement("div")
    content.className = "editor_content"
    content.contentEditable = "true"
    root.appendChild(content)
}