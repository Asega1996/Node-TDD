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







})