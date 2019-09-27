import { StringCalculator } from '../StringCalculator'
import { assert } from 'chai';


describe('StringCalculator',() => {

    let sc : StringCalculator;

    beforeEach(()=>{
        sc = new StringCalculator();

    })

    it('checks add',() => {
        let result;
        result = sc.add("");
        assert(result == 0, 'add fails with empty string');
        result = sc.add("9");
        assert(result == 9, 'add fails with a single number');
        result = sc.add("9,1");
        assert(result == 10, 'add fails with two numbers');

    })



})