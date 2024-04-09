class person{
    constructor(name,id){
        this.name=name;
        this.id=id;

    }
    addAddres(address){
        this.address=address;
    }

    getDetails(){
        console.log(`The name of this person is ${this.name} residing at ${this.address}`);
    }

    
}
let person1=new person('John',9843);
person1.addAddres("256/B","New York");
person1.getDetails();
