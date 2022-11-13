class Customer <T> {
    // les propérités (attributs)
    private firstName: string ;
    private lastName: string ;
    private age = 20; // initialisation (par defaut)

    // contructeur (c'est une methode)
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // les autres methodes (fonctions)
    getFullName(): string{
        return this.fullName()
    }

    setAge(age: number): void{
        this.age = age;
    }

    private fullName(): string{
       return  `Your first name is: ${this.firstName}, and your last name is : ${this.lastName}`
    }
}

// creation des objets (instentiation)
const customer1 = new Customer('ahmed', 'ben saleh');


console.log(customer1.getFullName());

