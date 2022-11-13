var Customer = /** @class */ (function () {
    // contructeur (c'est une methode)
    function Customer(firstName, lastName) {
        this.age = 20; // initialisation (par defaut)
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // les autres methodes (fonctions)
    Customer.prototype.getFullName = function () {
        return this.fullName();
    };
    Customer.prototype.setAge = function (age) {
        this.age = age;
    };
    Customer.prototype.fullName = function () {
        return "Your first name is: ".concat(this.firstName, ", and your last name is : ").concat(this.lastName);
    };
    return Customer;
}());
// creation des objets (instentiation)
var customer1 = new Customer('ahmed', 'ben saleh');
console.log(customer1.getFullName());
