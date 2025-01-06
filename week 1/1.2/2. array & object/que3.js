// array of objects
const allUsers = [{
    firstName: "abc",
    gender: "male"
}, {
    firstName: "def",
    gender: "male"
}, {
    firstName: "pyq",
    gender: "female"
}]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender == "male") {
        console.log(allUsers[i].firstName);
    }    
}