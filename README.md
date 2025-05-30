# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# `Correction` par Kamil

---

## Consignes

### Crée une branche correction dans le projet que vous recevez.

```
OKAYGE.
```

### Vous allez commenter chaque partie du code, en expliquant les points où il y a des failles.

### Si il y a des failles de design, de structure, de fonctionnalité, relevés-les et expliqué comment il serait possible de modifier ou optimiser.

#### META

- Le projet est sur Github est dispose de commit suffisant

```
A: OKAYGE. Projet sur GitHub.
B: NOPGE. 11/25 commits.
```

- Les commits sont cohérent avec le contenu ajouté a ce moment précis

```
NOPGE. Les noms des commits ne font référence à aucun ajout ou modification de fonctionnalité, et réfèrent seulement à l'achèvement d'une étape (eg. `OK`). Il manque des descriptions pertinentes et détaillées sur l'ajout / modification des fonctionnalités.
```

- La deadline de mise en ligne a été respecté ?

```
OKAYGE. Le projet a été envoyé sur le channel discord "portfolio" le 28/05. Deadline: 28/05.
```

- L'app est fonctionnelle sur git-page

```
OKAYGE. L'app est parfaitement fonctionnelle sur gh-pages.
```

#### HTML:

- Le Html est clairs, propre et commenté

```
NOPGE. Il n'y a aucun commentaire dans le code.
```

- La structure des Div est respecté: Header, Nav, Main, Section, Div ...
- La structure html respecte globalement les besoin du site (rien ne manque, rien n'est de trop)

```
OKAYGE. La structure est globalement bien respectée. Néanmoins, il y a une erreur dans le fichier `Commander, Euro, où l'ordre d'imbrication de balises est incorrect.
```

#### DESIGN:

- Le projet respect l'entièreté de la palette de couleurs.

```
OKAYGE.
```

- La police, les icones

```
NOPGE. La police n'est pas similaire à la template de base.
```

- Les images et assets sont bien les mêmes

```
OKAYGE.
```

- Les dépendances sont bien installées sur le projet

```
NOPGE. Bootstrap n'est pas installé via npm mais linké via liens CDN dans le Header de l'index.html.
```

- Les tailles, les bords, les centrages doivent être équivalent au design présenté

```
MIDGE. Globalement les tailles des containers est cohérente entre chaque page. Il y a des gros problèmes avec les font-size, font-weight, etc... ce qui rends le design différent de celui présenté dans la template. La navigation sur la page `Crew` est faite avec des lettres "O" ce qui a dû grandement limiter la capcité à reproduire le design de la navigation. (PS: sincèrement, j'ai trouvé les "O" très créatif comme solution, pour moi c'est un +1 :P)
```

- Les fichiers css ou Sass sont bien hiérarchisées, a leur place, commenté

```
OKAYGE. Les fichiers CSS sont bien placé, avec leurs fichier JSX correspondant. En revanche, il manque des commentaires de structure CSS, etc...
```

- Le projet est responsive aux quatre taille d'écran, mobile L, tablette, Laptop et grand ecran

```
MIDGE. Il y a des problèmes d'alignement et de size des éléments, text,... Le menu burgir est implémenté et fonctionnel.
```

- Le responsive respecte aux version demandée dans les assets Design

```
/
```

- Menu Burger Présent au responsive

```
OKAYGE. Présent!
```

- Comportement global attendus aux responsive présent

```
MIDGE.
```

- Positionnement global des éléments est respecté

```
MIDGE.
```

#### FONCTIONALITES:

- Le projet offre les fonctionnalités demandés, sans crash, sans erreur ni en render ni en console log

```
NOPGE. Il y a des erreurs dans le console.log. Voir point consignes ###HTML.
```

- Pour Spatial, les lien utilisent tous le système de sous-page comme demandé

```
OKAYGE!
```

- L'utilisation correcte de Outlet la ou c'est demandé.

```
OKAYGE!
```

- L'utilisation du correcte du react Router

```
OKAYGE!
```

- Vérifier que globalement toutes les contrainte et obligations on été respectés dans ce projet.

```
MIDGE.
```

- Soyez bienveillant, et généreux en bon conseils.
