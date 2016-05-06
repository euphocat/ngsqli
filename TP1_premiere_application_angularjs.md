# Formation AngularJS

## TP1. Première application AngularJS

### Durée
~ 20min

### Prérequis

* Git installé => https://git-scm.com/
* Node >= 4.x => https://nodejs.org/
* live-server => https://www.npmjs.com/package/live-server ```npm install live-server -g```

### Objectif

Page vierge avec AngularJS initialisé et aucune erreur dans la console.

### TODO:

1. Créer un répertoire pour votre application : ```mkdir ~/tp_angularjs```
2. Se placer dans le répertoire : ```cd ~/tp_angularjs```
3. Initialiser un répo git: ```git init -q```
4. Créer un fichier ```index.html``` avec la structure qui va bien
4. Place la directive ng-app au bon endroit
5. Créer un répertoire pour votre application : ```mkdir app```
6. Télécharger en local AngularJS dans un autre répertoire appelé ```~/tp_angularjs/vendors/angularjs```
7. Créer un fichier de départ pour votre application nommé ```~/tp_angularjs/app/app.js```
8. Dans app.js mettre ```angular.module('bibliotheque‘,[]);``` => bonus mettre votre code dans une iife
8. Ajouter dans votre fichier ```index.html``` le lien vers AngularJS dans la partie ```<head>```
9. Ajouter juste avant ```</body>``` le lien vers ```app/app.js```
9. Lancer live-server dans votre répertoire racine ```cd ~/tp_angularjs/; live-server```

### Aide

* Est-ce que git est bien installé : ```git --version```
* Est-ce que node est bien installé : ```node -v```
* Est-ce que live-server est bien installé : ```live-server -v```
