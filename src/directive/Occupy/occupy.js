let origData = ''
export default {
  inserted (el, binding) {
    const widthContent = [
      [20, 30, 30],
      [30, 50, 20],
      [40, 20, 30]
    ]
    let widthIndex = 0
    const { width = '100%', height = '100%', background = '#f2f6fc' } = binding.value ? binding.value.config = { } : { }
    const auto = binding.modifiers.auto // 系统自动布局
    const occupyNode = document.createElement('div')
    occupyNode.style.padding = '10px 10px 0px'
    occupyNode.style.boxSizing = 'border-box'
    occupyNode.style.height = height
    occupyNode.style.width = width
    occupyNode.style.background = background
    occupyNode.style.position = 'absolute'
    occupyNode.style.top = 0
    occupyNode.style.left = 0
    origData = binding.value.data
    if (auto) {
      const elHeight = el.clientHeight
      const todo = Math.floor((elHeight - 10) / 30)
      let _placeHolder = ''
      for (let i = 0; i < todo; i++) {
        _placeHolder += `<ul style="display: flex; margin-bottom: 10px">`
        widthContent[widthIndex].forEach(item => {
          _placeHolder += `<li style="width: ${item}%;background: #ffffff; margin-right: 1%; height: 20px"></li>`
        })
        _placeHolder += '</ul>'
        widthIndex = widthIndex === 2 ? 0 : widthIndex + 1
      }
      occupyNode.innerHTML = _placeHolder
      el.appendChild(occupyNode)
    }
  },
  update (el, binding) {
    if (binding.value.data !== origData) {
      el.children[el.children.length - 1].style.opacity = 0
    }
  }
}
