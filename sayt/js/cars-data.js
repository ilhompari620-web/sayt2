// ==========================================================================
// Global Auto Portal — To'liq Avtomobillar Katalogi
// Jami: 168 ta model (Rasmlar, fotosuratlar va to'liq texnik xususiyatlar)
// ESLATMA: Har bir avtomobilning "image" qatoriga xohlagan rasm havolasini
// yoki mahalliy rasm yo'lini (masalan: "rasmlar/cobalt.jpg") qo'yishingiz mumkin.
// ==========================================================================

const carsData = [
    {
        brand: "Uzbekistan Chevrolet",
        year: "2012-hozirgacha",
        name: "Chevrolet Cobalt",
        type: "Klassik Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Chevrolet_Cobalt_sedan_--_03-16-2012.JPG/330px-Chevrolet_Cobalt_sedan_--_03-16-2012.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L S-TEC III",
        power: "106 ot kuchi",
        accel: "0-100 km/s: 11.5 soniya",
        maxSpeed: "170 km/soat",
        transmission: "5-mexanik / 6-avtomat",
        fuel: "Benzin (AI-92/95)",
        desc: "O'zbekistonda eng ommabop va xalqchil sedan. Katta yukxonasiga (563 litr) ega, ishonchli va oilaviy foydalanish uchun eng qulay avtomobil."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2008-2024",
        name: "Chevrolet Lacetti (Gentra)",
        type: "Komfort Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/GM_Daewoo_Lacetti_5X_J200_Poly_Silver_%281%29.jpg/330px-GM_Daewoo_Lacetti_5X_J200_Poly_Silver_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L E-TEC II",
        power: "107 ot kuchi",
        accel: "0-100 km/s: 11.9 soniya",
        maxSpeed: "180 km/soat",
        transmission: "5-mexanik / 6-avtomat",
        fuel: "Benzin (AI-92)",
        desc: "O'zbekiston bozorida uzoq yillardan beri o'z o'rniga ega bo'lgan, mustaqil orqa osma tizimiga ega yumshoq va qulay sedan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2022-hozirgacha",
        name: "Chevrolet Tracker-2",
        type: "Krossover / SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Chevrolet_Tracker_2021_%28front%29.png/330px-Chevrolet_Tracker_2021_%28front%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.2L CSS Prime Turbo",
        power: "132 ot kuchi",
        accel: "0-100 km/s: 10.9 soniya",
        maxSpeed: "185 km/soat",
        transmission: "6-pog'onali avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Zamonaviy dizayn, panoramali lyuk, tejamkor turbo dvigatel va aqlli xavfsizlik tizimlari bilan jihozlangan shahar krossoveri."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2023-hozirgacha",
        name: "Chevrolet Onix",
        type: "Zamonaviy Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/2022_Chevrolet_Onix_RS_1.0_Turbo.jpg/330px-2022_Chevrolet_Onix_RS_1.0_Turbo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.2L Turbo / Atmosferali",
        power: "132 / 90 ot kuchi",
        accel: "0-100 km/s: 10.5 soniya",
        maxSpeed: "185 km/soat",
        transmission: "5-mexanik / 6-avtomat",
        fuel: "Benzin (AI-92/95)",
        desc: "Yangi avlod zamonaviy va yoshlarbop sedan. Multimedia imkoniyatlari va yoqilg'i tejamkorligi bilan ajralib turadi."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2017-hozirgacha",
        name: "Chevrolet Malibu-2 (XL)",
        type: "Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Chevrolet_Malibu_LT_%28IX%2C_Facelift%29_%E2%80%93_f_02112024.jpg/330px-Chevrolet_Malibu_LT_%28IX%2C_Facelift%29_%E2%80%93_f_02112024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L Turbo / 1.5L Turbo",
        power: "253 / 160 ot kuchi",
        accel: "0-100 km/s: 6.9 soniya",
        maxSpeed: "240 km/soat",
        transmission: "9-pog'onali avtomat",
        fuel: "Benzin (AI-95)",
        desc: "O'zbekiston bozoridagi eng nufuzli va tezkor biznes-klass sedani."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2021-hozirgacha",
        name: "Chevrolet Equinox",
        type: "O'rta Krossover (AWD)",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Chevrolet_Equinox_LT_%28III%2C_Facelift%29_%E2%80%93_f_05102022.jpg/330px-Chevrolet_Equinox_LT_%28III%2C_Facelift%29_%E2%80%93_f_05102022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L Turbo (Mild Hybrid)",
        power: "236 ot kuchi",
        accel: "0-100 km/s: 7.8 soniya",
        maxSpeed: "210 km/soat",
        transmission: "9-pog'onali avtomat",
        fuel: "Benzin + Gibrid",
        desc: "To'liq g'ildirakdan tortish (AWD) tizimi va kuchli turbo dvigatelga ega oilaviy krossover."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2019-hozirgacha",
        name: "Chevrolet Tahoe & Traverse",
        type: "Flagman Yo'ltanlamaslar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg/330px-2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.3L V8 / 3.6L V6",
        power: "343 / 318 ot kuchi",
        accel: "0-100 km/s: 7.6 - 8.0 soniya",
        maxSpeed: "195 - 210 km/soat",
        transmission: "9/10-pog'onali avtomat",
        fuel: "Benzin",
        desc: "7-8 o'rindiqli ulkan va hashamatli Amerika uslubidagi yo'ltanlamaslar."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "1996-hozirgacha",
        name: "Chevrolet Damas & Labo",
        type: "Mikroavtobus / Kichik Yuk",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Suzuki_Carry_Truck_KC_4WD_DA16T.JPG/330px-Suzuki_Carry_Truck_KC_4WD_DA16T.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.8L Benzin",
        power: "38 ot kuchi",
        accel: "0-100 km/s: 20+ soniya",
        maxSpeed: "100 km/soat",
        transmission: "5-mexanik",
        fuel: "Benzin / Gaz",
        desc: "Kichik biznes, yuk tashish va yo'lovchi qatnovi uchun O'zbekistonda eng ko'p talab qilinadigan tijorat avtomobillari."
    },
    {
        brand: "Lamborghini",
        year: "1964 (1-MODEL)",
        name: "Lamborghini 350 GT",
        type: "1-Tarixiy Grand Tourer",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/1965_Lamborghini_350_GT_HCC24.jpg/330px-1965_Lamborghini_350_GT_HCC24.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L Bizzarrini V12",
        power: "280 ot kuchi",
        accel: "0-100 km/s: 6.8 soniya",
        maxSpeed: "254 km/soat",
        transmission: "5-pog'onali ZF mexanik",
        fuel: "Benzin",
        desc: "Ferruccio Lamborghini tomonidan yaratilgan eng birinchi seriyali avtomobil! Ferrari'ga raqobatchi sifatida ishlab chiqarilgan."
    },
    {
        brand: "Lamborghini",
        year: "1966-1973",
        name: "Lamborghini Miura P400 SV",
        type: "Dunyodagi 1-Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/1971_Lamborghini_Miura_P400_SV.jpg/330px-1971_Lamborghini_Miura_P400_SV.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.9L V12 (O'rta dvigatelli)",
        power: "385 ot kuchi",
        accel: "0-100 km/s: 5.5 soniya",
        maxSpeed: "290 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Dvigateli o'rta qismda joylashgan dunyodagi ilk haqiqiy superkar deb tan olingan afsona."
    },
    {
        brand: "Lamborghini",
        year: "1974-1990",
        name: "Lamborghini Countach LP5000 QV",
        type: "Klassik Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Lamborghini_Countach_-_Flickr_-_exfordy_%282%29_%28cropped-2%29.jpg/330px-Lamborghini_Countach_-_Flickr_-_exfordy_%282%29_%28cropped-2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L V12",
        power: "455 ot kuchi",
        accel: "0-100 km/s: 4.8 soniya",
        maxSpeed: "295 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Tepaga ochiluvchi 'qaychi eshiklar' (Scissor doors) dizaynini boshlab bergan afsonaviy model."
    },
    {
        brand: "Lamborghini",
        year: "1990-2001",
        name: "Lamborghini Diablo VT",
        type: "Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/1995_Lamborghini_Diablo_SE_30.jpg/330px-1995_Lamborghini_Diablo_SE_30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.7L / 6.0L V12",
        power: "492 - 575 ot kuchi",
        accel: "0-100 km/s: 3.9 soniya",
        maxSpeed: "335 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "320 km/soatdan yuqori tezlikka chiqa olgan ilk Lamborghini modeli."
    },
    {
        brand: "Lamborghini",
        year: "2001-2010",
        name: "Lamborghini Murciélago LP670-4 SV",
        type: "Flagman V12 Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg/330px-Lamborghini_Murci%C3%A9lago_LP-640_-_Flickr_-_Alexandre_Pr%C3%A9vot_%2840%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L V12 Atmosferali",
        power: "670 ot kuchi",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "342 km/soat",
        transmission: "6-pog'onali e-Gear",
        fuel: "Benzin",
        desc: "Audi nazorati ostida yaratilgan birinchi flagman V12 superkar."
    },
    {
        brand: "Lamborghini",
        year: "2003-2013",
        name: "Lamborghini Gallardo LP570-4",
        type: "V10 Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Lamborghini_Superleggera-20180708.jpg/330px-Lamborghini_Superleggera-20180708.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L V10",
        power: "570 ot kuchi",
        accel: "0-100 km/s: 3.4 soniya",
        maxSpeed: "325 km/soat",
        transmission: "6-pog'onali mexanik / e-Gear",
        fuel: "Benzin",
        desc: "Lamborghini tarixidagi eng ommabop V10 dvigatelli sportkar."
    },
    {
        brand: "Lamborghini",
        year: "2011-2022",
        name: "Lamborghini Aventador SVJ",
        type: "V12 Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Lamborghini_Aventador_S_%2844554%29.jpg/330px-Lamborghini_Aventador_S_%2844554%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L V12 Atmosferali",
        power: "770 ot kuchi",
        accel: "0-100 km/s: 2.8 soniya",
        maxSpeed: "350 km/soat",
        transmission: "7-pog'onali ISR",
        fuel: "Benzin",
        desc: "Faol aerodinamika (ALA) va Nurgurburgring rekordiga ega atmosferali V12 afsonasi."
    },
    {
        brand: "Lamborghini",
        year: "2014-2024",
        name: "Lamborghini Huracán STO",
        type: "Trek V10 Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/2017_Lamborghini_Huracan_LP610.jpg/330px-2017_Lamborghini_Huracan_LP610.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L V10 Atmosferali",
        power: "640 ot kuchi",
        accel: "0-100 km/s: 3.0 soniya",
        maxSpeed: "310 km/soat",
        transmission: "7-pog'onali LDF",
        fuel: "Benzin",
        desc: "Gallardo vorisi bo'lib, o'tkir boshqaruv va poyga bolidi texnologiyalariga ega."
    },
    {
        brand: "Lamborghini",
        year: "2018-hozirgacha",
        name: "Lamborghini Urus Performante",
        type: "Super-SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Lamborghini_Urus_SE_DSC_8524.jpg/330px-Lamborghini_Urus_SE_DSC_8524.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L V8 Twin-Turbo",
        power: "666 ot kuchi",
        accel: "0-100 km/s: 3.3 soniya",
        maxSpeed: "306 km/soat",
        transmission: "8-pog'onali avtomat",
        fuel: "Benzin",
        desc: "Lamborghini'ning zamonaviy super-krossoveri (LM002 yo'ltanlamasining vorisi)."
    },
    {
        brand: "Lamborghini",
        year: "2023-hozirgacha",
        name: "Lamborghini Revuelto (Eng yangi)",
        type: "V12 Gibrid Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg/330px-Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L V12 + 3 Elektr motor",
        power: "1015 ot kuchi",
        accel: "0-100 km/s: 2.5 soniya",
        maxSpeed: "350+ km/soat",
        transmission: "8-pog'onali DCT",
        fuel: "Gibrid (Benzin + Elektr)",
        desc: "Aventador o'rnini bosgan Lamborghini'ning birinchi 1000+ ot kuchili gibrid flagmani."
    },
    {
        brand: "Bugatti",
        year: "1910 (1-MODEL)",
        name: "Bugatti Type 13 (Brescia)",
        type: "1-Tarixiy Poyga Avtomobili",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.3L / 1.5L Inline-4 (16-klapan)",
        power: "30 - 50 ot kuchi",
        accel: "0-100 km/s: ~18 soniya",
        maxSpeed: "125 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Ettore Bugatti tomonidan Molsheim zavodida ishlab chiqarilgan eng birinchi seriyali Bugatti modeli! O'z davrida barcha poygalarda g'olib bo'lgan."
    },
    {
        brand: "Bugatti",
        year: "1924-1931",
        name: "Bugatti Type 35",
        type: "Afsonaviy Grand Prix Bolidi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Bugatti_35%2C_Bj_1924%2C_M_Nicolosi_-_1976.jpg/330px-Bugatti_35%2C_Bj_1924%2C_M_Nicolosi_-_1976.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L / 2.3L Inline-8 Kompressor",
        power: "90 - 140 ot kuchi",
        accel: "0-100 km/s: 6.5 soniya",
        maxSpeed: "215 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Tarixdagi eng muvaffaqiyatli poyga mashinasi — 2000 dan ortiq poygada g'alaba qozongan."
    },
    {
        brand: "Bugatti",
        year: "1927-1933",
        name: "Bugatti Type 41 Royale",
        type: "Qirollik Ultra-Hashamatli Avto",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/R%C3%A9tromobile_2015_-_Bugatti_Royale_Coup%C3%A9_Napol%C3%A9on_-_1929_-_002.jpg/330px-R%C3%A9tromobile_2015_-_Bugatti_Royale_Coup%C3%A9_Napol%C3%A9on_-_1929_-_002.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "12.7L Inline-8 (Samolyot dvigateli)",
        power: "300 ot kuchi",
        accel: "0-100 km/s: ~12 soniya",
        maxSpeed: "200 km/soat",
        transmission: "3-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Uzunligi 6.4 metr bo'lgan, qirollar uchun yaratilgan tarixdagi eng ulkan va qimmatbaho avtomobillardan biri."
    },
    {
        brand: "Bugatti",
        year: "1934-1940",
        name: "Bugatti Type 57SC Atlantic",
        type: "Eksklyuziv Klassika",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Bugatti_Type_57_Atalante_1936.jpg/330px-Bugatti_Type_57_Atalante_1936.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.3L Inline-8 Supercharged",
        power: "200 ot kuchi",
        accel: "0-100 km/s: 8.5 soniya",
        maxSpeed: "200 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Atigi 4 dona yaratilgan, bugungi kunda narxi 100 million dollardan oshadigan avtomobil san'ati durdonasi."
    },
    {
        brand: "Bugatti",
        year: "1991-1995",
        name: "Bugatti EB110 Super Sport",
        type: "90-yillar Superkari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/1995_Bugatti_EB110SS_in_Blu_Bugatti%2C_front_left_%28Greenwich%29.jpg/330px-1995_Bugatti_EB110SS_in_Blu_Bugatti%2C_front_left_%28Greenwich%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L V12 Quad-Turbo",
        power: "610 ot kuchi",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "355 km/soat",
        transmission: "6-pog'onali mexanik",
        fuel: "Benzin",
        desc: "4 ta turbinali V12 dvigatel, karbon shassi va to'liq uzatmali 1990-yillarning eng ilg'or superkari."
    },
    {
        brand: "Bugatti",
        year: "2005-2015",
        name: "Bugatti Veyron 16.4 Super Sport",
        type: "1000+ ot kuchili 1-Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/330px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "8.0L W16 Quad-Turbo",
        power: "1200 ot kuchi",
        accel: "0-100 km/s: 2.5 soniya",
        maxSpeed: "431 km/soat",
        transmission: "7-pog'onali DSG",
        fuel: "Benzin",
        desc: "400 km/soat chegara va 1000 ot kuchidan oshgan dunyodagi birinchi seriyali giperkar."
    },
    {
        brand: "Bugatti",
        year: "2016-2024",
        name: "Bugatti Chiron Super Sport 300+",
        type: "Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/330px-Bugatti_Chiron_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "8.0L W16 Quad-Turbo",
        power: "1600 ot kuchi",
        accel: "0-100 km/s: 2.3 soniya",
        maxSpeed: "490.48 km/soat",
        transmission: "7-pog'onali DSG",
        fuel: "Benzin",
        desc: "300 mil/soat (490 km/soat) tezlik rekordini o'rnatgan afsonaviy W16 giperkari."
    },
    {
        brand: "Bugatti",
        year: "2024-hozirgacha",
        name: "Bugatti Tourbillon (Eng yangi)",
        type: "V16 Gibrid Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Bugatti_Tourbillon.jpg/330px-Bugatti_Tourbillon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "8.3L V16 Atmosferali + 3 Elektr",
        power: "1800 ot kuchi",
        accel: "0-100 km/s: 2.0 soniya",
        maxSpeed: "445 km/soat",
        transmission: "8-pog'onali DCT",
        fuel: "Gibrid (Benzin + Elektr)",
        desc: "Chiron vorisi bo'lib, yangi V16 atmosferali dvigatel va 1800 ot kuchiga ega muhandislik mo'jizasi."
    },
    {
        brand: "Fiat",
        year: "1899 (1-MODEL)",
        name: "Fiat 4 HP (3½ HP)",
        type: "1-Tarixiy Fiat Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Fiat_3%2C5hp_1899.jpg/330px-Fiat_3%2C5hp_1899.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.7L 2-silindrli (Gorizontal)",
        power: "4.2 ot kuchi",
        accel: "0-35 km/s: ~25 soniya",
        maxSpeed: "35 km/soat",
        transmission: "3-pog'onali (orqaga yurish yo'q)",
        fuel: "Benzin",
        desc: "1899-yilda Turin shahrida ishlab chiqarilgan eng birinchi Fiat avtomobili! Atigi 24 dona tayyorlangan."
    },
    {
        brand: "Fiat",
        year: "1936-1955",
        name: "Fiat 500 'Topolino'",
        type: "Klassik Xalq Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/1936Fiat500CoupeTopolino.jpg/330px-1936Fiat500CoupeTopolino.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.57L Inline-4",
        power: "13 ot kuchi",
        accel: "0-80 km/s: ~30 soniya",
        maxSpeed: "85 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "'Kichkina sichqoncha' laqabini olgan, o'z davrining eng kichik ommaviy avtomobillaridan biri."
    },
    {
        brand: "Fiat",
        year: "1957-1975",
        name: "Fiat Nuova 500",
        type: "Afsonaviy Shahar Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/1970_Fiat_500_L_--_2011_DC_1.jpg/330px-1970_Fiat_500_L_--_2011_DC_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.5L 2-silindrli (Orqa dvigatelli)",
        power: "18 ot kuchi",
        accel: "0-90 km/s: ~35 soniya",
        maxSpeed: "95 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Italiya ramziga aylangan, 3.8 million nusxada sotilgan afsonaviy ixcham avtomobil."
    },
    {
        brand: "Fiat",
        year: "1966-1974",
        name: "Fiat 124 (Jiguli VAZ-2101 asosi)",
        type: "Klassik Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Fiat124Luc106.jpg/330px-Fiat124Luc106.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.2L Inline-4",
        power: "60 ot kuchi",
        accel: "0-100 km/s: 17 soniya",
        maxSpeed: "145 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "1967-yil Yevropa 'Yil avtomobili' va sobiq ittifoqda VAZ-2101 ('Kopeyka') yaratilishiga asos bo'lgan mashina."
    },
    {
        brand: "Fiat",
        year: "1980-hozirgacha",
        name: "Fiat Panda (4x4 / Hybrid)",
        type: "Ixcham Xetchbek / Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Fiat_Panda_Easy_1.2.jpg/330px-2018_Fiat_Panda_Easy_1.2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.0L FireFly Mild Hybrid",
        power: "70 ot kuchi",
        accel: "0-100 km/s: 13.9 soniya",
        maxSpeed: "164 km/soat",
        transmission: "6-pog'onali mexanik",
        fuel: "Gibrid / Benzin",
        desc: "Dunyodagi birinchi ko'ndalang dvigatelli to'liq uzatmali kichik avtomobil (Panda 4x4) sifatida mashhur."
    },
    {
        brand: "Fiat",
        year: "2007-hozirgacha",
        name: "Fiat 500 / Abarth 695",
        type: "Zamonaviy Retro Xetchbek",
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.4L T-Jet Turbo (Abarth)",
        power: "180 ot kuchi (Abarth)",
        accel: "0-100 km/s: 6.7 soniya",
        maxSpeed: "225 km/soat",
        transmission: "5-mexanik / Robot",
        fuel: "Benzin / Elektr (500e)",
        desc: "Klassik 1957-yilgi dizaynning zamonaviy talqini va Abarth sport versiyasi."
    },
    {
        brand: "Fiat",
        year: "2015-hozirgacha",
        name: "Fiat Tipo (Egea)",
        type: "Ommabop Sedan / Universal",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Fiat_Tipo_Sedan_Facelift_Leonberg_2022_1X7A0412.jpg/330px-Fiat_Tipo_Sedan_Facelift_Leonberg_2022_1X7A0412.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.4L / 1.6L MultiJet",
        power: "95 - 130 ot kuchi",
        accel: "0-100 km/s: 9.8 soniya",
        maxSpeed: "200 km/soat",
        transmission: "6-mexanik / 6-avtomat",
        fuel: "Benzin / Dizel",
        desc: "Qulay narx, keng salon va tejamkor dvigatelga ega zamonaviy oilaviy avtomobil."
    },
    {
        brand: "Ferrari",
        year: "1947 (1-MODEL)",
        name: "Ferrari 125 S",
        type: "1-Tarixiy Ferrari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/1947-05-11_Piacenza_Ferrari_125_01C_Cortese.jpg/330px-1947-05-11_Piacenza_Ferrari_125_01C_Cortese.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L Colombo V12",
        power: "118 ot kuchi",
        accel: "0-100 km/s: ~9.5 soniya",
        maxSpeed: "210 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Enzo Ferrari nomi ostida ishlab chiqarilgan eng birinchi avtomobil! 1947-yilda Rim Gran-prisida g'olib chiqqan."
    },
    {
        brand: "Ferrari",
        year: "1962-1964",
        name: "Ferrari 250 GTO",
        type: "Afsonaviy Kolleksion Sportkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/1962_Ferrari_250_GTO_SP25.jpg/330px-1962_Ferrari_250_GTO_SP25.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.0L Colombo V12",
        power: "300 ot kuchi",
        accel: "0-100 km/s: 6.1 soniya",
        maxSpeed: "280 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Dunyodagi eng qimmat avtomobil (auksionda 50-70 million dollarga sotilgan)."
    },
    {
        brand: "Ferrari",
        year: "1987-1992",
        name: "Ferrari F40",
        type: "Afsonaviy Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/F40_Ferrari_20090509.jpg/330px-F40_Ferrari_20090509.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.9L V8 Twin-Turbo",
        power: "478 ot kuchi",
        accel: "0-100 km/s: 4.1 soniya",
        maxSpeed: "324 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Enzo Ferrari hayotligida tasdiqlagan eng so'nggi mashina va 320 km/soatdan oshgan ilk seriyali avtomobil."
    },
    {
        brand: "Ferrari",
        year: "2013-2018",
        name: "Ferrari LaFerrari",
        type: "Gibrid Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/330px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.3L V12 + HY-KERS Elektr",
        power: "963 ot kuchi",
        accel: "0-100 km/s: 2.6 soniya",
        maxSpeed: "352 km/soat",
        transmission: "7-pog'onali F1 DCT",
        fuel: "Gibrid",
        desc: "Ferrari'ning birinchi gibrid giperkari."
    },
    {
        brand: "Ferrari",
        year: "2019-hozirgacha",
        name: "Ferrari SF90 Stradale & 812 Competizione",
        type: "Zamonaviy Superkarlar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg/330px-Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L V8 Gibrid / 6.5L V12",
        power: "1000 / 830 ot kuchi",
        accel: "0-100 km/s: 2.5 - 2.8 soniya",
        maxSpeed: "340 km/soat",
        transmission: "8-pog'onali DCT",
        fuel: "Benzin / Gibrid",
        desc: "Ferrari muhandisligining eng yuqori cho'qqisidagi zamonaviy modellar."
    },
    {
        brand: "BMW",
        year: "1929 (1-MODEL)",
        name: "BMW 3/15 (Dixi)",
        type: "1-Tarixiy BMW Avtomobili",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.75L Inline-4",
        power: "15 ot kuchi",
        accel: "0-75 km/s: ~30 soniya",
        maxSpeed: "75 km/soat",
        transmission: "3-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Avval samolyot motorlari va mototsikllar chiqargan BMW kompaniyasining eng birinchi avtomobili."
    },
    {
        brand: "BMW",
        year: "1936-1940",
        name: "BMW 328",
        type: "Klassik Sport Rodster",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/1937_BMW_328_in_Green%2C_front_left_%28Greenwich_2025%29.jpg/330px-1937_BMW_328_in_Green%2C_front_left_%28Greenwich_2025%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L Inline-6",
        power: "80 ot kuchi",
        accel: "0-100 km/s: ~11 soniya",
        maxSpeed: "150 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Mille Miglia poygasida g'olib bo'lgan afsonaviy sport rodster."
    },
    {
        brand: "BMW",
        year: "1998-2003",
        name: "BMW M5 E39",
        type: "Afsonaviy Sport Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/BMW_M5_%28G90%29_IMG_3266.jpg/330px-BMW_M5_%28G90%29_IMG_3266.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.9L V8 (S62)",
        power: "400 ot kuchi",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "250 km/soat",
        transmission: "6-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Avtomobilsozlik tarixidagi eng sevimli V8 sport sedan."
    },
    {
        brand: "BMW",
        year: "2021-hozirgacha",
        name: "BMW M5 CS (F90) & M5 G90",
        type: "Super Sedanlar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/BMW_M5_%28G90%29_IMG_3266.jpg/330px-BMW_M5_%28G90%29_IMG_3266.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.4L V8 Twin-Turbo (+Hybrid G90)",
        power: "635 - 727 ot kuchi",
        accel: "0-100 km/s: 3.0 - 3.5 soniya",
        maxSpeed: "305 km/soat",
        transmission: "8-pog'onali M Steptronic",
        fuel: "Benzin / Gibrid",
        desc: "Zamonaviy M5 avlodining eng qudratli modellari."
    },
    {
        brand: "BMW",
        year: "2020-hozirgacha",
        name: "BMW M3, M4, X5 M & X7",
        type: "Zamonaviy M va X Seriyalar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/BMW_M3_Competition_%28G80%29_IMG_4041.jpg/330px-BMW_M3_Competition_%28G80%29_IMG_4041.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.0L Inline-6 / 4.4L V8",
        power: "510 - 625 ot kuchi",
        accel: "0-100 km/s: 3.5 - 4.7 soniya",
        maxSpeed: "250 - 290 km/soat",
        transmission: "8-pog'onali avtomat",
        fuel: "Benzin",
        desc: "Sport kupe, sedan va hashamatli krossoverlarning eng ilg'or vakillari."
    },
    {
        brand: "Mercedes-Benz",
        year: "1886 (DUNYODAGI 1-AVTO)",
        name: "Benz Patent-Motorwagen",
        type: "Dunyodagi 1-Avtomobil",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Benz_Patent-Motorwagen_Nr_2.jpg/330px-Benz_Patent-Motorwagen_Nr_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.95L 1-silindrli 4-taktli",
        power: "0.75 ot kuchi",
        accel: "Maksimal tezlikkacha ~15 soniya",
        maxSpeed: "16 km/soat",
        transmission: "1-pog'onali kamarli uzatma",
        fuel: "Ligroin (Benzin turi)",
        desc: "Karl Benz tomonidan yaratilgan insoniyat tarixidagi ichki yonuv dvigatelli eng birinchi avtomobil!"
    },
    {
        brand: "Mercedes-Benz",
        year: "1954-1957",
        name: "Mercedes-Benz 300 SL Gullwing",
        type: "Afsonaviy Sportkupe",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Fox_Classic_Car_Collection%2C_2008_%2802%29.JPG/330px-Fox_Classic_Car_Collection%2C_2008_%2802%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.0L Inline-6 (To'g'ridan-to'g'ri purkash)",
        power: "215 ot kuchi",
        accel: "0-100 km/s: 8.8 soniya",
        maxSpeed: "260 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Tepaga ochiluvchi 'Chayka qanoti' eshiklari va o'z davrining eng tezkor seriyali avtomobili."
    },
    {
        brand: "Mercedes-Benz",
        year: "1984-1997",
        name: "Mercedes-Benz E-Class (W124)",
        type: "Afsonaviy 'Millioner' Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/1988_Mercedes-Benz_300d_Diesel_Automatic_3.0_Front.jpg/330px-1988_Mercedes-Benz_300d_Diesel_Automatic_3.0_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L - 5.0L V8 (500E)",
        power: "136 - 326 ot kuchi",
        accel: "0-100 km/s: 6.1 soniya (500E)",
        maxSpeed: "250 km/soat",
        transmission: "4/5-avtomat yoki mexanik",
        fuel: "Benzin / Dizel",
        desc: "Chidamlilik va sifat ramziga aylangan afsonaviy biznes sedan."
    },
    {
        brand: "Mercedes-Benz",
        year: "1979-hozirgacha",
        name: "Mercedes-AMG G 63 (Gelandewagen)",
        type: "Hashamatli Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Mercedes-Benz_W463_G_350_BlueTEC_01.jpg/330px-Mercedes-Benz_W463_G_350_BlueTEC_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L V8 Biturbo",
        power: "585 ot kuchi",
        accel: "0-100 km/s: 4.5 soniya",
        maxSpeed: "240 km/soat",
        transmission: "9-pog'onali avtomat",
        fuel: "Benzin",
        desc: "45 yildan ortiq vaqt davomida o'zining klassik shaklini saqlab kelayotgan nufuzli yo'ltanlamas."
    },
    {
        brand: "Mercedes-Benz",
        year: "2020-hozirgacha",
        name: "Mercedes-Benz S-Class (W223) & AMG GT",
        type: "Flagman Sedan va Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Mercedes-Benz_W223_IMG_3951.jpg/330px-Mercedes-Benz_W223_IMG_3951.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.0L - 4.0L V8 Biturbo",
        power: "435 - 730 ot kuchi",
        accel: "0-100 km/s: 3.2 - 4.4 soniya",
        maxSpeed: "250 - 325 km/soat",
        transmission: "9G-TRONIC / 7-DCT",
        fuel: "Benzin / Gibrid",
        desc: "Dabdaba va sport texnologiyalarining zamonaviy cho'qqisi."
    },
    {
        brand: "Porsche",
        year: "1948 (1-MODEL)",
        name: "Porsche 356 'No. 1' Roadster",
        type: "1-Tarixiy Porsche",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Porsche_356_No._1_Roadster_Retro_Classics_2020_IMG_0048.jpg/330px-Porsche_356_No._1_Roadster_Retro_Classics_2020_IMG_0048.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.1L Flat-4 (Havo sovutishli)",
        power: "35 ot kuchi",
        accel: "0-100 km/s: ~19 soniya",
        maxSpeed: "135 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Ferry Porsche tomonidan Avstriyada yig'ilgan eng birinchi Porsche avtomobili."
    },
    {
        brand: "Porsche",
        year: "1964-hozirgacha",
        name: "Porsche 911 (901 dan 992 GT3 RS gacha)",
        type: "Afsonaviy Sportkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg/330px-Porsche_911_No_1000000%2C_70_Years_Porsche_Sports_Car%2C_Berlin_%281X7A3888%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L dan 4.0L Flat-6 gacha",
        power: "130 - 650 ot kuchi",
        accel: "0-100 km/s: 2.7 - 3.2 soniya (992)",
        maxSpeed: "296 - 330 km/soat",
        transmission: "PDK / Mexanik",
        fuel: "Benzin",
        desc: "60 yildan beri orqa dvigatelli sxemani mukammallashtirib kelayotgan tarixdagi eng mashhur sportkar."
    },
    {
        brand: "Porsche",
        year: "2002-hozirgacha",
        name: "Porsche Cayenne, Panamera & Taycan",
        type: "SUV, Fastback va Elektro",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg/330px-2020_Porsche_Taycan_4S_79kWh_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L V8 Twin-Turbo / 800V Elektro",
        power: "630 - 761 ot kuchi",
        accel: "0-100 km/s: 2.8 - 3.3 soniya",
        maxSpeed: "260 - 315 km/soat",
        transmission: "PDK / Tiptronic",
        fuel: "Benzin / Elektr",
        desc: "Porsche brendini dunyodagi eng daromadli sport markaga aylantirgan zamonaviy oilaviy va elektr modellar."
    },
    {
        brand: "Volkswagen",
        year: "1938 (1-MODEL)",
        name: "Volkswagen Beetle (Type 1 'Qo'ng'iz')",
        type: "1-Tarixiy Xalq Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/VW_K%C3%A4fer_Baujahr_1966.jpg/330px-VW_K%C3%A4fer_Baujahr_1966.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.1L - 1.6L Flat-4",
        power: "25 - 50 ot kuchi",
        accel: "0-100 km/s: ~27 soniya",
        maxSpeed: "115 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "21.5 million nusxada ishlab chiqarilgan dunyodagi eng ommaviy klassik avtomobil."
    },
    {
        brand: "Volkswagen",
        year: "1974-hozirgacha",
        name: "Volkswagen Golf (Mk1 dan Mk8 R gacha)",
        type: "Xetchbek Etaloni",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg/330px-2020_Volkswagen_Golf_Style_1.5_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L TSI Turbo (Golf R)",
        power: "320 ot kuchi",
        accel: "0-100 km/s: 4.7 soniya",
        maxSpeed: "270 km/soat",
        transmission: "7-pog'onali DSG",
        fuel: "Benzin",
        desc: "'Golf-klass' tushunchasini yaratgan va 37 milliondan ortiq sotilgan afsonaviy xetchbek."
    },
    {
        brand: "Volkswagen",
        year: "2002-hozirgacha",
        name: "Volkswagen Passat, Touareg & ID.4",
        type: "Sedan, SUV va Elektromobil",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9b/VW_Passat_Variant_Elegance_%28B9%29_%E2%80%93_f_18052025.jpg/330px-VW_Passat_Variant_Elegance_%28B9%29_%E2%80%93_f_18052025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L TSI / 3.0L V6 / Elektro",
        power: "190 - 462 ot kuchi",
        accel: "0-100 km/s: 5.1 - 7.7 soniya",
        maxSpeed: "160 - 250 km/soat",
        transmission: "DSG / Avtomat",
        fuel: "Benzin / Gibrid / Elektr",
        desc: "Volkswagen'ning oilaviy biznes sedan, flagman krossover va zamonaviy elektromobil modellari."
    },
    {
        brand: "Audi",
        year: "1910 (1-MODEL)",
        name: "Audi Type A Sport-Phaeton",
        type: "1-Tarixiy Audi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/75/Audi_Typ_A.JPG/330px-Audi_Typ_A.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.6L Inline-4",
        power: "22 ot kuchi",
        accel: "0-75 km/s: ~25 soniya",
        maxSpeed: "75 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "August Horch tomonidan 'Audi' brendi ostida yaratilgan ilk avtomobil."
    },
    {
        brand: "Audi",
        year: "1980-1991",
        name: "Audi Quattro (Ur-Quattro)",
        type: "To'liq uzatmali Ralli Afsonasi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/1985_Audi_Quattro.jpg/330px-1985_Audi_Quattro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.1L Inline-5 Turbo",
        power: "200 ot kuchi",
        accel: "0-100 km/s: 7.1 soniya",
        maxSpeed: "220 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Ralli poygalarida to'liq g'ildirakdan tortish (Quattro) tizimi ustunligini isbotlagan afsona."
    },
    {
        brand: "Audi",
        year: "2006-hozirgacha",
        name: "Audi R8 V10, RS6 Avant & RS Q8",
        type: "Zamonaviy RS va Superkarlar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg/330px-2018_Audi_R8_Coupe_V10_plus_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L V10 / 4.0L V8 Twin-Turbo",
        power: "600 - 630 ot kuchi",
        accel: "0-100 km/s: 3.1 - 3.8 soniya",
        maxSpeed: "305 - 331 km/soat",
        transmission: "S tronic / Tiptronic",
        fuel: "Benzin",
        desc: "Audi Sport bo'linmasining eng tezkor superkar, universal va krossover modellari."
    },
    {
        brand: "Toyota & Lexus",
        year: "1936 (1-MODEL)",
        name: "Toyota Model AA",
        type: "1-Tarixiy Toyota Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/1936_Toyoda_Model_AA_03.jpg/330px-1936_Toyoda_Model_AA_03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.4L Inline-6",
        power: "62 ot kuchi",
        accel: "0-100 km/s: ~22 soniya",
        maxSpeed: "110 km/soat",
        transmission: "3-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Kiichiro Toyoda boshchiligida yaratilgan Toyota kompaniyasining birinchi yengil avtomobili."
    },
    {
        brand: "Toyota & Lexus",
        year: "1951-hozirgacha",
        name: "Toyota Land Cruiser (BJ dan LC 300 gacha)",
        type: "Afsonaviy Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png/330px-2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L V6 Twin-Turbo (LC 300)",
        power: "415 ot kuchi",
        accel: "0-100 km/s: 6.7 soniya",
        maxSpeed: "210 km/soat",
        transmission: "10-pog'onali avtomat",
        fuel: "Benzin / Dizel",
        desc: "70 yildan ortiq vaqt davomida dunyoning eng og'ir hududlarini zabt etib kelayotgan ishonchlilik ramzi."
    },
    {
        brand: "Toyota & Lexus",
        year: "1966-hozirgacha",
        name: "Toyota Corolla, Camry & Supra GR",
        type: "Ommabop va Sport Modellar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/2020_Toyota_GR_Supra_%28United_States%29.png/330px-2020_Toyota_GR_Supra_%28United_States%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.8L - 3.5L V6 / 3.0L Turbo",
        power: "140 - 382 ot kuchi",
        accel: "0-100 km/s: 3.9 - 9.5 soniya",
        maxSpeed: "190 - 250 km/soat",
        transmission: "Avtomat / Variator",
        fuel: "Benzin / Gibrid",
        desc: "Dunyoda eng ko'p sotilgan Corolla (50 mln+), biznes-klass Camry va afsonaviy Supra sportkari."
    },
    {
        brand: "Ford & Amerikan",
        year: "1908 (1-OMMAVIY AVTO)",
        name: "Ford Model T",
        type: "Konveyerda chiqqan 1-Avto",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/1925_Ford_Model_T_touring.jpg/330px-1925_Ford_Model_T_touring.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.9L Inline-4",
        power: "20 ot kuchi",
        accel: "0-65 km/s: ~25 soniya",
        maxSpeed: "72 km/soat",
        transmission: "2-pog'onali planetar",
        fuel: "Benzin / Etanol",
        desc: "Henry Ford tomonidan konveyer usulida ishlab chiqarilib, avtomobilni oddiy xalq uchun ochiq qilgan tarixiy model."
    },
    {
        brand: "Ford & Amerikan",
        year: "1964-hozirgacha",
        name: "Ford Mustang Shelby GT500",
        type: "Afsonaviy Muscle Car",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/1965_Shelby_Mustang_GT350_%2820984175008%29_%28cropped%29.jpg/330px-1965_Shelby_Mustang_GT350_%2820984175008%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L V8 Supercharged",
        power: "760 ot kuchi",
        accel: "0-100 km/s: 3.3 soniya",
        maxSpeed: "290 km/soat",
        transmission: "7-pog'onali DCT",
        fuel: "Benzin",
        desc: "Amerika 'Pony Car' madaniyatining asoschisi va eng quvvatli zamonaviy versiyasi."
    },
    {
        brand: "Ford & Amerikan",
        year: "1953-hozirgacha",
        name: "Chevrolet Corvette (C1 dan C8 Z06 gacha)",
        type: "Amerika Sportkari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg/330px-Chevrolet_Corvette_C8_IAA_2021_1X7A0156.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.5L V8 Flat-Plane (C8 Z06)",
        power: "670 ot kuchi",
        accel: "0-100 km/s: 2.6 soniya",
        maxSpeed: "315 km/soat",
        transmission: "8-pog'onali DCT",
        fuel: "Benzin",
        desc: "1953-yildan beri uzluksiz ishlab chiqarilayotgan Amerikaning bosh sportkari."
    },
    {
        brand: "Hyundai & Kia",
        year: "1975 (1-KOREYS AVTO)",
        name: "Hyundai Pony (1-model) & Sonata / Santa Fe",
        type: "Koreya Avtosanoati",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Hyundai_Pony_II_CX_1400_GLS_110_Beige_%281%29.jpg/330px-Hyundai_Pony_II_CX_1400_GLS_110_Beige_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.2L (Pony) -> 2.5L Turbo (Zamonaviy)",
        power: "55 - 281 ot kuchi",
        accel: "0-100 km/s: 7.5 soniya (Santa Fe)",
        maxSpeed: "210 km/soat",
        transmission: "8-pog'onali avtomat",
        fuel: "Benzin / Gibrid",
        desc: "1975-yilgi birinchi Hyundai Pony modelidan boshlab bugungi zamonaviy Sonata va Santa Fe modellari."
    },
    {
        brand: "Hyundai & Kia",
        year: "2020-hozirgacha",
        name: "Kia K5, Carnival & EV6 GT",
        type: "Zamonaviy Kia Modellari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/2022_Kia_K5_GT-Line_in_Pacific_Blue%2C_Front_Left%2C_09-05-2022.jpg/330px-2022_Kia_K5_GT-Line_in_Pacific_Blue%2C_Front_Left%2C_09-05-2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.5L / 3.5L V6 / Elektro",
        power: "194 - 585 ot kuchi",
        accel: "0-100 km/s: 3.5 soniya (EV6 GT)",
        maxSpeed: "260 km/soat",
        transmission: "Avtomat / Reduktor",
        fuel: "Benzin / Elektr",
        desc: "O'zbekistonda va jahonda ommabop Kia biznes sedan, miniven va elektromobillari."
    },
    {
        brand: "BYD",
        year: "2005-hozirgacha",
        name: "BYD F3 (1-model) -> Song Plus, Han & Yangwang U8",
        type: "Xitoy Gibrid va Elektromobillari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/2009_BYD_F3_1.5L%2C_front_8.3.18.jpg/330px-2009_BYD_F3_1.5L%2C_front_8.3.18.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L DM-i Gibrid / 4-motorli Elektro",
        power: "197 - 1197 ot kuchi",
        accel: "0-100 km/s: 3.6 - 7.9 soniya",
        maxSpeed: "180 - 200 km/soat",
        transmission: "E-CVT / Reduktor",
        fuel: "Gibrid / Elektr",
        desc: "BYD'ning 2005-yilgi ilk F3 modelidan tortib suvda suza oladigan 1197 ot kuchili Yangwang U8 giper-yo'ltanlamasigacha."
    },
    {
        brand: "Tesla",
        year: "2008-2012",
        name: "Tesla Roadster (1-Gen)",
        type: "1-Elektr Sportkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Roadster_San_Diego.jpg/330px-Roadster_San_Diego.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Elektr motor + 53 kVt/soat Li-ion batareya",
        power: "248 ot kuchi",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "201 km/soat",
        transmission: "1-pog'onali redaktor",
        fuel: "Elektr (393 km masofa)",
        desc: "Lotus Elise shassisi asosida qurilgan Tesla kompaniyasining tarixdagi eng birinchi seriyali elektromobili."
    },
    {
        brand: "Tesla",
        year: "2012-hozirgacha",
        name: "Tesla Model S",
        type: "Flagman Elektro Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg/330px-Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki yoki uchta elektr motor (AWD)",
        power: "670 - 1020 ot kuchi (Plaid)",
        accel: "0-100 km/s: 2.1 soniya (Plaid)",
        maxSpeed: "322 km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (600 - 637 km masofa)",
        desc: "Dunyoda premium elektromobillar bozorini inqilob qilgan, avtopilot va super tezlanishga ega flagman sedan."
    },
    {
        brand: "Tesla",
        year: "2015-hozirgacha",
        name: "Tesla Model X",
        type: "Hashamatli Elektro SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/330px-2017_Tesla_Model_X_100D_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki yoki uchta elektr motor (AWD)",
        power: "670 - 1020 ot kuchi (Plaid)",
        accel: "0-100 km/s: 2.6 soniya",
        maxSpeed: "262 km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (535 - 560 km masofa)",
        desc: "Orqa eshiklari 'Falcon Wing' (lochin qanoti) shaklida yuqoriga ochiladigan ulkan va tezkor oilaviy krossover."
    },
    {
        brand: "Tesla",
        year: "2017-hozirgacha",
        name: "Tesla Model 3",
        type: "Kompakt Elektro Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg/330px-Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Bir yoki ikki motorli (RWD / AWD)",
        power: "283 - 510 ot kuchi (Performance)",
        accel: "0-100 km/s: 3.1 soniya",
        maxSpeed: "261 km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (500 - 629 km masofa)",
        desc: "Dunyodagi eng ko'p sotiladigan ommaviy va hamyonbop elektromobillardan biri."
    },
    {
        brand: "Tesla",
        year: "2020-hozirgacha",
        name: "Tesla Model Y",
        type: "Kompakt Krossover SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Tesla_Model_Y_Premium_%28Facelift%29_%E2%80%93_f_05052026.jpg/330px-Tesla_Model_Y_Premium_%28Facelift%29_%E2%80%93_f_05052026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Bir yoki ikki motorli (RWD / AWD)",
        power: "295 - 514 ot kuchi (Performance)",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "250 km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (455 - 565 km masofa)",
        desc: "Model 3 platformasida qurilgan, dunyo bo'ylab eng ko'p talab qilinadigan krossover."
    },
    {
        brand: "Tesla",
        year: "2023-hozirgacha",
        name: "Tesla Cybertruck",
        type: "Futuristik Zirhli Pikap",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/2024_Tesla_Cybertruck_Foundation_Series%2C_front_left_%28Greenwich%29.jpg/330px-2024_Tesla_Cybertruck_Foundation_Series%2C_front_left_%28Greenwich%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Uchta elektr motor (Cyberbeast)",
        power: "845 ot kuchi",
        accel: "0-100 km/s: 2.7 soniya",
        maxSpeed: "209 km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (515 km masofa)",
        desc: "Zanglamaydigan po'latdan yasalgan, o'q o'tkazmaydigan korpusli va kosmik dizayndagi pikap."
    },
    {
        brand: "Tesla",
        year: "Kelajak / Konsepsiya",
        name: "Tesla Roadster (2-Gen) + SpaceX Package",
        type: "Uchuvchi / Hover Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/NextGenTeslaRoadster_%28cropped%29.jpg/330px-NextGenTeslaRoadster_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3 ta elektr motor + SpaceX sovuq gaz reaktiv dvigatellari",
        power: "1000+ ot kuchi",
        accel: "0-100 km/s: 1.1 soniya",
        maxSpeed: "400+ km/soat",
        transmission: "Reduktor",
        fuel: "Elektr (1000 km masofa batareya)",
        desc: "Elon Musk va'da qilganidek, havodan qisqa muddatga ko'tarilish (hover/uchish qobiliyati) va kosmik reaktiv texnologiyalar bilan jihozlanishi kutilayotgan eng so'nggi futuristik Tesla konsepti."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "1996-2004",
        name: "Daewoo Tico",
        type: "Ixcham Mini-Xetchbek",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Daewoo_Tico_vl_%28cropped%29.png/330px-Daewoo_Tico_vl_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.8L F8C (3-silindr)",
        power: "41 ot kuchi",
        accel: "0-100 km/s: 17.5 soniya",
        maxSpeed: "143 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin (AI-80/91)",
        desc: "Asaka avtomobil zavodida 1996-yil mart oyida konveyerdan chiqqan O'zbekiston avtomobilsozlik tarixidagi eng birinchi seriyali model. Juda kam yoqilg'i sarfi (4-5 litr) va chaqqonligi bilan xalq mehrini qozongan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "1996-hozirgacha",
        name: "Daewoo Damas & Labo (Klassik)",
        type: "Mini-ven va Yuk tashuvchi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Suzuki_Carry_Truck_KC_4WD_DA16T.JPG/330px-Suzuki_Carry_Truck_KC_4WD_DA16T.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.8L F8C / 0.8L Inyektor",
        power: "38 ot kuchi",
        accel: "0-100 km/s: 24.0 soniya",
        maxSpeed: "115 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin / Metan gaz",
        desc: "O'zbekiston kichik biznesi, qatnov va yuk tashuvining 30 yildan beri ajralmas tayanchi. 7-8 kishilik sig'imga va tengsiz chidamlilikka ega mehnatkash transport."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "1996-2008",
        name: "Daewoo Nexia-1 (SOHC / DOHC)",
        type: "Afsonaviy Xalq Sedani",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/20101003_daewoo_lemans_1.jpg/330px-20101003_daewoo_lemans_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L G15MF (SOHC) / 1.5L A15MF (DOHC 16V)",
        power: "75 / 85 ot kuchi",
        accel: "0-100 km/s: 12.2 soniya",
        maxSpeed: "175 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin (AI-80/91)",
        desc: "O'zbekiston mustaqillik yillarining eng mashhur, salobatli va orzu qilingan sedani. Opel Kadett E platformasida yaratilgan, katta yukxona va mustahkam podveskaga ega."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2001-2018",
        name: "Daewoo Matiz (Best & Standard)",
        type: "Shahar Mini-Avtomobili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/2020_Chevrolet_Spark_LS%2C_front_right%2C_09-07-2024.jpg/330px-2020_Chevrolet_Spark_LS%2C_front_right%2C_09-07-2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "0.8L F8CV (3-sil) / 1.0L B10S (4-sil Best)",
        power: "52 / 64 ot kuchi",
        accel: "0-100 km/s: 15.2 soniya",
        maxSpeed: "144 / 152 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin (AI-80/91)",
        desc: "Italdesign (Giorgetto Giugiaro) dizayni asosida yaratilgan juda qulay va tejamkor shahar avtomobili. O'zbekistonda millionlab insonlarning birinchi shaxsiy avtoulovi bo'lgan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2008-2016",
        name: "Daewoo Nexia-2",
        type: "Restayling Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/20101003_daewoo_lemans_1.jpg/330px-20101003_daewoo_lemans_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L SOHC / 1.6L DOHC (F16D3 Lacetti)",
        power: "80 / 109 ot kuchi",
        accel: "0-100 km/s: 11.0 soniya",
        maxSpeed: "185 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin (AI-80/91/92)",
        desc: "Nexia modelining tubdan yangilangan optika, agressiv bamper va zamonaviy interyerga ega ikkinchi avlodi. Ayniqsa 1.6 16V DOHC dvigateli bilan katta dinamika ko'rsatgan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2010-2023",
        name: "Chevrolet Spark (M300)",
        type: "Zamonaviy Xetchbek",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/2020_Chevrolet_Spark_LS%2C_front_right%2C_09-07-2024.jpg/330px-2020_Chevrolet_Spark_LS%2C_front_right%2C_09-07-2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.0L B10D / 1.25L B12D2 DOHC",
        power: "68 / 85 ot kuchi",
        accel: "0-100 km/s: 12.9 soniya",
        maxSpeed: "162 km/soat",
        transmission: "5-mexanik / 4-avtomat (Aisin)",
        fuel: "Benzin (AI-91/92)",
        desc: "O'zbekiston yoshlari va ayollari orasida eng ommalashgan, ixcham, zamonaviy uslubdagi xetchbek. Mototsikl uslubidagi raqamli spidometr paneli va qulay avtomat karobkasi bilan mashhur."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2015-2022",
        name: "Chevrolet Nexia-3 (Ravon R3)",
        type: "Zamonaviy Shahar Sedani",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L B15D2 (S-TEC III)",
        power: "106 ot kuchi",
        accel: "0-100 km/s: 11.6 soniya",
        maxSpeed: "178 km/soat",
        transmission: "5-mexanik / 6-avtomat",
        fuel: "Benzin (AI-92)",
        desc: "Chevrolet Aveo T250 platformasida ishlab chiqarilgan, barqarorlikni boshqarish (ESP) va 6-pog'onali zamonaviy avtomat uzatmalar qutisiga ega ixcham sedan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2007-2018",
        name: "Chevrolet Captiva (Captiva 1, 2, 3, 4)",
        type: "7 O'rindiqli Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Chevrolet_Captiva_LTZ_2.2_D_4WD_%28Facelift%29_%E2%80%93_Frontansicht%2C_18._M%C3%A4rz_2012%2C_Wuppertal.jpg/330px-Chevrolet_Captiva_LTZ_2.2_D_4WD_%28Facelift%29_%E2%80%93_Frontansicht%2C_18._M%C3%A4rz_2012%2C_Wuppertal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.4L / 3.2L V6 / 3.0L SIDI V6",
        power: "136 / 230 / 258 ot kuchi",
        accel: "0-100 km/s: 8.6 soniya (3.0L V6)",
        maxSpeed: "200 km/soat",
        transmission: "5/6-pog'onali avtomat, AWD",
        fuel: "Benzin (AI-95)",
        desc: "O'zbekiston yo'llarida nufuz, salobat va katta oila uchun eng qulay to'liq privodli (AWD) 7 kishilik krossover sifatida nom qozongan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2006-2012",
        name: "Chevrolet Epica",
        type: "Premium Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/20101023_daewoo_tosca_01.jpg/330px-20101023_daewoo_tosca_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L / 2.5L Qatorli 6-silindr (XK-series)",
        power: "143 / 156 ot kuchi",
        accel: "0-100 km/s: 9.9 soniya",
        maxSpeed: "209 km/soat",
        transmission: "5-mexanik / 5-6 avtomat",
        fuel: "Benzin (AI-92/95)",
        desc: "Ko'ndalang joylashtirilgan noyob qatorli 6 silindrli (Straight-6) dvigatelga ega, tebranishsiz, nihoyatda sokin va yumshoq yuradigan D-klass biznes sedan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2012-2017",
        name: "Chevrolet Malibu-1",
        type: "D-Klass Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Chevrolet_Malibu_LT_%28IX%2C_Facelift%29_%E2%80%93_f_02112024.jpg/330px-Chevrolet_Malibu_LT_%28IX%2C_Facelift%29_%E2%80%93_f_02112024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.4L Ecotec / 3.0L V6 LF1",
        power: "167 / 263 ot kuchi",
        accel: "0-100 km/s: 8.1 soniya (3.0L)",
        maxSpeed: "220 km/soat",
        transmission: "6-pog'onali avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Camaro sportkari uslubidagi to'rtburchak orqa chiroqlari, keng charm saloni va salobatli ko'rinishi bilan O'zbekiston elitasining eng nufuzli avtomobiliga aylangan."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2019-hozirgacha",
        name: "Chevrolet Traverse",
        type: "Premium To'liq O'lchamli SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/2023_Chevrolet_Traverse_LT_3.6_V6_in_Sterling_Gray_Metallic%2C_front_left.jpg/330px-2023_Chevrolet_Traverse_LT_3.6_V6_in_Sterling_Gray_Metallic%2C_front_left.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.6L V6 VVT High Feature",
        power: "318 ot kuchi",
        accel: "0-100 km/s: 7.6 soniya",
        maxSpeed: "215 km/soat",
        transmission: "9-pog'onali avtomat, AWD",
        fuel: "Benzin (AI-95)",
        desc: "5.2 metr uzunlikdagi 7-8 o'rindiqli ulkan Amerika krossoveri. 318 ot kuchi quvvatga ega V6 dvigateli va shohona salon qulayligi bilan ajralib turadi."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2020-hozirgacha",
        name: "Chevrolet Tahoe (V-Avlod)",
        type: "Flagman Ramali Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg/330px-2022_Chevrolet_Tahoe_RST%2C_front_3.7.22.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.3L / 6.2L EcoTec3 V8",
        power: "343 / 426 ot kuchi",
        accel: "0-100 km/s: 6.8 soniya",
        maxSpeed: "225 km/soat",
        transmission: "10-pog'onali avtomat, 4WD",
        fuel: "Benzin (AI-95)",
        desc: "O'zbekiston bozoridagi eng nufuzli va bahaybat yo'ltanlamas. Haqiqiy ramali konstruksiya, Magnetic Ride Control adaptiv osma va V8 dvigatelning gulduragan quvvati."
    },
    {
        brand: "Uzbekistan Chevrolet",
        year: "2019-2023",
        name: "Chevrolet Trailblazer",
        type: "O'rta O'lchamli Ramali Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/2021_Chevrolet_TrailBlazer_RS_AWD%2C_front_7.11.20.jpg/330px-2021_Chevrolet_TrailBlazer_RS_AWD%2C_front_7.11.20.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.6L V6 HFV6",
        power: "277 ot kuchi",
        accel: "0-100 km/s: 8.8 soniya",
        maxSpeed: "200 km/soat",
        transmission: "6-pog'onali avtomat, 4x4",
        fuel: "Benzin (AI-95)",
        desc: "Isuzu D-Max bilan birgalikdagi platformada yaratilgan haqiqiy off-road ramali yo'ltanlamasi. Tog' va og'ir yo'l sharoitlarida tengsiz o'tuvchanlik taqdim etadi."
    },
    {
        brand: "BYD",
        year: "2021-hozirgacha",
        name: "BYD Song Plus DM-i (Champion / Honor Edition)",
        type: "Plug-in Gibrid Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/2023_BYD_Song_Plus_DM-i_%28front%29.jpg/330px-2023_BYD_Song_Plus_DM-i_%28front%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L Xiaoyun + E-Motor (DM-i Gibrid)",
        power: "197 ot kuchi (Gibrid jami)",
        accel: "0-100 km/s: 7.9 soniya",
        maxSpeed: "185 km/soat",
        transmission: "E-CVT elektron reduktor",
        fuel: "Gibrid (1100 km umumiy zaxira, 4.4L/100km)",
        desc: "O'zbekistonda eng ko'p sotilgan va xalq orasida eng sevimli gibrid krossover. Ultra-mustahkam Blade Battery, aylanuvchi 15.6 dyuymli planshet va 1100 km masofa bosib o'tish qobiliyatiga ega."
    },
    {
        brand: "BYD",
        year: "2022-hozirgacha",
        name: "BYD Chazor (Destroyer 05)",
        type: "Tejamkor Gibrid Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/2022_BYD_Destroyer_05.jpg/330px-2022_BYD_Destroyer_05.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L DM-i EHS elektr-gibrid tizimi",
        power: "180 / 197 ot kuchi",
        accel: "0-100 km/s: 7.3 soniya",
        maxSpeed: "185 km/soat",
        transmission: "E-CVT",
        fuel: "Gibrid (3.8 litr / 100 km)",
        desc: "O'zbekistonda Jizzax zavodida yig'ilayotgan xaridorgir va qulay sedan. To'liq bitta bak va quvvat bilan 1200 km dan ortiq yo'l yuradi, shahar taksilari va oilaviy hayot uchun eng yaxshi tejamkor yechim."
    },
    {
        brand: "BYD",
        year: "2020-hozirgacha",
        name: "BYD Han EV & DM-p",
        type: "Premium Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/2023_BYD_Han_DM-i_%28facelift%29%2C_front_8.17.23.jpg/330px-2023_BYD_Han_DM-i_%28facelift%29%2C_front_8.17.23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (AWD) / DM-p Turbo Gibrid",
        power: "517 ot kuchi",
        accel: "0-100 km/s: 3.9 soniya",
        maxSpeed: "200 km/soat",
        transmission: "1-pog'onali to'g'ridan-to'g'ri uzatma",
        fuel: "Elektr (610 km CLTC zaxira) / Gibrid",
        desc: "Dragon Face dizayn uslubidagi nafis va hashamatli biznes sedan. Brembo sport tormozlari, Nappa charm qoplamalari va yuqori xavfsizlikka ega Blade Battery bilan jihozlangan."
    },
    {
        brand: "BYD",
        year: "2022-hozirgacha",
        name: "BYD Seal (AWD Excellence)",
        type: "Elektr Sport-Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/2022_BYD_Seal.jpg/330px-2022_BYD_Seal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (Old + Orqa)",
        power: "530 ot kuchi",
        accel: "0-100 km/s: 3.8 soniya",
        maxSpeed: "200 km/soat",
        transmission: "Elektr reduktor",
        fuel: "Elektr (570 km WLTP masofa)",
        desc: "Tesla Model 3 ning to'g'ridan-to'g'ri raqibi. Cell-to-Body (CTB) texnologiyasi — batareya korpusning ajralmas qismi sifatida xizmat qilib, avtomobilga superkar darajasidagi burilish barqarorligini beradi."
    },
    {
        brand: "BYD",
        year: "2023-hozirgacha",
        name: "BYD Yangwang U8",
        type: "Amfibiya Super-Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/2024_Yangwang_U8_%28front%29.jpg/330px-2024_Yangwang_U8_%28front%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L Turbo Generator + 4 ta mustaqil elektromotor (e4)",
        power: "1197 ot kuchi (1280 Nm)",
        accel: "0-100 km/s: 3.6 soniya",
        maxSpeed: "205 km/soat",
        transmission: "Mustaqil 4-motorli boshqaruv",
        fuel: "Gibrid Range Extender (1000 km zaxira)",
        desc: "Dunyo avtomobilsozligidagi haqiqiy inqilob. Joyida 360 daraja tank kabi burila oladi, gidravlik DiSus-P podveskasi bor va favqulodda vaziyatda suv ustida 30 daqiqa qayiq kabi suzib 3 km/s tezlikda harakatlana oladi."
    },
    {
        brand: "BYD",
        year: "2024-hozirgacha",
        name: "BYD Yangwang U9",
        type: "To'liq Elektr Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Yangwang_U9_003_%28resized%29.jpg/330px-Yangwang_U9_003_%28resized%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4 ta kremniy-karbid elektromotor",
        power: "1305 ot kuchi (1680 Nm)",
        accel: "0-100 km/s: 2.36 soniya",
        maxSpeed: "309 km/soat",
        transmission: "To'rtta mustaqil elektr reduktor",
        fuel: "Elektr (80 kVt/s Blade Battery)",
        desc: "DiSus-X intellektual to'liq faol osma tizimiga ega giperkar. U joyida 4 g'ildirak bilan sakray oladi, faqat 3 ta g'ildirakda ham muvozanat saqlab tezlasha oladi va musiqa ostida ritmik raqs tusha oladi."
    },
    {
        brand: "BYD",
        year: "2023-hozirgacha",
        name: "BYD Fangchengbao Leopard 5 (Bao 5)",
        type: "DMO Ramali Off-Road Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Denza_B5_DMO_Granite_Gray_01.jpg/330px-Denza_B5_DMO_Granite_Gray_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L Turbo + 2 ta kuchli elektromotor",
        power: "687 ot kuchi (760 Nm)",
        accel: "0-100 km/s: 4.8 soniya",
        maxSpeed: "180 km/soat",
        transmission: "E-CVT + 3 ta elektron differensial qulf",
        fuel: "Gibrid (1200 km masofa)",
        desc: "Haqiqiy ramali arxitektura va DMO gibrid platformasi. Tog' toshlariga chiqish, loy va qum sahrolarini zabt etish uchun mo'ljallangan ilg'or ofrouder."
    },
    {
        brand: "BYD",
        year: "2024-hozirgacha",
        name: "BYD Song L",
        type: "Fastbek Elektr Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/BYD_Song_L_20231120_%28cropped%29.jpg/330px-BYD_Song_L_20231120_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "AWD Dual Motor",
        power: "517 ot kuchi",
        accel: "0-100 km/s: 4.3 soniya",
        maxSpeed: "201 km/soat",
        transmission: "Elektr reduktor",
        fuel: "Elektr (602 km CLTC masofa)",
        desc: "Sportiv kupe-krossover silueti, ramkasiz eshiklar, tezlikka qarab avtomatik ko'tariladigan elektr orqa antikanot va DiSus-C adaptiv osma tizimi bilan jihozlangan eng chiroyli BYD modellardan biri."
    },
    {
        brand: "Li Auto & Zeekr",
        year: "2022-hozirgacha",
        name: "Li Auto L9 Max (Lixiang L9)",
        type: "VIP Oilaviy Flagman SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Li_Auto_L9_IMG001.jpg/330px-Li_Auto_L9_IMG001.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L 4-silindr Turbo Generator + 2 ta elektromotor",
        power: "449 ot kuchi (620 Nm)",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "180 km/soat",
        transmission: "Elektr to'liq tortish (AWD)",
        fuel: "Gibrid Range Extender (1315 km CLTC)",
        desc: "O'zbekiston bozorida haqiqiy bestseller bo'lgan eng hashamatli 6 o'rindiqli oilaviy yo'ltanlamas. 3 ta ulkan 15.7 dyuymli 3K OLED displey, orqa yo'lovchilar uchun muzlatgich/isitgich, massajli kreslolar va ikki kamerali pnevmopodveska."
    },
    {
        brand: "Li Auto & Zeekr",
        year: "2023-hozirgacha",
        name: "Li Auto L7 Ultra",
        type: "Hashamatli 5 O'rindiqli Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Li_Auto_L7_008.jpg/330px-Li_Auto_L7_008.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L Turbo Generator + 2 ta elektromotor",
        power: "449 ot kuchi",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "180 km/soat",
        transmission: "Elektr to'liq tortish (AWD)",
        fuel: "Gibrid (1360 km CLTC)",
        desc: "Keng va qulay 5 o'rindiqli interyer, 'Malika' (Queen) yotuvchi orqa o'rindiq rejimi, Dolby Atmos audio tizimi va LiDAR asosidagi avtopilot."
    },
    {
        brand: "Li Auto & Zeekr",
        year: "2023-hozirgacha",
        name: "Zeekr 001 FR",
        type: "Giper Shooting Brake",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/2022_Zeekr_001_%28front%29.jpg/330px-2022_Zeekr_001_%28front%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4 ta mustaqil kremniy-karbid SiC elektromotor",
        power: "1265 ot kuchi (1280 Nm)",
        accel: "0-100 km/s: 2.07 soniya (Rolling start)",
        maxSpeed: "280 km/soat",
        transmission: "Mustaqil 4 motorli boshqaruv",
        fuel: "Elektr (100 kVt/soat Qilin batareya, 800V)",
        desc: "Dunyodagi eng tezkor seriyali universal avtomobil. Kimi Raykkonen tomonidan sozlangan trek shassisi, AP Racing 10 porshenli tormozlar va karbon toladan ishlangan to'liq aeropaket."
    },
    {
        brand: "Li Auto & Zeekr",
        year: "2024-hozirgacha",
        name: "Zeekr 009 Grand",
        type: "VIP 4 O'rindiqli Hashamatli Miniven",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Zeekr_009_003.jpg/330px-Zeekr_009_003.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "800V platformali 2 ta elektromotor",
        power: "788 ot kuchi (810 Nm)",
        accel: "0-100 km/s: 3.9 soniya",
        maxSpeed: "230 km/soat",
        transmission: "Elektr reduktor",
        fuel: "Elektr (108 kVt/soat 5C CATL Qilin)",
        desc: "Rolls-Royce panjarasiga o'xshash yoritiluvchi xrom fasad, haydovchi bilan yo'lovchi o'rtasida 43 dyuymli 4K parda-ekran, tabiiy marmar detallari va samolyot birinchi sinf o'rindiqlari."
    },
    {
        brand: "Li Auto & Zeekr",
        year: "2023-hozirgacha",
        name: "Zeekr X (AWD Privilegiya)",
        type: "Premium Shahar Krossoveri",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/2023_Zeekr_X_%28front%29.jpg/330px-2023_Zeekr_X_%28front%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (AWD)",
        power: "428 ot kuchi",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "190 km/soat",
        transmission: "Elektr reduktor",
        fuel: "Elektr (512 km CLTC masofa)",
        desc: "Eshik tutqichlarisiz toza dizayn, B-ustundagi yuzni aniqlash kamerasi, yo'lovchi tomonga sirg'alib o'tuvchi markaziy displey va 50 litrli ko'chma muzlatgich."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "1907-1926",
        name: "Rolls-Royce 40/50 hp (Silver Ghost)",
        type: "Afsonaviy Tarixiy Limuzin",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Rolls-Royce_Silver_Ghost_at_Centenary.jpg/330px-Rolls-Royce_Silver_Ghost_at_Centenary.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "7.0L / 7.4L Qatorli 6-silindr",
        power: "48 - 60 ot kuchi",
        accel: "0-100 km/s: 22.0 soniya",
        maxSpeed: "120 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Avtomobil matbuoti tomonidan 'Dunyodagi eng yaxshi avtomobil' deb tan olingan ilk model. Tebranishsiz, soat kabi tekis ishlashi va kumushrang bo'yog'i uchun Silver Ghost (Kumush sharpasi) deb nomlangan."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2017-hozirgacha",
        name: "Rolls-Royce Phantom VIII",
        type: "Oliy Toifadagi Hashamatli Limuzin",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg/330px-2019_Rolls-Royce_Phantom_V12_Automatic_6.75.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.75L Twin-Turbo V12 N74",
        power: "571 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "250 km/soat (cheklangan)",
        transmission: "8-pog'onali ZF (sun'iy yo'ldosh orqali uzatuvchi)",
        fuel: "Benzin (AI-98)",
        desc: "Yer yuzidagi hashamat va salobatning oliy cho'qqisi. 130 kg ovoz izolyatsiyasi, 'Sehrli gilam' (Magic Carpet Ride) pnevmatik osmasi va torpedodagi buyurtmachi xohishiga ko'ra san'at asari o'rnatiladigan 'The Gallery' vitrinasi."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2020-hozirgacha",
        name: "Rolls-Royce Ghost (II-Avlod)",
        type: "Nufuzli Elita Sedani",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/2022_Rolls-Royce_Ghost_Black_Badge_in_Arctic_White%2C_front_left.jpg/330px-2022_Rolls-Royce_Ghost_Black_Badge_in_Arctic_White%2C_front_left.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.75L Twin-Turbo V12",
        power: "571 ot kuchi (850 Nm)",
        accel: "0-100 km/s: 4.8 soniya",
        maxSpeed: "250 km/soat",
        transmission: "8-avtomat, to'liq g'ildirakli boshqaruv (AWD+AWS)",
        fuel: "Benzin (AI-98)",
        desc: "'Post-Opulence' (kamtarona hashamat) falsafasi. Barcha to'rt g'ildirak buriladi, yoritiluvchi Pantheon panjarasi va 850 dan ortiq yulduzli interyer elementlariga ega."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2018-hozirgacha",
        name: "Rolls-Royce Cullinan (Black Badge)",
        type: "Dunyoning Eng Qimmat Hashamatli SUV'i",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/330px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.75L Twin-Turbo V12",
        power: "600 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 4.9 soniya",
        maxSpeed: "250 km/soat",
        transmission: "8-pog'onali ZF avtomat, AWD",
        fuel: "Benzin (AI-98)",
        desc: "Tarixdagi eng katta olmos (Kullinan) sharafiga nomlangan. Har qanday yo'lsizlikda ham mutlaq qulaylikni saqlaydigan 'Everywhere' tugmasi va orqa yukxonada ochiladigan ikkita charm tomosha kreslosi (Viewing Suite)."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2023-hozirgacha",
        name: "Rolls-Royce Spectre",
        type: "To'liq Elektr Super-Kupe",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/2024_Rolls-Royce_Spectre_in_Midnight_Sapphire_over_Silver%2C_front_left.jpg/330px-2024_Rolls-Royce_Spectre_in_Midnight_Sapphire_over_Silver%2C_front_left.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2 ta sinxron elektromotor (Old + Orqa)",
        power: "585 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 4.5 soniya",
        maxSpeed: "250 km/soat",
        transmission: "1-pog'onali uzatma",
        fuel: "Elektr (102 kVt/soat, 530 km WLTP)",
        desc: "Rolls-Royce tarixidagi ilk to'liq elektr model. Eshiklar ichki qismiga 4796 ta miltillovchi yulduzcha tikilgan 'Starlight Doors' va 0.25 Cd aerodinamik koeffitsiyent."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "1929-1931",
        name: "Bentley 4½ Litre Supercharged (Blower)",
        type: "Tarixiy Le-Man Poygachisi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/1928_Bentley_Saloon_at_Toddington_Railway_Gala%2C_0513_8979023957.jpg/330px-1928_Bentley_Saloon_at_Toddington_Railway_Gala%2C_0513_8979023957.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.4L Qatorli 4-silindr + Amherst Villiers Roots kompressor",
        power: "175 / 242 ot kuchi (Poyga versiyasi)",
        accel: "0-100 km/s: 9.5 soniya",
        maxSpeed: "222 km/soat",
        transmission: "4-pog'onali mexanik",
        fuel: "Poyga benzini",
        desc: "Tim Birkin boshchiligidagi 'Bentley Boys' jamoasining Le-Man poygalarida nom qozongan afsonaviy poyga yirtqichi. Radiator panjarasining oldiga o'rnatilgan bahaybat kompressori bilan mashhur."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2024-hozirgacha",
        name: "Bentley Continental GT Speed (IV-Avlod)",
        type: "Grand Tourer Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Bentley_Continental_GT_First_Edition_%2849919050697%29_%28cropped%29_%28cropped%29.jpg/330px-Bentley_Continental_GT_First_Edition_%2849919050697%29_%28cropped%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L V8 Twin-Turbo + Ultra Performance Gibrid",
        power: "782 ot kuchi (1000 Nm)",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "335 km/soat",
        transmission: "8-pog'onali ikki muftali DCT",
        fuel: "Gibrid / Benzin (AI-98)",
        desc: "Bentley tarixidagi eng qudratli seriyali avtomobil. 782 ot kuchi quvvati bilan W12 dvigatelidan ham kuchliroq bo'lgan gibrid arxitekturasi va aylanuvchi 3 tomonlama 'Bentley Rotating Display'."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2020-hozirgacha",
        name: "Bentley Flying Spur Mulliner W12",
        type: "Hashamatli Sport-Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Bentley_Flying_Spur_W12_Speed_%282019%29_1X7A1636.jpg/330px-Bentley_Flying_Spur_W12_Speed_%282019%29_1X7A1636.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.0L Twin-Turbo W12 TSI",
        power: "635 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 3.8 soniya",
        maxSpeed: "333 km/soat",
        transmission: "8-pog'onali DCT, to'liq tortish",
        fuel: "Benzin (AI-98)",
        desc: "Mulliner ustaxonasining brilliant tikuvli charm bezaklari, kapotdagi qanotlari yorug'lik taratuvchi 'Uchar B' haykalchasi va superkar tezligiga ega ulkan sedan."
    },
    {
        brand: "Rolls-Royce & Bentley",
        year: "2020-hozirgacha",
        name: "Bentley Bentayga Speed",
        type: "Tezkor Hashamatli SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Bentley_Bentayga_V8_%28FL%29_IMG_0005.jpg/330px-Bentley_Bentayga_V8_%28FL%29_IMG_0005.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.0L Twin-Turbo W12",
        power: "635 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 3.9 soniya",
        maxSpeed: "306 km/soat",
        transmission: "8-pog'onali avtomat",
        fuel: "Benzin (AI-98)",
        desc: "Dunyodagi eng tezkor 12 silindrli SUVlardan biri. Bentley Dynamic Ride 48V elektr faol barqarorlashtirish tizimi bilan burilishlarda mutlaqo og'masdan harakatlanadi."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "1992-1998",
        name: "McLaren F1",
        type: "Afsonaviy Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg/330px-1996_McLaren_F1_Chassis_No_63_6.1_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.1L BMW Motorsport S70/2 60° V12",
        power: "627 ot kuchi (650 Nm)",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "386.4 km/soat (Atmosferali rekord)",
        transmission: "6-pog'onali mexanik",
        fuel: "Benzin (AI-98)",
        desc: "Gordon Murray loyihalashtirgan tarixdagi eng buyuk avtomobil. Butunlay uglerod tolasidan ishlangan ilk monokok, haydovchi o'rindig'i markazda joylashgan (3 kishilik), dvigatel bo'lmasi esa issiqlikni qaytarish uchun sof oltin folga bilan qoplangan."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2013-2015",
        name: "McLaren P1",
        type: "Gibrid Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/330px-McLaren_P1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.8L Twin-Turbo V8 + Elektr motor",
        power: "916 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 2.8 soniya",
        maxSpeed: "350 km/soat (cheklangan)",
        transmission: "7-pog'onali SSG muftali",
        fuel: "Gibrid / Benzin (AI-98)",
        desc: "Giperkarlar 'Muqaddas Uchligi' (Holy Trinity) a'zosi. Formula 1 dan olingan DRS (aerodinamik qanotni tushirish) va IPAS (oniy elektr quvvat berish) tizimlari bilan jihozlangan 375 dona nusxali nodir asar."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2023-hozirgacha",
        name: "McLaren 750S",
        type: "Superkar Benchmarki",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/330px-2018_McLaren_720S_V8_S-A_4.0.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8 M840T",
        power: "750 ot kuchi (800 Nm)",
        accel: "0-100 km/s: 2.8 soniya (0-200: 7.2s)",
        maxSpeed: "332 km/soat",
        transmission: "7-pog'onali SSG",
        fuel: "Benzin (AI-98)",
        desc: "720S modelining yanada kuchaytirilgan va 30 kg ga yengillashtirilgan versiyasi. PCC III gidravlik bog'langan podveska va faol havo tormozi (Airbrake)."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2018-2019",
        name: "McLaren Senna",
        type: "Trek Maxlugi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/McLaren_Senna_IMG_3279.jpg/330px-McLaren_Senna_IMG_3279.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8 M840TR",
        power: "800 ot kuchi (800 Nm)",
        accel: "0-100 km/s: 2.8 soniya",
        maxSpeed: "335 km/soat",
        transmission: "7-pog'onali ikki muftali",
        fuel: "Benzin (AI-98)",
        desc: "Buyuk F1 chempioni Ayrton Senna xotirasiga atalgan. Eshiklari shaffof shishali, atigi 1198 kg vaznga ega va 250 km/s tezlikda 800 kg aerodinamik yerga bosish kuchini hosil qiladi."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "1963-1965",
        name: "Aston Martin DB5",
        type: "Afsonaviy Grand Tourer",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Aston_Martin_DB5_%28Skyfall%29.jpg/330px-Aston_Martin_DB5_%28Skyfall%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Qatorli 6-silindrli Tadek Marek",
        power: "282 ot kuchi",
        accel: "0-100 km/s: 8.0 soniya",
        maxSpeed: "233 km/soat",
        transmission: "5-pog'onali ZF mexanik",
        fuel: "Benzin",
        desc: "Jeyms Bond (Agent 007)ning 'Goldfinger' filmida dunyoga mashhur bo'lgan eng taniqli britan klassikasi. Superleggera magniy-alyuminiy quvurli yengil korpusiga ega."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2021-hozirgacha",
        name: "Aston Martin Valkyrie",
        type: "F1 Texnologiyali Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Aston_Martin_Valkyrie_Verification_Prototype_001_Genf_2019_1Y7A5569.jpg/330px-Aston_Martin_Valkyrie_Verification_Prototype_001_Genf_2019_1Y7A5569.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Cosworth 6.5L Atmosferali V12 (11,100 ayl/daq) + Rimac KERS",
        power: "1160 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 2.5 soniya",
        maxSpeed: "355 km/soat",
        transmission: "7-pog'onali Ricardo ketma-ket",
        fuel: "Gibrid / Benzin",
        desc: "F1 afsonaviy muhandisi Adrian Nyuyi tomonidan loyihalashtirilgan. Umumiy og'irligi 1000 kg dan kam, Venturi tunnellari orqali 1800 kg aerodinamik yerga bosish kuchini yaratadi."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2023-hozirgacha",
        name: "Aston Martin DB12",
        type: "Super Tourer",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Aston_Martin_DB12_1X7A1921.jpg/330px-Aston_Martin_DB12_1X7A1921.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8 (AMG kelib chiqishli)",
        power: "680 ot kuchi (800 Nm)",
        accel: "0-100 km/s: 3.6 soniya",
        maxSpeed: "325 km/soat",
        transmission: "8-pog'onali ZF avtomat",
        fuel: "Benzin (AI-98)",
        desc: "Aston Martin DB oilasining 75 yilligiga bag'ishlangan yangi davr flagmani. Bowers & Wilkins audio tizimi, yangi axborot-ko'ngilochar interfeysi va elektron orqa differensial (E-Diff)."
    },
    {
        brand: "McLaren & Aston Martin",
        year: "2022-hozirgacha",
        name: "Aston Martin DBX707",
        type: "Eng Kuchli Lyuks SUV",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/2021_Aston_Martin_DBX_in_Midnight_Blue%2C_front_left.jpg/330px-2021_Aston_Martin_DBX_in_Midnight_Blue%2C_front_left.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8",
        power: "707 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 3.3 soniya",
        maxSpeed: "310 km/soat",
        transmission: "9-pog'onali 'ho'l' muftali sport avtomat",
        fuel: "Benzin (AI-98)",
        desc: "Dunyodagi eng kuchli benzinli hashamatli krossoverlardan biri. Karbon-keramik tormozlar standart jihozlangan va F1 tibbiy avtomobili (Medical Car) sifatida xizmat qiladi."
    },
    {
        brand: "BMW",
        year: "1986-1991",
        name: "BMW M3 (E30)",
        type: "Tarixiy DTM Chempioni",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/BMW_M3_Competition_%28G80%29_IMG_4041.jpg/330px-BMW_M3_Competition_%28G80%29_IMG_4041.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.3L S14 Atmosferali 4-silindr",
        power: "200 / 238 ot kuchi (Sport Evolution)",
        accel: "0-100 km/s: 6.5 soniya",
        maxSpeed: "240 km/soat",
        transmission: "5-pog'onali Getrag 'Dogleg' mexanik",
        fuel: "Benzin (AI-95)",
        desc: "Avtosport tarixida eng ko'p sovrin yutgan afsonaviy birinchi M3. Kengaytirilgan qanotlari, maxsus orqa antikanoti va mukammal 50:50 vazn taqsimoti bilan haqiqiy poygachi."
    },
    {
        brand: "BMW",
        year: "2005-2010",
        name: "BMW M5 (E60)",
        type: "V10 Dvigatelli Super-Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/BMW_M5_%28G90%29_IMG_3266.jpg/330px-BMW_M5_%28G90%29_IMG_3266.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.0L S85B50 Atmosferali V10 (8250 ayl/daq)",
        power: "507 ot kuchi (520 Nm)",
        accel: "0-100 km/s: 4.5 soniya",
        maxSpeed: "305 km/soat (M Driver's)",
        transmission: "7-pog'onali SMG III ketma-ket",
        fuel: "Benzin (AI-98)",
        desc: "Williams F1 jamoasining Formula 1 texnologiyalari asosida yaratilgan dunyodagi birinchi va yagona V10 atmosferali seriyali sedan. Uning 8250 aylanishdagi motor ovozi avtomobil ixlosmandlari orasida eng go'zal simfoniya deb tan olingan."
    },
    {
        brand: "BMW",
        year: "2014-2020",
        name: "BMW i8",
        type: "Futuristik Gibrid Sportkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/2016_BMW_i8.jpg/330px-2016_BMW_i8.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.5L Turbo 3-silindr + Old E-motor",
        power: "374 ot kuchi (570 Nm jami)",
        accel: "0-100 km/s: 4.4 soniya",
        maxSpeed: "250 km/soat",
        transmission: "6-avtomat (orqa) + 2-avtomat (old)",
        fuel: "Gibrid (Plug-in)",
        desc: "Karbon tolali LifeDrive arxitekturasi, kapalak qanotlari kabi yuqoriga ochiluvchi eshiklar va dunyoda birinchi bo'lib lazerli faralar (Laserlight) bilan jihozlangan futuristik sportkar."
    },
    {
        brand: "BMW",
        year: "2020-hozirgacha",
        name: "BMW M8 Competition Gran Coupe",
        type: "4 Eshikli Flagman Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/BMW_M8_Competition_IMG_3364.jpg/330px-BMW_M8_Competition_IMG_3364.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.4L S63 Twin-Turbo V8",
        power: "625 ot kuchi (750 Nm)",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "305 km/soat",
        transmission: "8-pog'onali M Steptronic, M xDrive (2WD drift rejimi)",
        fuel: "Benzin (AI-98)",
        desc: "M oilasining eng qimmat va tezkor flagmani. To'liq tortishdan bir tugma bilan faqat orqa privodga o'tuvchi M xDrive tizimi va hashamatli 4 kishilik interyer."
    },
    {
        brand: "BMW",
        year: "2023-hozirgacha",
        name: "BMW 7-Series / i7 (G70)",
        type: "Ultra-Hashamatli Flagman Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/BMW_7-Series_%28G70%29_750e_IMG_9358.jpg/330px-BMW_7-Series_%28G70%29_750e_IMG_9358.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.4L Mild-Hybrid V8 (760i) / Ikki elektromotor (i7 M70 660 ot kuchi)",
        power: "544 / 660 ot kuchi",
        accel: "0-100 km/s: 3.7 soniya (i7 M70)",
        maxSpeed: "250 km/soat",
        transmission: "8-avtomat / To'g'ridan-to'g'ri uzatma",
        fuel: "Benzin / To'liq Elektr",
        desc: "Shiftidan tushadigan 31.3 dyuymli 8K o'lchamdagi ulkan BMW Theatre Screen kinoteatri, avtomatik ravishda o'zi ochilib-yopiluvchi eshiklar va kristall Interaction Bar paneli."
    },
    {
        brand: "Mercedes-Benz",
        year: "1990-1995",
        name: "Mercedes-Benz 500 E (W124 \"Bo'ri\" / Volchok)",
        type: "Afsonaviy Super-Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/1992_Mercedes-Benz_500E_%28W124.036%29%2C_front_right.jpg/330px-1992_Mercedes-Benz_500E_%28W124.036%29%2C_front_right.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.0L M119 V8 32-klapan",
        power: "326 ot kuchi (480 Nm)",
        accel: "0-100 km/s: 6.1 soniya",
        maxSpeed: "260 km/soat",
        transmission: "4-pog'onali avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Porsche zavodida qo'lda yig'ilgan bo'rtib chiqqan keng qanotli yashirin maxluq ('Bo'ri'). O'z davrida Ferrari va Porsche avtomobillarini quvib o'ta oladigan qulay sedan."
    },
    {
        brand: "Mercedes-Benz",
        year: "1991-1998",
        name: "Mercedes-Benz S-Class (W140 \"Qora qoplon\" / Rubl-sorok)",
        type: "90-yillar Afsonaviy Flagmani",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Mercedes-Benz_S-Klasse_%28W_140%2C_Facelift%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Hilden_%28cropped%29.jpg/330px-Mercedes-Benz_S-Klasse_%28W_140%2C_Facelift%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Hilden_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.0L M120 V12 (600 SEL / S 600)",
        power: "394 ot kuchi (570 Nm)",
        accel: "0-100 km/s: 6.6 soniya",
        maxSpeed: "250 km/soat",
        transmission: "5-pog'onali avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Muhandislik cho'qqisi sifatida hech qanday xarajat tejab o'tirmasdan yaratilgan afsonaviy kema. Ikki qavatli shovqinsiz oynalar, eshik vakuum tortkichlari va tengsiz mustahkamlik."
    },
    {
        brand: "Mercedes-Benz",
        year: "2010-2014",
        name: "Mercedes-Benz SLS AMG",
        type: "Gullwing Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/330px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.2L M159 Atmosferali V8",
        power: "571 ot kuchi (650 Nm)",
        accel: "0-100 km/s: 3.8 soniya",
        maxSpeed: "317 km/soat",
        transmission: "7-pog'onali AMG SPEEDSHIFT DCT",
        fuel: "Benzin (AI-98)",
        desc: "Klassik 1954-yilgi 300 SL afsonasining reenkarnatsiyasi. Qush qanotlari kabi yuqoriga ochiluvchi Gullwing eshiklar va AMG tarixidagi eng zo'r 6.2 litrli atmosferali motor."
    },
    {
        brand: "Mercedes-Benz",
        year: "2022-hozirgacha",
        name: "Mercedes-AMG ONE",
        type: "F1 Dvigatelli Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Mercedes-AMG_One_at_the_2022_Goodwood_Festival_of_Speed.jpg/330px-Mercedes-AMG_One_at_the_2022_Goodwood_Festival_of_Speed.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.6L V6 Turbo E-Gibrid (F1 poyga motori, 11,000 ayl/daq) + 4 elektromotor",
        power: "1063 ot kuchi",
        accel: "0-100 km/s: 2.9 soniya (0-200: 7.0s)",
        maxSpeed: "352 km/soat",
        transmission: "7-pog'onali avtomatlashtirilgan poyga transmissiyasi",
        fuel: "Gibrid (AI-98)",
        desc: "Lyuis Xemiltonning chempion Formula 1 bolidining haqiqiy dvigateli bilan seriyali ko'cha avtomobili. Nyurburgring Shimoliy Halqasini 6 daqiqa 35 soniyada bosib o'tib mutlaq jahon rekordini o'rnatgan."
    },
    {
        brand: "Mercedes-Benz",
        year: "2021-hozirgacha",
        name: "Mercedes-Maybach S 680 4MATIC",
        type: "Oliy Hashamat Sedani",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Maybach_%28logo%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.0L M279 Biturbo V12",
        power: "612 ot kuchi (900 Nm)",
        accel: "0-100 km/s: 4.5 soniya",
        maxSpeed: "250 km/soat",
        transmission: "9G-TRONIC avtomat, 4MATIC to'liq tortish",
        fuel: "Benzin (AI-98)",
        desc: "V12 dvigatelini to'liq tortish (4MATIC) bilan birlashtirgan ilk Maybach. Ikki xil rangli qo'lda bo'yalgan korpus, kumush shampan qadahlari va faol shovqin bekor qilish tizimi."
    },
    {
        brand: "Porsche",
        year: "1986-1993",
        name: "Porsche 959",
        type: "Texnologik Superkar Pioneri",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Porsche_959_%E2%80%93_Frontansicht_%282%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg/330px-Porsche_959_%E2%80%93_Frontansicht_%282%29%2C_21._M%C3%A4rz_2013%2C_D%C3%BCsseldorf.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.85L Twin-Turbo Boxer-6",
        power: "450 ot kuchi (500 Nm)",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "319 km/soat",
        transmission: "6-pog'onali mexanik (G-rejimi bilan)",
        fuel: "Benzin (AI-98)",
        desc: "Ferrari F40 ning asosiy raqibi. Ketma-ket ikkita turbo, elektron boshqariladigan to'liq tortish tizimi (PSK) va balandligi o'zgaruvchan osma bilan o'z zamonasidan 20 yil oldinga o'tib ketgan superkar."
    },
    {
        brand: "Porsche",
        year: "2003-2007",
        name: "Porsche Carrera GT",
        type: "V10 Poyga Motorli Analog Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg/330px-Porsche_Carrera_GT_-_Goodwood_Breakfast_Club_%28July_2008%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.7L Atmosferali V10 (Le-Man poyga loyihasi)",
        power: "612 ot kuchi (590 Nm)",
        accel: "0-100 km/s: 3.9 soniya",
        maxSpeed: "330 km/soat",
        transmission: "6-pog'onali mexanik (Qayin yog'ochli richag)",
        fuel: "Benzin (AI-98)",
        desc: "Uglerod tolasidan ishlangan monokok, keramik mufta (PCCC), hech qanday elektron barqarorlik yordamisiz toza haydash tajribasi va dunyodagi eng jarangdor V10 ovozi."
    },
    {
        brand: "Porsche",
        year: "2013-2015",
        name: "Porsche 918 Spyder",
        type: "Gibrid Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/2015_Porsche_918_Spyder_Platinum_Silver_Metallic_SCD_24.jpg/330px-2015_Porsche_918_Spyder_Platinum_Silver_Metallic_SCD_24.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.6L Atmosferali V8 (9150 ayl/daq) + 2 ta elektromotor",
        power: "887 ot kuchi (1280 Nm)",
        accel: "0-100 km/s: 2.6 soniya",
        maxSpeed: "345 km/soat",
        transmission: "7-pog'onali PDK",
        fuel: "Gibrid / Benzin",
        desc: "Nyurburgringni 7 daqiqadan kam vaqtda (6:57) aylanib chiqqan dunyodagi ilk seriyali avtomobil. Dvigatel tepasidan yuqoriga qaragan 'Top Pipes' olov purkovchi glushiteli bilan mashhur."
    },
    {
        brand: "Porsche",
        year: "2023-hozirgacha",
        name: "Porsche 911 GT3 RS (992)",
        type: "Trek Qonunlari Ustasi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Porsche_992_GT3_1X7A0323.jpg/330px-Porsche_992_GT3_1X7A0323.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Atmosferali Boxer-6 (9000 ayl/daq)",
        power: "525 ot kuchi (465 Nm)",
        accel: "0-100 km/s: 3.2 soniya",
        maxSpeed: "296 km/soat",
        transmission: "7-pog'onali PDK",
        fuel: "Benzin (AI-98)",
        desc: "F1 uslubidagi faol DRS tizimiga ega bahaybat orqa antikanot. 285 km/s tezlikda 860 kg bosim kuchi hosil qiladi va rul ustidagi 4 ta aylanuvchi tugma orqali osma qattiqligini sozlash mumkin."
    },
    {
        brand: "Porsche",
        year: "2024-hozirgacha",
        name: "Porsche Taycan Turbo GT (Weissach Package)",
        type: "Elektr Giper-Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/2020_Porsche_Taycan_4S_79kWh_Front.jpg/330px-2020_Porsche_Taycan_4S_79kWh_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (Kremniy-karbid invertor)",
        power: "1108 ot kuchi (Attack Mode)",
        accel: "0-100 km/s: 2.2 soniya (0-200: 6.4s)",
        maxSpeed: "305 km/soat",
        transmission: "2-pog'onali orqa transmissiya",
        fuel: "Elektr (105 kVt/soat batareya)",
        desc: "Nyurburgringda 7:07 natija ko'rsatib elektromobillar rekordini yangilagan elektr yirtqich. Porsche Active Ride faol osmasi burilishlarda korpusni ichkariga egib barqarorlashtiradi."
    },
    {
        brand: "Ferrari",
        year: "1995-1997",
        name: "Ferrari F50",
        type: "F1 Dvigateli Ko'chada",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/1999_Ferrari_F50.jpg/330px-1999_Ferrari_F50.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.7L Tipo 040 Atmosferali 65° V12 (8500 ayl/daq)",
        power: "520 ot kuchi (471 Nm)",
        accel: "0-100 km/s: 3.8 soniya",
        maxSpeed: "325 km/soat",
        transmission: "6-pog'onali mexanik",
        fuel: "Benzin (AI-98)",
        desc: "Ferrari 50 yillik yubileyiga yaratilgan. Formula 1 1990-yilgi Alain Prost poyga dvigateli to'g'ridan-to'g'ri karbon shassiga mahkamlangan, ochiq targa tomi va haqiqiy poyga his-tuyg'usi."
    },
    {
        brand: "Ferrari",
        year: "2002-2004",
        name: "Enzo Ferrari",
        type: "Nomdor Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Orange_Enzo_Ferrari_%287191948164%29.jpg/330px-Orange_Enzo_Ferrari_%287191948164%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.0L Tipo F140 B Atmosferali 65° V12",
        power: "660 ot kuchi (657 Nm)",
        accel: "0-100 km/s: 3.14 soniya",
        maxSpeed: "355 km/soat",
        transmission: "6-pog'onali F1 elektro-gidravlik",
        fuel: "Benzin (AI-98)",
        desc: "Kompaniya asoschisi Enzo Ferrari sharafiga nomlangan. Mixael Shumaxer sinovlaridan o'tgan aerodinamika, keramik tormozlar va kapalak qanotli eshiklar."
    },
    {
        brand: "Ferrari",
        year: "2009-2015",
        name: "Ferrari 458 Italia",
        type: "Oxirgi Atmosferali V8 Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Ferrari_458_Fort_Worth_June_2016_56_%28Ferrari%29_%28cropped-2%29.jpg/330px-Ferrari_458_Fort_Worth_June_2016_56_%28Ferrari%29_%28cropped-2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.5L Tipo F136 FB V8 (9000 ayl/daq)",
        power: "570 ot kuchi (540 Nm)",
        accel: "0-100 km/s: 3.4 soniya",
        maxSpeed: "325 km/soat",
        transmission: "7-pog'onali Getrag ikki muftali DCT",
        fuel: "Benzin (AI-98)",
        desc: "Ferrari tarixidagi eng mukammal boshqariluvchi va oxirgi tabiiy atmosferali V8 dvigateliga ega superkar. Ruldagi Manettino tugmasi va markaziy 3 ta glushitel trubasi."
    },
    {
        brand: "Ferrari",
        year: "2022-hozirgacha",
        name: "Ferrari Daytona SP3",
        type: "Icona Seriyali Giperkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Ferrari_Daytona_SP3_front_side_at_CF_2022.jpg/330px-Ferrari_Daytona_SP3_front_side_at_CF_2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L F140 HC Atmosferali V12 (9500 ayl/daq)",
        power: "840 ot kuchi (697 Nm)",
        accel: "0-100 km/s: 2.85 soniya",
        maxSpeed: "340 km/soat",
        transmission: "7-pog'onali F1 ikki muftali",
        fuel: "Benzin (AI-98)",
        desc: "1967-yilgi Daytona 24 soatlik poygasidagi tarixiy g'alaba sharafiga atigi 599 dona chiqarilgan san'at durdonasi. Ferrari tarixidagi eng kuchli atmosferali ichki yonuv dvigateli."
    },
    {
        brand: "Ferrari",
        year: "2023-hozirgacha",
        name: "Ferrari Purosangue",
        type: "Ilk 4 Eshikli V12 Super-Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Ferrari_Purosangue_DSC_7008.jpg/330px-Ferrari_Purosangue_DSC_7008.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L Atmosferali F140 IA V12",
        power: "725 ot kuchi (716 Nm)",
        accel: "0-100 km/s: 3.3 soniya",
        maxSpeed: "310 km/soat",
        transmission: "8-pog'onali F1 DCT",
        fuel: "Benzin (AI-98)",
        desc: "'Toza qonli' (Purosangue) deb nomlangan Ferrari tarixidagi birinchi 4 o'rindiqli, qarama-qarshi ochiluvchi 'Welcome' eshiklariga ega va 48V faol podveskali super-krossover."
    },
    {
        brand: "Lamborghini",
        year: "2010-2012",
        name: "Lamborghini Sesto Elemento",
        type: "Uglerod Tolasi Cho'qqisi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/2012_Lamborghini_Sesto_Elemento.jpg/330px-2012_Lamborghini_Sesto_Elemento.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L Atmosferali Odd-Firing V10",
        power: "570 ot kuchi (540 Nm)",
        accel: "0-100 km/s: 2.5 soniya",
        maxSpeed: "350 km/soat",
        transmission: "6-pog'onali e-gear, to'liq tortish",
        fuel: "Benzin (AI-98)",
        desc: "Mendeleyev davriy jadvalidagi 6-element — Uglerod (Carbon) sharafiga atalgan. Shassi, kuzov, g'ildiraklar va kardan mili to'liq uglerod tolasidan yasalgan bo'lib, vazni bor-yo'g'i 999 kg ni tashkil qiladi."
    },
    {
        brand: "Lamborghini",
        year: "2013-2014",
        name: "Lamborghini Veneno",
        type: "Yubiley Giperkari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/330px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L L539 Atmosferali V12",
        power: "750 ot kuchi (690 Nm)",
        accel: "0-100 km/s: 2.8 soniya",
        maxSpeed: "355 km/soat",
        transmission: "7-pog'onali ISR ketma-ket",
        fuel: "Benzin (AI-98)",
        desc: "Lamborghini 50 yillik to'yiga atigi 13 nusxada (4 ta kupe va 9 ta rodster) ishlab chiqarilgan eng yirtqich poyga prototipi. Kosmik jangovar kemalar uslubidagi agressiv aerodinamika."
    },
    {
        brand: "Lamborghini",
        year: "2020",
        name: "Lamborghini Sián FKP 37",
        type: "Superkondensator Gibrid",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg/330px-Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.5L V12 + 48V Superkondensator E-motor",
        power: "819 ot kuchi (720 Nm)",
        accel: "0-100 km/s: 2.8 soniya",
        maxSpeed: "355 km/soat",
        transmission: "7-pog'onali ISR, to'liq tortish",
        fuel: "Gibrid / Benzin",
        desc: "Bologna lahjasida 'Chaqmoq chaqishi' degan ma'noni anglatadi. Akkumulyatordan 3 baravar kuchli va 3 baravar yengil bo'lgan superkondensator texnologiyasiga ega ilk gibrid Lamborghini."
    },
    {
        brand: "Lamborghini",
        year: "2024-hozirgacha",
        name: "Lamborghini Temerario",
        type: "Yangi Avlod Biturbo Gibrid",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Lamborghini_Temerario_IMG_5361.jpg/330px-Lamborghini_Temerario_IMG_5361.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8 (10,000 ayl/daq) + 3 ta elektromotor",
        power: "920 ot kuchi (730 Nm)",
        accel: "0-100 km/s: 2.7 soniya",
        maxSpeed: "343 km/soat",
        transmission: "8-pog'onali ikki muftali DCT",
        fuel: "PHEV Gibrid (AI-98)",
        desc: "Huracán modelining o'rnini egallagan yangi superkar. Seriyali superkarlar orasida misli ko'rilmagan 10,000 aylanishga chiquvchi yassi tirsakli V8 motori va drift rejimi."
    },
    {
        brand: "Toyota & Lexus",
        year: "1967-1970",
        name: "Toyota 2000GT",
        type: "Klassik Yapon Superkari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/TOYOTA_2000GT.jpg/330px-TOYOTA_2000GT.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L 3M Qatorli 6-silindr DOHC (Yamaha)",
        power: "150 ot kuchi",
        accel: "0-100 km/s: 8.4 soniya",
        maxSpeed: "220 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Yaponiyaning birinchi kolleksion superkari. Jeyms Bondning 'You Only Live Twice' filmida suratga tushgan. Hozirda auksionlarda 1 million dollardan qimmatga baholanadi."
    },
    {
        brand: "Toyota & Lexus",
        year: "1993-2002",
        name: "Toyota Supra MK4 (A80)",
        type: "Afsonaviy Tüning Qiroli",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/2020_Toyota_GR_Supra_%28United_States%29.png/330px-2020_Toyota_GR_Supra_%28United_States%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.0L 2JZ-GTE Twin-Turbo Qatorli 6-silindr",
        power: "330 ot kuchi (441 Nm zavod)",
        accel: "0-100 km/s: 4.6 soniya",
        maxSpeed: "250 km/soat",
        transmission: "6-pog'onali Getrag V160 mexanik",
        fuel: "Benzin (AI-95/98)",
        desc: "Cho'yan blokli 2JZ-GTE dvigateli tufayli 1000-1500 ot kuchigacha kuchaytirish mumkin bo'lgan afsonaviy sportkar. 'Forsaj' (Fast & Furious) filmining bosh qahramoni."
    },
    {
        brand: "Toyota & Lexus",
        year: "2021-hozirgacha",
        name: "Toyota Land Cruiser 300 (GR Sport)",
        type: "Afsonaviy Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png/330px-2021_Toyota_Land_Cruiser_300_3.4_ZX_%28Colombia%29_front_view_04.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L V6 Twin-Turbo V35A-FTS / 3.3L Diesel",
        power: "415 ot kuchi (650 Nm)",
        accel: "0-100 km/s: 6.7 soniya",
        maxSpeed: "210 km/soat",
        transmission: "10-pog'onali Direct Shift avtomat",
        fuel: "Benzin (AI-95) / Dizel",
        desc: "Dunyoning eng ishonchli yo'ltanlamasining eng so'nggi avlodi. E-KDSS elektron boshqariluvchi stabilizatorlar, 200 kg ga yengillashtirilgan TNGA-F shassisi va shohona salon."
    },
    {
        brand: "Toyota & Lexus",
        year: "2018-hozirgacha",
        name: "Toyota Century (III-Avlod)",
        type: "Imperator Limuzini",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Toyota_Century%2C_Paris%2C_France.jpg/330px-Toyota_Century%2C_Paris%2C_France.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.0L 2UR-FSE V8 Gibrid",
        power: "431 ot kuchi (Gibrid jami)",
        accel: "0-100 km/s: 6.0 soniya",
        maxSpeed: "180 km/soat (cheklangan)",
        transmission: "E-CVT elektron uzatma",
        fuel: "Gibrid / Benzin",
        desc: "Yaponiya imperatori va Bosh vazirining rasmiy avtomobili. Charm o'rniga shovqinsiz va sirpanmaydigan 100% tabiiy jun matodan tikilgan salon va qo'lda o'yilgan oltin 'Feniks' emblemasi."
    },
    {
        brand: "Toyota & Lexus",
        year: "2020-hozirgacha",
        name: "Toyota GR Yaris",
        type: "WRC Ralli Chempioni",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Toyota_GR_Yaris_%28XP21%29_%E2%80%93_f_03052021.jpg/330px-Toyota_GR_Yaris_%28XP21%29_%E2%80%93_f_03052021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.6L G16E-GTS 3-silindrli Turbo",
        power: "261 - 280 ot kuchi (390 Nm)",
        accel: "0-100 km/s: 5.2 soniya",
        maxSpeed: "230 km/soat",
        transmission: "6-pog'onali iMT mexanik / 8-avtomat DAT",
        fuel: "Benzin (AI-98)",
        desc: "Dunyo ralli chempionati (WRC) g'alabasi uchun maxsus ishlab chiqilgan to'liq privodli (GR-FOUR) cho'ntak raketasi. Karbon tom va alyuminiy eshiklar."
    },
    {
        brand: "Toyota & Lexus",
        year: "2010-2012",
        name: "Lexus LFA",
        type: "V10 Betakror Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_LFA_001.JPG/330px-Lexus_LFA_001.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.8L 1LR-GUE Atmosferali 72° V10 (Yamaha hamkorligida)",
        power: "560 ot kuchi (480 Nm)",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "325 km/soat",
        transmission: "6-pog'onali ASG ketma-ket",
        fuel: "Benzin (AI-98)",
        desc: "Dvigatel nol holatdan 9000 aylanishgacha bor-yo'g'i 0.6 soniyada chiqqani sababli mexanik strelka ulgurmay, dunyoda birinchi bo'lib raqamli TFT spidometr o'rnatilgan. Uning V10 ohangi Formula 1 musiqasidek jaranglaydi."
    },
    {
        brand: "Toyota & Lexus",
        year: "2022-hozirgacha",
        name: "Lexus LX 600 (VIP 4-Seat)",
        type: "Hashamatli Ramali Flagman",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/2018_Lexus_LX_570_%28facelift%29%2C_front_3.24.23.jpg/330px-2018_Lexus_LX_570_%28facelift%29%2C_front_3.24.23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L V6 Twin-Turbo V35A-FTS",
        power: "415 ot kuchi (650 Nm)",
        accel: "0-100 km/s: 6.9 soniya",
        maxSpeed: "215 km/soat",
        transmission: "10-pog'onali Direct Shift avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Mark Levinson 25 dinamikli audio tizimi, orqa qatorda 48 darajagacha yotadigan Ottomanka massajli VIP kreslolar va mustahkam ofroud imkoniyatlari."
    },
    {
        brand: "Toyota & Lexus",
        year: "2017-hozirgacha",
        name: "Lexus LC 500",
        type: "San'at Asari Grand Tourer",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/2023_Lexus_LC500_in_Atomic_Silver%2C_front_left.jpg/330px-2023_Lexus_LC500_in_Atomic_Silver%2C_front_left.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.0L Atmosferali 2UR-GSE V8",
        power: "477 ot kuchi (540 Nm)",
        accel: "0-100 km/s: 4.4 soniya",
        maxSpeed: "270 km/soat",
        transmission: "10-pog'onali Direct Shift avtomat",
        fuel: "Benzin (AI-98)",
        desc: "Konsept-kar darajasidagi nafis dizayn, tabiiy nafas oluvchi atmosferali 5.0 V8 motorining toza shovqini va qo'lda yig'ilgan Takumi ustalari saloni."
    },
    {
        brand: "Nissan",
        year: "1969-1978",
        name: "Nissan Fairlady Z (Datsun 240Z)",
        type: "Klassik Sportkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/1970-1973_Nissan_Fairlady_Z.jpg/330px-1970-1973_Nissan_Fairlady_Z.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.4L L24 Qatorli 6-silindrli",
        power: "151 ot kuchi",
        accel: "0-100 km/s: 8.0 soniya",
        maxSpeed: "201 km/soat",
        transmission: "5-pog'onali mexanik",
        fuel: "Benzin",
        desc: "Yaponiya sport avtomobillarini butun dunyoga tanitgan birinchi afsona. Uzun burunli nafis korpus va ishonchli mexanika."
    },
    {
        brand: "Nissan",
        year: "1999-2002",
        name: "Nissan Skyline GT-R R34 V-Spec II",
        type: "Afsonaviy 'Godzilla'",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Nissan_Skyline_GT-R_R34_V_Spec_II.jpg/330px-Nissan_Skyline_GT-R_R34_V_Spec_II.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.6L RB26DETT Twin-Turbo Qatorli 6-silindr",
        power: "280 - 327 ot kuchi (Zavod)",
        accel: "0-100 km/s: 4.8 soniya",
        maxSpeed: "250 km/soat",
        transmission: "6-pog'onali Getrag mexanik",
        fuel: "Benzin (AI-98)",
        desc: "ATTESA E-TS Pro intellektual to'liq privodi, Super HICAS to'rt g'ildirakli burilishi va torpedodagi MFD poyga telemetriya ekrani bilan o'z davrining kompyuterlashgan superkarlar qotili."
    },
    {
        brand: "Nissan",
        year: "2007-2024",
        name: "Nissan GT-R R35 Nismo",
        type: "Superkarlar Qotili",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/2009-2010_Nissan_GT-R_%28R35%29_coupe_01.jpg/330px-2009-2010_Nissan_GT-R_%28R35%29_coupe_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.8L VR38DETT Twin-Turbo V6 (Qo'lda yig'ilgan Takumi)",
        power: "600 ot kuchi (652 Nm)",
        accel: "0-100 km/s: 2.7 soniya",
        maxSpeed: "330 km/soat",
        transmission: "6-pog'onali BorgWarner ikki muftali transaks",
        fuel: "Benzin (AI-98)",
        desc: "GT3 poyga turbinalari, to'liq karbon bamperlar va kapot, Brembo uglerod-keramika tormozlari. Bir necha barobar qimmat turadigan giperkarlarni trekda mag'lub eta oladigan afsona."
    },
    {
        brand: "Hyundai & Kia",
        year: "2024-hozirgacha",
        name: "Hyundai Ioniq 5 N",
        type: "Drift Rejimli Elektr Poygachi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg/330px-Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (AWD, 21,000 ayl/daq)",
        power: "650 ot kuchi (N Grin Boost bilan)",
        accel: "0-100 km/s: 3.4 soniya",
        maxSpeed: "260 km/soat",
        transmission: "N e-Shift (8-pog'onali DCT mexanik simulyatsiyasi)",
        fuel: "Elektr (84 kVt/soat batareya)",
        desc: "Elektromobillar tarixidagi eng qiziqarli avtomobil. N Active Sound tizimi ichki yonuv dvigatelining ovozi va otilishini aniq takrorlaydi, N e-Shift esa xuddi mexanik karobka kabi silkinish va vites almashish tuyg'usini beradi."
    },
    {
        brand: "Hyundai & Kia",
        year: "2021-hozirgacha",
        name: "Hyundai Elantra N",
        type: "Sportiv Trek Sedani",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/2023_Hyundai_Elantra_Limited_in_Silver%2C_front_left%2C_04-04-2026.jpg/330px-2023_Hyundai_Elantra_Limited_in_Silver%2C_front_left%2C_04-04-2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.0L Turbo Flat Power GDI",
        power: "280 ot kuchi (NGS bilan 290 ot kuchi)",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "250 km/soat",
        transmission: "8-pog'onali N DCT / 6-mexanik",
        fuel: "Benzin (AI-95)",
        desc: "WRC ralli texnologiyalari asosida yaratilgan integratsiyalashgan yetakchi o'q (IDA), elektron differensial qulf (e-LSD) va o'ta tajovuzkor sportiv ovoz tizimi."
    },
    {
        brand: "Hyundai & Kia",
        year: "2022-hozirgacha",
        name: "Kia EV6 GT",
        type: "Super-Krossover",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/2021_Kia_EV6_GT-Line_S.jpg/330px-2021_Kia_EV6_GT-Line_S.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki elektromotor (AWD)",
        power: "585 ot kuchi (740 Nm)",
        accel: "0-100 km/s: 3.5 soniya",
        maxSpeed: "260 km/soat",
        transmission: "Elektr reduktor",
        fuel: "Elektr (77.4 kVt/soat, 800V tez zaryad)",
        desc: "Ferrari Roma va Lamborghini Urus kabi superkarlardan tezroq start oluvchi 585 ot kuchiga ega krossover. Ruldagi neon yashil 'GT' tugmasi va drift rejimi mavjud."
    },
    {
        brand: "Hyundai & Kia",
        year: "2021-hozirgacha",
        name: "Kia Carnival Hi-Limousine",
        type: "VIP Lyuks Miniven",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/2025_Kia_Carnival_Hybrid_EX%2C_front_right%2C_10-12-2025.jpg/330px-2025_Kia_Carnival_Hybrid_EX%2C_front_right%2C_10-12-2025.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L Smartstream G6DU V6",
        power: "294 ot kuchi",
        accel: "0-100 km/s: 8.5 soniya",
        maxSpeed: "200 km/soat",
        transmission: "8-pog'onali avtomat",
        fuel: "Benzin (AI-92/95)",
        desc: "Balandlatilgan tom qismi, samolyot birinchi klassiga teng oyoq tayanchli massaj o'rindiqlari, 21.5 dyuymli aqlli monitor va yulduzli shift yoritgichlari."
    },
    {
        brand: "Hyundai & Kia",
        year: "2020-hozirgacha",
        name: "Kia K5 GT",
        type: "Sportiv Biznes Sedan",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/2022_Kia_K5_GT-Line_in_Pacific_Blue%2C_Front_Left%2C_09-05-2022.jpg/330px-2022_Kia_K5_GT-Line_in_Pacific_Blue%2C_Front_Left%2C_09-05-2022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.5L Turbo Smartstream GDI",
        power: "290 ot kuchi (422 Nm)",
        accel: "0-100 km/s: 5.8 soniya",
        maxSpeed: "250 km/soat",
        transmission: "8-pog'onali ho'l ikki muftali DCT",
        fuel: "Benzin (AI-95)",
        desc: "Agressiv optika, akula tishi uslubidagi radiator panjarasi, 4 ta haqiqiy sportiv glushitel trubalari va qulay biznes salon."
    },
    {
        brand: "Audi",
        year: "1994-1995",
        name: "Audi RS2 Avant",
        type: "Ilk RS Afsonasi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/1995_Audi_RS2_Avant_LC25.jpg/330px-1995_Audi_RS2_Avant_LC25.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.2L Qatorli 5-silindrli 20V Turbo (Porsche)",
        power: "315 ot kuchi (410 Nm)",
        accel: "0-100 km/s: 4.8 soniya (0-48 km/s: 1.5s)",
        maxSpeed: "262 km/soat",
        transmission: "6-pog'onali mexanik, Quattro",
        fuel: "Benzin (AI-98)",
        desc: "Audi va Porsche birgalikda yaratgan dunyodagi ilk super-universal. Porsche 911 (993) ning tormozlari, oynalari va g'ildiraklari o'rnatilgan bo'lib, 48 km/s gacha McLaren F1 dan ham tezroq tezlasha olgan."
    },
    {
        brand: "Audi",
        year: "2020-hozirgacha",
        name: "Audi RS6 Avant (C8 Performance)",
        type: "Super-Universal Qiroli",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/2021_Audi_RS6_Avant_in_Nardo_Gray%2C_front_right.jpg/330px-2021_Audi_RS6_Avant_in_Nardo_Gray%2C_front_right.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.0L Twin-Turbo V8 + Mild-Hybrid",
        power: "630 ot kuchi (850 Nm)",
        accel: "0-100 km/s: 3.4 soniya",
        maxSpeed: "305 km/soat",
        transmission: "8-pog'onali Tiptronic, Quattro",
        fuel: "Benzin (AI-98)",
        desc: "Kengaytirilgan agressiv kuzov, lazerli faralar, sportiv differensial va 5 kishilik oila hamda yukxona bilan superkar tezligini taqdim etuvchi mukammal avtomobil."
    },
    {
        brand: "Audi",
        year: "2021-hozirgacha",
        name: "Audi RS e-tron GT",
        type: "Elektr Gran Turismo",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Audi_e-tron_GT_IMG_5689.jpg/330px-Audi_e-tron_GT_IMG_5689.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "Ikki doimiy magnitli elektromotor",
        power: "646 ot kuchi (830 Nm Boost)",
        accel: "0-100 km/s: 3.3 soniya",
        maxSpeed: "250 km/soat",
        transmission: "2-pog'onali orqa reduktor, Quattro",
        fuel: "Elektr (93 kVt/soat, 800V tez quvvat)",
        desc: "Porsche Taycan platformasida barpo etilgan Audi kompaniyasining eng chiroyli va tezkor elektromobili. 5 daqiqa quvvatlash bilan 100 km masofaga yetadigan energiya to'playdi."
    },
    {
        brand: "Ford & Amerikan",
        year: "2005-2006",
        name: "Ford GT (1-Avlod)",
        type: "Retro Superkar",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Ford_GT_2018_and_Ford_GT_1968_at_Legendy_2019_in_Prague_%28cropped%29.jpg/330px-Ford_GT_2018_and_Ford_GT_1968_at_Legendy_2019_in_Prague_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.4L Supercharged Modular V8",
        power: "550 ot kuchi (678 Nm)",
        accel: "0-100 km/s: 3.5 soniya",
        maxSpeed: "330 km/soat",
        transmission: "6-pog'onali Ricardo mexanik",
        fuel: "Benzin (AI-98)",
        desc: "1966-yilgi afsonaviy Le-Man chempioni Ford GT40 ning 100 yillik yubiley reenkarnatsiyasi. Hech qanday murakkab elektron yordamchilarsiz, faqat mexanik uzatma va supercharged V8 kuchi."
    },
    {
        brand: "Ford & Amerikan",
        year: "2017-2022",
        name: "Ford GT (2-Avlod)",
        type: "Karbon Le-Man Chempioni",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Ford_GT_2018_and_Ford_GT_1968_at_Legendy_2019_in_Prague_%28cropped%29.jpg/330px-Ford_GT_2018_and_Ford_GT_1968_at_Legendy_2019_in_Prague_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L Twin-Turbo EcoBoost V6",
        power: "660 ot kuchi (745 Nm)",
        accel: "0-100 km/s: 3.0 soniya",
        maxSpeed: "348 km/soat",
        transmission: "7-pog'onali Getrag ikki muftali DCT",
        fuel: "Benzin (AI-98)",
        desc: "Karbon tolali monokok, havo oqimini yo'naltiruvchi uchuvchi tirgaklar (flying buttresses), 50 mm ga pastga tushadigan gidravlik poyga osmasi va Le-Man g'olibi."
    },
    {
        brand: "Ford & Amerikan",
        year: "2023-hozirgacha",
        name: "Ford F-150 Raptor R",
        type: "Supercharged Sahro Yirtqichi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/2021_Ford_F-150_SuperCrew%2C_front_4.28.21.jpg/330px-2021_Ford_F-150_SuperCrew%2C_front_4.28.21.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.2L Supercharged Predator V8 (Shelby GT500)",
        power: "720 ot kuchi (868 Nm)",
        accel: "0-100 km/s: 3.7 soniya",
        maxSpeed: "185 km/soat (cheklangan)",
        transmission: "10-pog'onali avtomat, 4x4",
        fuel: "Benzin (AI-95)",
        desc: "Baja 1000 cho'l poygalarida sinovdan o'tgan FOX Live Valve 3.1 ichki aylanma amortizatorlari va ulkan 37 dyuymli g'ildiraklar. Qum barxanlarida uchish uchun yaratilgan eng qudratli pikap."
    },
    {
        brand: "Ford & Amerikan",
        year: "2023",
        name: "Dodge Challenger SRT Demon 170",
        type: "Oxirgi Amerika Dragster Maxlugi",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221_%28cropped%29.jpg/330px-Dodge_Challenger_SRT8_%282015%29_Hirschaid-20220709-RM-120221_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "6.2L Supercharged HEMI V8 (3.0L IHI kompressor)",
        power: "1025 ot kuchi (1281 Nm - E85 yoqilg'ida)",
        accel: "0-100 km/s: 1.66 soniya (NHRA sertifikatlangan)",
        maxSpeed: "346 km/soat",
        transmission: "8-pog'onali TorqueFlite avtomat (TransBrake bilan)",
        fuel: "E85 Etanol / Benzin (AI-98)",
        desc: "Tarixdagi eng tezkor tezlanuvchi ishlab chiqarish avtomobili. Start paytida old g'ildiraklari havo ko'tariladi (wheelie), 400 metr masofani 8.91 soniyada bosib o'tadi va parashyut o'rnatish imkoniyatiga ega."
    },
    {
        brand: "Nissan",
        year: "2002-2009",
        name: "Nissan 350Z (Z33)",
        type: "Afsonaviy Drift Sportkari",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/2004_Nissan_350Z_3.5_Front.jpg/330px-2004_Nissan_350Z_3.5_Front.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "3.5L VQ35DE / VQ35HR Atmosferali V6",
        power: "287 - 313 ot kuchi",
        accel: "0-100 km/s: 5.3 soniya",
        maxSpeed: "250 km/soat",
        transmission: "6-pog'onali mexanik / 5-avtomat",
        fuel: "Benzin (AI-95)",
        desc: "Tokyo Drift filmining bosh yulduzi. Mukammal 53:47 og'irlik balansi, qisqa g'ildirak bazasi va chidamli VQ35 dvigateli bilan professional drift musobaqalarining eng sevimli avtomobili."
    },
    {
        brand: "Nissan",
        year: "1987-hozirgacha",
        name: "Nissan Patrol (Y60 va Y62 Nismo)",
        type: "Sahro Kemasi / Ramali Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/2016_Nissan_Patrol_%28Y62%29_Ti-L_wagon_%282018-09-17%29_01.jpg/330px-2016_Nissan_Patrol_%28Y62%29_Ti-L_wagon_%282018-09-17%29_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "4.2L TD42 (Y60) / 5.6L VK56VD V8 (Y62 Nismo)",
        power: "145 / 428 ot kuchi (Nismo)",
        accel: "0-100 km/s: 6.5 soniya (Y62)",
        maxSpeed: "210 km/soat",
        transmission: "7-pog'onali avtomat, HBMC gidravlik osma",
        fuel: "Dizel / Benzin (AI-95)",
        desc: "Dubay sahrolarida qum tepaliklarini zabt etish bo'yicha tengsiz off-road imperatori. HBMC gidravlik kuzov barqarorligi va 428 ot kuchli V8 dvigateli bilan hashamatli yo'ltanlamas."
    },
    {
        brand: "Volkswagen",
        year: "1988-2023",
        name: "Volkswagen Passat (B3 \"Delfin\" va B8 R-Line)",
        type: "Afsonaviy Oila va Biznes Sedani",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/2017_Volkswagen_Passat_SE_Business_TDi_BM_2.0.jpg/330px-2017_Volkswagen_Passat_SE_Business_TDi_BM_2.0.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "1.8L / 2.0L TDI / 2.0L TSI (280 ot kuchi)",
        power: "90 - 280 ot kuchi",
        accel: "0-100 km/s: 5.5 soniya (B8 2.0 TSI 4Motion)",
        maxSpeed: "250 km/soat",
        transmission: "5-mexanik / 7-pog'onali DSG",
        fuel: "Benzin / Dizel",
        desc: "O'zbekistonda \"Delfin\" nomi bilan afsonaga aylangan B3 modelidan tortib, eng zamonaviy B8 avlodigacha bo'lgan nemis sifatining namunasi. Katta yukxona va mustahkam konstruksiya."
    },
    {
        brand: "Volkswagen",
        year: "2002-hozirgacha",
        name: "Volkswagen Touareg (V10 TDI va R e-Hybrid)",
        type: "Premium Yo'ltanlamas",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Volkswagen_Touareg_%282023%29_IMG_2080.jpg/330px-Volkswagen_Touareg_%282023%29_IMG_2080.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "5.0L V10 TDI Biturbo / 3.0L V6 TSI e-Hybrid",
        power: "313 / 462 ot kuchi (750 / 700 Nm)",
        accel: "0-100 km/s: 5.1 soniya (Touareg R)",
        maxSpeed: "250 km/soat",
        transmission: "8-pog'onali Tiptronic, 4Motion",
        fuel: "Dizel / Plug-in Gibrid",
        desc: "2006-yilda 155 tonnalik Boeing 747 samolyotini aeroport bo'ylab tortib butun dunyoni lol qoldirgan V10 TDI dvigatelli afsonaviy nemis yo'ltanlamasi."
    },
    {
        brand: "Audi",
        year: "1985-1986",
        name: "Audi Sport Quattro S1 E2",
        type: "Gruppa B Ralli Monsteri",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/1985_Audi_Quattro.jpg/330px-1985_Audi_Quattro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", // <-- Rasm qo'ying (URL havola yoki rasm fayli yo'li)
        engine: "2.1L Qatorli 5-silindrli 20V Turbo",
        power: "550 ot kuchi (590 Nm)",
        accel: "0-100 km/s: 3.1 soniya (grunt yo'lda)",
        maxSpeed: "225 km/soat",
        transmission: "6-pog'onali poyga mexanikasi, Quattro",
        fuel: "Poyga benzini",
        desc: "Avtosport tarixidagi eng xavfli va tezkor \"Gruppa B\" ralli poygalarining ramzi. Ulkan aerodinamik qanotlari, olov otuvchi anti-lag tizimi va Valter Ryorl boshqaruvidagi g'alabalar."
    }
];
