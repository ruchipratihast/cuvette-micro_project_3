var foodData = require('./food.json');

//console.log(foodData);

// 1. list all the food items
const allFoodItem = foodData.map((element) => element.foodname)
console.log(allFoodItem);


// ** list all the food items's name with category vegetables
const vegetableFood1 = foodData.filter((element)=>{
    if(element.category == 'Vegetable')
     return element; // return all data of vegetable category
}).map((element)=> element.foodname); // return only food name of vegetable category
console.log(vegetableFood1);


// 2. list all the food items with category vegetables
const vegetableFood = foodData.filter((element)=>{
    if(element.category == 'Vegetable')
     return element; // return all data of vegetable category
})
console.log(vegetableFood);



// 3. list all the food items with category fruit
const fruitFoodName = foodData.filter((element)=>{
    if(element.category == 'Fruit')
     return element;
})
console.log(fruitFoodName); 


// 4. list all the food items with category protien
const protienFoodName = foodData.filter((element)=>{
    if(element.category == 'Protein')
     return element;
})
console.log(protienFoodName);


// 5. list all the food items with category nuts
const butsFoodName = foodData.filter((element)=>{
    if(element.category == 'Nuts')
     return element;
})
console.log(butsFoodName);


// 6. list all the food items with category grains
const grainsFoodName = foodData.filter((element)=>{
    if(element.category == 'Grain')
     return element;
})
console.log(grainsFoodName);


// 7. list all the food items with category dairy
const dairyFoodName = foodData.filter((element)=>{
    if(element.category == 'Dairy')
     return element;
})
console.log(dairyFoodName);


// 8. list all the food items with calorie above 100
const calorieAboveFood = foodData.filter((element)=>{
    if(element.calorie > 100)
     return element;
})
console.log(calorieAboveFood);


// 9. list all the food items with calorie below 100
const caloriebelowFood = foodData.filter((element)=>{
    if(element.calorie < 100)
     return element;
})
console.log(caloriebelowFood);


// 10. list all the food items with highest protien content to lowest
const highToLowProtien = foodData.filter((element)=>element).sort((p1,p2)=>p1.protiens < p2.protiens ? 1 : -1)
console.log(highToLowProtien); //return sorted array
console.log(foodData);  // return original array without sort

//10. Ans-2
// const highToLowProtien = foodData.sort((a, b) => b.protiens - a.protiens); 
// console.log(highToLowProtien); 
// console.log(foodData);  // original array - sorting will work in original array also


// 11. list all the food items with lowest cab content to highest
const lowToHowCab = foodData.filter((element)=>element).sort((p1,p2)=>p1.cab < p2.cab ? -1 : 1)
console.log(lowToHowCab);