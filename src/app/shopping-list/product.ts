export class Product {

    id: number;
    name: string;
    quantity: number;

    constructor(_id: number, _name: string, _quantity: number) {
        this.id = _id;
        this.name = _name;
        this.quantity = _quantity;
    }
}