var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *  L'héritage est un mécanisme qui facilite la réutilisation du code et la gestion de son évolution. Elle définit une relation entre deux classes :
        - une classe mère ou super-classe
        - une classe fille ou sous-classe qui hérite de sa classe mère
    ROLES dans la POO: Grâce à l'héritage, les objets d'une classe fille ont accès aux données et aux méthodes de la classe parente et peuvent les étendre. Les sous-classes peuvent redéfinir les variables et les méthodes héritées.
 */
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    User.prototype.login = function (email, password) {
        return email === this.email && password === this.password;
    };
    return User;
}());
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin(email, password) {
        return _super.call(this, email, password) || this;
    }
    SuperAdmin.prototype.getEmail = function () {
        return this.email;
    };
    return SuperAdmin;
}(User));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(email, password) {
        return _super.call(this, email, password) || this;
    }
    Admin.prototype.getEmail = function () {
        return this.email;
    };
    return Admin;
}(User));
var GuestMember = /** @class */ (function (_super) {
    __extends(GuestMember, _super);
    function GuestMember(email, password) {
        return _super.call(this, email, password) || this;
    }
    GuestMember.prototype.getEmail = function () {
        return this.email;
    };
    return GuestMember;
}(User));
// instanciation
var admin = new Admin('hatem@gmail.com', '123456789');
// appel d'une méthode de la classe fille
console.log(admin.getEmail());
// appel d'une méthode de la classe mère
console.log(admin.login('hatem@gmail.com', '123456789'));
