function getFirstSelector(selector) {
    const firstSelector = document.querySelector(selector)
    return firstSelector;
}

function nestedTarget() {
    const nested = document.getElementById("nested").querySelector("div.target")
    return nested
}

function increaseRankBy(n) {
    const nodeList = document.getElementById("app").querySelectorAll("ul.ranked-list li")
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = (i + parseInt(n)).toString()
    }
}

function deepestChild() {

}
