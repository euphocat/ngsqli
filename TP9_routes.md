# Formation AngularJS

## TP9 routes

### Durée
~ 45min

### Objectif

Pouvoir naviguer dans l'application via l'url

### TODO
1. Importer le module angular-route.js cf: https://docs.angularjs.org/api/ngRoute
2. L'ajouter à l'index.html et en tant que dépendance dans les modules l'utilisant
3. Le configurer pour naviguer entre les 3 pages
4. Modifier les liens dans Home pour naviguer entre les pages via l'url
5. Utiliser le service $location dans navigationService.js
6. Bonus: utiliser le mode html5 pour le routage

### Tips
Utiliser $routeParams pour récupérer un paramètre dans l'url.
Utiliser le service $location pour récupérer l'url courrante dans un autre service
La configuration de ngRoute se fait à travers un module('myModule').config() 
Placer chaque route dans le module qui va bien
live-server --entry-file=index.html pour pouvoir utiliser le mode html5
