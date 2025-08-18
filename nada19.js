const numbers = [1, 2, 3, 4, 5];

function allNumPositive(nums){
    const result = nums.every(num => num > 0);
    if (result){
        console.log("Todos são positivos")
    } else {
        console.log("Nem todos são positivos")
    }
};

allNumPositive(numbers)