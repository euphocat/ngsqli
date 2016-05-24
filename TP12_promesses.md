# Formation AngularJS

## TP12 promesses

### Durée
~ 1h

### Objectif

Manipuler les promesses

### TODO
1. Déporter la logiques de récupération de tous les auteurs et toutes les catégories dans bookService
2. Utiliser then pour chainer les promesses.
3. A l'aide du service $timeout, ajouter un délais 3 secondes avant de renvoyer la liste des auteurs
3. A l'aide du service $timeout, ajouter un délais 2 secondes avant de renvoyer la liste des catégories
4. Bonus: Afficher un message de succès dans le dashboard après l'affichage de la liste des auteurs et des catégories

### Tips
Le partage d'états se fait par service.
Pour réaliser le bonus, utiliser le contrôleur du dashboard pour récupérer la liste des auteurs et des catégories (2 promesses).
Puis utiliser $q.all pour effectuer une action lorsque toutes les promesses ont été résolues.
