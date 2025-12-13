//Exercise on function and modules
function EmployeeInfo(name,Salary)
{
console.log("Wellcome " + name+ "Your monthly Salary is "+ Salary)
}
console.log ("This is the Employee Information System")
var EmpName="John "
var EmpSalary= 50000

// calling of the function EmployeeInfo
EmployeeInfo(EmpName,EmpSalary)
const EmpSkills= (skills)=> {
 console.log("Expert in "+ skills)
}
EmpSkills("java")
const student= require('./StudentInfo')
const person = require('./person')

// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)

// because DOB is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )

// creating new Person
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")

// Task 4: NodeJS Core Modules
const os = require("os");
const util = require("util");

console.log("=== System Information ===");
console.log("Temporary Directory: " + os.tmpdir());
console.log("Hostname: " + os.hostname());
console.log("Operating System: " + os.platform() + " | Release: " + os.release());
console.log("Uptime: " + (os.uptime() / 3600).toFixed(2) + " hours");
console.log("User Info: " + util.inspect(os.userInfo()));
console.log("Total Memory: " + (os.totalmem() / 1_000_000_000).toFixed(2) + " GB");
console.log("Free Memory: " + (os.freemem() / 1_000_000_000).toFixed(2) + " GB");
console.log("CPU Info: " + util.inspect(os.cpus()));
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));
console.log("=== Program Ended ===");
