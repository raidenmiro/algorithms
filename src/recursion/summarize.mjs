function summarize(array, _sum = 0) {
  if (array[0] === undefined) return _sum;

  return summarize(array.slice(1), _sum + array[0]);
}

export default summarize;
