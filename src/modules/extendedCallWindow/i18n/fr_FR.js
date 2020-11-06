module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Compteur de régulations',
            highlight: 'Surbrillance régulations',
            selection: 'Séléction de véhicules',
            counter_highlight: 'Compteur de régulations / surbrillance',
            counter_selection:
                'Compteur de régulations et séléction de véhicules',
            highlight_selection:
                'Surbrillance des régulations et séléction des véhicules',
            counter_highlight_selection:
                'Compteur de régulations / bordure et séléction de véhicules',
        },
        reset: '{text} remis à zéro',
    },
    arrHover: {
        reset: 'La séléction de véhicule est mise à zéro avant !',
        titles: {
            set:
                'Aussi souvent que cette combinaison est séléctionnée quand vous appuyez sur la régulation',
            attribute: 'La combinaison décrite dans cette ligne',
            free: 'Aussi souvent que cette combinaison est disponible',
            max:
                'Vous pouvez séléctionner cette régulation tant que la combinaison est disponible',
        },
        arrSpecs: {
            fire: 'Fourgons d’incendie',
            hlf_only: 'Véhicule de secours',
            elw: 'Chef de groupe',
            elw2: 'Véhicule poste de commandement',
            dlk: 'Moyen Elévateur Aérien',
            rtw: 'Ambulance UMH',
            rw: 'Véhicule de secours routier',
            gkw: 'Véhicule Tout Usage',
            gwl2wasser: 'Camion-citerne',
            gwgefahrgut: 'Véhicules risques chimiques',
            gwhoehenrettung: 'VGRIMP',
            gwa: "Véhicule d'Assistance Respiratoire",
            fustw: 'Voiture de patrouille',
            police_motorcycle: 'Unité motocycliste',
            fustw_or_police_motorcycle:
                'Véhicule de patrouille ou Unité motocycliste',
            polizeihubschrauber: 'Hélicoptère de police',
            k9: 'Brigade canine',
            rth_only: 'Hélicoptère',
            gw_wasserrettung: 'VPL',
            boot: 'Bateaux (généraux)',
            mzb: 'BLS',
        },
    },
    generationDate: {
        inputFormat: 'DD MMMM, HH:mm',
    },
    enhancedMissingVehicles: {
        vehicle: 'Type de véhicule',
        missing: 'Manque sur la mission',
        driving: 'En approche',
        total: 'Manquant',
        selected: 'Séléctionné',
        vehiclesByRequirement: {
            [/^Fourgon(s)? incendie$/]: [0, 1, 12, 13],
            [/^Moyen Elévateur Aérien$/]: [2, 15],
            [/^Chef(s)? de groupe$/]: [3],
            [/^VSR$/]: [4],
            [/^UMH$/]: [5],
            [/^CCGC$/]: [6],
            [/^VIRT$/]: [7],
            [/^Véhicule(s) de patrouille$/]: [8],
            [/^Dragon(s)?$/]: [9],
            [/^VAR$/]: [10],
            [/^Véhicule(s)? poste de commandement$/]: [11],
            [/^VGRIMP$/]: [14],
            [/^Nautique(s)?$/]: [16, 17],
            [/^Choucas$/]: [18],
            [/^Équipe(s)? cynophile(s)?$/]: [19],
            [/^Unité(s)? motocycliste(s)?$/]: [20],
        },
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: "Fourgon d'incendie",
                vehicleTypes: [0, 1, 2, 12, 13],
            },
            {
                name: 'Autres appareils incendie',
                vehicleTypes: [3, 4, 6, 7, 10, 11, 14, 15],
            },
            {
                name: 'Ambulance',
                vehicleTypes: [5, 9],
            },
            {
                name: 'Police',
                vehicleTypes: [8, 18, 19, 20],
            },
            {
                name: 'Nautique',
                vehicleTypes: [16, 17],
            },
        ],
        allTab: 'Tout',
        occupiedTab: 'Poursuivre',
    },
    hideVehicleList: {
        show: 'Afficher la liste des véhicules',
        hide: 'Cacher la liste des véhicules',
    },
};