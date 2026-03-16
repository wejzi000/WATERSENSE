# 2.2 Architecture Technique 5 Couches Expliquée

**Document autonome — WaterSense 2026**

## Objectif
Décrire clairement l’architecture technique cible en **5 couches**, depuis les capteurs jusqu’aux applications métiers, afin d’assurer **fiabilité**, **scalabilité**, **sécurité** et **exploitation temps réel** des données agricoles.

## Vue d’ensemble (5 couches)
1. **Couche 1 — Perception & Capteurs** : collecte des données terrain.
2. **Couche 2 — Edge & Acquisition** : normalisation locale, pré‑traitement, buffer.
3. **Couche 3 — Connectivité & Transport** : acheminement sécurisé des flux.
4. **Couche 4 — Plateforme Data & Services** : stockage, traitements, règles.
5. **Couche 5 — Applications & Analytics** : interfaces, recommandations, reporting.

---

## Tableaux détaillés par couche

### Couche 1 — Perception & Capteurs
| Domaine | Détails techniques | Exigences / SLA | KPIs & seuils | Risques / contrôles |
|---|---|---|---|---|
| Objectif | Mesurer l’état réel des parcelles (sol, météo, irrigation). | Couverture 100% des parcelles instrumentées. | Taux de couverture ≥ 98%. | Zones non couvertes → plan d’extension. |
| Capteurs | VWC (%), Température sol/air, Rayonnement, Pluie, Vent, Pression/Débit. | Calibration trimestrielle. | Dérive < 2% / trimestre. | Dérive capteur → alerte qualité. |
| Matériel | Nœuds IoT IP65, modules solaires, batteries longue durée. | Autonomie ≥ 12 mois. | Taux de panne < 1% / mois. | Corrosion → maintenance préventive. |
| Qualité data | Horodatage local + métadonnées complètes. | Horloge NTP (Δ < 5 sec). | % mesures horodatées correctes ≥ 99%. | Horloge dérivante → resync. |
| Sécurité | Identité device, clé unique, firmware signé. | OTA sécurisé. | % devices à jour ≥ 95%. | Firmware compromis → rollback. |
| Sortie | Mesures brutes + métadonnées capteur/parcelle. | Format stable (JSON/Protobuf). | Erreurs de format < 0,5%. | Validation schéma en edge. |

---

### Couche 2 — Edge & Acquisition
| Domaine | Détails techniques | Exigences / SLA | KPIs & seuils | Risques / contrôles |
|---|---|---|---|---|
| Objectif | Agréger localement, filtrer, réduire la latence. | Temps de pré‑traitement < 2 sec. | Latence edge < 2 sec. | Saturation CPU → scaling. |
| Normalisation | Conversion JSON/Protobuf + enrichissement. | Schéma versionné. | % conformité schéma ≥ 99,5%. | Version mismatch → validation. |
| Filtrage | Détection outliers + capteurs défaillants. | Règles adaptatives. | Taux faux positifs < 1%. | Sur‑filtrage → ajustement. |
| Buffering | Stockage local (≥ 24h). | Aucun data loss. | Perte < 0,1%. | Coupure réseau → replay. |
| Chiffrement | Chiffrement avant transit. | AES‑256 / TLS. | 100% flux chiffrés. | Clé compromise → rotation. |
| Sortie | Flux normalisé, compressé, sécurisé. | Compression ≥ 40%. | Bande passante réduite. | Compression excessive → ajuster. |

---

### Couche 3 — Connectivité & Transport
| Domaine | Détails techniques | Exigences / SLA | KPIs & seuils | Risques / contrôles |
|---|---|---|---|---|
| Objectif | Transport fiable vers le cloud. | QoS 1/2 MQTT. | Perte < 0,5%. | Instabilité réseau → retry. |
| Protocoles | MQTT, HTTPS batch, WebSockets push. | TLS 1.2+. | Handshake TLS < 1 sec. | Certificat expiré → rotation auto. |
| Latence | Alerte quasi temps réel. | < 5 sec E2E. | Latence p95 < 5 sec. | Goulot opérateur → failover. |
| Disponibilité | 99%+ par parcelle. | Multi‑opérateur si besoin. | Uptime réseau ≥ 99%. | Zone blanche → alternative LoRa. |
| Sécurité | Tokens device + mTLS si possible. | Rotation trimestrielle. | % tokens actifs < 100% (rotation). | Token volé → révocation. |
| Sortie | Streams fiables vers ingestion. | Re‑transmission automatique. | Taux retry < 2%. | Queue overflow → backpressure. |

---

