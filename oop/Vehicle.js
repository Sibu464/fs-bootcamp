class Vehicle{

    constructor(name,maker,engine){
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }
    getDetails(){
        return(`The name of the vehicle is: ${this.name}\n The maker of the vehicle is ${this.maker}\n The engine is: ${this.engine}`);
    }

}
let sedan =new Vehicle('Etios','Toyota',1);
console.log(sedan.getDetails());