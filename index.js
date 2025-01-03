// today We will learn about the 

// callback function

// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.


// function milkshake(timepass){
//     console.log("Milkshake is order place");
//     timepass();
//     console.log("Milkshake is ready");
// }

// function timepass(){
//     console.log("chugalya");
// }


// milkshake(timepass)


//// end of callback function



// condition statements // if else statement



// synthax of if else statement

//  if (condition) {
//     // code block
//   } else {
//     // code block
//   }


// example of if else statement

// let ladyAge = 20;
// let boyAge = 30;

// if(ladyAge == boyAge){
//     console.log("merriage is not successfull shame on you");
// } else {
//     console.log("sadha suhagan raho");
// }

// if(ladyAge = boyAge){
//     console.log("merriage is not successfull shame on you");
// } else {
//     console.log("sadha suhagan raho");
// }


// let a = 2;
// let b = 5;

// > < >= =< !== !=== == === 

// example of greater than operator

// if(a > b ){
//     console.log("a is greater than b");
// }else{
//     console.log("b is greater than a");
// }

// // example of less than operator

// if(a < b ){
//     console.log("a is less than b");
// }
// else{
//     console.log("b is less than a");
// }

// // example of greater than or equal to operator

// if(a >= b ){
//     console.log("a is greater than or equal to b");
// }
// else{
//     console.log("b is greater than a");
// }

// // example of less than or equal to operator

// if (a <= b) {
//     console.log("a is less than or equal to b");
// } else {
//     console.log("b is less than a");
// }

// // example of not equal operator

// if (a != b) {
//     console.log("a is not equal to b");
// } else {
//     console.log("a is equal to b");
// }

// // example of strict not equal operator

// if (a !== b) {
//     console.log("a is strictly not equal to b");
// } else {
//     console.log("a is strictly equal to b");
// }

// // example of equal operator

// if (a == b) {
//     console.log("a is equal to b");
// } else {
//     console.log("a is not equal to b");
// }

// // example of strict equal operator

// if (a === b) {
//     console.log("a is strictly equal to b");
// } else {
//     console.log("a is strictly not equal to b");
// }

// let a = 2;

// if (a == 1) {
//     console.log("this is one");
// } else if(a == 2){
//     console.log("thsi is two");
// } else if(a == 3){
//     console.log("this is three");
// }
// else{
//     console.log("this is not found");
// }




// end of condition statements

// scope of variable

// scope of variable is the region of your code where a variable is defined. A variable is only accessible from within the region it is defined. JavaScript has three types of scope:

// Block scope
// let isMerried = true;


// if(isMerried){
//     let husband = "Rahul";
//     console.log(husband);
// }

//function scope

// function myFunction() {
//     let wife = "Rani";
//     console.log(wife);
// }


//switch conditional statement



let input = "mahesh";

switch(input){
    case 'mahesh':
        console.log("one");
        break;
    case "nikita":
        console.log("two");
        break;
    case 'pranali':
        console.log("three");
        break;
    case "vishal":
        console.log("four");
        break;
    case "snehal":
        console.log("five");
        break;
    default:
        console.log("not found");
}


// output of this code is one because input is mahesh and it is matched with the case mahesh so it will print one on the console.



// end of switch conditional statement

