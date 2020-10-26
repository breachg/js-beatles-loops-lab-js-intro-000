function theBeatlesPlay (musicians, instruments) {
  var emptyArray = []
  for (musicians=0; musicians< 4; musicians++){
    emptyArray.push(`${musicians} plays ${instruments}`)
  }
  return emptyArray
}
