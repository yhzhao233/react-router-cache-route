const getImplementation = () => {
  if (typeof self !== 'undefined') {
    return self
  }
  if (typeof window !== 'undefined') {
    return window
  }
  if (typeof global !== 'undefined') {
    return global
  }

  throw new Error('unable to locate global object')
}

const implementation = getImplementation()

const getGlobal = () => {
  if (
    typeof global !== 'object' ||
    !global ||
    global.Math !== Math ||
    global.Array !== Array
  ) {
    return implementation
  }
  return global
}

const globalThis = getGlobal()

export default globalThis
