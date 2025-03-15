# La Minute de code : Astro Starter Kit avec Sanity
#À lire avant de commencer !

![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Sanity](https://img.shields.io/badge/sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white)
![Tailwind Css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Project Structure

Dans votre projet Astro, vous verrez les dossiers et fichiers suivants:

```text
/
├── public/
│   │── favicon.svg
│   │── logo.webp
├── src/
│   ├─assets
│   │   └── background.svg
│   │   └── logo.webp
│   ├─components
│   │   └── Articles.jsx
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   │   └── robots.txt.ts
│   ├── styles/
│   │   └── global.css
│   └── config.ts
│   └── constants.ts
├── Studio
├── .env.example
├── astro.config.mjd
├── config.js
├── env.d.ts
├── package.json
├── tsconfig.json
```

## 🌟 Commencer

Dans votre terminal, vous pouvez copier-coller cette commande.

```bash
git clone https://github.com/laminutedecode/astro-starter-kit
```
Une fois le repository cloné, vous devez exécuter quelques commandes à la racine du projet.
```bash
cd astro-starter-kit
```

### Vous devez installer les dépendances nécessaires.

```bash
npm install
```

### Ensuite, vous devez configurer le projet avec Sanity.
```bash
npm run config
```

## Le fichier config.ts

##### Vous pouvez modifier le fichier ```config.ts``` pour y ajouter vos informations, par exemple :

 - website: "https://VOTRE_URL/",
 - author: "Votre nom",
 - desc: "Description de votre site",
 - title: "La Minute de Code",
 - ogImage: "votrelogo-og.jpg",

# Intégration de Sanity avec Astro

Ce projet utilise Astro comme framework front-end et Sanity comme CMS headless pour gérer le contenu. Sanity offre une interface flexible pour la gestion de contenu, tandis qu'Astro permet de générer des sites rapides et performants. Grâce à cette combinaison, tu peux facilement gérer du contenu dynamique tout en bénéficiant des avantages d'un site statique.

### Fonctionnalités :
 - Gestion de contenu avec Sanity
 - Intégration fluide avec Astro
 - Personnalisation des schémas de contenu
 - API flexible pour récupérer les données sur le front-end

## 🧞 Commands

Toutes les commandes sont exécutées depuis la racine du projet, à partir d'un terminal :


| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run install`         | Installe les dépendances                         |
| `npm run dev`             | Démarre le serveur de développement local        |
| `npm run config`          | Permet de configurer Sanity.                     |
| `npm run build`           | Génère votre site de production dans `./dist/`   |
| `npm run preview`         | Prévisualise votre build localement,             |
| `npm run astro ...`       | Exécute des commandes CLI                        |
| `npm run astro -- --help` | Obtenez de l'aide pour utiliser le CLI d'Astro   |

## 👀 Vous voulez en savoir plus ?

N'hésitez pas à consulter  [la documentation](https://docs.astro.build) ou à rejoindre notre [Discord](https://discord.gg/vR5PGsMF3q).
