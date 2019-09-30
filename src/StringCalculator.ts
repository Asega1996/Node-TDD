
const StringEmpty = '';

export class StringCalculator{

    private numberAddsCalled;

    constructor() {
        this.numberAddsCalled = 0;
        
    }

    public add (param : string): number {
        this.incrementAdds();
        return (param == "")?  0 : this.checkValues(param); 
    }

    private checkValues(param : string) : number{
        let reg = /[\[\];//\n]/g
        var matches = param.match(/\[(.*?)\]/g);
        if(matches){
            matches.forEach(del => {
                let regEx = new RegExp(del,"g")
                param = param.replace(regEx,',')
            })
        }
        param = param.replace(reg ,',')
        param = param.replace(/,,,/g,',')
        let params = param.split(',');
        return this.sumNumbers(params)
                                     
    }

    private stringToNumber(param : string) : number {
        return Number.parseInt(param);
    }

    private sumNumbers(params: string[]) : number{
        let result : number = 0;
        let negatives : number[] = [];
        params.forEach(param => {
            if(!this.isDelimiter(param)){
                let num = this.stringToNumber(param);
                (num < 0)? negatives.push(num) : result += (num > 1000)? 0 : num
            }
        });
        if(negatives.length > 0) this.getExceptionMsg(negatives)
        return result;

    }

    private getExceptionMsg(negatives: number[]) {
        let str : string = 'negatives not allowed:';
        negatives.forEach(negative =>{
            str = str + " " + negative;
        })
        throw str;
    }

    private isDelimiter(param: string) {
        return (param == StringEmpty )? true : false;
    }


    public getCalledCount(): number{
        return this.numberAddsCalled;
    }

    private incrementAdds() {
        this.numberAddsCalled +=1;
    }

}