//var  num = "12";
//alert(num - prompt(10,10));






//var result = (true + false) > 1  + true;
//alert(result)





 //var num = "10";
//alert(+num--);
//alert(num);
//
//num = 10++;
// alert(num)

//alert(7+1);
//alert(num)

//var num = 10;
//num = num + num++;
//alert(num)

//var num = 10;
//num = num++ - num-- + num;
//5) var num = "10";
//num = num-- + num-- + num--;
//alert(num)
//6) var num = "10";
//+num = num;
//alert(num);
//7) var abc = 10;
//var abc;
//alert(abc);
//8) var totalCost = 1 + 3 * 4;
// alert(totalCost)
// 
//if (city = "Las Vegas") {
//    alert("Las Vegas")
//}
//alert(city)
//
//
//
//
//
//
//
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
//
//
//
//
//
//  if (UndefinedValue) {       //  undefined
//    alert("if")
//}
//else {
//    alert("else")
//}
//
//
//
//
//
//
//
//
// 
// 
// 
//
//
//
//
//
//
//  if (false) { alert("if") }
//else { alert("else") }
//if(true){ alert("2nd if") }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////
//  var string = ""
//if(string){
//    alert(string + "if");
//}
//
//
//
//
//
//
//
//
//
//
// 
// 
// 
// 

///**
// * Created by MT-2016 on 08-Oct-16.
// */
//
///** Array methods **/
///*
// push      = Add an element to end of an array
// pop       = Removes last element of an array
// unshift   = Add an element to start of an array
// shift     = Removes first element of an array
// splice    = Add/Remove array elements at/from any position
// slice     = copy an array
// indexOf   = find index or position of a specific element
// */



/** push **/
//var fruits = ["Mango", "Peach", "Banana"];
//document.write("<br><h4>push</h4>");
//document.write("<br>Fruits: " + fruits);
//fruits.push("Apple");
//document.write("<br>Fruits: " + fruits);

//fruits.push(21, "Grapes", true);
//document.write("<br>Fruits: " + fruits);

//fruits.push("Grapes");
//document.write("<br>Fruits: " + fruits);
//
//document.write("<br>Total fruits " + fruits.length);

// an alternate way to push in an array 
//var fruits = ["Apple", "Orange"];
//document.write("<br>Fruits: " + fruits);
//fruits[fruits.length] = "Mango";
//var len = fruits[2].length
//fruits[fruits.length] = "Banana";
//document.write("<br>Fruits: " + fruits);
//document.write("<br>Fruits: " + len);
//























///** pop **/
//var fruits = ["Mango", "Peach", "Banana",
//    "Apple", "Grapes", 21];
//document.write("<br><h4>pop</h4>");
//document.write("<br>Fruits: " + fruits);
////fruits.pop();
////fruits.push(6600)
////fruits.pop()
//
//document.write("<br>Fruits: " + fruits);
//fruits.pop();
//fruits.pop();
//document.write("<br>Fruits: " + fruits);
























///** unshift **/
//var fruits = ["Mango", "Peach", "Banana"];
//document.write("<br><h4>unshift</h4>");
//document.write("<br>Fruits: " + fruits);
//fruits.unshift("Apple");
//document.write("<br>Fruits: " + fruits);

//fruits.unshift("Water Melon", "Grapes", "Melon");
//document.write("<br>Fruits: " + fruits);

//fruits.unshift("Grapes");
//document.write("<br>Fruits: " + fruits);
//document.write("<br>Total fruits " + fruits.length);























 ///** shift **/
//var fruits = ["Mango", "Peach", "Banana", "Apple", "Grapes", "Melon"];
//document.write("<br><h4>shift</h4>");
//document.write("<br>Fruits: " + fruits);
//fruits.shift();
//document.write("<br>Fruits: " + fruits);

//fruits.shift();
//fruits.shift();
//document.write("<br>Fruits: " + fruits);
//console.log(fruits);



















///** splice **/
///*
// fruits.splice(index, noOfElementsToRemove, elementsToAdd);
// */
//var fruits = ["Mango", "Grapes", "Peach", "Banana"];
//document.write("<br><h4>splice</h4>");
//document.write("<br>Fruits: " + fruits);
//fruits.splice(2, 210);
//fruits.push(12)
//document.write("<br>Remove Fruit(s): fruits.splice(2, 2):" + fruits);
//var fruits = ["Mango", "Grapes", "Peach", "Banana"];
//fruits.splice(2, 0, "Apple");
//document.write("<br>Add Fruit(s): " + fruits);
//var fruits = ["Mango", "Grapes", "Peach", "Banana"];
//fruits.splice(2, 0, "Apple", "Orange", "Melon");
//document.write("<br>Add Multiple Fruits: " + fruits);
//var fruits = ["Mango", "Grapes", "Peach", "Banana"];
//fruits.splice(2, 1, "Apple");
//document.write("<br>Add & Remove Fruit(s): " + fruits);




 //** slice **/
