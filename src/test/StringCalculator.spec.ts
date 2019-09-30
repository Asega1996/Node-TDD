import { StringCalculator } from '../StringCalculator'
import { assert } from 'chai';


describe('StringCalculator',() => {

    let sc : StringCalculator;

    beforeEach(()=>{
        sc = new StringCalculator();

    })

    it('checks step 1',() => {
        let result;
        result = sc.add("");
        assert(result == 0, 'add fails with empty string');
        result = sc.add("9");
        assert(result == 9, 'add fails with a single number');
        result = sc.add("9,1");
        assert(result == 10, 'add fails with two numbers');

    })

    it('checks step 2',() => {
        let result;
        result = sc.add("9,1");
        assert(result == 10, 'add fails with two numbers');
        result = sc.add("1,1,1,1,1,1,1,1,1,1");
        assert(result == 10, 'add fails with undefined numbers');

    })

    it('checks step 3',() => {
        let result;
        result = sc.add("1\n2,3");
        assert(result == 6, 'add fails with new lines');
    })

    it('checks step 4',() => {
        let result;
        result = sc.add("//;\n1;2" );
        assert(result == 3, 'add fails with new delimiters');
    })

    it('checks step 5',() => {
        let result;
        let ex;
        try{
            result = sc.add("//;\n-1;2" );
        }catch(err){
            ex = err
        }   
        assert(ex == 'negatives not allowed: -1', 'add fails with negative numbers');
    })

    it('checks step 6',() => {
        let result;
        let ex;
        try{
            result = sc.add("-9,-1,6,-4");
        }catch(err){
            ex = err
        }   
        assert(ex == 'negatives not allowed: -9 -1 -4', 'add fails with negative numbers');

    })

    it('checks step 7',() => {
        assert(sc.getCalledCount() == 0, 'number of adds is incorrect when StringCalculator is created')
        sc.add("9");
        sc.add("9,1");
        assert(sc.getCalledCount() == 2, 'number of adds is incorrect while doing operations')
    })

    it('checks step 8',() => {
        let result;
        result = sc.add("1\n2000,3");
        assert(result == 4, 'add is accepting numbers > 1000');
    })

    it('checks step 9',() => {
        let result;
        result = sc.add("//[---]\n1---2---3");
        assert(result == 6, 'add fail with custom delimiters');
    })

    it('checks step 10',() => {
        let result;
        result = sc.add("//[-][%]\n1-2%3");
        assert(result == 6, 'add fail with multiple + custom + large delimiters');
    })

    it('checks step 11',() => {
        let result;
        result = sc.add("//[--][%%]\n1--2%%3");
        assert(result == 6, 'add fail with multiple + custom + large delimiters');
    })

})