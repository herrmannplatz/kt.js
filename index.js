function listOf(arrayLike) {
  const _internal = arrayLike

  function first(predicate) {
    if (predicate) {
      return _internal.filter(predicate)[0]
    }
    return _internal[0]
  }

  function last(predicate) {
    if (predicate) {
      return _internal.filter(predicate).at(-1)
    }
    return _internal.at(-1)
  }

  function filterNotNull() {
    return _internal.filter(el => el != null)
  }

  function count() {
    return _internal.length
  }

  function containsAll(elements) {
    return elements.every(element => _internal.includes(element))
  }

  return {
    first,
    last,
    filterNotNull,
    count,
    containsAll
  }
}

export default {
  listOf
}