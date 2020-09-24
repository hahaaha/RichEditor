import Global from '../global'
class selection {
    constructor() {
    }

    // 存储选区
    static saveSelection() {
        let range = window.getSelection().getRangeAt(0)
        Global.range = range
    }
    // 恢复选区
    static recoverSelection() {
        let selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(Global.range)
    }
}

export default selection