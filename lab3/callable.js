//callable

const addNumber = (a,b,print)=>{
    print(a + b);
}

const printResult = (result)=>{
    console.log("Result: " + result);
}

addNumber(5, 8, printResult);

addNumber(10, 20, (result) => console.log("result : " + result));