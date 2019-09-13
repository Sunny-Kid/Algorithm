function deepClone (source, hash = new WeakMap()) {
  if (!isObject(source)) return source
  if (hash.has(source)) return hash.get(source)
  
  let target = Array.isArray(source) ? [] : {}
  hash.set(source, target)

  Reflect.ownKeys(source).map(key => {
    if (isObject(source[key])) {
      target[key] = deepClone(source[key], hash)
    } else {
      target[key] = source[key]
    }
  })

  return target
}

Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    throw new Error()
  }

  const self = this
  const args = [].slice.call(arguments, 1)

  function fNOP () {}
  function fBound () {
    const bindArgs = [].slice.call(arguments)
    return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}

function throttle (func, wait) {
  let timer, last;
  return function () {
    const self = this
    const args = [].slice.call(arguments)
    const now = new Date().getTime()
    if (typeof last === 'undefined') {
      last = now
      return func.apply(self, args)
    }
    clearTimeout(timer)
    if (now - last > wait) {
      last = new Date().getTime()
      return func.apply(self, args)
    }
    timer = setTimeout(function () {
      last = new Date().getTime()
      func.apply(self, args)
    }, last + wait - now)
  }
}
