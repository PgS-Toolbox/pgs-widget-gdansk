
export function getParameterCaseInsensitive(object, key) {
    const asLowercase = key.toLowercase();
    return object[Object.keys(object).filter(function(k) {
      return k.toLowerCase() === asLowercase;
    })[0]];
  }