///*
// fruits.slice(startIndex, endIndex+1);
// */
//var fruits = ["Mango", "Grapes", "Peach", "Banana", "Orange"];
//document.write("<br><h4>slice</h4>");
//document.write("<br>Fruits: " + fruits);
//var newFruits = fruits.slice(2, 4);
//document.write("<br>Copy Fruit(s): " + newFruits);
///** indexOf **/
//var fruits = ["orange", "banana", "apple"];
//alert(fruits.indexOf("banana"));
//alert(fruits.indexOf("apple"));
//alert(fruits.indexOf("peach"));







//
//
///** without for loop **/
//document.write("Hello World<br>");
//document.write("Hello World<br>");
//document.write("Hello World<br>");
//document.write("Hello World<br>");
//document.write("Hello World<br>");
///** without for loop **/
//        var num = 0;
//
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
//        document.write(num + "<br>");
//        num += 1;
///** For Loops **/
///*
// for (initializer ; condition ; incrementer/decrementer)
// {
// }
// */
///** structure **/
////        for ( ; ; )
////        {
////
////        }
///** for loop **/
//for (var count = 0; count <= 5  ; count++ )
//{
//    document.write(count + "<br>");
//}
///** for loop **/
//for (var num = 0; num <= 10  ; num++ )
//{
//    document.write(num + "<br>");
//}
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//document.write("<h4>Cleanest Cities List</h4>");
//for (var i = 0; i < cleanestCities.length ; i++)
//{
//    document.write(cleanestCities[i] + " at index " + i);
//    document.write("<br>");
//}
///** for loop - optional statements **/
//var num = 0;
//for ( ; num <= 10 ; num++ )
//{
//    document.write(num + "<br>");
//}
///** for loop - optional statements **/
//for (var num = 0; num <= 10  ;  )
//{
//    document.write(num + "<br>");
//    num++;
//}
///** Example - without for loop **/
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//var cityToCheck     = prompt("Enter city name");
//if (cityToCheck === cleanestCities[0]) {
//    alert("It's one of the cleanest cities");
//}
//else if (cityToCheck === cleanestCities[1]) {
//    alert("It's one of the cleanest cities");
//}
//else if (cityToCheck === cleanestCities[2]) {
//    alert("It's one of the cleanest cities");
//}
//else if (cityToCheck === cleanestCities[3]) {
//    alert("It's one of the cleanest cities");
//}
//else if (cityToCheck === cleanestCities[3]) {
//    alert("It's one of the cleanest cities");
//}
///** Example - with for loop **/
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//var cityToCheck     = prompt("Enter city name");
//for (var i = 0; i < cleanestCities.length ; i++)
//{
//    if(cityToCheck === cleanestCities[i]){
//        alert("It's one of the cleanest cities");
//    }
//}
//// length of cleanestCities = 5
//// index range = 0 to 4
///** break statement **/
//for(var num = 0 ; num <= 10 ; num++)
//{
//    document.write(num + "<br>");
//    if(num === 5)
//    {
//        break;
//    }
//}
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//var cityToCheck     = prompt("Enter city name");
//for (var i = 0; i < cleanestCities.length ; i++)
//{
//    if(cityToCheck === cleanestCities[i]){
//        alert("It's one of the cleanest cities");
//        break;
//    }
//}
///** flags **/
///** problem - without flags **/
//var cityToCheck    = prompt("Enter city name");
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//for (var i = 0; i < cleanestCities.length ; i++)
//{
//    if(cityToCheck === cleanestCities[i])
//    {
//        alert("It's one of the cleanest cities");
//    }
//    else
//    {
//        alert ("city not matched");
//    }
//}
///** solution - with flags **/
//var cityToCheck    = prompt("Enter city name");
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//var matchFound = false; //flag
//for (var i = 0; i < cleanestCities.length ; i++)
//{
//    if(cityToCheck === cleanestCities[i])
//    {
//        matchFound  = true;
//    }
//}
//if( matchFound === true)
//{
//    alert("It's one of the cleanest cities");
//}
//else if( matchFound === false)
//{
//    alert ("city not matched");
//}
///** nested for loops **/
//var firstNames = ["Ali", "Sami", "Bilal"];
//var lastNames = ["Khan", "Baig"];
//for(var i = 0; i < firstNames.length; i++ )
//{
//    for(var j = 0; j < lastNames.length; j++ )
//    {
//        document.write(firstNames[i]+ " " + lastNames[j]);
//        document.write("<br>");
//    }
//}
// for (var i = 0; i < 4; i++) // 4 times
// {
//    for (var t = 0; t <= 2 ; t++) // 3 times
//    {
//        alert("Hello");
//    }
// }
