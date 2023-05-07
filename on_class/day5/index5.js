// BAI 1 
let m = [1,2,3,4,5,6,"hh", "9",80,100]
// let newM = m.filter(Number)
let newM = m.filter((x) => x%1 ==0).map(Number);
console.log(newM)

let mSquared = newM.map((x)=> Math.pow(x,2))
console.log(mSquared)

// BAI 2 
let sentence =  " High knowledge, high return "
let arr_sentence = sentence.split(" ")
let newArr_sent = arr_sentence.filter((x) => x!= "")
console.log(newArr_sent)
let lower_arr = newArr_sent.map((x) => x.toLowerCase())
console.log(lower_arr)

// BAI 3 
let  arr1 = [1,2,4,5,6]
let  arr2 = [1,6,8,9,0]
let newarray = arr1.filter((x)=> arr2.includes(x))
console.log(newarray)


// BAI 4

let arr = [1,54,6,7]
let newArr = arr.map((x) => x+5)
console.log(newArr)

// BAI 5 

let M = [1,2,4,5,6,7]
let N = [3,5,675,8,96]
let noNum = [1,8,10,96,7]

let combine = [...M,...N]
let realcombine = combine.filter((x)=> !noNum.includes(x))
console.log("bài 5",realcombine)



const student = [
    { name : "A", grade: 11, subject: ['sb1','sb2','sb3']},
    { name : "B", grade: 12, subject: ['sb3','sb1','sb5']},
    { name : "C", grade: 14, subject: ['sb5','sb8','sb2']},
    { name : "D", grade: 10, subject: ['sb2','sb4','sb1']},
    { name : "E", grade: 8, subject: ['sb1','sb2','sb3']},
]


let age = student.map((x) => x.grade)
console.log(age)

const sb = student.map((x) => x.subject.length)

const sum = sb.reduce((total,num) => total + num,1)
console.log(sum)

const sb1 = student.filter((x) => x.subject = 'sb1')
console.log(sb1)