const calculator=require('./calculator');
const {isCloseTo}=require('./utils');

describe('Calculator Operations',()=>{
    test('Addition Should Return Correct Sum',()=>{
        expect(calculator.add(2,2)).toBe(4);
    });
    
    test('Subtraction should return correct Difference',()=>{
        expect(calculator.subtract(10,5)).toBe(5);
    });

    test('Multiplication should return correct product',()=>{
        expect(calculator.multiply(3,5)).toBe(15);
    });

    test('Division should return correct quotient',()=>{
        expect(calculator.divide(20,4)).toBe(5);
    });

    test('divide by zero should throw an error',()=>{
        expect(()=>calculator.divide(5,0)).toThrow('Cannot Divide by Zero');
    });

    test('Floating point addition should be precise',()=>{
        expect(isCloseTo(0.1+0.2,0.3)).toBe(true);
    });

    test('String should match a regex',()=>{
        expect('Jest is cool').toMatch(/cool/);
    });

    test('Array should contain item',()=>{
        const shoppingList=['apple','banana','grapes'];
        expect(shoppingList).toContain('banana');
    });

    test('Object equality should match',()=>{
        const data={name:'John',age:25};
        expect(data).toEqual({name:'John',age:25});
    });

    test('null value should match',()=>{
        const value=null;
        expect(value).toBeNull();
        expect(value).not.toBeTruthy();
    });
});