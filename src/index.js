function stringArraytoUpperCase(array) {
    return array.map(function (e) { return e.toUpperCase(); });
}
var TestArr = ["java", "javascript", "typescript"];
var result = stringArraytoUpperCase(TestArr);
var filtred = filterStrings(TestArr);
function filterStrings(array) {
    return array.filter(function (e) { return e.length > 5; });
}
var products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 300, inStock: true },
    { name: "Monitor", price: 200, inStock: true },
];
function filterProducts(productList) {
    return productList.filter(function (p) { return p.inStock && p.price < 500; });
}
var filtredProducts = filterProducts(products);
console.log(result, filtred, filtredProducts);
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// [6,15,24]
var reducedArr = arr.map(function (a) {
    return a.reduce(function (s, i) { return (s += i); }, 0);
});
console.log(reducedArr);
;
var users = [
    {
        type: "user",
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        type: "admin",
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        type: "user",
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        type: "admin",
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function isAdmin(user) {
    return user.type === "admin" && "role" in user;
}
function isUser(user) {
    return user.type === "user" && "occupation" in user;
}
function logPerson(person) {
    var additionalInformation = "";
    if (isUser(person)) {
        var user = person;
        additionalInformation = user.occupation;
    }
    if (isAdmin(person)) {
        var admin = person;
        additionalInformation = admin.role;
    }
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(additionalInformation));
}
console.log("\n -- Users : ");
users.filter(isUser).forEach(logPerson);
console.log("\n -- Admins  : ");
users.filter(isAdmin).forEach(logPerson);
