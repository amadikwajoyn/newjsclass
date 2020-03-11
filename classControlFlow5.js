// the break and continue keyword

// for break
let totalNum = [23,45,123,0,56,78,34,100,34,1,56,4,20];

for (let i = 0; i < totalNum.length; i++) {
    if(totalNum[i] === 0){
        continue;
    }
  console.log(totalNum[i]);

  if (totalNum[i] == 100) {
      break;
  }
} 