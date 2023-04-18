import { expect } from 'chai';
import { Calculator } from '../src/myApp'

describe('Calculator', () => {
    describe('#calculate()', () => {
        it('should return result of aplying the selected operation to the list of numbers', () => {
            expect(Calculator.calculate([-1,0],'sum')).to.equal(-1)
            expect(Calculator.calculate([0,0],'sum')).to.equal(0)
            expect(Calculator.calculate([2,3],'sum')).to.equal(5)
            expect(Calculator.calculate([1,2,3],'sum')).to.equal(6)
            expect(Calculator.calculate([0,2,3],'sum')).to.equal(5)
            expect(Calculator.calculate([-1,2,3],'sum')).to.equal(4)
            expect(Calculator.calculate([-1,1],'average')).to.equal(0)
            expect(Calculator.calculate([0,0],'average')).to.equal(0)
            expect(Calculator.calculate([2,3],'average')).to.equal(2.5)
            expect(Calculator.calculate([1,2,3],'average')).to.equal(2)
            expect(Calculator.calculate([0,2,4],'average')).to.equal(2)
            expect(Calculator.calculate([-1,2,2],'average')).to.equal(1)
        })
    })

    describe('#sum()', () => {
        it('should return the sum of an array of numbers', () => {
            expect(Calculator.sum([-1,0])).to.equal(-1)
            expect(Calculator.sum([0,0])).to.equal(0)
            expect(Calculator.sum([2,3])).to.equal(5)
            expect(Calculator.sum([1,2,3])).to.equal(6)
            expect(Calculator.sum([0,2,3])).to.equal(5)
            expect(Calculator.sum([-1,2,3])).to.equal(4)
        })
    })

    describe('#average', () => {
        it('should return the average of an array of numbers', () => {
            expect(Calculator.average([-1,0])).to.equal(-.5)
            expect(Calculator.average([0,0])).to.equal(0)
            expect(Calculator.average([2,3])).to.equal(2.5)
            expect(Calculator.average([1,2,3])).to.equal(2)
            expect(Calculator.average([0,2,4])).to.equal(2)
            expect(Calculator.average([-1,2,2])).to.equal(1)
        })
    })
})