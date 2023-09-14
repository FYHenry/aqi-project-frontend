# AQI Project Frontend

## Présentation

Ce projet est né de la collaboration entre FYHenry, HassAllali, NicolasSoulay et melinasim.

Il est initié par la [CLI d’Angular](https://github.com/angular/angular-cli), version 16.0.5.

Pour lancer cette application, la commande `ng serve` suffit après une installation locale via `npm install` depuis le répertoire racine du projet.

Le site sera accessible via l’URL `http://127.0.0.1:4200/`.

## Usage

À partir de la première page du site la carte est déjà disponible.
L’utilisateur peut pointer sur la carte pour consulter les données telles que la qualité de l’air.

En se connectant à un compte l’utilisateur disposera d’une liste de lieux favorits pour faciliter l’accès aux informations.

## Architecture

```
Ng Workspace (ES Module)
|
|_Ng App: AqiProject
  |
  |_Ng Module: App
  | |
  | |_Ng Component: App
  | | |
  | | |_Ng Component: Header
  | | |
  | | |_Ng Component: Map
  | | |
  | | |_Ng Component: User
  | | |
  | | |_Ng Component: Forum
  | | |
  | | |_Ng Component: Footer
  | |
  | |_Ng Models
  | |
  | |_Ng Services
  |
  |_Ng Module: App Routing
```
