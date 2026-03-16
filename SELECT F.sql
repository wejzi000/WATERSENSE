SELECT F.PUHT
FROM FAIT_VENTE F
JOIN DIM_PRODUIT p ON F.ID_PRODUIT = P.ID_PRODUIT
JOIN DIM_MARQUE m ON P_ID_MARQUE = m.id_marque
WHERE P.libPrd = 'Pâte à tartiner noisettes 630 g'
  AND m.marquePrd = 'NUTELLA';







  