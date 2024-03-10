                                  //TASK-36

// function make_shirt(text,size)
// {
//     console.log(`Size of Shirt is ${size} and message printed on it is "${text}"`);
// }

// //calling Function
// make_shirt("Aitazaz",30);


                                  //TASK-37

// function make_shirt(size,text)
// {
//     if(text == "I Love JavaScript" && (size == "large" || size == "medium"))
//     {
//         console.log(`Size of shirt is ${size} and message on it is "I love JavaScript"`);
//     }
//     else
//     {
//         console.log(`Size of shirt is ${size} and message on it is ${text}`);
//     }
// }
// let size = "32";  // large , small , medium , or default size
// let text = "Aitazaz";   // write any custom text
// make_shirt(size,text);   

                                   //TASK-38

// function describe_city(city,country = "Pakistan")
// {
//     console.log(`${city} is the city of ${country}`);
// }

// describe_city("Rawalpindi");
// describe_city("Islamabad");
// describe_city("Delhi","India");  // not city of default country


                                    //TASK-39

// Returning string by a Function

// function city_country(city,country)
// {
//     let str = city + "," + country;
//     return str;
// }

// console.log(city_country("Rawalpindi","Pakistan"));
// console.log(city_country("Madinah","Saudi Arabia"));
// console.log(city_country("Mumbai","India"));


                                          //TASK-40


// function make_album(title,artist)
// {
//     const album = {
//         book : title,
//         author : artist
//     };

//     return album;
// }

// console.log(make_album("William Shakespeare","Plays and Poetry"));
// console.log(make_album("Barbara Cartland","Romance"));

// // including Tracks as well
// function new_album(title,artist,tracks)
// {
//     const album = {
//         book : title,
//         author : artist,
//         plays : tracks  
//     };

//     return album;
// }
// console.log(new_album("Kyotaro Nishimura","Mystery","200 Million"));  // including Tracks as well
// console.log(new_album("arthur Halley","Thriller","170 Million"));  // including Tracks as well



                                        //TASK-41- //TASK-42 


// let func = function show_magicians(array)
// {
//     for(let i=0; i<array.length; i++)
//     {
//         console.log(array[i]);
//     }
// }

// let array = ["Charlie","Chaplan","Tom","Jerry"];
// func(array);

// let newfunc = function make_great(array)
// {
//     for(let i=0; i<array.length; i++)
//     {
//         console.log(`Great ${array[i]}`);
//     }
// }
// newfunc(array);  // name has been modified


                                         //TASK-43                                        

// let func = function show_magicians(array)
// {
//     for(let i=0; i<array.length; i++)
//     {
//         console.log(array[i]);
//     }
// }

// let array = ["Charlie","Chaplan","Tom","Jerry"];
// func(array);

// let newfunc = function make_great(array)
// {
//     for(let i=0; i<array.length; i++)
//     {
//         console.log(`Great ${array[i]}`);
//     }
// }
// newfunc(array);  // name has been modified


                                        //TASK-44


// let sandwich = (array)=>{
//     console.log("The Sandwich Consists of : ");
//     for(let i=0; i<array.length; i++)
//     {
//         console.log(array[i]);
//     }
// }
// let things = ["tomato","ketchup","bread","egg"];
// sandwich(things);
// let things2 = ["chicken","bread","cheese","sauce"];
// sandwich(things2);
// let things3 = ["beef","bread","egg","vegetables","ketchup"];
// sandwich(things3);


                                         //TASK-45


// function cars_info(manufacturer,model)
// {
//     const car = {
//         company : manufacturer,
//         plate_no : model 
//     };
//     return car;
// } 

// console.log(cars_info("Honda",19));
// console.log(cars_info("Suzuki",23));

// // One Having More Arguments and Parameters
// function cars_information(manufacturer,model,color,name)
// {
//     const car = {
//         company : manufacturer,
//         plate_no : model,
//         car_name : name,
//         look : color 
//     };
//     return car;
// } 

// console.log(cars_information("Honda",19,"Black","Sonantra"));
// console.log(cars_information("Suzuki",21,"white","cultus"));


                                          // THE END OF ASSIGNMENT






