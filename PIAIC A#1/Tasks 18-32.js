                   // TASK-18

// //storing in an array                   
// let places = ["USA","Australia","Turkey","Saudi Arabia","Canada"];
// // Printing Original Array
// console.log("Original Array");
// for(let i=0; i<places.length; i++)
// {
//     console.log(places[i]);
// }

// console.log("Array in Ascending Order");
// // Sorting in Alphabetical Order using Sort() function
// places.sort();
// for(let i=0; i<places.length; i++)
// {
//     console.log(places[i]);
// }

// console.log("Array in Descending Order");
// // Sorting in Reverse order
// places.sort();  // this will sort
// places.reverse(); // finally it will reverse and hance in descending order
// for(let i=0; i<places.length; i++)
// {
//     console.log(places[i]);
// }

//-----------------------------------------------------------------------------------//

                        // TASK-19

      // Done in TASKS 14-17

                        //TASK-20
                        
// let fav = [["USA","Turkey"],["Mount Everest","K-2"],["Fortuner Legender","Vigo"],["English","Arabic"]];
// for(let i=0; i<fav.length; i++)
// {
//     for(let j=0; j<2; j++)
//     {
//         console.log(fav[i][j]);
//     }
// }                        


                        //TASK-21

// const student = {
//     name : 'Aitazaz',
//     class : "BESE",
//     age : 18,
//     city : "Rawalpindi"
// };
// // Printing key:value pairs
// console.log(student["name"]);
// console.log(student["class"]);
// console.log(student.age);
// console.log(student.city);


                        // TASK-22

// making error and making loop iterte equal to length of Array 

// let array = [1,2,3,4,5,6];
// for(let i=0; i<=array.length; i++)
// {
//     console.log(array[i]);
// }


                       //TASK-23

                       //(i)
// let car = "Vigo";
// if(car == "Vigo")
// {
//     console.log("I like it");
// }
// else
// {
//     console.log("I dont like this");
// }
        
                    //   TASK-24

                         //(ii)

// let s1 = "This is a String";
// let s2 = "This is a String";
// if(s1 == s2)
// {
//     console.log("Both Strings are equal ");
// }
// else
// {
//     console.log("Strings are not equal");
// }

                          //(iii)
                             
// let car = "Vigo";
// if(car == "vigo")   // Alphabet case difference
// {
//     console.log("I like it");
// }
// else
// {
//     console.log("I dont like this");
// }

                          //(iv)


// let n = prompt("Enter Your age");
// if(n>18)
// {
//     console.log("You are 18+");
// }
// else if(n == 18)
// {
//     console.log("You are just 18");
// }
// else if(n < 0)
// {
//     console.log("You are not born yet");
// }
// else
// {
//     console.log("You are below 18");
// }


                    //(v)

// let age = 18;
// if(age > 18 || age == 18)
// {
//     console.log("You are Allowed");
// }
                    //(vi)

// let age = 17;
// if(age>0 && age < 18)
// {
//     console.log("You are just a teenager");
// }

                    //(vii)

// let key = 3;
// let array = [1,2,3,4,5];

// for(let i=0; i<array.length; i++)
// {
//     if(array[i] == key)
//     {
//         console.log("Key is Found in Array");
//     }
// }


                        //TASK-25

// let alien_color = ["Red","Green","Blue"];
//  for(let i=0; i<alien_color.length; i++)
// {
//     if(alien_color[i] == "Green")
//     {
//         console.log("You have just earned 5 points");
//     }
// }


                        //TASK-26

// let alien_color = ["Red","Green","Blue"];
//  for(let i=0; i<alien_color.length; i++)
// {
//     if(alien_color[i] == "Green")
//     {
//         console.log("You have just earned 5 points for shooting alien");
//     }
//     else{
//         console.log("Player Earned 10 Points");
//     }
// }


                    //TASK-27

// let alien_color = "Red";

// if(alien_color == "Green" || alien_color == "green")
//     {
//         console.log("You have just earned 5 points for shooting alien");
//     }
// else if(alien_color == "Yellow" || alien_color == "yellow")
// {
//     console.log("You have just earned 10 points for shooting alien");
// }
// else{
//     console.log("You have just earned 15 points for shooting  alien");
// }



                        //TASL-28

// let age = prompt("Enter Your age");
// if(age<0)
// {
//      console.log("You are not Born Yet");
// }
// else if(age>0 && age<2)
// {
//      console.log("You are Baby");
// }
// else if(age>=2 && age<4)
// {
//      console.log("You are Toddler");
// }
// else if(age>=4 && age<13)
// {
//      console.log("You are Kid");
// }
// else if(age>=13 && age<20)
// {
//      console.log("You are Teenager");
// }
// else if(age>=20 && age<65)
// {
//      console.log("You are an Adult");
// }
// else
// {
//      console.log("You are an Elder");
// }


                                      //TASK-29

// let fav_fruits = ["Apple","Banana","Orange","Leechee","Grapes","Peach","Mango"];
// for(let i=0; i<fav_fruits.length; i++)
// {
//      if(fav_fruits[i] == "Apple")
//      {
//           console.log("You really Like Apples");
//      }
//      if(fav_fruits[i] == "Banana")
//      {
//           console.log("You really Like Bananas");
//      }
//      if(fav_fruits[i] == "Grapes")
//      {
//           console.log("You really Like Grapes");
//      }
//      if(fav_fruits[i] == "Peach")
//      {
//           console.log("You really Like Peach");
//      }
//      if(fav_fruits[i] == "Mango")
//      {
//           console.log("You really Like Mangoes");
//      }
// }

                                        //TASK-30 && //TASK-31

// let usernames = ["Admin","Aitazaz","Hassan","Habib","Saad"];

// for(let i=0; i<usernames.length; i++)
// {
//      if(usernames[i] == "Admin")
//      {
//           console.log("Hello admin, would you like to see a status report?");
//      }
//      else 
//      {
//           console.log(`Hello ${usernames[i]}, thank you for logging in again.`)
//      }
// }
//                                      //TASK-31
                                     
// // Making Array Empty 
// while(usernames.length)  // condition
// {
//      usernames.pop();
// }

// if(usernames.length == 0)          // checking whther list is empty or not
// {
//           console.log("We need to Find Some Users");
// }


                                        //TASK-32

// let current_users = ["Aitazaz","Hassan","Habib","Saad","Ahmed"];
// let new_users = ["Ali","Habib","Kamran","Saad","Zia ur Rehman"];

// for(let i=0; i<new_users.length; i++)
// {
//      for(let j=0; j<current_users.length; j++)
//      {
//           if(current_users[j] == new_users[i])   // comparison if new user is equal to old 
//           {
//                console.log("You need to enter an other username.");
//           }
//           else
//           {
//                console.log("Username is Available");
//           }
//      }
// }












