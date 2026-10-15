# ViuExperiències

Aplicació web desenvolupada amb Vue 3 per descobrir activitats i experiències de lleure.

## Funcionalitats

- Navegació entre tres pàgines amb Vue Router.
- Catàleg d'activitats carregat des de Cloud Firestore.
- Components reutilitzables amb props.
- Estats de càrrega, error i llista buida.
- Disseny adaptable a dispositius mòbils.

## Tecnologies

- Vue 3
- Vite
- Vue Router
- Firebase
- Cloud Firestore

## Requisits

- Node.js i npm.
- Un projecte Firebase amb Cloud Firestore configurat.

## Instal·lació

Instal·la les dependències:

```bash
npm install
```

Inicia el servidor de desenvolupament:

```bash
npm run dev
```

## Compilar per a producció

```bash
npm run build
```

## Estructura principal

- `src/components/`: components reutilitzables.
- `src/views/`: pàgines de l'aplicació.
- `src/router/`: configuració de les rutes.
- `src/firebase.js`: connexió amb Firebase.
- `src/App.vue`: estructura general i navegació.

## Base de dades

L'aplicació llegeix les activitats de la col·lecció `activities` de Cloud Firestore. Les regles permeten la lectura pública del catàleg i bloquegen les escriptures des del client.

## Enllaç a la web publicada

Pendent de desplegament a Firebase Hosting.