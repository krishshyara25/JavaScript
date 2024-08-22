// //que1
// console.log("Hello Computer")
// //que2
// var name = "krish"
// var address = "motavarachha"
// var city = "surat"
// console.log(name)
// console.log(address)
// console.log(city)
// //que3
// const pi=3.14;
// var r=3;
// let area=pi*r;
// {
//     console.log(area)
// }
// //que4
// var a=4,b=2;
// console.log(a*b)
// console.log(a-b)
// console.log(a+b)
// console.log(a/b)



// //que6
// var i=2,j=3;
// if(i>j)
// {
//     console.log("i is maximum")
// }
// else{
//     console.log("j is maximum")
// }

// //que7
// if(i<j)
//     {
//         console.log("i is minimum")
//     }
//     else{
//         console.log("j is minimum")
//     }

// //que8
// var e=2,f=3,g=4;
// if(e>f && e>g )
// {
//     console.log("e is maximum")
// }
// else if(f>e && f>g){
//     console.log("f is maximum")
// }
// else if(g>e && g>f){
//     console.log("f is maximum")
// }
//  //que9
// var m=2,n=3,o=4;
// if(m<n && m<o)
// {
//     console.log("m is minimum")
// }
// else if(n<m && n<o){
//     console.log("n is minimum")
// }
// else if(o<m && o<n){
//     console.log("o is minimum")
// }   
// //que10
// var p=2;
// for(q=1;q<11;q++)
// {
//     console.log(p*q)
// }



// //que12
// var u=4;
// for(k=2;k<u;k++)
//     count=0;
//  var count=count+1
// if(u%k==0)
// {
//     console.log("this is not a prime number")
// }
// else{
//     console.log("this is a prime number")
// }

// let n=6
// i=2
// counter=0
// for(;i<n;i++){
// if(n%i==0){
//     counter=counter+1
// }
// }
// if(counter>0){
//  console.log("no it is not prime number")
// }
// else{
//     console.log("is a prime number")
// }

// //que19
// const I="*******"
// {
//     console.log(I)
// }

// //que18
// var j="1,2,3,"
// var K="2,3,4"
// console.log(j.concat(K))


// //que5
// var a=1;
// var b=2;
// // var temp;
// // temp=a;
// // a=b;
// // b=temp

// a=a+b;
// b=a-b;
// a=a-b;

// [a,b]=[b,a]
// console.log("a","b",a,b)

// var number=123
// var a=123%10;
// var b=12%10;
// var c=1%10;
// console.log(a+b+c)
// var myarray=[1,2,3]
// myarray.length
// for(i=0;i<myarray.length;i++)
// {
//     console.log(myarray[i])
// // }
// var number=153;
// var sum=0;
// var pow = number.toString().length;
// while(number>0)
// {
//     var rem=number%10;
//     sum=sum+rem**pow
//     number = (number-rem)/10
// }
// console.log(sum)


function specialround() {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,23,29]
    let length = 0;
    for (i = 0; array[i] != undefined; i++) {
        length = length + 1
    }
 console.log('Length of given Array is ',length)

    // prime

    let temp = [];
    
    for (j = 0; j <length; j++) {
        let prime = 0;
        for (k = 2; k < array[j]; k++) {
            if (array[j] % k == 0) {
                prime = prime + 1
            }

        }
        if (prime == 0) {

            temp.push(array[j])
        }

    }
    
    console.log(temp)
    // LArgest Prime

    temp = temp.sort((a,b) => b-a)
    console.log("Total prime =",temp.length, "" , "Largest Prime is",temp[0])
}

specialround()