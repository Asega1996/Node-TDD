
export class StringCalculator{

    public add (param : string): number {
        return (param == "")?  0 : this.checkValues(param); 
    }

    private checkValues(param : string) : number{
        let reg = /[\n,]/g
        let params = param.split(reg);

        return this.sumNumbers(params)
                                     
    }

    private stringToNumber(param : string) : number {
        return Number.parseInt(param);
    }

    private sumNumbers(params: string[]) : number{
        let result : number = 0;
        params.forEach(param => {
            result += this.stringToNumber(param);
        });
        return result;

    }


}