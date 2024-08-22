// // //que1
// function name(){
//     console.log("hello world")
// }
// name()

//********************************************* */

// //que2
// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,3)

//********************************************* */

// //que3
// var arr=[1,2,3]
// if(arr[0]>arr[1] && arr[0]>arr[2])
// {
//     console.log(arr[0])
// }
// else if(arr[1]>arr[2] && arr[1]>arr[0])
// {
//     console.log(arr[1])
// }
// else(arr[2]>arr[1] && arr[2]>arr[0])
// {
//     console.log(arr[2])
// }

//********************************************* */

// //que4
// var i=5;
// var check=i%2
// if(check==0)
// {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }

//********************************************* */

// //que5
// sum=1;
// for(i=5;i>0;i--)
//     {
//     sum=sum*i
// }
// console.log(sum)

//********************************************* */

// //que6
// //friend help
// //10min
// var str=("hello world")
// var a='';
// for(i=str.length-1;i>=0;i--){
//     a=a+str[i];
// }
// console.log(a)

//********************************************* */

// //que7
//5min
// var str='krish';
// var a='';
// for(i=str.length-1;i>=0;i--)
// {
//     a=a+str[i]
// }
// console.log(a)
// if(a==str){
//     console.log("palindrome")
// }
// else{
//     console.log("not pelindrome")
// }

//********************************************* */

//que8
//3min
// var arr=[2,5,3]
// if(arr[0]<arr[1] && arr[0]<arr[2])
// {
//     console.log(arr[0])
// }
// else if(arr[1]<arr[0] && arr[1]<arr[2])
// {
//     console.log(arr[1])
// }
// if(arr[2]<arr[1] && arr[2]<arr[0])
// {
//     console.log(arr[2])
// }

//********************************************* */

// //que9
//from w3school
// var arr=[1,2,7,3,5,9,2,3]
// console.log(arr.sort())

//********************************************* */

//que10
// 15min
// var str=("hello world,world")
// var a=str.substring(6,11)
// var b=str.substring(12,17)
// if(a==b){
//     console.log("true")
// }
// else{console.log("false")}
//********************************************* */

// //que11
// //2min
// var arr=[1,2,3,4,5]
// var a=0;
// for(i=0;i<5;i++)
//     a=a+arr[i]
// {
//     console.log(a)
// }

//********************************************* */

//que12
//from google
// var num=10;
// var a=0;
// var b=1;
// console.log(a)
// console.log(b)
// for(var i=1;i<=num;i++)
// {
//     c=a+b
//     console.log(c)
//     a=b
//     b=c
// }
//********************************************* */

// //que13
// //20min
// var a=11;
// var number=0;
// for(i=2;i<a;i++)
//     {
//         var rem=a%i;

//         if(rem==0)
//         {
//             number=number+1
//         }
//         else{
//             number=number
//         }
//     }


// if(number==0)
//     {
//         console.log("prime number")
//     }
//     else{
//         console.log("not a prime number")
//     }

//********************************************* */

//que14
//with google
//25min
// let str = "HELLO WORLD";
// let lstr = str.toLowerCase();
// console.log(lstr);

// let count = 0;
// function vowels() {
//   for (let i = 0; i < lstr.length; i++) {
//     let char = lstr[i];
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        
//       console.log(char);
//       count++;
//     }
//   }
//   console.log("the number of vowels in string is", count);
// }
// console.log("the list of vowels from the string is")
// vowels();

//que15
// var arr=[1,2,3,4,5]
// var a=5;
// for(i=0;i<arr.length;i++)
// if(a==arr[i])
// {
//     console.log(i)
// }

//que16
var num=new Set()

num.add(1)
num.add(2)
num.add(2)
num.add(3)
num.add(3)
num.add(2)
num.add(2)
num.add(3)

//que17
// var arr=[1,2,3]
// var arr1=[2,3,4]
// var a=0;
// for(i=0;i<arr.length;i++)
//     if(arr[i]==arr1[a])
//     {
//         a=a+1
//         console.log(arr[i])
//     }

//que18
// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("listen","silent")


//que23
// var a=0;
// console.log(a,"celsuis=",(a*9/5)+32,"fahrenheit")

//que24
//w3school
//10min
// var arr=[1,2,3,4]
// a=arr.splice(2,1)
// console.log(arr)

//que25
// var arr=[1,2,3,4,5]
// var a=arr.sort()
// console.log(a[arr.length-2])