### Couche 4 — Plateforme Data & Services
| Domaine | Détails techniques | Exigences / SLA | KPIs & seuils | Risques / contrôles |
|---|---|---|---|---|
| Objectif | Stocker, traiter, orchestrer. | Scalabilité horizontale. | Taux ingestion ≥ 1 000 msg/sec. | Saturation → autoscaling. |
| Ingestion | Kafka/PubSub + consumers. | Exactly‑once si possible. | Erreurs ingestion < 0,2%. | Backlog → scaling. |
| Stockage | Data Lake + Time‑Series DB. | Rétention 5 ans. | Latence requête < 1 sec (p95). | Hot partitions → repartition. |
| Traitements | Streaming + batch (ET0, anomalies). | Jobs SLA < 5 min. | % jobs réussis ≥ 99%. | Job fail → retry policy. |
| API métiers | REST/GraphQL + auth RBAC. | 99,5% dispo. | Temps réponse p95 < 300 ms. | DDoS → rate limit. |
| Sortie | Données enrichies + recommandations. | Cohérence forte. | % recommandations valides ≥ 98%. | Règles incohérentes → tests. |

---

### Couche 5 — Applications & Analytics
| Domaine | Détails techniques | Exigences / SLA | KPIs & seuils | Risques / contrôles |
|---|---|---|---|---|
| Objectif | Délivrer la valeur métier. | UX rapide. | 3 clics max pour action. | UX complexe → design review. |
| Apps | Dashboard web + mobile friendly. | 99,5% dispo saison. | p95 chargement < 2 sec. | Pic saison → CDN/cache. |
| Alertes | Push irrigation/pluie/anomalies. | < 5 sec. | Taux d’alertes délivrées ≥ 99%. | Spam alertes → seuils. |
| Analytics | Benchmarks, scénarios, prédictions. | Modèles versionnés. | Précision ≥ 85%. | Drift → monitoring. |
| Exports | PDF/Excel mensuels. | Export < 30 sec. | % exports OK ≥ 99%. | Fichier lourd → pagination. |
| Sortie | Décisions actionnables. | Gains d’eau mesurables. | Économie eau ≥ 20%. | Adoption faible → onboarding. |

---

## Flux de données (tableau synthèse)
| Étape | Source → Cible | Transformation | Contrôle qualité | SLA |
|---|---|---|---|---|
| 1 | Capteur → Edge | Bruts + métadonnées | Horodatage / calibration | < 2 sec |
| 2 | Edge → Transport | Filtrage + chiffrement | Validation schéma | < 2 sec |
| 3 | Transport → Ingestion | MQTT/HTTPS | QoS + retry | < 5 sec |
| 4 | Ingestion → Data | Enrichissement | Outliers + règles | < 5 min |
| 5 | Data → Apps | Reco + KPI | QA recommandations | < 5 sec |

---

## Sécurité & Gouvernance (tableau)
| Domaine | Mesures | Exigences | KPI |
|---|---|---|---|
| Identité | Auth device + user, RBAC | Zero‑Trust | 100% assets authentifiés |
| Chiffrement | En transit + au repos | TLS 1.2+, AES‑256 | 100% flux chiffrés |
| Isolation | Segmentation tenant | Données isolées | 0 cross‑tenant |
| Audit | Logs immuables | Rétention 5 ans | 100% actions tracées |
| Conformité | RGPD | Droit à l’effacement | SLA 30 jours |

---

## Résilience & Observabilité (tableau)
| Domaine | Exigences | KPI cible |
|---|---|---|
| Disponibilité | Multi‑zone + failover | 99,5%+ |
| Reprise | RPO < 1h, RTO < 4h | Tests trimestriels |
| Monitoring | Metrics, logs, traces | MTTR < 2h |
| Alerting | SRE on‑call | 95% alertes traitées < 30 min |

---

## Performance & Scalabilité (tableau)
| Indicateur | Cible 2026 | Seuil d’alerte |
|---|---|---|
| Capteurs actifs | 50 000 | < 45 000 |
| Points/jour | 10+ millions | < 8 millions |
| Ingestion | 1 000 msg/sec | < 800 msg/sec |
| Latence E2E | < 5 sec | > 8 sec |

---

## RACI (tableau)
| Activité | Produit | Data | DevOps | Field Ops |
|---|---|---|---|---|
| Déploiement capteurs | I | I | C | **R** |
| Ingestion & pipelines | C | **R** | **A** | I |
| Sécurité & conformité | C | C | **A** | I |
| Dashboards & UX | **A** | C | R | I |
| Support incident | I | C | **A** | R |

---

## Roadmap d’industrialisation (tableau)
| Trimestre | Livrables clés | Dépendances |
|---|---|---|
| T1 2026 | MVP + 3 types de capteurs | Stock initial capteurs |
| T2 2026 | Plateforme data complète + alertes | Ingestion stable |
| T3 2026 | Optimisation coûts + multi‑tenant | Observabilité en place |
| T4 2026 | IA avancée + prédictions climatiques | Qualité data maîtrisée |

---

## Conclusion
L’architecture 5 couches assure une **chaîne de valeur complète**, de la mesure terrain à la décision métier. Elle sécurise la **scalabilité**, l’**exploitation temps réel** et la **résilience opérationnelle** de WaterSense pour 2026 et au‑delà.
