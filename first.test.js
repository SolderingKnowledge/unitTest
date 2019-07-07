const obj = require('./first');
test('description', ()=>{
    expect(obj.first(4,4)).toBe(8);//expects first function to reuturn :8,
});

test('description', () => expect(obj.first(2,2)).not.toBe(8));//expect first function to return not: 8;