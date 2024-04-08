let School={
    name: "Secunda Secondary",
    Province: "Mpumalanga",
    Established: "1996",
    Learners: 100,


    display: function(){
        console.log(`The name of the school is ${this.name}\n located at ${this.Province} \n established in ${this.Established}\n` );
    }
}
School.display();