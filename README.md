# Vio-lettres

Site vitrine statique généré avec Eleventy + Tailwind CSS (Astro n'est finalement pas utilisé pour la génération actuelle).

## Structure

- `src/` : sources Nunjucks/Eleventy
- `_site/` : sortie de build générée par Eleventy (`npm run build`)
- `src/styles/tailwind.css` → compilé en `_site/css/styles.css`

## Développement

```bash
npm install
npm start   # lance eleventy + watch tailwind
```

## Build

```bash
npm run build
```

## Déploiement GitHub Pages

Un workflow GitHub Actions (`.github/workflows/deploy.yml`) build automatiquement et publie le dossier `_site`.

Déclencheurs:

- Push sur `main`
- Lancement manuel (workflow_dispatch)

### Activer Pages (si pas déjà fait)

1. Aller dans Settings > Pages
2. Source: "GitHub Actions" (automatique après premier run réussi)

### Domaine personnalisé (optionnel)

Créer un fichier `CNAME` dans `public/` ou à la racine avant build contenant votre domaine (ex: `violette.pogodev.com`). Ajouter aussi ce domaine dans Settings > Pages > Custom domain.

## Scripts npm

| Script  | Action                                                   |
| ------- | -------------------------------------------------------- |
| `start` | lance `eleventy --serve` + compilation tailwind en watch |
| `build` | génère le site statique + CSS                            |

## Contenu

Les sections (Qui suis-je, Services, Tarifs, etc.) sont gérées dans les templates Nunjucks sous `src/`.

---

Ancienne documentation Astro conservée ci-dessous si besoin.

<!-- ...existing code... -->
