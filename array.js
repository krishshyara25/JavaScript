let new_array = [1,"five",4.5,function(){},[2,3]]
let fruits = ["mango","orange","apple","pineapple"]
{
    
    console.log(new_array.length)// show array length
    console.log(new_array[3])// show the element
    console.log(new_array.toString())// join the elements as String(without mark)
    console.log(new_array.at(2))// show the element (works as solid bracet[])
    console.log(new_array.join("&"))// join element as string with mark b/w two elements
    console.log(new_array.pop())  // remove element from the last
    console.log(new_array.push("kiwi"))// add element at last
    console.log(new_array.shift())//remove element from first
    console.log(new_array.unshift(9))//add element at first
    console.log(new_array[0]="kiwi")//change element index number
    console.log(new_array[new_array.length]="apple")//add element to an array in easy way
    console.log(delete new_array[0])
    console.log(new_array.concat(fruits))//joint arrays

    
}