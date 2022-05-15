import("frame-component")

const first = {
  route: "",
  render: () => {
    const content = document.createElement('p');
    content.innerText = "This is the first component"
    return content
  },
}

const second = {
  route: "#second",
  render: () => {
    const content = document.createElement('p');
    content.innerText = "This is the second component"
    return content
  },
}


const routes = [
  first,
  second
]

const template = document.querySelector('template')
const content = template.content.cloneNode(true)

document.body.appendChild(content)

window.addEventListener('popstate', (evt) => {
  renderDynamicContent(evt.target.location.hash)
})

function renderDynamicContent(hash) {
  const frame = document.querySelector('#dyn-content')
  frame.innerHTML = '';
  routes.forEach((comp) => {
    if (comp.route === hash) {
      frame.appendChild(comp.render())
    }
  })
}


renderDynamicContent(window.location.hash)
