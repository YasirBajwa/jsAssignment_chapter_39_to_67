//------JavaScript Assignment task from chap 39 - 67-------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//---------------------------------------------------------------------------//
//-------------------------Chapter 39-42-------------------------------------//
//------------------------- task 01------------------------------------------//
//Write a custom function power ( a, b ), to calculate the value of a raised to b.
// function Power (a,b){
    
//     var result = Math.pow(a,b);
//     console.log(result);
// }
// Power(2,4)

//------------------------- task 02------------------------------------------//
//Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not
// The function checks if February has 29 days. If it does, then we have a leap year.

// ES5
// function isLeap(year) {
//     return new Date(year, 1, 29).getDate() === 29;
//   }
//  console.log(isLeap(2021)); 

//------------------------- task 03------------------------------------------//
//If the lengths of the sides of a triangle are denoted by a, b, and c,
// then area of triangle is given by 
//  area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2

//Calculate area of triangle using 2 functions

// function Surface(a,b,c){
//     var  val = (a+b+c)/2
//     return val;
// }
// function Area(a,b,c){
//  var S = Surface(a,b,c);
//  var area = S*(S-a)*(S-b)*(S-c);
//  console.log('The area of Triangle is :',area);
// }

// Area(5,4,3);

//------------------------- task 04------------------------------------------//
//Write a function that receives marks received by a student in 3 subjects
//   and returns the average and percentage of these marks.
//   there should be 3 functions one is the mainFunction and 
//   other are for average and percentage.
//   Call those functions from mainFunction and display result in mainFunction

// function main (S1,S2,S3) {
   
// var avgResult = average(S1,S2,S3);
// console.log('Average of marks is : ',avgResult);
// var percentageResult = percentage(S1,S2,S3);
// console.log('Percentage of marks is : ',percentageResult);


// }
// function average(S1,S2,S3) {
    
//     var avg = (S1 + S2 + S3) / 3;
//     return avg;
// }
// function percentage(S1,S2,S3) {
//     var percentage = ((S1 + S2 + S3)* 100) / 300;
//     return percentage;
// }

//  main(80,90,90);