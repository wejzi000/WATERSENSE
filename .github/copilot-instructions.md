# 📋 Instructions Copilot - Projet WaterSense

## Vue d'ensemble
Plateforme complète pour WaterSense: site web marketing + application dashboard IoT pour les agriculteurs.

## Stack Technique
- **Frontend:** Next.js 14 (TypeScript, Tailwind CSS, App Router)
- **Visualisation:** Recharts pour graphiques temps réel
- **Styling:** Tailwind CSS avec design system cohérent
- **Icônes:** Lucide React

## Structure Projet
```
src/
├── app/                 # Pages Next.js
├── components/          # Composants marketing (réutilisables)
├── dashboard/           # Composants dashboard agriculteur
public/                 # Assets statiques
```

## Pages Principales
1. **/** - Site marketing (Hero, Features, Benefits, Pricing)
2. **/dashboard** - Dashboard temps réel (Capteurs, Recommandations, Graphiques)

## Prochains Développements Recommandés

### Backend
- [ ] API REST (Node.js/Express ou FastAPI)
- [ ] Authentification (JWT)
- [ ] Base de données (PostgreSQL)
- [ ] WebSockets pour données en temps réel
- [ ] Intégration IoT réelle

### Frontend Améliorations
- [ ] Pages supplémentaires (Documentation, Blog, Contact)
- [ ] Authentification UI
- [ ] Gestion d'état (Zustand/Redux)
- [ ] Service workers pour PWA
- [ ] Animations avancées

### Infrastructure
- [ ] Déploiement (Vercel, AWS, Azure)
- [ ] CI/CD (GitHub Actions)
- [ ] Monitoring et logging
- [ ] Analytics (Google Analytics, Plausible)

## Commandes Clés
```bash
npm run dev          # Démarrage développement
npm run build        # Build production
npm run lint         # Vérification code
npm test             # Tests (à configurer)
```

## Variables d'Environnement
À créer `.env.local`:
```
NEXT_PUBLIC_API_URL= 
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## Notes de Développement
- Utiliser des composants réutilisables dans `src/components/`
- Respecto du design system (couleurs, spacing, typographie)
- Tests sur mobile via `localhost:3000` avec responsive design
- Performance: Lazy loading des images, code splitting automatique
