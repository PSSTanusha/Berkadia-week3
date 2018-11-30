function branch(bname,hodname,strength)
{
    this.bname=bname;
    this.hodname=hodname;
    this.strength=strength;

};

function section(bname,hodname,strength,sname)
{
    branch.call(this,bname,hodname,strength);
    this.sname=sname;
};

//section.prototype=new branch();
let person=new section('CSE','RAM',45,'b5');
let newarr=new Array(1,2,3,4);
Object.getPrototypeOf(newarr);
console.log(person);
console.log(person.hodname);