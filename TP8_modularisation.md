# Formation AngularJS

## TP8 modularisation

### Durée
~ 45min

### Objectif

Découper l'application en module indépendants


### TODO
1. Créer un module common dans app/common et y placer dedans navigationService.js et backendConstant.js
2. Créer un service bookbackend et y placer bookService.js
3. Créer un module home dans app/home pour y regrouper la vue et le controleur associé
4. Répéter l'opération pour dashboard et edition
5. Déplacer MainCtl dans le répertoire app

### Tips
Attention à l'injection de dépendance et aux références des fichiers dans index.html.
Attention également au dépendances entres modules !
Attention à placer les appels aux modules avant de les utiliser pour créer des services ou autres controleurs !
Utiliser la fonctionnalité de refactorisation de Webstorm si possible.