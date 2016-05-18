# Formation AngularJS

## TP4. Validation de formulaires

### Durée
~ 1h

### Objectif

Obtenir un formulaire avec un ensemble de champs validés

### TODO

1. Télécharger la librairie angular-messages.js dans ```/app/vendors/angularjs``` (http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.js)
2. Ajouter la référence à cette librairie dans le fichier ```index.html```
3. Ajouter la dépendance au module ngMessages dans ```app.js```
4. Dans la vue ```app/views/add.html``` créer un formulaire avec les champs et validations suivantes :

    Titre : requis, > 3 caractères
    ISBN : requis, 13 chiffres
    Catégorie : requis
    Auteur – Prénom : requis
    Auteur – Nom : requis
    Editeur – Nom : requis, > 3 caractères
    Image (url) : requis
    Résumé : requis
 
5. Ajouter une directive ```ng-submit``` au formulaire et une fonction ```submitBook()``` dans le contrôleur associé

### Tip:

``` 
<div class="form-group" ng-class="?????????">
    <label for="category" class="col-sm-2 control-label">Category</label>
    <div class="col-sm-10">
      <input ????????? required>
      <span ng-show="?????????" ng-messages="??????????">
        <span class="help-block" ng-message="????????">
            Ce champ est obligatoire
        </span>
      </span>
    </div>
</div>
```