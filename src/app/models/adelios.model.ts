export class Adelios {
_id!: string;
activite!: Activite;
general!: General;
statut!: Statut;
charges_taxes?: Charges_Taxes;
interne!: Interne;
caracteristiques!: Caracteristiques;
location?: Location;
vente?: Vente;
mandat?: Mandat;
}
export class ToutSurfaces{
    niveau!: number;
    type!: string;
    superficie?: number;
  }
  
class Activite{
    date_creation!: string;
    date_derniere_modification! : string;
}

class General{
    nom!: string;
      annonce!: string;
      etat!: string;
      type?: string;
      usage_precedent?: string;
      ref!: string;
}

class Statut{
        a_vendre?: boolean;
        a_louer?: boolean;
        statut_publication!: string;
        disponibilite!: string;
}

class Charges_Taxes{
    taxe?: { bureaux:{ annuelle_m2: number }}
    impot_foncier?: {annuel_m2: number};
}
class Interne{
    commentaire?: string;
    modalites_visite?: string;
}

class Caracteristiques{
    type_isolation!: string;
    type_construction!: string;
    type_eclairage?: string;
    entrepot_isole!: boolean;
    pont_roulant?: string;
    toiture!: { type: string, isolee: boolean };
    hauteur!: { min: number , max: number };
    charge_sol?: string;
    acces?: { plain_pied?: number; quai?: number; }  ;
    parkings?: { pl: number; vl: number; };
    chauffage?: { type: string, source: string };
    bureau?: { type_chauffage?: string, climatisation?: string, traitement?: string};
    commentaire_activite?: string;
    dpe?: string;
    traiement?: string;
    type_chauffage?: string;
}

class Location{
    loyer_annuel?: { ht_hc: number };
    regime_fiscal?: string;
    type_bail!: string;
    depot_garantie!: string;
    mode_paiement!: string;
    article_606!: string;
    impot_foncier!: string;
    honoraires_hors_tva!: { preneur: number };
}
class Vente{
    prix!: number;
    prix_m2!: number;
    regime_fiscal!: string;
    honoraires_hors_tva!: { mandant: number, preneur: number };
}

class Mandat{
    type!: string;
    numero?: string;
}