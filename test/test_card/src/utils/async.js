const loadScirptFn = (link, callback) => {
  let script = document.createElement('script')
  script.type = "text/javascript"
  script.src = link
  script.onload = () => {
    if (callback && Object.prototype.toString.call(callback) === '[object Function]') {
      callback()
    }
  }

  document.head.appendChild(script)
}

const loadCssFn = (link, callback) => {
  let l = document.createElement('link')
  l.rel = "stylesheet"
  l.href = link
  l.onload = () => {
    if (callback && Object.prototype.toString.call(callback) === '[object Function]') {
      callback()
    }
  }

  document.head.appendChild(l)
}

export {
  loadScirptFn,
  loadCssFn
}