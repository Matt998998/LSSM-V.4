module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'AAR-Counter',
            highlight: 'AAR outline',
            selection: 'Vehicle selection',
            counter_highlight: 'AAR counter / outline',
            counter_selection: 'AAR counter and vehicle selection',
            highlight_selection: 'AAR outline and vehicle selection',
            counter_highlight_selection:
                'AAR counter / border and vehicle selection',
        },
        reset: '{text} reset',
    },
    arrHover: {
        reset: 'The vehicle selection is reset before!',
        headers: {
            set: 'Set',
            attribute: 'Name',
            free: 'Free',
            max: 'Max',
        },
        titles: {
            set: 'So often this combination is selected when you press the AAR',
            attribute: 'The combination described in this line',
            free: 'So often this combination is available',
            max:
                'You can select this AAR until this combination is no longer available',
        },
        arrSpecs: {
            fire: 'Brannbil',
            elw: 'Innsatsleder brann',
            dlk: 'Stigebil',
            rtw: 'Ambulanse',
            rw: 'Tungredningsbil',
            elw2: 'Innsatsstøttebil',
            elw1_or_elw2: 'Innsatsleder brann eller innsatsstøttebil',
            hlf_only: 'Redningsbil',
            hlf_or_rw_and_lf: 'Redningsbil eller Tungredningsbil og Brannbil',
            gwa: 'Røykdykkerbil',
            fly_car: 'Legebil',
            gwl2wasser: 'Tankbil',
            gwgefahrgut: 'CBRNe-enhet',
            kdow_orgl: 'Innsatslederbil helse',
            fustw: 'Patruljebil',
            police_motorcycle: 'Politimotorsykkel',
            fustw_or_police_motorcycle: 'Patruljebil eller Politimotorsykkel',
            polizeihubschrauber: 'Politihelikopter',
            swat: 'Politi med våpentrening',
            swat_armored_vehicle: 'Pansret kjøretøy',
            swat_suv: 'Delta kjøretøy',
            any_traffic_car: 'Utrykningspolitibil',
            k9: 'Hundepatrulje',
            rth_only: 'Luftambulanse',
            gw_taucher: 'Dykkerbil',
            boot: 'Båter (generelt)',
            mzb: 'Lett redningsbåt',
        },
    },
    generationDate: {
        inputFormat: 'MMMM DD., HH:mm',
    },
    enhancedMissingVehicles: {
        vehicle: 'Vehicle type',
        missing: 'Missing on mission',
        driving: 'Approach',
        total: 'Still needed',
        selected: 'Selected',
        vehiclesByRequirement: {
            [/^Fire truck(s)$/]: [0, 1, 13, 18, 30, 33],
            [/^Platform truck(s)$/]: [2, 13],
            [/^Battalion chief unit(s)$/]: [3, 12],
            [/^Heavy Rescue Vehicle(s)$/]: [4, 8, 18, 21],
            [/^Mobile air$/]: [6],
            [/^Water Tanker$/]: [7, 33],
            [/^mcv$/]: [12],
            [/^Hazmat$/]: [9],
            [/^Ambulance(s)$/]: [5, 27],
            [/^Patrol Car(s)$/]: [10],
            [/^HEMS$/]: [11],
            [/^Police helicopter(s)$/]: [23],
            [/^SWAT Personells$/]: [16, 26],
            [/^ARFF Crahs Tender/]: [17],
            [/^K-9 Unit(s)$/]: [19],
            [/^Large Fireboat(s)$/]: [24],
            [/^Large Rescue boat(s)$/]: [25],
            [/^Wildland fire engine(s)$/]: [30, 31, 32, 38, 39, 40],
            [/^Fire Aviation(s)$/]: [35, 36, 37],
            [/^FBI Unit(s)$/]: [42],
            [/^FBI Investigation Wagon(s)$/]: [43],
            [/^FBI Mobile Command Center(s)$/]: [44],
            [/^FBI Bomb Technician Vehicle(s)$/]: [45],
            [/^FBI Surveillance Drone(s)$/]: [46],
            [/^Sheriff Unit(s)$/]: [47],
        },
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: 'Firetruck',
                vehicleTypes: [0, 1, 13, 18, 33],
            },
            {
                name: 'Other Fire Apparatus',
                vehicleTypes: [
                    2,
                    3,
                    4,
                    6,
                    7,
                    8,
                    9,
                    12,
                    17,
                    21,
                    22,
                    24,
                    30,
                    31,
                    32,
                    34,
                    35,
                    36,
                    37,
                    38,
                    39,
                    40,
                    41,
                ],
            },
            {
                name: 'Ambulance',
                vehicleTypes: [5, 11, 15, 20, 25, 27, 28, 29],
            },
            {
                name: 'Police',
                vehicleTypes: [10, 14, 16, 19, 23, 26, 47],
            },
            {
                name: 'Water',
                vehicleTypes: [21, 22, 24, 25],
            },
            {
                name: 'FBI',
                vehicleTypes: [42, 43, 44, 45, 46],
            },
        ],
        allTab: 'All',
        occupiedTab: 'Follow-up',
    },
    hideVehicleList: {
        show: 'Show vehicle list',
        hide: 'Hide vehicle list',
    },
};
