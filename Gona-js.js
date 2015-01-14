


//part 1//
var sum = function(10, 33){
	return 10+33;
};
console.log(sum);

//part 2//
var matt = {
    finishingTime1: 240, 
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5;
}

 var getAverageTime = function(matt){
 	return (240+210.4+235.1+208.9+197.5)/5;
 }
console.log(getAverageTime(matt));

var mark = {
    finishingTime1: 120, 
    finishingTime2: 110.4,
    finishingTime3: 135.1,
    finishingTime4: 108.9,
    finishingTime5: 97.5;
}
var getAverageTime = function (mark){
	return (120+110.4+135.1+108.9+97.5)/5;
}	

console.log(getAverageTime(mark));

//part 3//
 var MattsBankAccount = {
    checking: 100,
    savings: 10,
    retirement: 1
};

var RobertosBankAccount = {
    checking: 200,
    savings: 50,
    retirement: 19
};

var sumOfMatts = function (MattsBankAccount){
	return 100+10+1;
}
console.log(MattsBankAccount);

var sumOfRobertos = function (RobertosBankAccount){
	return 200+50+19;
}
console.log(RobertosBankAccount);

var accountDifference = function (sumOfMatts,sumOfRobertos){
	return sumOfMatts - sumOfRobertos;
  }
  console.log(accountDifference);

 



