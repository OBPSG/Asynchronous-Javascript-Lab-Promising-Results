let initialValues = [6, 2];

function promiseChain(input1, input2) {
    slowMath
        .add(input1, input2)
        .then((result1) => {
            console.log(result1);
            return slowMath.multiply(result1, 2);
        })
        .then((result2) => {
            console.log(result2);
            return slowMath.divide(result2, 4);
        })
        .then((result3) => {
            console.log(result3);
            return slowMath.subtract(result3, 3);
        })
        .then((result4) => {
            console.log(result4);
            return slowMath.add(result4, 98);
        })
        .then((result5) => {
            console.log(result5);
            return slowMath.remainder(result5, 2);
        })
        .then((result6) => {
            console.log(result6);
            return slowMath.multiply(result6, 50);
        })
        .then((result7) => {
            console.log(result7);
            return slowMath.remainder(result7, 40);
        })
        .then((result8) => {
            console.log(result8);
            return slowMath.add(result8, 32);
        })
        .then((finalResult) => {
            console.log(`The final result is ${finalResult}`);
        })
        .catch((error) => {
            console.log(error);
        });
}

//promiseChain(...initialValues); //Should print a final result of 42 (Haha)

//initialValues = [1, 1];

//These new input values should make the promise chain reject on step 5, because the result of the previous step is -2
//promiseChain(...initialValues);

async function doMath(input1, input2) {
    try {
        let result1 = await slowMath.add(input1, input2);
        console.log(result1);
        let result2 = await slowMath.multiply(result1, 2);
        console.log(result2);
        let result3 = await slowMath.divide(result2, 4);
        console.log(result3);
        let result4 = await slowMath.subtract(result3, 3);
        console.log(result4);
        let result5 = await slowMath.add(result4, 98);
        console.log(result5);
        let result6 = await slowMath.remainder(result5, 2);
        console.log(result6);
        let result7 = await slowMath.multiply(result6, 50);
        console.log(result7);
        let result8 = await slowMath.remainder(result7, 40);
        console.log(result8);
        let finalResult = await slowMath.add(result8, 32);
        console.log(`The final result is ${finalResult}`);
    } catch (error) {
        console.log(error);
    }
}

doMath(...initialValues);


