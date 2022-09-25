var stu=["Ali","faizan","Rashid"]
var mrks=500
var obmrks=[100,200,300]
var per=(obmrks[2])/mrks*100
console.log("percentege of "+(stu[2]) + " is"+ per + "%")


if(per>=40){
  console.log("You are Pass")
  console.log("Grade is D")

}
else{
  console.log("You are Fail")
  console.log("Grade if F")
}






/*
Q2A) Initialize an array with color names. Display the array of elements in your console.
Q2B) Ask the user what color he/she wants to add at the beginning & add that color at the beginning of the array. Display the updated array in your console.
Q2C) Ask the user what color he/she wants to add at the end & add that color at the end of the array. Display the updated array in your console.
Q2D) Add two more colors at the beginning of the array. Display the updated array in your console.
Q2E) Add two more colors at the end of the array. Display the updated array in your console.
Q2F) Delete the first color from the array. Display the updated array in your console.
Q2G) Delete the last color from the array. Display the updated array in your console.
Q2H) Ask the user at which index he/she wants to add color. Then add that color to the desired position/index. Display the updated array in your console.
*/



//Initialize an array with color names. Display the array of elements in your console.
 var colors=["Red","blue,","green"]
 console.log(colors);
 //Initialize an array with color names. Display the array of elements in your console.//

 //added color in the begining of an array//
 var userInput=prompt("enter color name for begining")
 colors.unshift(userInput)
 console.log(colors)
 //added color in the begining of an array//

 //added color in the end of an array//
 var userInput2=prompt("enter color name for end")
 colors.push(userInput2)
 console.log(colors)

 //added color in the begining of an array//

 //added two colors in the begining of an array//
 var userInput3=prompt("enter color name for begining")
 var userInput4=prompt("enter color name for begining")
 colors.unshift(userInput3)
 colors.unshift(userInput4)
 console.log(colors)
 //added two colors in the end of an array//
 colors.push("violet","indigo")
 console.log(colors)
  //added two colors in the end of an array//

   //Delete the first color from an array//
   colors.shift()
   console.log(colors)
  //Delete the first color from an array//

  //Delete the last color from an array//
  colors.pop()
  console.log(colors)
 //Delete the last color from an array//

 //Ask the user at which index he/she wants to add color.//
 var userInput5=prompt("Enter where you want to add color")
 var userInput6=prompt("Enter how many colors you want to delete")
 var userInput7=prompt("Enter that color name")
 colors.splice(userInput5,userInput6,userInput7)
 console.log(colors)
 //Ask the user at which index he/she wants to add color.//
 

 //Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete
 var userInput8=prompt("Enter where you want to delete color")
 var userInput9=prompt("Enter how many colors you want to delete")
 colors.splice(userInput8,userInput9)
 console.log(colors)
 //Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete


 //Q3) Write a program that takes a number from the user and displays the multiplication table.
var userInput=prompt("Enter a number")
for(var i=1;i<=10;i++){
  document.write(userInput + "x" + i + "=" + userInput * i);  
  document.write("<br>")
  }


//Ask user which he/she wants in the begining//

