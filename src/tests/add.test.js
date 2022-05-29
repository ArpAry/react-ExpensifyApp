const add =(a,b)=>a+b;
const generateGreeting=(name)=>(`hello my name is ${name}`);

test('should add two numbers ',()=>{
    const result=add(3,4);
    if(result!==7)
    throw new Error(`you added 4 and 3 . the result should be 7 while it gives ${result}`)
})

test('Should generate Greeting ',()=>{
    const greet=generateGreeting("Andrew");
    expect(greet).toBe("hello my name is Andrew");
})
