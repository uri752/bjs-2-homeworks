// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0, avg = 0;

  // Ваш код
  for(let i = 0; i < arr.length; i++){
    
    if(min > arr[i]){
      min = arr[i];
    }

    if(max < arr[i]){
      max = arr[i];
    }

    sum += arr[i];

  }

  avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for(let number of arr){
    sum += number;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let sum = 0;
  // Ваш кода
  // for ...
  firstElement = true;
  for(let arr of arrOfArr){
    sum = func(arr);
    if(firstElement ||  max < sum){
      max = sum;
    }
    firstElement = false;
  }

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  arrayParams = getArrayParams(arr);
  result = Math.abs(arrayParams.max - arrayParams.min);
  return result;

}
