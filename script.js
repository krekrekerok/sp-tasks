//----#1 What will the console display and why?
// for (var i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i);
//   })
// };
// -> firtsly the for loop will reach to 9
// then set timeout makes it loop again but 10 times
// and in that time i will equal to 10

//----#2 Write a JavaScript program to display
// the current day and time in the following format.
// Sample Output :
// Today is: Friday.
// Current time is: 4PM:50:22
// let myDate = new Date();
// let todayIs = myDate.getDay();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log("Today is: " + days[todayIs]);
// let hours = myDate.getHours()+6;
// let meridiem = hours >= 12 ? 'PM' : 'AM';
// hours = hours % 12;
// hours = hours ? hours : 12;
// let minutes = myDate.getMinutes();
// let nowTime = hours + meridiem + ":" + minutes + ":" +myDate.getMilliseconds();
// console.log("Current time is: " + nowTime);


//----#3 Write a JavaScript function that reverse a number. 
// Example x = 32243;	
// Expected Output : 34223
// function reversedNum(num){
//   let str = num.toString().split("").reverse().join("")
//   console.log(str)
// }
// reversedNum(32243)

//----#4 Write a JavaScript program to calculate the factorial of a number. In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
// function factorial(num){
//   // let i = 1
//   if (num == 1){
//     return 1
//   }else{
//     return num * factorial(num - 1)
//   }
// }
// console.log(factorial(5))

//----#5 Write a JavaScript program that accepts two integers in prompt() and alert the larger one.
// let inp = prompt("Enter 2 numbers:").toString().split(" ")
// if (inp[0]===inp[1]){
//   console.log("Equal")
// }
// else{
//   console.log(Math.max(...inp))  
// }


//----#6 Write a simple JavaScript program to join all elements of the following array into a string. 
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output : 
// "Red,Green,White,Black"
// "Red+Green+White+Black"
// function joinStrings(arr){
//   console.log(arr.join(","))
//   console.log(arr.join("+"))
// }
// let myColor = ["Red", "Green", "White", "Black"]
// joinStrings(myColor)


//----#7 Write a JavaScript function to get the month name from a particular date. 
// Test Data :
// console.log(month_name(new Date("10/11/2009"))); 
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October" 
// "November"
// function month_name(date){
//   let months = ['January', 'Fabruary', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October','November', 'December']
//   return (months[date.getMonth()])
// }

// console.log(month_name(new Date("10/11/2009"))); 

//----#8 #Write a JavaScript program to test the first character of a string is uppercase or not
// function upOrNot(str){
//   let firstLetter = str[0]
//   if(firstLetter == firstLetter.toUpperCase()){
//     return true
//   }
//   return false
// }
// console.log(upOrNot("Str"))

// ----#9 Write a JavaScript program to draw a smile
// что-то я не сильно поняла что за улыбка но вот)
// console.log(')')


// --------------------Part 2--------------------------


// let first = document.getElementById("string-1").textContent
// let second = document.getElementById("string-2").textContent
// let third = document.getElementById("string-3").textContent
// let forth = document.getElementById("string-4").textContent
// let fifth = document.getElementById("string-5").textContent
// let sixth = document.getElementById("string-6").textContent
// console.log(third)
// console.log(fifth)
// console.log(second)
// console.log(sixth)
// console.log(forth)
// console.log(first)

// ----2 task
// let elements = document.getElementsByClassName("element")
// for (let i = 0; i < 3; i++) {
//   elements[i].style.color = "red"
// }
// for (let i = 3; i < 6; i++) {
//   elements[i].style.color = "green"
// }

// -----3 task
// const tasks = [
//   "Buy lemonade",
//   "Make toasts",
//   "Repair car",
//   "Play games",
//   "Pet a cat"
// ];

// for (let i = 0; i < tasks.length; i++) {
//   let li = document.createElement("li");
//   let task_text = document.createTextNode(tasks[i]);
//   li.appendChild(task_text);
//   document.getElementById("todo-list").appendChild(li).classList.add("task");
// }

// ----4 task
// let parag = document.getElementsByTagName("p")

// ----5 task
// document.getElementsByClassName('item')[1].remove();

// let p_tag = document.createElement("div");
//  p_tag.innerHTML = '<div class="item">Canned Fish <span class="qty">x 4</span></div>';
// console.log(p_tag)
// let element = document.getElementsByClassName("item");
// element.replaceChild(p_tag, element[3]);

// ---- 6 task

// let ul = document.getElementById("myList");
// function listAdd(textValue) {
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(textValue));
//   ul.appendChild(li);
// }

// while (true) {
//   let inp = prompt("add list item");
//   listAdd(inp);
//   if (!inp) {
//     break;
//   }
// }