export function Component(element) {
    this._element = element
}

Component.prototype.hide = function () {
    this._element.setAttribute('hidden', true)
}
Component.prototype.show = function () {
    this._element.removeAttribute('hidden')
}
