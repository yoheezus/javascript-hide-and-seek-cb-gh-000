function getFirstSelector(selector) {
    const firstSelector = document.querySelector(selector)
    return firstSelector;
}

function nestedTarget() {
    const nested = document.getElementById("nested").querySelector("div.target")
    return nested
}
