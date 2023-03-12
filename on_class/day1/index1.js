





let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
]







// BAI 1 

// let age = window.prompt("Độ tuổi cần tìm :")




// for ( i = 0 ; i<= student.length; i++ ){
//     if ( age == student[i].age ){
//         console.log("Name : " + student[i].name + " "+ "age : "+ student[i].age)
        
//     }
//     else{
//         console.log("không tìm thấy!")
//     }
    
// }





// let Course = String(window.prompt("Khoá học cần tìm :"))


// for ( i = 0 ; i<= student.length; i++ ){
//     for ( j = 0 ; j<= student[i].course.length; j++){
        
//     if ( Course == String(student[i].course[j]) ){
//         console.log("Name : " + student[i].name )
        
//     }
    
// }
// }

// BAI 2 
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

function checkArr1(){
    for ( i = 0 ; i<= arr1.length; i++){
        if ( arr1[i]>3){
            console.log(arr1[i])
        }
    }
}
checkArr1()

function checkArr2(){
    for ( i = 0 ; i<= arr2.length; i++){
        if ( arr2[i]>3){
            console.log(arr2[i])
        }
    }
}
checkArr2()

let combine1 = arr1.concat(arr2)
console.log(combine1)

let combine2 = arr1.concat(arr2)
combine2.sort()
console.log(combine2)