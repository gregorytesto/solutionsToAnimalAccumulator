// let animals = ["Wombat", "Lion", "Jaguar", "Dragon", "Anteater", "Capybara"];
// // Combine all strings with comma and space
// function combineStr(animalArr){
//     let animalsStr = "";
//     for(let i=0; i<animalArr.length;i++){
//         animalsStr += animalArr[i];
//         if(i !== animalArr.length-1){
//             animalsStr += ", ";
//         }
//     }
//     return animalsStr;
// }
// console.log(combineStr(animals));

// // Is an certain animal in the array?
// function isAnimalInArr(animalArr, animalToFind){
//     let hasFoundAnimal = false;
//     for(let i=0;i<animalArr.length;i++){
//         let animalInArr = animalArr[i];
//         if(animalInArr === animalToFind){
//             hasFoundAnimal = true;
//         }
//     }
//     return hasFoundAnimal;
// }
// console.log(isAnimalInArr(animals, "Cat"));

const animalsObjArr = [
    { name: "Wombat", age: 1, species: "Vombatus ursinus"},
    { name: "Lion", age: 8, species: "Panthera leo"},
    { name: "Jaguar", age: 6, species: "Panthera onca"},
    { name: "Dragon", age: 100, species: "Hungarian horntail"},
    { name: "Anteater", age: 2, species: "Tridactyla"},
    { name: "Capybara", age: 3, species: "Hydrochoerinae"},
];
// Combine all names of anmials into a string with comma and space between
// function combineAnimalNames(animalArr){
//     // Step 1
//     let animalStr = ""; // Create Accumulator
//     // Step 2
//     for(let i=0;i<animalArr.length;i++){
//         let animalName = animalArr[i].name; // "Wombat"
//         // Step 3
//         animalStr+= animalName;
//         if(i !== animalArr.length-1){
//             animalStr += ", ";
//         }
//     }
//     return animalStr;
// }
// console.log(combineAnimalNames(animalsObjArr));

// Is a certain animal in the array?
    // Return true/false
// function isAnimalInArr(animalArr, animalName){
//     // Step 1
//     let isAnimalFound = false;
//     // Step 2
//     for(let i=0;i<animalArr.length;i++){
//         let animalInArr = animalArr[i].name;
//         // Step 3
//         if(animalInArr === animalName){
//             isAnimalFound = true;
//         }
//     }
//     return isAnimalFound;
// }
// console.log(isAnimalInArr(animalsObjArr, "Wombat"));

    // Return the animal Obj

// function findAnimalObjInArr(animalArr, nameOfAnimal){
//     // Step 1
//     let foundAnimalObj = {};
//     // Step 2
//     for(let i=0;i<animalArr.length;i++){
//         let nameOfAnimalInArr = animalArr[i].name;
//         if(nameOfAnimalInArr === nameOfAnimal){
//             // Step 3
//             foundAnimalObj = animalArr[i];
//         }
//     }
//     return foundAnimalObj;
// }
// console.log(findAnimalObjInArr(animalsObjArr, "Wombat"));

// // Filter array by number of letters in animal name- Return new array
// // Example: Names longer than 5
// function filterAnimalsByNameLength(animalArr, minNumOfChars){
//     // Step 1
//     let animalsWithLongName = [];
//     // Step 2
//     for(let i=0;i<animalArr.length;i++){
//         let animalName = animalArr[i].name; // "Wombat"
//         if(animalName.length > minNumOfChars){ // 6 5
//             // Step 3
//             animalsWithLongName.push(animalArr[i]);
//         }
//     }
//     return animalsWithLongName;
// }
// console.log(filterAnimalsByNameLength(animalsObjArr, 5));

// Filter animals older than given age
// Example: Animals older than 4
// function filterAnimalsByAge(animalArr, minimumAge){
//     let animalsOlderThanMinAge = [];
//     for(let i=0;i<animalArr.length;i++){
//         let animalAge = animalArr[i].age;
//         if(animalAge > minimumAge){
//             animalsOlderThanMinAge.push(animalArr[i]);
//         }
//     }
//     return animalsOlderThanMinAge;
// }
// console.log(filterAnimalsByAge(animalsObjArr, 4));

// // Find the average age of all of the animals
// function findAverageAge(animalArr){
//     // Average = totalAge of all animals / total number of animals
//     let total = 0;
//     for(let i=0;i<animalArr.length;i++){
//         let age = animalArr[i].age;
//         total+=age;
//     }
//     return total/animalArr.length;
// }
// console.log(findAverageAge(animalsObjArr));

// Find oldest animal
    // Return the age
// function findOldestAge(animalArr){
//     let oldestAge = 0;
//     for(let i=0;i<animalArr.length;i++){
//         let age = animalArr[i].age;
//         if(age > oldestAge){
//             oldestAge = age;
//         }
//     }
//     return oldestAge;
// }
// console.log(findOldestAge(animalsObjArr));

// Return the animal Object
// function findOldestAnimal(animalArr){
//     let animal = animalArr[0];
//     for(let i=1;i<animalArr.length;i++){
//         let age = animalArr[i].age;
//         if(age > animal.age){
//             animal = animalArr[i];
//         }
//     }
//     return animal;
// }
// console.log(findOldestAnimal(animalsObjArr));

// Return the age
// function findYoungestAge(animalArr){
//     let youngestAge = animalArr[0].age;
//     for(let i=1;i<animalArr.length;i++){
//         let age = animalArr[i].age;
//         if(age < youngestAge){
//             youngestAge = age;
//         }
//     }
//     return youngestAge;
// }
// console.log(findYoungestAge(animalsObjArr));

// Return the animal
// function findYoungestAnimal(animalArr){
//     let youngestAnimal = animalArr[0];
//     for(let i=1;i<animalArr.length;i++){
//         let age = animalArr[i].age;
//         if(age < youngestAnimal.age){
//             youngestAnimal = animalArr[i];
//         }
//     }
//     return youngestAnimal;
// }
// console.log(findYoungestAnimal(animalsObjArr));

// const animalsObjArr = [
//     { name: "Wombat", age: 1, species: "Vombatus ursinus"},
//     { name: "Lion", age: 8, species: "Panthera leo"},
//     { name: "Jaguar", age: 6, species: "Panthera onca"},
//     { name: "Dragon", age: 100, species: "Hungarian horntail"},
//     { name: "Anteater", age: 2, species: "Tridactyla"},
//     { name: "Capybara", age: 3, species: "Hydrochoerinae"},
// ];

function findYoungestAnimal(animalArr){
    let youngestAnimal = animalArr[0];
    // for(let i=1;i<animalArr.length;i++){
    //     let age = animalArr[i].age;
    //     if(age < youngestAnimal.age){
    //         youngestAnimal = animalArr[i];
    //     }
    // }
    for(let animal of animalArr){
        let age = animal.age;
        if(age < youngestAnimal.age){
            youngestAnimal = animal;
        }
    }
    return youngestAnimal;
}
console.log(findYoungestAnimal(animalsObjArr));
