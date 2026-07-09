# PROJET 4.2: Galerie 3 colonnes avec Grid INTERMÉDIAIRE

Galerie de photos responsive en CSS Grid avec image mise en avant (2x2), overlay smooth, lightbox, filtres et pagination.

## Fonctionnalités

- **Grid 3 colonnes** `grid-template-columns: repeat(3, 1fr)` avec `gap: 20px`
- **Image mise en avant** `grid-column: span 2; grid-row: span 2` (première image plus grande)
- **Overlay smooth au hover** titre + description avec animation fluide
- **Lightbox au click** image agrandie avec fond sombre, fermeture clic/Escape
- **Filtres par catégorie** Tous / Événements / Paysages / Portraits (compatibles pagination)
- **Pagination** 5 images par page, synchronisée avec les filtres
- **Responsive 3 breakpoints** desktop 3 colonnes, tablette 2 colonnes, mobile 1 colonne
- **Images optimisées** `loading="lazy"`, `aspect-ratio`, `object-fit: cover`

## Structure

```
index.html
galerie.css
galerie.js
images/
README.md
```

## Captures

| Desktop | Tablette | Mobile |
|---------|----------|--------|
| Grille 3 colonnes image vedette 2x2 | Grille 2 colonnes | Grille 1 colonne fluide |