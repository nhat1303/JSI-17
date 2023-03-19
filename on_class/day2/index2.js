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

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
console.log(filterRange([1,2,3,4], 2, 4));