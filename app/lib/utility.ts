export function isElemChildOfParent(elem: any, parent: any, deep: number = 0) {
  if (elem === parent) {
    return true
  } else {
    return isElemChildOfParent(elem.parentNode, parent, deep+1)
  }
}
