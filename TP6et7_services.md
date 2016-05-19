# Formation AngularJS

## TP6. TP7. Services

### Durée
~ 1h30

### Objectif

Utiliser une factory pour gérer le CRUD de books

### About

Le support de cours manipule le service $resource dans le TP6, or je ne recommande
pas l'utilisation de celui-ci. En effet, il est rare que l'on manipule un backend
complètement RESTful dans une application réelle. Et quand bien même on en dispose
l'API du service $resource masque une partie de la logique HTTP. Or nous voulons que 
notre code soit efficace et lisible et $http répond mieux à ces exigeances.

### TODO
1. Créer un fichier app/services/backendConstant.js
2. Y placer un service de type constant pour référencer l'url du backend
3. Créer un service app/service/navigation.js pour gérer la navigation et l'identifiant du livre à éditer
    -> pour rappel: la navigation est gérée pour le moment par le controleur MainCtrl via une variable,
    nav. Or nous avons besoin de manipuler cette variable en dehors de ce contrôleur, la solution
    est donc de stocker cet état dans un service et de l'injecter dans les controleurs souhaitant
    manipuler la navigation.
4. Créer un fichier app/services/bookService.js
5. Y placer une factory gérant les opérations CRUD et GET de books
6. Utiliser ce service dans les divers contrôleurs et vues pour gérer les opérations CRUD et GET

### Tips
CRUD = CReate, Update, Delete
Ca va bien se passer :)