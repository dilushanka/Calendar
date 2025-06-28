// Sri Lankan holidays data structure
const holidaysData = {
    // YEAR: { MONTH_INDEX: [ { day, name: { si, en } }, ... ], ... }

    2025: {
        0: [ // January
            { day: 13, name: { si: "දුරුතු පෝය", en: "Duruthu Full Moon Poya Day" } },
            { day: 14, name: { si: "තෛපොංගල් දිනය", en: "Tamil Thai Pongal Day" } }
        ],
        1: [ // February
            { day: 4, name: { si: "නිදහස් දිනය", en: "National Day" } },
            { day: 12, name: { si: "නාවම් පෝය", en: "Navam Full Moon Poya Day" } },
            { day: 26, name: { si: "මහා ශිවරාත්‍රී දිනය", en: "Mahasivarathri Day" } }
        ],
        2: [ // March
            { day: 13, name: { si: "මැදීන් පෝය", en: "Madin Full Moon Poya Day" } },
            { day: 31, name: { si: "ඉද් උල්-ෆිත්ර්", en: "Id Ul-Fitr" } }
        ],
        3: [ // April
            { day: 12, name: { si: "බක් පෝය", en: "Bak Full Moon Poya Day" } },
            { day: 13, name: { si: "අලුත් අවුරුදු ප්‍රථම දිනය", en: "Day prior to Sinhala & Tamil New Year Day" } },
            { day: 14, name: { si: "සිංහල හා හින්දු අලුත් අවුරුද්ද", en: "Sinhala & Tamil New Year Day" } },
            { day: 18, name: { si: "මහ සිකුරාදා", en: "Good Friday" } }
        ],
        4: [ // May
            { day: 1, name: { si: "මැයි දිනය", en: "May Day" } },
            { day: 12, name: { si: "වෙසක් පෝය", en: "Vesak Full Moon Poya Day" } },
            { day: 13, name: { si: "වෙසක් පෝය අතුරු නිවාඩු", en: "Day following Vesak Full Moon Poya Day" } }
        ],
        5: [ // June
            { day: 7, name: { si: "ඉද් උල්-අල්හා", en: "Id Ul-Alha" } },
            { day: 10, name: { si: "පොසොන් පෝය", en: "Poson Full Moon Poya Day" } }
        ],
        6: [ // July
            { day: 10, name: { si: "ඇසළ පෝය", en: "Esala Full Moon Poya Day" } }
        ],
        7: [ // August
            { day: 8, name: { si: "නිකිණි පෝය", en: "Nikini Full Moon Poya Day" } }
        ],
        8: [ // September
            { day: 5, name: { si: "නබි දිනය", en: "Milad un-Nabi" } },
            { day: 7, name: { si: "බිනර පෝය", en: "Binara Full Moon Poya Day" } }
        ],
        9: [ // October
            { day: 6, name: { si: "වප් පෝය", en: "Vap Full Moon Poya Day" } },
            { day: 20, name: { si: "දීපාවලී", en: "Deepavali" } }
        ],
        10: [ // November
            { day: 5, name: { si: "ඉල් පෝය", en: "Ill Full Moon Poya Day" } }
        ],
        11: [ // December
            { day: 4, name: { si: "උඳුවප් පෝය", en: "Unduvap Full Moon Poya Day" } },
            { day: 25, name: { si: "නත්තල් දිනය", en: "Christmas Day" } }
        ]
    },

    2026: {
        0: [ // January
            { day: 2, name: { si: "දුරුතු පෝය", en: "Duruthu Full Moon Poya Day" } },
            { day: 14, name: { si: "තෛපොංගල් දිනය", en: "Tamil Thai Pongal Day" } }
        ],
        1: [ // February
            { day: 1, name: { si: "නාවම් පෝය", en: "Navam Full Moon Poya Day" } },
            { day: 4, name: { si: "නිදහස් දිනය", en: "National Day" } },
            { day: 15, name: { si: "මහා ශිවරාත්‍රී දිනය", en: "Mahasivarathri Day" } }
        ],
        2: [ // March
            { day: 3, name: { si: "මැදීන් පෝය", en: "Madin Full Moon Poya Day" } },
            { day: 21, name: { si: "ඉද් උල්-ෆිත්ර්", en: "Id Ul-Fitr" } }
        ],
        3: [ // April
            { day: 1, name: { si: "බක් පෝය", en: "Bak Full Moon Poya Day" } },
            { day: 3, name: { si: "මහ සිකුරාදා", en: "Good Friday" } },
            { day: 13, name: { si: "අලුත් අවුරුදු ප්‍රථම දිනය", en: "Day prior to Sinhala & Tamil New Year Day" } },
            { day: 14, name: { si: "සිංහල හා හින්දු අලුත් අවුරුද්ද", en: "Sinhala & Tamil New Year Day" } }
        ],
        4: [ // May
            { day: 1, name: { si: "මැයි දිනය", en: "May Day" } },
            { day: 1, name: { si: "වෙසක් පෝය", en: "Vesak Full Moon Poya Day" } },
            { day: 2, name: { si: "වෙසක් පෝය අතුරු නිවාඩු", en: "Day following Vesak Full Moon Poya Day" } },
            { day: 27, name: { si: "ඉද් උල්-අල්හා", en: "Id Ul-Alha" } },
            { day: 30, name: { si: "අධි වෙසක් පෝය", en: "Adhi Vesak Full Moon Poya Day" } }
        ],
        5: [ // June
            { day: 29, name: { si: "පොසොන් පෝය", en: "Poson Full Moon Poya Day" } }
        ],
        6: [ // July
            { day: 29, name: { si: "ඇසළ පෝය", en: "Esala Full Moon Poya Day" } }
        ],
        7: [ // August
            { day: 25, name: { si: "නබි දිනය", en: "Milad un-Nabi" } },
            { day: 27, name: { si: "නිකිණි පෝය", en: "Nikini Full Moon Poya Day" } }
        ],
        8: [ // September
            { day: 26, name: { si: "බිනර පෝය", en: "Binara Full Moon Poya Day" } }
        ],
        9: [ // October
            { day: 25, name: { si: "වප් පෝය", en: "Vap Full Moon Poya Day" } }
        ],
        10: [ // November
            { day: 8, name: { si: "දීපාවලී", en: "Deepavali" } },
            { day: 24, name: { si: "ඉල් පෝය", en: "Ill Full Moon Poya Day" } }
        ],
        11: [ // December
            { day: 23, name: { si: "උඳුවප් පෝය", en: "Unduvap Full Moon Poya Day" } },
            { day: 25, name: { si: "නත්තල් දිනය", en: "Christmas Day" } }
        ]
    }
};
