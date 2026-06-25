# Vibe Course

Plateforme d'apprentissage du vibecoding pour débutants complets.

## L'idée

Le vibecoding n'a pas tué le développement logiciel — il l'a **ouvert à tout le monde**. Aujourd'hui, n'importe qui peut s'asseoir et construire l'application qu'il veut, sans avoir jamais appris à coder.

**Vibe Course** enseigne exactement ça : pas à coder, mais à **builder**. Comprendre comment fonctionne une application, savoir communiquer avec une IA pour la construire, et déployer le résultat.

## Ce que la plateforme enseigne

### Théorie
- Ce qu'est le vibecoding et pourquoi ça change tout
- Comment penser une application avant de la construire
- Les notions clés (frontend, backend, base de données, API) — sans écrire une ligne de code
- Comment structurer un prompt efficace
- Comment itérer avec l'IA pour obtenir ce qu'on veut
- Comment déployer ce qu'on a construit

### Pratique
- Exercices concrets par niveau de difficulté
- Corrigés détaillés avec exemples de prompts qui fonctionnent
- L'apprenant utilise l'IA de son choix (Claude.ai, ChatGPT, Cursor...) en dehors de la plateforme

## Stack technique

| Couche | Choix |
|--------|-------|
| Framework | Next.js |
| Contenu | MDX (fichiers markdown pour les leçons) |
| Style | Tailwind CSS |
| Hébergement | Vercel (gratuit) |

Pas de base de données ni de clé API — la plateforme est entièrement statique en V1.

## Pourquoi pas d'IA intégrée ?

Cohérence avec le message : on apprend à utiliser les outils IA existants, pas à en dépendre de manière opaque. L'apprenant va sur Claude.ai ou ChatGPT, fait ses exercices, et revient voir le corrigé. C'est le vrai workflow d'un vibecodeur.

## Structure du projet

```
vibe-course/
├── content/
│   ├── modules/       # Leçons théoriques (MDX)
│   └── exercises/     # Exercices + corrigés (MDX)
├── src/
│   ├── app/           # Next.js App Router
│   └── components/    # Composants UI
├── claude.md          # Instructions pour Claude
└── README.md
```

## Epics & Issues

### EPIC-1 — Setup du projet
Mettre en place la base technique de la plateforme.

- [ ] **ISSUE-1.1** : Initialiser le projet Next.js avec App Router
- [ ] **ISSUE-1.2** : Configurer Tailwind CSS
- [ ] **ISSUE-1.3** : Intégrer MDX pour les leçons (next-mdx-remote ou @next/mdx)
- [ ] **ISSUE-1.4** : Déployer sur Vercel (pipeline CD automatique depuis main)
- [ ] **ISSUE-1.5** : Définir la structure des dossiers `content/` et `src/`

### EPIC-2 — Design & Navigation
Construire l'interface et l'expérience de navigation.

- [ ] **ISSUE-2.1** : Créer le layout global (header, nav, footer)
- [ ] **ISSUE-2.2** : Page d'accueil — pitch + CTA vers les modules
- [ ] **ISSUE-2.3** : Page listing des modules théoriques
- [ ] **ISSUE-2.4** : Page listing des exercices
- [ ] **ISSUE-2.5** : Page de lecture d'un module (rendu MDX)
- [ ] **ISSUE-2.6** : Page d'un exercice avec corrigé masqué/révélable
- [ ] **ISSUE-2.7** : Responsive mobile

### EPIC-3 — Contenu théorique
Rédiger les modules d'apprentissage.

- [ ] **ISSUE-3.1** : Module 1 — C'est quoi le vibecoding ?
- [ ] **ISSUE-3.2** : Module 2 — Penser une app avant de la builder
- [ ] **ISSUE-3.3** : Module 3 — Les notions clés sans coder (frontend, backend, BDD, API)
- [ ] **ISSUE-3.4** : Module 4 — Structurer un bon prompt
- [ ] **ISSUE-3.5** : Module 5 — Itérer avec l'IA : la méthode
- [ ] **ISSUE-3.6** : Module 6 — Déployer ce qu'on a construit
- [ ] **ISSUE-3.7** : Module 7 — Erreurs classiques et anti-patterns

### EPIC-4 — Exercices pratiques
Créer les exercices avec leurs corrigés.

- [ ] **ISSUE-4.1** : Exercice 1 — Écrire le premier prompt pour une app simple (débutant)
- [ ] **ISSUE-4.2** : Exercice 2 — Décrire une app en fonctionnalités avant de prompter (débutant)
- [ ] **ISSUE-4.3** : Exercice 3 — Corriger un prompt vague (débutant)
- [ ] **ISSUE-4.4** : Exercice 4 — Builder une landing page de A à Z (intermédiaire)
- [ ] **ISSUE-4.5** : Exercice 5 — Itérer sur un résultat insatisfaisant (intermédiaire)
- [ ] **ISSUE-4.6** : Exercice 6 — Gérer un bug remonté par l'IA (intermédiaire)
- [ ] **ISSUE-4.7** : Exercice 7 — Projet complet : builder et déployer une mini-app (avancé)

### EPIC-5 — Lancement MVP
Préparer et publier la V1.

- [ ] **ISSUE-5.1** : Vérifier la lisibilité et la cohérence de tout le contenu
- [ ] **ISSUE-5.2** : SEO de base (meta tags, og:image)
- [ ] **ISSUE-5.3** : Domaine personnalisé (optionnel)
- [ ] **ISSUE-5.4** : Annonce / partage de la plateforme

## Statut

En cours de construction — phase de définition du contenu et setup initial.
