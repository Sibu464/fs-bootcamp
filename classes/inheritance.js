function person(fname, lname) {
    let firstName=fname;
    let lastName=lname;
     let getDetails_oAccess=function(){
        return(`First namr is ${firstName} and last name is ${lastName}`); 


     }
    this.getDetails_Access=function(){
        return(`First name is ${firstName} and last name is ${lastName}`);
    }
}