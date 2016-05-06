# Formation AngularJS

## TP2. Vues et expressions

### Durée
~ 30min

### Objectif

Obtenir une application permettant de naviguer entre 3 vues

### TODO

1. Créer 3 fichiers html dans le répertoire ```app/views``` nommés:

  * home.html
  * add.html
  * dashboard.html

2. Dans chacunes de ces pages ajouter un titre de page dans une balise ```<h1>```
3. Dans le fichier index.html, utiliser des directive ng-include pour inclure ces pages
4. Au dessus des ng-include, créer une liste non ordonnée de liens permettant de valoriser une variable appelée ```nav```
5. Initialier ```nav``` avec la directive ```ng-init```
6. Conditionner l'affichage de chaque vue en fonction de la valeur de ```nav```
7. Faire que le lien actif du menu soit en gras
8. Bonus: utiliser bootstrap pour la mise en forme
