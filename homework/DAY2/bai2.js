
// BAI 1 
let arr1 = [1, 2, 4, 5, 6];
let arr2 = [1, 6, 8, 9, 0];


for (i = 0; i < arr2.length; i++) {
    const combine = arr1.filter(function (number) {
        return number == arr2[i];

    })

    console.log(combine)
}



// BAI 2 

let arr = [1, 54, 6, 7]

const Newarr = arr.map((x) => x + 5)
console.log(Newarr)

// BAI 3 

let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];

const New_m_n = [...m.filter((x) => x != 1 && x != 8 && x != 10 && x != 96 && x != 7), ...n.filter((x) => x != 1 && x != 8 && x != 10 && x != 96 && x != 7)]
console.log(New_m_n)


// BAI 4 
let players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]




const player_modified1 = Object.assign({}, players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
] )

console.log(player_modified1)


const a = [3,2,5]
const result = a.reduce((bb, aa) => aa )
console.log(result)