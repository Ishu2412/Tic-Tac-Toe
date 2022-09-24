var i =0;
var arr = [
  [100,101,102],
  [103,104,105],
  [106,107,108]
];
var res = false;
var resX = false;
var resO = false;
//                 Clicking Management
$(".white-img").click(function(){
  i++;
  var temp = $(this).attr("id");
  var x = parseInt(temp);

   // Storing numbers in array
  if(x <= 3){
    if(i%2 != 0){
      arr[0][x-1] = 1;
    }
    else {
      arr[0][x-1] = 0;
    }
  }
   else if(x <= 6){
    if(i%2 != 0){
      arr[1][x-4] = 1;
    }
    else {
      arr[1][x-4] = 0;
    }
  }
   else {
    if(i%2 != 0){
      arr[2][x-7] = 1;
    }
    else {
      arr[2][x-7] = 0;
    }
  }

  if(i%2 != 0)
   $("#"+temp).attr("src","images/cross.jpg");
  else
   $("#"+temp).attr("src","images/zeroo.png");

   //               Checking ans
if(res === false){
if(checkAns()){
if(resX){
$(".upper-heading").text("Player 1 wins ❤️");
}
else{
$(".upper-heading").text("Player 2 wins ❤️");
}
res = true;
}
}
if(i === 9 && res === false){
$(".upper-heading").text("❤️ Nobody wins ❤️");
}

});

                  // Checking Answers
function checkAns(){
  //            1st row
 if(arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2]){
   if(arr[0][0] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //            2nd row
 if(arr[1][0] === arr[1][1] && arr[1][1] === arr[1][2]){
   if(arr[1][0] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //               3rd row
 if(arr[2][0] === arr[2][1] && arr[2][1] === arr[2][2]){
   if(arr[2][0] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //            1st column
 if(arr[0][0] === arr[1][0] && arr[1][0] === arr[2][0]){
   if(arr[0][0] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //              2nd column
 if(arr[0][1] === arr[1][1] && arr[1][1] === arr[2][1]){
   if(arr[0][1] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //               3rd column
 if(arr[0][2] === arr[1][2] && arr[1][2] === arr[2][2]){
   if(arr[0][2] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //             left diagonal
 if(arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]){
   if(arr[0][0] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 //                right diagonal
 if(arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]){
   if(arr[0][2] === 1){
     resX = true;
   }
   else{
     resO = true;
   }
   return true;
 }
 return false;
}
