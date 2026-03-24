# 📋 Master Prompt – Landing Page SaaS B2B Premium (WaterSense)

> Copie et colle ceci directement dans Copilot / v0 / Cursor pour recréer la page de zéro.

---

@workspace MISSION : Création d'une Landing Page SaaS B2B Premium (Projet : WaterSense)

Tu es un Développeur Frontend Senior et Lead UI/UX Designer. Ta mission est de coder une landing page complète en React + Tailwind CSS pour "WaterSense", une solution B2B d'optimisation de la consommation d'eau pour les entreprises.

⚠️ CONTRAINTE ABSOLUE (LE TEST ANTI-IA) :
Le design final ne doit EN AUCUN CAS ressembler à un template générique généré par IA (pas de couleurs Tailwind par défaut, pas d'ombres grossières, pas de coins trop arrondis, pas de textes clichés comme "Plongez dans le futur" ou "Libérez le potentiel"). Le ton doit être factuel, direct et professionnel.

## 1. DESIGN SYSTEM STRICT (À respecter à la lettre)

- **Couleurs de fond** : Interdiction d'utiliser le blanc pur #FFFFFF pour les sections larges. Utilise #F9FAFB (gris très clair) pour le fond principal et #F3F4F6 pour contraster les sections. Le blanc n'est autorisé que pour l'intérieur des cartes (Cards).
- **Couleurs de marque** : Primaire = #0F4C5C (Bleu canard profond). Accent = #5FA8D3 (Cyan doux).
- **Texte** : Pas de noir pur. Utilise #1E293B (Gris ardoise foncé) pour les titres et #475569 pour les paragraphes.
- **Typographie** : Utilise font-outfit pour les titres (Poids 700/800, tracking serré tracking-tight) et font-inter pour le corps de texte.
- **UI / Composants** : Les boutons et cartes doivent avoir un border-radius subtil (rounded-lg ou rounded-xl, pas de rounded-full sauf pour les icônes). Les ombres doivent être ultra-douces et diffuses (ex: shadow-[0_8px_30px_rgb(0,0,0,0.04)]). Ajoute des bordures très fines (border-gray-100 ou border-gray-200) sur toutes les cartes.

## 2. STRUCTURE DE LA PAGE

Crée un composant principal Home qui importe les sous-composants suivants :

1. **Header** : Minimaliste. Logo WaterSense à gauche, liens de navigation simples au centre, bouton "Demander une démo" à droite.
2. **HeroSection** : Titre accrocheur et factuel (ex: "Réduisez vos coûts liés à l'eau de 20%"). Sous-titre rassurant. Deux boutons d'action (Primaire et Secondaire).
3. **SocialProof** : Une bande discrète sous le Hero avec le texte "Ils optimisent leurs ressources avec WaterSense" et une ligne de 5 faux logos grisés (utilise des div avec animate-pulse pour simuler le chargement).
4. **RoiCalculator (Le cœur de l'app)** : Un vrai calculateur interactif (utilise useState).
   - À gauche : Inputs pour "Volume d'eau annuel (m³)", "Coût actuel (€/m³)" et "Coût de la solution WaterSense (€)".
   - À droite : Une carte d'affichage des résultats (Économies annuelles et Temps d'amortissement en mois).
   - En dessous : Intègre un graphique interactif en zone (AreaChart de la librairie recharts) projetant les économies nettes sur 5 ans.
5. **FeaturesSection** : Grille de 3 colonnes (grid-cols-3). Chaque carte explique une fonctionnalité clé (ex: "Détection de fuites", "Suivi temps réel", "Rapports RSE") avec une icône de lucide-react.
6. **CtaSection** : Un gros bloc final avec un fond couleur primaire (#0F4C5C), un texte d'appel à l'action fort et un bouton contrasté. Ajoute des effets de halo lumineux discrets en arrière-plan (blur-3xl).
7. **Footer** : Simple et propre. Logo, copyright avec l'année dynamique, et liens légaux.

## 3. DIRECTIVES DE CODE

- Assure-toi que la page est 100% responsive (utilise les préfixes md: et lg: de Tailwind).
- Le code doit être propre, commenté en français, et utiliser les bonnes pratiques React (Hooks).
- Ajoute des animations de slide-in au scroll (Framer Motion) sur chaque section pour un effet premium.
- Si tu ne peux pas tout générer d'un coup en raison de la longueur, commence par l'architecture globale, le Header, le Hero et la SocialProof, puis demande-moi l'autorisation de continuer pour les sections suivantes.
