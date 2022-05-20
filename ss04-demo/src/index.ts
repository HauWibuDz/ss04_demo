class hinhtron{
    //Thuộc tính
    bankinh:number;
    chuvi:number;
    dientich:number;

    constructor(bankinh:number){
        this.bankinh = bankinh;
    }

    tinhchuvi():number{
        return (this.bankinh*2)*3.14;
    }
    tinhdientich(){
        return this.bankinh * this.bankinh * 3.14;
    }
}

class hinhtru extends hinhtron{
    chieucao:number;
    thetich:number;

    constructor(bankinh:number,chieucao:number){
        super(bankinh);
        this.chieucao = chieucao;
    }

    tinhthetich(){
        return this.chieucao * this.tinhdientich();
    }
}

var tron1=new hinhtron(4);
console.log(tron1.bankinh);
console.log(tron1.tinhchuvi());
console.log(tron1.tinhdientich());

var tru1 = new hinhtru(4,8);
console.log(tru1.tinhthetich())