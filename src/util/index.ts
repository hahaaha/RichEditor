let createElement = (root: Element, eName: string, className: string): Element => {
    let content = document.createElement(eName)
    content.className = className
    root.appendChild(content)
    return content
}

export { createElement }