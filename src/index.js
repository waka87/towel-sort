
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix) {
    return [];
  } else if(matrix.length === 0) {
    return [];
  } else
  {
for (var i=1; i<matrix.length; i= i + 2) {
  matrix[i] = matrix[i].reverse();
}

var str = matrix.toString();
//console.log(str);
var arr = str.split(',').map(Number);

  return arr;
  }

}
