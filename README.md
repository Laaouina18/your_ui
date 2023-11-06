# Bienvenue dans your_ui

Bienvenue dans your_ui, une application permettant aux utilisateurs de découvrir et de participer à différentes sessions organisées dans différentes catégories. Explorez des sessions intéressantes, découvrez des orateurs inspirants et inscrivez-vous pour y assister !

## Contenu

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Composants](#composants)
- [Aperçu des Pages](#aperçu-des-pages)

## Installation

1. Clonez ce dépôt sur votre machine locale.
   git clone https://github.com/Laaouina18/your_ui.git
2. Installez les dépendances :
npm install
3. Lancez l'application :
npm start

## Utilisation

Une fois l'application lancée, vous pouvez accéder aux différentes fonctionnalités via l'interface utilisateur conviviale. Voici un aperçu des composants disponibles et de leur utilisation :

### Composants

#### Categories

Le composant Categories récupère la liste des catégories de sessions à partir d'une source externe (comme une API) en utilisant la fonction `getCategories`. Il affiche un conteneur avec le titre "Catégories de Sessions" et une liste des catégories disponibles.

#### Category

Le composant Category utilise le paramètre `catId` de l'URL pour récupérer des informations détaillées sur la catégorie à l'aide de la fonction `getCategory`. Il affiche le nom de la catégorie en tant que titre et génère une liste d'éléments de session associés à cette catégorie.

#### Session

Le composant Session affiche le nom et la description de la session, ainsi que le nom et le titre de l'orateur, ainsi que les informations 'org' et 'bio'.

#### Confirmation

Le composant Confirmation affiche les données fournies par l'utilisateur après l'inscription à une session.

#### Header

Le composant Header représente l'en-tête de l'application, offrant une navigation facile entre les différentes pages.

#### Home

Le composant Home représente la page d'accueil de l'application, affichant un aperçu des catégories et des sessions disponibles.

#### Session

Le composant Session affiche les détails d'une session spécifique, y compris le nom, la description, l'orateur et les informations supplémentaires.

#### Register

Le composant Register permet aux utilisateurs de s'inscrire à une session en soumettant leurs informations.

#### App

Le composant App agit comme le conteneur principal de l'application, gérant le routage entre les différentes pages.

#### About

Le composant About représente la page "À propos" de l'application, fournissant des informations sur l'application et ses créateurs.

#### Not Found

Le composant Not Found est utilisé pour gérer les routes non valides, redirigeant les utilisateurs vers une page d'erreur.

## Aperçu des Pages

- **Accueil (Home)**: Affiche un aperçu des catégories et des sessions disponibles.
- **À Propos (About)**: Fournit des informations sur l'application et ses créateurs.
- **Inscription (Register)**: Permet aux utilisateurs de s'inscrire à une session.
- **Confirmation (Confirmation)**: Affiche les données fournies par l'utilisateur après l'inscription.
- **Page de Catégorie (Category)**: Affiche les détails d'une catégorie spécifique et les sessions associées.
- **Page de Session (Session)**: Affiche les détails d'une session spécifique.
