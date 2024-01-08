export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  if (weakMap.has(endpoint)) {
    const epLoad = weakMap.get(endpoint);
    if (epLoad >= 4) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, (epLoad + 1));
  } else {
    weakMap.set(endpoint, 1);
  }
};
