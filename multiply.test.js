const multiply=require('./multiply');

// test('multiplies 2*3 to be equal to 6',()=>{
//     expect(multiply(2,3)).toBe(6);
// });

// test('Multiplies 0*5 to be 0',()=>{
//     expect(multiply(0,5)).toBe(0);
// })

describe('Multiple function tests',()=>{
    test('Multiply 2*3',()=>{
        expect(multiply(2,4)).toBe(8);
    });
    test('Multiply -1*4',()=>{
        expect(multiply(-1,4)).toBe(-4);
    });
    test('Greater Than',()=>{
        expect(multiply(2,3)).toBeGreaterThan(5);
    });
    test('less Than',()=>{
        expect(multiply(2,3)).toBeLessThan(10);
    });
    test('Falsely',()=>{
        expect(multiply(2,0)).toBeFalsy();
    });
    test('Length',()=>{
        expect([2,3]).toHaveLength(2);
    });
    it('Contains',()=>{
        expect([2,3]).toContain(3);
    }) 
})