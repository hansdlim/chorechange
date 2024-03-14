export class Reward {
    id:number = 0;
    name:string;
    description:string;
    price:number;

    constructor(name:string, description:string, price: number){
        this.name = name;
        this.description = description;
        this.price = price;
    }
}