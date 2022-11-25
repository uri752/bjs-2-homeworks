console.log(getArrayParams([100, -100, 50]));
console.log(getArrayParams([10, 20, 30]));
console.log(getArrayParams([1, -4, 7]));

console.log(makeWork([[10,10,20],[20,19,10]],worker));
console.log(makeWork([[12,23,31],[41,5,61]],worker));
console.log(makeWork([[14,21,36],[15,26,39]],worker));

//worker2
console.log(worker2([-10, -20, -40])); // -40 - (-10) = -30 => 30
console.log(worker2([10, 20, 30])); // 30 - 10 = 20
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2)); // 30

console.log(worker2([0, 0, 0])); // 0 - 0 = 0
console.log(worker2([-1, -99])); // -99 - (-1) = -98 => 98
arrOfArr = [[0, 0, 0], [-1, -99]];
console.log(makeWork(arrOfArr, worker2)); // 98