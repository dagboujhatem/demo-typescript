/**  Définition des interfaces: Une interface est un ensemble de constantes et de déclarations 
 *   de méthodes (sans l'implémenter) => C'est une sorte de standard auquel une classe peut répondre.
 * 
 *   NOTES: 
 *     1. Tous les objets qui se conforment à cette interface (qui implémentent cette interface)
 *           possèdent les méthodes et les constantes déclarées dans celle-ci.
 *     2. Plusieurs interfaces peuvent être implémentées dans une même classe.
 *     3. Chaque classe implemente une interface doit contenir une implementation de toutes 
 *          les méthodes dans cette classes. Sinon ça sera abstraite
 */

interface AfficheType {
    afficherType(): void;
}

class Personne implements AfficheType {
    public afficherType(): void{
        console.log(" Je suis une personne ");
    }
}

class Voiture implements AfficheType {
    public afficherType() : void{
        console.log(" Je suis une voiture ");
    }
}

// abstract class Maison implements AfficheType {
//     // afficherType() {
//     //     console.log(" Je suis une maison ");
//     // };
// }

const personne1 =  new Personne();
personne1.afficherType();
const voiture1 =  new Voiture();
voiture1.afficherType();

// const maison1 =  new Maison(); // ERROR: on ne peut pas l'instancier cette classe (is ABSTRACT) 