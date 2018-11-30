var students = {
    student1: {
        firstname: "Jack",
        lastname: "Davis",
        age: 25,
        id: 1
    },
    student2: {
        firstname: "Mary",
        lastname: "Taylor",
        age: 37,
        id: 2
    },
    student3: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 3
    },
    student4: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 4
    }
}

exports.create = function(req, res) {
var newStudent = req.body;
students["student" + newStudent.id] = newStudent;
console.log("--->After Post, students:\n" + JSON.stringify(students, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newStudent, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(students, null, 4));
res.end("All students: \n" + JSON.stringify(students, null, 4));  
};

exports.findOne = function(req, res) {
var student = students["student" + req.params.id];
console.log("--->Find studentr: \n" + JSON.stringify(student, null, 4));
res.end( "Find a studentr:\n" + JSON.stringify(student, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedstudent = req.body; 
if(students["student" + id] != null){
// update data
students["student" + id] = updatedstudent;

console.log("--->Update Successfully, student: \n" + JSON.stringifystudents, null, 4);

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedstudent, null, 4));
}else{
res.end("Don't Exist student:\n:" + JSON.stringify(updatedstudent, null, 4));
}
};

exports.delete = function(req, res) {
var deletestudent = students["student" + req.params.id];
delete students["student" + req.params.id];
console.log("--->After deletion, student list:\n" + JSON.stringify(students, null, 4) );
res.end( "Deleted student: \n" + JSON.stringify(deletestudent, null, 4));
};
