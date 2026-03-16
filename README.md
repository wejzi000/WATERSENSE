# 💧 WaterSense - Plateforme Complète

Un site web marketing + application dashboard pour la gestion intelligente de l'irrigation agricole.

## 📁 Structure du Projet

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── globals.css         # Styles globaux Tailwind
│   ├── page.tsx            # Page d'accueil (marketing)
│   └── dashboard/
│       └── page.tsx        # Page du dashboard agriculteur
├── components/             # Composants marketing
│   ├── Navigation.tsx      # Barre de navigation
│   ├── Hero.tsx            # Section héro
│   ├── Features.tsx        # Fonctionnalités
│   ├── Benefits.tsx        # Avantages
│   ├── Pricing.tsx         # Tarification
│   └── Footer.tsx          # Pied de page
└── dashboard/              # Dashboard agriculteur
    ├── Dashboard.tsx       # Composant principal
    ├── SensorCard.tsx      # Cartes capteurs
    ├── RecommendationCard.tsx  # Recommandations IA
    ├── StatsCard.tsx       # Statistiques
    ├── AlertCard.tsx       # Alertes
    └── ChartComponent.tsx  # Graphiques temps réel
```

## 🎯 Deux Applications en Une

### 1️⃣ Site Marketing (page d'accueil)
- 💼 Présentation du produit WaterSense
- 📊 Statistiques d'économie (eau, énergie, rendement)
- 🎯 Fonctionnalités principales
- 💰 Tarification 3 niveaux (Essential, Standard, Premium)
- 📱 Navigation fluide responsive

**URL:** `/` (racine)

### 2️⃣ Dashboard Agriculteur
- 📊 Suivi temps réel des capteurs multisensoriels
- 💧 Recommandations IA prescriptive pour irrigation
- 📈 Graphiques et tendances
- ⚠️ Alertes intelligentes (pluie, besoin d'eau, anomalies)
- 🌾 Gestion multi-champs
- 📱 Interface mobile-friendly

**URL:** `/dashboard`

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ avec npm ou yarn
- Éditeur de code (VS Code recommandé)

### Installation des dépendances
```bash
npm install
# ou
yarn install
```

### Mode développement
```bash
npm run dev
# ou
yarn dev
```

Accédez à `http://localhost:3000`

### Build production
```bash
npm run build
npm start
```

## 📦 Dépendances Principales

| Package | Utilité |
|---------|---------|
| Next.js 14 | Framework React avec SSR |
| React 18 | UI library |
| Tailwind CSS | Styling utility-first |
| Recharts | Graphiques et visualisations |
| Lucide React | Icônes |
| date-fns | Manipulation de dates |
| TypeScript | Type safety |

## 🎨 Design System

**Couleurs Principales:**
- Primary Blue: `#0066CC`
- Secondary Green: `#00AA44`
- Accent Orange: `#FF6B35`
- Dark Gray: `#1F2937`
- Light Gray: `#F3F4F6`

**Responsive:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)

## 🔄 Navigation

| URL | Page | Description |
|-----|------|-------------|
| `/` | Home | Site marketing avec tous les éléments de vente |
| `/dashboard` | Dashboard | Application agriculteur temps réel |

## 📊 Dashboard Features

### Capteurs
- Humidité du sol
- Température
- Radiation solaire
- Vitesse du vent
- Pluviométrie

### Recommandations IA
- Horaire précis d'irrigation
- Durée optimale
- Volume d'eau requis
- Niveau de confiance (%)

### Alertes
- Pluie prévue
- Besoin urgent d'irrigation
- Anomalies capteurs
- Recommandations urgentes

### Statistiques
- Humidité actuelle vs idéale
- Rendement estimé
- Eau apportée
- Température et radiation

## 🔐 Sécurité & Performance

- ✅ Type-safe avec TypeScript
- ✅ ESLint pour la qualité du code
- ✅ Responsive design
- ✅ Optimisé pour SEO (Next.js)
- ✅ CSS Tailwind (optimisé production)

## 📝 Prochaines Étapes (À Développer)

- [ ] API backend (Node.js/Express ou Python)
- [ ] Authentification (JWT, OAuth)
- [ ] Base de données (PostgreSQL/MongoDB)
- [ ] WebSockets pour temps réel
- [ ] Intégration capteurs IoT réels
- [ ] Push notifications
- [ ] Facturation/abonnements
- [ ] Export PDF rapports
- [ ] Analyses ML avancées
- [ ] App mobile native (React Native)

## 📞 Support

Pour questions ou améliorations, contactez l'équipe WaterSense.

---

**Version:** 1.0.0  
**Dernière mise à jour:** Janvier 2026
