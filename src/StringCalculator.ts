
export class StringCalculator{

    public add (param : string): number {
        return (param == "")?  0 : this.checkValues(param); 
    }

    private checkValues(param : string) : number{
        let params = param.split(',');

        return (params.length == 1)? this.stringToNumber(params[0]) :
                                     this.stringToNumber(params[0]) + this.stringToNumber(params[1])
    }

    private stringToNumber(param : string) : number {
        return Number.parseInt(param);
    }

}