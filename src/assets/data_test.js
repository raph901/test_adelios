const data_test = [
  {
    _id: "5ca75fedf829040e4d84d15b",
    activite: {
      date_creation: "2011-04-06T14:02:16.000Z",
      date_derniere_modification: "2021-05-25T17:01:17.867Z",
    },
    general: {
      nom: "Lot 1",
      annonce:
        "1200 m2 LOUES!!!\r\n\r\n\r\nDans secteur stratégique, 1200 m2 de bâtiment indépendant ont été loués sur la commune de Wissous, dans la zone industrielle de Villemilan.\r\n\r\nIl s'agit d'un immeuble de stockage, proposant deux cours privatives, 300 m2 de bureaux répartis sur deux niveaux, et donc 900 m2 d'entrepôt, avec de multiples accès de plain-pieds.\r\n\r\n\r\n\r\nNous consulter pour plus d'informations.",
      etat: "Très bon état",
      type: "Entrepôt",
      usage_precedent: "palettes",
      ref: "L 1104 91 001 1",
    },
    statut: {
      a_louer: true,
      statut_publication: "Archive",
      disponibilite: "immédiate",
    },
    charges_taxes: { taxe: { bureaux: { annuelle_m2: 3.2 } } },
    interne: { modalites_visite: "appel Kerhervé" },
    caracteristiques: {
      type_construction: "Structure béton",
      type_isolation: "Bardage double peau",
      type_eclairage: "Tubes fluos",
      entrepot_isole: true,
      pont_roulant: "Oui",
      toiture: { type: "Bac acier multicouches", isolee: true },
      hauteur: { min: 2 },
      acces: { plain_pied: 1 },
      parkings: { pl: 10, vl: 2 },
      chauffage: { type: "Chaudière", source: "Gaz" },
      bureau: { type_chauffage: "Convecteurs", climatisation: "Oui" },
    },
    location: {
      loyer_annuel: { ht_hc: 90000 },
      regime_fiscal: "TVA",
      type_bail: "3-6-9 ans",
      depot_garantie: "3 mois HT",
      mode_paiement: "Trimestriel",
      article_606: "Bailleur",
      impot_foncier: "Preneur",
      honoraires_hors_tva: { preneur: 15 },
    },
    mandat: { type: "Simple" },
    surfaces: [
      {
        niveau: 0,
        type: "Entrepôt",
        superficie: 900,
      },
      {
        niveau: 0,
        type: "Bureaux",
        superficie: 150,
      },
      {
        niveau: 1,
        type: "Bureaux",
        superficie: 150,
      },
    ],
  },
  {
    _id: "5ca75fedf829040e4d84d163",
    activite: {
      date_creation: "2011-04-12T16:24:01.000Z",
      date_derniere_modification: "2019-03-21T15:38:14.000Z",
    },
    general: {
      nom: "Lot 1",
      annonce:
        "<p>\r\n\tImmeuble ind&eacute;pendant &agrave; louer au loyer attractif. Id&eacute;al stockage de v&eacute;hicules sur plusieurs niveaux.</p>",
      etat: "État d'usage",
      ref: "L 1104 94 002 1",
    },
    statut: {
      a_louer: true,
      statut_publication: "Archive",
      disponibilite: "immédiate",
    },
    charges_taxes: {
      impot_foncier: {
        annuel_m2: 7,
      },
    },
    interne: {
      modalites_visite: "appel djamel ait",
      commentaire: "impot foncier 6,36 E / m2",
    },
    caracteristiques: {
      type_construction: "Structure béton",
      type_isolation: "Bardage double peau",
      entrepot_isole: true,
      toiture: {
        type: "Bac acier multicouches",
        isolee: true,
      },
      hauteur: {
        max: 6,
        min: 4,
      },
      acces: {
        plain_pied: 1,
        quai: 1,
      },
    },
    location: {
      type_bail: "De courte durée",
      depot_garantie: "3 mois HT",
      mode_paiement: "Trimestriel d'avance",
      article_606: "Bailleur",
      impot_foncier: "Preneur",
      honoraires_hors_tva: {
        preneur: 15,
      },
    },
    surfaces: [
      {
        niveau: -1,
        type: "Entrepôt",
        superficie: 4153,
      },
      {
        niveau: -1,
        type: "Bureaux",
        superficie: 277,
      },
      {
        niveau: 0,
        type: "Entrepôt",
        superficie: 4153,
      },
      {
        niveau: 0,
        type: "Bureaux",
        superficie: 111,
      },
      {
        niveau: 1,
        type: "Entrepôt",
        superficie: 4153,
      },
      {
        niveau: 1,
        type: "Bureaux",
        superficie: 111,
      },
      {
        niveau: 2,
        type: "Bureaux",
        superficie: 111,
      },
      {
        niveau: 3,
        type: "Bureaux",
        superficie: 111,
      },
      {
        niveau: 4,
        type: "Bureaux",
        superficie: 111,
      },
    ],
  },
  {
    _id: "5ca75feef829040e4d84d290",
    activite: {
      date_creation: "2011-04-26T12:38:40.000Z",
      date_derniere_modification: "2021-07-05T08:54:58.014Z",
    },
    general: {
      nom: "Lot A4",
      annonce:
        "Situé à proximité des aéroports de Roissy et du Bourget, ce parc dispose d'un emplacement stratégique.\r\n\r\nLivraison 7 mois après la signature d’un contrat de VEFA",
      etat: "En construction",
      type: "Local d'activités",
      ref: "L 1104 93 001 4",
    },
    statut: {
      a_vendre: true,
      statut_publication: "Archive",
      disponibilite: "Nous consulter",
    },
    interne: {
      commentaire: "MAJ faite le 05.07.2021",
    },
    caracteristiques: {
      type_construction: "Ossature métallique",
      type_isolation: "Bardage double peau",
      toiture: { type: "Bac acier multicouches", isolee: true },
      hauteur: { max: 7 },
      charge_sol: "3",
      entrepot_isole: true,
      acces: { plain_pied: 1 },
      chauffage: { type: "Aérothermes", source: "Électricité" },
      type_eclairage: "Zénithal par skydome",
      commentaire_activite: "voirie lourde",
      dpe: "B",
      bureau: {
        traitement: "Open space",
        type_chauffage: "Convecteurs",
      },
    },
    vente: {
      prix: 520000,
      prix_m2: 1262,
      regime_fiscal: "TVA",
      honoraires_hors_tva: { mandant: 4, preneur: 2 },
    },
    mandat: {
      numero: "2011",
      type: "Simple",
    },
    surfaces: [
      {
        niveau: 0,
        type: "Entrepôt",
        superficie: 294,
      },
      {
        niveau: 0,
        type: "Bureaux",
        superficie: 38,
      },
      {
        niveau: 1,
        type: "Bureaux",
        superficie: 79,
      },
    ],
  },
];
module.exports = [data_test]
