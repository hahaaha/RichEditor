import Global from '../global'
class selection {
    constructor() {
    }

    static saveSelection() {
        let range = window.getSelection().getRangeAt(0)
        Global.range = range
    }
    static recoverSelection() {
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(Global.range)
    }
}

export default selection