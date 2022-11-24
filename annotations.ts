/* les annotations (appelé aussi les décorateurs) permettent par simple annotation 
/*  (i.e.:  @magic() prop: string;)  de modifier le comportement d'une classe, d'une propriété ou d'une fonction. 
*/

// const Track = () => {

//     return (target) => {

//         const Klass = function (...args) {
//             console.log(`new ${target.name}(${args})`);
//             target.constructor.apply(this, args);
//         };

//         Object.assign(Klass.prototype, target.prototype);

//         return Klass as any;

//     };

// };

// @Track()
// class Customer {

//     constructor(public firstName?: string) {
//     }
// }

// let customer = new Customer(); // new Customer()
// customer = new Customer('Foo'); // new Customer(Foo)