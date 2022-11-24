/**
 *  L'héritage est un mécanisme qui facilite la réutilisation du code et la gestion de son évolution. Elle définit une relation entre deux classes :
        - une classe mère ou super-classe
        - une classe fille ou sous-classe qui hérite de sa classe mère
    ROLES dans la POO: Grâce à l'héritage, les objets d'une classe fille ont accès aux données et aux méthodes de la classe parente et peuvent les étendre. Les sous-classes peuvent redéfinir les variables et les méthodes héritées.
 */
class User {
    protected email: string;
    protected password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    public login(email: string, password: string): boolean {
        return email === this.email && password === this.password;
    }
}

class SuperAdmin extends User {

    constructor(email: string, password: string) {
        super(email, password);
    }

    public getEmail(){
        return this.email;
    }
}

class Admin extends User {
    constructor(email: string, password: string) {
        super(email, password);
    }

    public getEmail(){
        return this.email;
    }
}

class GuestMember extends User {
    constructor(email: string, password: string) {
        super(email, password);
    }

    public getEmail(){
        return this.email;
    }
}

// instanciation
const admin = new Admin('hatem@gmail.com', '123456789');

// appel d'une méthode de la classe fille
console.log(admin.getEmail())

// appel d'une méthode de la classe mère
console.log(admin.login('hatem@gmail.com','123456789'))
