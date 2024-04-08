const Person={
    firstname: 'Alice' ,//key value pair
    get getName(){
        return this.firstname;
    },
    set changeName(Person){
        this.firstname=Person
    }

}
console.log(Person);
console.log(Person.changeName="Sbu")
console.log(Person.getName)