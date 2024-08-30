// que 1
// find the length without .length function
//     var i=0;
//     var len=0;
//     var arr=[1,3,2,4,5,8,7]
//    while(arr[i]!=undefined)
//     {
//     len=len+1;
//     i++;
//     }
// console.log(len);

//que2
//find the missing number in the array
//     var len=0;
//     var arr=[1,3,2,4,5,8,7]
//    for(i=0;arr[i]!=undefined;i++)
//     {
//     len=len+1;
//     }
// for(i=1;i<len+1;i++)
// {
//     if(arr.includes(i)){

//     }
//     else{
//         console.log(i)
//     }
// }

//que3
//sort the above array without .sort()
// var arr=[1,3,2,4,5,8,7]
// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp=arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//que4
//sort the array
// var arr=[0,0,1,0,1,0,1]
// var len=arr.length;
// var count=0;
// var count1=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==0)
//     {
//         count++;
//     }
// }
// var arr1=[]
// for(f=0;f<count;f++){
//     arr1.push(0);
// }
// for(i=0;i<arr.length;i++){
//     if(arr[i]==1)
//     {
//         count1++;
//     }
// }
// for(f=0;f<count1;f++){
//     arr1.push(1);
// }

// console.log(arr1)
        
// //que5
// var arr=[0,0,2,1,1,2,0,0]
// var len=arr.length;
// var count=0;
// var count1=0;
// var count2=0;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==0)
//     {
//         count++;
//     }
// }
// var arr1=[]
// for(f=0;f<count;f++){
//     arr1.push(0);
// }

// for(i=0;i<arr.length;i++){
//     if(arr[i]==1)
//     {
//         count1++;
//     }
// }
// for(f=0;f<count1;f++){
//     arr1.push(1);
// }
// for(i=0;i<arr.length;i++){
//     if(arr[i]==2)
//     {
//         count2++;
//     }
// }
// for(f=0;f<count2;f++){
//     arr1.push(2);
// }

// console.log(arr1)