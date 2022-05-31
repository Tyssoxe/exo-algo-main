/*
Create a function that takes an angle in radians and returns the corresponding angle in degrees.

Examples
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
*/

function radiansToDegrees(angle) {
  return angle * 180 / Math.PI
}
console.log(radiansToDegrees(20));
exports.solution = radiansToDegrees;
