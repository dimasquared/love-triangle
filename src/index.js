/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  const l = preferences.length;
  for (let i = 0; i < l; i++) {
    let k, m, n;
    k = preferences[i] - 1;
    if (i == k) continue;
    m = preferences[k] - 1;
    if (k == m) continue;
    n = preferences[m] - 1;
    if (n == i) count++;
  }
  return count/3;
};
