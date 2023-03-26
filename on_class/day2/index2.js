// https://docs.google.com/document/d/1fASkBnSu4QrvgfnROstlksPFqkS-X9S91cGz0MQQuF8/edit

// BÀI 1
const arr1 = [1,2,3,4,5]
const newArray1 = arr1.concat(arr1)
const newArray2 = [... arr1, ...arr1]

console.log(newArray1)
console.log(newArray2)


// BÀI 2
const arrA = ["Hello", "Xin chào"]
const arrB = ["Hello", "Xin chào"]

const waystosayHello1 = arrA.concat(arrB)
const waystosayHello2 = [...arrA,...arrB]

console.log(waystosayHello1)
console.log(waystosayHello2)

// BÀI 3 
const arrX= [0,1,2,3,4,5,6,7,8]


const arrSquare = arrX.map(x => x**2)
console.log(arrSquare)

const arrOdds = arrX.filter(x => x %2 !=0)
console.log(arrOdds)


// BÀI 4 

function filterRange1(arr, a, b) {
    return arr.filter(item => (arr[a] <= item && item <= arr[b]));
}
console.log(filterRange2([2,6,7,1,3], 1, 4));

// BÀI 5 
function filterRange2(arr, a, b){
    return arr.filter(x => (x > a && x < b))
}

console.log(filterRange2([1,2,3,4],2,4))

// BÀI 6 

let student = [
    {
        name: "Duong",
        age : 11,
        hobbies: ["video games", "sleep", "learn"]
    },
    {
        name: "Dong",
        age : 12,
        hobbies: ["video games", "sick", "study"]
    },
    {
        name: "Minh",
        age : 13,
        hobbies: ["video games", "sick", "learn"]
    },
    {
        name: "Thanh",
        age : 9,
        hobbies: ["play games", "sleep", "learn"]
    },
    {
        name: "Hung",
        age : 11,
        hobbies: ["play games", "sick", "learn"]
    }
]
// 1 

let inputAge= prompt("Nhập số tuổi")
const sdList1 = student.filter((student) => student.age == inputAge);
console.log(sdList1);

// 2

let inputHobby = prompt("Nhập sở thích")
for (i = 0; i<3 ; i++){
    const sdList2 = student.filter((student)=> student.hobbies[i]== inputHobby);
    console.log(sdList2)

}

// 3
for (i = 0 ;i <3; i++){
    const sdList3 = student.filter((student) => student.hobbies[i]=="study")
    console.log(sdList3)
}

// 4
for (i = 0 ; i<3 ; i++){
    
    {
    
        const sdList4 = student.map(function(student){
            if (
                student[i]= 11
            ){
                return student.age =15
            }
        }  )
        console.log(sdList4)
        
    }
    
}