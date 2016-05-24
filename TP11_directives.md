# Formation AngularJS

## TP11 directives

### Durée
~ 3h

### Objectif

Encapsuler toutes les parties logiques dans des directives.

### TODO
1. Créer une directive appMenu et l'utiliser
2. Dans la vue home créer une directive pour la recherche
3. Dans la vue home créer une directive de type attribut pour le tri par champ (essayer de factoriser le code)
4. Dans la vue home créer une directive pour l'affichage des livres'
5. Dans dashboard (enfin on l'utilise !), créer 1 route qui contiendra une 1 vue.
6. Dans cette vue, créer 2 directives:
    - une qui affichera l'ensemble des auteurs, sans doublons
    - une qui affichera l'ensemble des tags, sans doublons également!


### Tips
Le partage d'états se fait par service.
Pour extraire la liste des auteurs et des categories, placer toute la logique dans le controleur de
la directive. Ce n'est pas une bonne pratique, mais nous allons refactoriser tout ça dans le TP12.
Penser à utiliser les méthode ES6 ou lodash pour manipuler les tableaux (map, reduce, filter)
