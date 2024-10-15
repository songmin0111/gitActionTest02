// TDD(Test Driven Development) 방식으로 테스트 코드 작성하기
const factorial = require('../src/index');

// 테스트 그룹 만들기
describe('factorial function', () => { // 람다 함수
    // 테스트 케이스
    it('correctly computes factorial of a positive integer number', () => {
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
    });

    // 테스트 케이스
    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1);
        }).toThrow('n must be a positive integer');
    });
});