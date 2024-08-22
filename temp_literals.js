// var my_name="krish";
// var age=18;
// console.log("my name is"+my_name+"and my age is"+age)
// console.log("my name is",my_name,"and my age is",age)
// console.log(`my name is ${my_name} and my age is ${age}`)


// let new_array=[1,2,3,4,5]
// let [one,two,three]=[1,2,3]
// console.log(one)

// let object={name:"krish",age:18}
// let {name,age}={name:"krish",age:18}
// console.log(name)


//set
const uniqueNumbers = new Set();
uniqueNumbers.add(1)
uniqueNumbers.add(2)
uniqueNumbers.add(1)
uniqueNumbers.add({key:"value"})
uniqueNumbers.add(function my_name(){})
uniqueNumbers.add({key:"diff value"})
uniqueNumbers.add("5")
uniqueNumbers.add("5")
uniqueNumbers.add()
uniqueNumbers.add()
console.log("set:uniqueNumbers",Array.from(uniqueNumbers).join(","));