'use strict'
// 1
let x=5
while (x<100){console.log(x); x++}

// 2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(let item of array1) {if (item >0 && item < 10)
console.log(item)}

// 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of array2) {if (item==5) {break}console.log("aris") } 

//4
let array3 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array3.length; i++){
    sum = sum + array[i];
    }
console.log(sum)



// 6
let array5 = [1, 2, 3, 7, 6, 9];
for(let item of array5) {if(item==7){continue} console.log(item)}

// 7
let user = {
    firstname:'giorgi',
    lastname:"smith",
    age:25,
    studentstatus:"active"};

    console.log(user.studentstatus)

//  8   
let user2= {
    name:'giorgi',
    age: 20,
    studentstatus:"active"};
if(user2.usarage<18 && user2.studentstatus=='active'){console.log('hello')}
else if(users2.name=='levan'){console.log('hello levani')}
else if (users2.studentstatus=='active' || users2.userage<25){console.log('hello world')}
else{console.log('erroe')}


// 10
let array7= [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
for(let item of array7){if(item%2==0){console.log(item)}}
for(let item of array7){if(item%2==1){console.log(item)}}


