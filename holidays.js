        // Sri Lankan holidays data structure
        const holidaysData = {
            // Format: 
            // YEAR: {
            //   MONTH_INDEX: [
            //     { day: DAY, name: { si: "SINHALA NAME", en: "ENGLISH NAME" } },
            //     ... 
            //   ],
            //   ...
            // }
            
            2025: {
                0: [ // January
                    { day: 1, name: { si: "අලුත් අවුරුද්ද", en: "New Year's Day" } },
                    { day: 15, name: { si: "තමිල් තෛපොංගල් දිනය", en: "Thai Pongal Day" } }
                ],
                1: [ // February
                    { day: 4, name: { si: "ජාතික දිනය", en: "National Day" } }
                ],
                2: [ // March
                    { day: 13, name: { si: "මහා ශිවරාත්රී දිනය", en: "Maha Shivaratri Day" } }
                ],
                3: [ // April
                    { day: 13, name: { si: "බක් පෝය", en: "Bak Poya Day" } },
                    { day: 14, name: { si: "බක් පෝය අතුරු නිවාඩු", en: "Additional Bak Poya Holiday" } },
                    { day: 17, name: { si: "බුදුන් වහන්සේගේ උපත, වෙනම්වීම හා පරිනිර්වාණය", en: "Sinhala and Tamil New Year Eve" } },
                    { day: 18, name: { si: "සිංහල හා හින්දු අලුත් අවුරුද්ද", en: "Sinhala and Tamil New Year Day" } }
                ],
                4: [ // May
                    { day: 1, name: { si: "මැයි දිනය", en: "May Day" } },
                    { day: 12, name: { si: "වෙසක් පෝය", en: "Vesak Poya Day" } },
                    { day: 13, name: { si: "වෙසක් පෝය අතුරු නිවාඩු", en: "Additional Vesak Holiday" } }
                ],
                5: [ // June
                    { day: 12, name: { si: "පොසොන් පෝය", en: "Poson Poya Day" } }
                ],
                6: [ // July
                    { day: 11, name: { si: "ඇසළ පෝය", en: "Esala Poya Day" } },
                    { day: 31, name: { si: "ඉස්ලාමීය නබිවරයාගේ උපත", en: "Hajj Festival Day" } }
                ],
                7: [ // August
                    { day: 10, name: { si: "නිකිණි පෝය", en: "Nikini Poya Day" } }
                ],
                8: [ // September
                    { day: 8, name: { si: "බින්නරා පෝය", en: "Binara Poya Day" } }
                ],
                9: [ // October
                    { day: 8, name: { si: "වප් පෝය", en: "Vap Poya Day" } },
                    { day: 27, name: { si: "දීපාවලී", en: "Deepavali Festival Day" } }
                ],
                10: [ // November
                    { day: 7, name: { si: "ඉල් පෝය", en: "Il Poya Day" } }
                ],
                11: [ // December
                    { day: 7, name: { si: "උඳුවප් පෝය", en: "Unduvap Poya Day" } },
                    { day: 25, name: { si: "උර්තුමය නත්තල් දිනය", en: "Christmas Day" } }
                ]
            },
            // Add more years as needed (2026 to 2040)
            2026: {
                0: [ // January
                    { day: 1, name: { si: "අලුත් අවුරුද්ද", en: "New Year's Day" } },
                    { day: 15, name: { si: "තමිල් තෛපොංගල් දිනය", en: "Thai Pongal Day" } }
                ],
                1: [ // February
                    { day: 4, name: { si: "ජාතික දිනය", en: "National Day" } }
                ],
                3: [ // April
                    { day: 13, name: { si: "බක් පෝය", en: "Bak Poya Day" } },
                    { day: 14, name: { si: "බක් පෝය අතුරු නිවාඩු", en: "Additional Bak Poya Holiday" } },
                    { day: 17, name: { si: "බුදුන් වහන්සේගේ උපත, වෙනම්වීම හා පරිනිර්වාණය", en: "Sinhala and Tamil New Year Eve" } },
                    { day: 18, name: { si: "සිංහල හා හින්දු අලුත් අවුරුද්ද", en: "Sinhala and Tamil New Year Day" } }
                ]
            }
            // Continue adding years up to 2040 in the same format
        };