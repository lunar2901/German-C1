// 🇩🇪 GERMAN C1 VOCABULARY DATABASE
// Based on Goethe Institut, DW Deutsche Welle, and CEFR Standards
// Comprehensive verb conjugations with etymology, prefixes, and collocations

const verbDatabase = [
  // ============ AUXILIARY VERBS (Hilfszeitwörter) ============
  
  {
    id: "v001",
    infinitive: "sein",
    english: "to be",
    category: "auxiliary",
    cefr: "A1",
    frequency: "MOST COMMON (Used in 90% of German sentences)",
    usage: "Identity, location, state, possession, passive voice, perfekt with intransitive verbs",
    example: "Ich bin glücklich. / Sie sind in Berlin.",
    
    conjugation: {
      präsens: {
        ich: "bin",
        du: "bist",
        er_sie_es: "ist",
        wir: "sind",
        ihr: "seid",
        sie_Sie: "sind"
      },
      präteritum: {
        ich: "war",
        du: "warst",
        er_sie_es: "war",
        wir: "waren",
        ihr: "wart",
        sie_Sie: "waren"
      },
      perfekt: {
        ich: "bin gewesen",
        du: "bist gewesen",
        er_sie_es: "ist gewesen",
        wir: "sind gewesen",
        ihr: "seid gewesen",
        sie_Sie: "sind gewesen"
      },
      futur: {
        ich: "werde sein",
        du: "wirst sein",
        er_sie_es: "wird sein",
        wir: "werden sein",
        ihr: "werdet sein",
        sie_Sie: "werden sein"
      },
      konjunktiv_2: {
        ich: "wäre",
        du: "wärst",
        er_sie_es: "wäre",
        wir: "wären",
        ihr: "wärt",
        sie_Sie: "wären"
      }
    },

    collocations: [
      "es ist (it is)",
      "das ist (that is)",
      "was ist (what is)",
      "mir ist (I feel)",
      "ihm ist (he feels)",
      "sein oder nicht sein (to be or not to be)"
    ],

    etymology: "Indo-European root *es- (to exist) | Related to English 'is', Dutch 'zijn'",

    mnemonicTip: "BIN-BIST-IST-SIND (remember the pattern: first person singular, second, third, first plural)",

    prefixes: [
      {
        prefix: "be- (make)",
        meaning: "besein (to bewitch)",
        example: "Der Ort ist von einer mystischen Aura besein."
      },
      {
        prefix: "über- (over)",
        meaning: "übersein (to be over/finished)",
        example: "Der Kurs ist endlich übersein."
      }
    ]
  },

  {
    id: "v002",
    infinitive: "haben",
    english: "to have / to possess",
    category: "auxiliary",
    cefr: "A1",
    frequency: "MOST COMMON (Used in perfekt tense)",
    usage: "Possession, perfekt with transitive verbs, expressions like 'es gibt' variants",
    example: "Ich habe einen Hund. / Sie haben viel Geld.",
    
    conjugation: {
      präsens: {
        ich: "habe",
        du: "hast",
        er_sie_es: "hat",
        wir: "haben",
        ihr: "habt",
        sie_Sie: "haben"
      },
      präteritum: {
        ich: "hatte",
        du: "hattest",
        er_sie_es: "hatte",
        wir: "hatten",
        ihr: "hattet",
        sie_Sie: "hatten"
      },
      perfekt: {
        ich: "habe gehabt",
        du: "hast gehabt",
        er_sie_es: "hat gehabt",
        wir: "haben gehabt",
        ihr: "habt gehabt",
        sie_Sie: "haben gehabt"
      },
      konjunktiv_2: {
        ich: "hätte",
        du: "hättest",
        er_sie_es: "hätte",
        wir: "hätten",
        ihr: "hättet",
        sie_Sie: "hätten"
      }
    },

    collocations: [
      "recht haben (to be right)",
      "Angst haben (to be afraid)",
      "Hunger haben (to be hungry)",
      "Zeit haben (to have time)",
      "Glück haben (to be lucky)",
      "es hat (there is - regional)"
    ],

    etymology: "Germanic root *hab- (to hold/grasp) | Related to English 'have', Dutch 'hebben'",

    mnemonicTip: "HABE-HAST-HAT (think: 'I have', 'you have', 'he/she has')",

    prefixes: [
      {
        prefix: "ab- (off)",
        meaning: "abhaben (to have off/aside)",
        example: "Das Buch habe ich schon ab."
      },
      {
        prefix: "mit- (with)",
        meaning: "mithaben (to have along)",
        example: "Hast du dein Handy mit?"
      },
      {
        prefix: "über- (over)",
        meaning: "überhaben (to be fed up with)",
        example: "Ich habe diese Situation über."
      }
    ]
  },

  {
    id: "v003",
    infinitive: "werden",
    english: "to become / shall (future auxiliary)",
    category: "auxiliary",
    cefr: "A1",
    frequency: "MOST COMMON (Future tense marker)",
    usage: "Future tense, passive voice, transformation/change, gradual process",
    example: "Es wird kalt. / Sie wird Ärztin. / Der Text wird übersetzt.",
    
    conjugation: {
      präsens: {
        ich: "werde",
        du: "wirst",
        er_sie_es: "wird",
        wir: "werden",
        ihr: "werdet",
        sie_Sie: "werden"
      },
      präteritum: {
        ich: "wurde",
        du: "wurdest",
        er_sie_es: "wurde",
        wir: "wurden",
        ihr: "wurdet",
        sie_Sie: "wurden"
      },
      perfekt: {
        ich: "bin geworden",
        du: "bist geworden",
        er_sie_es: "ist geworden",
        wir: "sind geworden",
        ihr: "seid geworden",
        sie_Sie: "sind geworden"
      },
      konjunktiv_2: {
        ich: "würde",
        du: "würdest",
        er_sie_es: "würde",
        wir: "würden",
        ihr: "würdet",
        sie_Sie: "würden"
      }
    },

    collocations: [
      "es wird (it becomes/will be)",
      "hell werden (to get bright)",
      "dunkel werden (to get dark)",
      "alt werden (to grow old)",
      "erwachsen werden (to grow up)",
      "wach werden (to wake up)",
      "böse werden (to get angry)"
    ],

    etymology: "Germanic root *wer- (to turn/become) | Related to English 'ward', Dutch 'worden'",

    mnemonicTip: "WERDE-WIRST-WIRD (the future tense marker - will/shall in English)",

    prefixes: [
      {
        prefix: "ver- (transform)",
        meaning: "verwerden (archaic: to become something else)",
        example: "Er verwerdet zu Stein (archaic/poetic)."
      }
    ]
  },

  // ============ MODAL VERBS (Modalverben) ============

  {
    id: "v004",
    infinitive: "können",
    english: "can / to be able to / may",
    category: "modal",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Ability, permission, possibility, polite request with 'würde ich können'",
    example: "Ich kann Deutsch sprechen. / Kann ich dir helfen?",
    
    conjugation: {
      präsens: {
        ich: "kann",
        du: "kannst",
        er_sie_es: "kann",
        wir: "können",
        ihr: "könnt",
        sie_Sie: "können"
      },
      präteritum: {
        ich: "konnte",
        du: "konntest",
        er_sie_es: "konnte",
        wir: "konnten",
        ihr: "konntet",
        sie_Sie: "konnten"
      },
      perfekt: {
        ich: "habe gekonnt / konnte (hätte können)",
        du: "hast gekonnt",
        er_sie_es: "hat gekonnt",
        wir: "haben gekonnt",
        ihr: "habt gekonnt",
        sie_Sie: "haben gekonnt"
      },
      konjunktiv_2: {
        ich: "könnte",
        du: "könntest",
        er_sie_es: "könnte",
        wir: "könnten",
        ihr: "könntet",
        sie_Sie: "könnten"
      }
    },

    collocations: [
      "nicht können (cannot)",
      "kannst du (can you)",
      "kann sein (may be)",
      "ich kann nicht mehr (I can't take it anymore)",
      "konnte nichts machen (couldn't do anything)"
    ],

    etymology: "Germanic root *kun- (to know/be skilled) | Related to English 'can', Dutch 'kunnen'",

    mnemonicTip: "KANN-KANNST-KANN (K doubles, then drops) = CAN in English",

    prefixes: []
  },

  {
    id: "v005",
    infinitive: "müssen",
    english: "must / to have to / to need to",
    category: "modal",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Obligation, necessity, assumption with negation (must not = shouldn't have)",
    example: "Ich muss zur Arbeit gehen. / Du musst das tun.",
    
    conjugation: {
      präsens: {
        ich: "muss",
        du: "musst",
        er_sie_es: "muss",
        wir: "müssen",
        ihr: "müsst",
        sie_Sie: "müssen"
      },
      präteritum: {
        ich: "musste",
        du: "musstest",
        er_sie_es: "musste",
        wir: "mussten",
        ihr: "musstet",
        sie_Sie: "mussten"
      },
      perfekt: {
        ich: "habe gemusst / musste",
        du: "hast gemusst",
        er_sie_es: "hat gemusst",
        wir: "haben gemusst",
        ihr: "habt gemusst",
        sie_Sie: "haben gemusst"
      },
      konjunktiv_2: {
        ich: "müsste",
        du: "müsstest",
        er_sie_es: "müsste",
        wir: "müssten",
        ihr: "müsstet",
        sie_Sie: "müssten"
      }
    },

    collocations: [
      "nicht müssen (don't have to)",
      "musste gehen (had to go)",
      "muss sein (must be)",
      "es muss (it must / it's necessary)",
      "hätte nicht gemusst (didn't have to)"
    ],

    etymology: "Germanic root *mus- (to want strongly) | Related to English 'must', Dutch 'moeten'",

    mnemonicTip: "MUSS-MUSST-MUSS (double-S drops pattern) = MUST/HAVE TO",

    prefixes: []
  },

  {
    id: "v006",
    infinitive: "dürfen",
    english: "may / to be allowed to / can (permission)",
    category: "modal",
    cefr: "A1",
    frequency: "COMMON",
    usage: "Permission, prohibition (darf nicht = mustn't), politeness",
    example: "Darf ich rauchen? / Du darfst nicht gehen.",
    
    conjugation: {
      präsens: {
        ich: "darf",
        du: "darfst",
        er_sie_es: "darf",
        wir: "dürfen",
        ihr: "dürft",
        sie_Sie: "dürfen"
      },
      präteritum: {
        ich: "durfte",
        du: "durftest",
        er_sie_es: "durfte",
        wir: "durften",
        ihr: "durftet",
        sie_Sie: "durften"
      },
      perfekt: {
        ich: "habe gedurft / durfte",
        du: "hast gedurft",
        er_sie_es: "hat gedurft",
        wir: "haben gedurft",
        ihr: "habt gedurft",
        sie_Sie: "haben gedurft"
      },
      konjunktiv_2: {
        ich: "dürfte",
        du: "dürftest",
        er_sie_es: "dürfte",
        wir: "dürften",
        ihr: "dürftet",
        sie_Sie: "dürften"
      }
    },

    collocations: [
      "nicht dürfen (mustn't / aren't allowed to)",
      "darf ich (may I)",
      "das darfst du (you're allowed to)",
      "hätte dürfen (would have been allowed to)",
      "Rauchen verboten / man darf nicht rauchen (No smoking)"
    ],

    etymology: "Germanic root *dar- (to dare) | Related to English 'dare', Dutch 'durven'",

    mnemonicTip: "DARF-DARFST-DARF (umlaut shifts) = MAY/ALLOWED",

    prefixes: []
  },

  {
    id: "v007",
    infinitive: "wollen",
    english: "to want (to) / to intend to / will (intention)",
    category: "modal",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Desire, intention, will/determination, future intention (less formal than werden)",
    example: "Ich will Arzt werden. / Sie will dich sehen.",
    
    conjugation: {
      präsens: {
        ich: "will",
        du: "willst",
        er_sie_es: "will",
        wir: "wollen",
        ihr: "wollt",
        sie_Sie: "wollen"
      },
      präteritum: {
        ich: "wollte",
        du: "wolltest",
        er_sie_es: "wollte",
        wir: "wollten",
        ihr: "wolltet",
        sie_Sie: "wollten"
      },
      perfekt: {
        ich: "habe gewollt / wollte",
        du: "hast gewollt",
        er_sie_es: "hat gewollt",
        wir: "haben gewollt",
        ihr: "habt gewollt",
        sie_Sie: "haben gewollt"
      },
      konjunktiv_2: {
        ich: "wollte (also used as subjunctive)",
        du: "wolltest",
        er_sie_es: "wollte",
        wir: "wollten",
        ihr: "wolltet",
        sie_Sie: "wollten"
      }
    },

    collocations: [
      "was willst du (what do you want)",
      "ich will nicht (I don't want to)",
      "gerade wollen (about to/just about to)",
      "als ob du es wolltest (as if you wanted it)",
      "wie du willst (as you like)"
    ],

    etymology: "Germanic root *wel- (to choose/wish) | Related to English 'will', Dutch 'willen'",

    mnemonicTip: "WILL-WILLST-WILL (double-L appears) = WANT",

    prefixes: []
  },

  {
    id: "v008",
    infinitive: "sollen",
    english: "should / to be supposed to / shall",
    category: "modal",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Obligation, reported speech, should/ought, indirect commands",
    example: "Du sollst fleißig lernen. / Er soll kommen.",
    
    conjugation: {
      präsens: {
        ich: "soll",
        du: "sollst",
        er_sie_es: "soll",
        wir: "sollen",
        ihr: "sollt",
        sie_Sie: "sollen"
      },
      präteritum: {
        ich: "sollte",
        du: "solltest",
        er_sie_es: "sollte",
        wir: "sollten",
        ihr: "solltet",
        sie_Sie: "sollten"
      },
      perfekt: {
        ich: "habe gesollt / sollte",
        du: "hast gesollt",
        er_sie_es: "hat gesollt",
        wir: "haben gesollt",
        ihr: "habt gesollt",
        sie_Sie: "haben gesollt"
      },
      konjunktiv_2: {
        ich: "sollte",
        du: "solltest",
        er_sie_es: "sollte",
        wir: "sollten",
        ihr: "solltet",
        sie_Sie: "sollten"
      }
    },

    collocations: [
      "sollte nicht (shouldn't)",
      "was soll das (what's that supposed to be)",
      "sollen wir (shall we)",
      "hätte sollen (should have)",
      "er soll sehr intelligent sein (he's supposed to be very intelligent)"
    ],

    etymology: "Germanic root *skal- (to be obligated) | Related to English 'shall', Dutch 'zullen'",

    mnemonicTip: "SOLL-SOLLST-SOLL (same form for ich/er/sie/es) = SHALL/SHOULD",

    prefixes: []
  },

  // ============ REGULAR ACTION VERBS (Regelmäßige Verben) ============

  {
    id: "v009",
    infinitive: "machen",
    english: "to make / to do / to create",
    category: "regular",
    cefr: "A1",
    frequency: "MOST COMMON (Ultra-versatile verb)",
    usage: "General action, creation, causation, hundreds of collocation phrases, often used as filler",
    example: "Ich mache das. / Wir machen einen Kuchen. / Was machst du?",
    
    conjugation: {
      präsens: {
        ich: "mache",
        du: "machst",
        er_sie_es: "macht",
        wir: "machen",
        ihr: "macht",
        sie_Sie: "machen"
      },
      präteritum: {
        ich: "machte",
        du: "machtest",
        er_sie_es: "machte",
        wir: "machten",
        ihr: "machtet",
        sie_Sie: "machten"
      },
      perfekt: {
        ich: "habe gemacht",
        du: "hast gemacht",
        er_sie_es: "hat gemacht",
        wir: "haben gemacht",
        ihr: "habt gemacht",
        sie_Sie: "haben gemacht"
      },
      konjunktiv_2: {
        ich: "machte",
        du: "machtest",
        er_sie_es: "machte",
        wir: "machten",
        ihr: "machtet",
        sie_Sie: "machten"
      }
    },

    collocations: [
      "was machst du (what do you do)",
      "das macht nichts (it doesn't matter)",
      "mach schnell (hurry up)",
      "Fortschritte machen (to make progress)",
      "einen Fehler machen (to make a mistake)",
      "Urlaub machen (to take a vacation)",
      "Musik machen (to make music / play music)",
      "sich Sorgen machen (to worry)",
      "ein Geschäft machen (to make a deal)",
      "Hausaufgaben machen (to do homework)"
    ],

    etymology: "Middle Low German 'maken', possibly from Latin 'macerare' (to soften) or Germanic root",

    mnemonicTip: "MACHE-MACHST-MACHT (pattern like arbeiten) = MAKE/DO",

    prefixes: [
      {
        prefix: "ab- (off/away)",
        meaning: "abmachen (to arrange/fix)",
        example: "Wir haben einen Termin abgemacht."
      },
      {
        prefix: "auf- (up/open)",
        meaning: "aufmachen (to open)",
        example: "Mach die Tür auf!"
      },
      {
        prefix: "aus- (out/off)",
        meaning: "ausmachen (to turn off/matter)",
        example: "Mach das Licht aus. Das macht mir nichts aus."
      },
      {
        prefix: "mit- (with/along)",
        meaning: "mitmachen (to participate/join)",
        example: "Willst du mitmachen?"
      },
      {
        prefix: "nach- (after/imitate)",
        meaning: "nachmachen (to copy/imitate)",
        example: "Mach das nach!"
      },
      {
        prefix: "um- (around/trans)",
        meaning: "umgeben (surrounded)",
        example: "Das macht alles um."
      },
      {
        prefix: "vor- (before)",
        meaning: "vormachen (to pretend/show how)",
        example: "Das machst du mir vor!"
      },
      {
        prefix: "zu- (to/close)",
        meaning: "zumachen (to close)",
        example: "Mach die Fenster zu!"
      }
    ]
  },

  {
    id: "v010",
    infinitive: "arbeiten",
    english: "to work",
    category: "regular",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Employment, effort, functioning, productive activity",
    example: "Ich arbeite als Lehrer. / Die Maschine arbeitet gut.",
    
    conjugation: {
      präsens: {
        ich: "arbeite",
        du: "arbeitest",
        er_sie_es: "arbeitet",
        wir: "arbeiten",
        ihr: "arbeitet",
        sie_Sie: "arbeiten"
      },
      präteritum: {
        ich: "arbeitete",
        du: "arbeitetest",
        er_sie_es: "arbeitete",
        wir: "arbeiteten",
        ihr: "arbeitetet",
        sie_Sie: "arbeiteten"
      },
      perfekt: {
        ich: "habe gearbeitet",
        du: "hast gearbeitet",
        er_sie_es: "hat gearbeitet",
        wir: "haben gearbeitet",
        ihr: "habt gearbeitet",
        sie_Sie: "haben gearbeitet"
      },
      konjunktiv_2: {
        ich: "arbeitete",
        du: "arbeitetest",
        er_sie_es: "arbeitete",
        wir: "arbeiteten",
        ihr: "arbeitetet",
        sie_Sie: "arbeiteten"
      }
    },

    collocations: [
      "hart arbeiten (to work hard)",
      "von zu Hause arbeiten (to work from home)",
      "zusammen arbeiten (to work together)",
      "an etwas arbeiten (to work on something)",
      "mit jemandem arbeiten (to work with someone)",
      "effizient arbeiten (to work efficiently)"
    ],

    etymology: "Germanic root *arbait- (hardship/toil) | Related to English 'labor', Dutch 'arbeidt'",

    mnemonicTip: "ARBEITE-ARBEITEST-ARBEITET (-e- vowel pattern for t-ending stems)",

    prefixes: [
      {
        prefix: "ab- (off)",
        meaning: "abarbeiten (to work off a debt)",
        example: "Ich muss meine Schulden abarbeiten."
      },
      {
        prefix: "auf- (up)",
        meaning: "aufarbeiten (to work up/process)",
        example: "Wir müssen das Trauma aufarbeiten."
      },
      {
        prefix: "mit- (with)",
        meaning: "mitarbeiten (to work together)",
        example: "Wir arbeiten mit daran mit."
      },
      {
        prefix: "zu- (at/towards)",
        meaning: "zuarbeiten (to work towards)",
        example: "Das Auge arbeitet zur Lösung zu."
      }
    ]
  },

  // ============ IRREGULAR VERBS (Starke Verben) ============

  {
    id: "v011",
    infinitive: "geben",
    english: "to give",
    category: "irregular",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Transfer of objects, causation, expression formation (es gibt = there is/are)",
    example: "Ich gebe dir ein Buch. / Es gibt viele Möglichkeiten.",
    
    conjugation: {
      präsens: {
        ich: "gebe",
        du: "gibst",
        er_sie_es: "gibt",
        wir: "geben",
        ihr: "gebt",
        sie_Sie: "geben"
      },
      präteritum: {
        ich: "gab",
        du: "gabst",
        er_sie_es: "gab",
        wir: "gaben",
        ihr: "gabt",
        sie_Sie: "gaben"
      },
      perfekt: {
        ich: "habe gegeben",
        du: "hast gegeben",
        er_sie_es: "hat gegeben",
        wir: "haben gegeben",
        ihr: "habt gegeben",
        sie_Sie: "haben gegeben"
      },
      konjunktiv_2: {
        ich: "gäbe",
        du: "gäbst",
        er_sie_es: "gäbe",
        wir: "gäben",
        ihr: "gäbt",
        sie_Sie: "gäben"
      }
    },

    collocations: [
      "es gibt (there is/are)",
      "jemandem etwas geben (to give someone something)",
      "auf geben (to give up)",
      "Bescheid geben (to inform)",
      "nach geben (to give in)",
      "zurück geben (to give back)",
      "ein Konzert geben (to give a concert)"
    ],

    etymology: "Indo-European root *gab- (to give) | Related to English 'give', Dutch 'geven'",

    mnemonicTip: "GEB-GIBST-GIBT (vowel change e→i) = GIVE",

    prefixes: [
      {
        prefix: "ab- (off)",
        meaning: "abgeben (to hand over/submit)",
        example: "Gib die Hausaufgaben ab!"
      },
      {
        prefix: "an- (on)",
        meaning: "angeben (to give an account/show off)",
        example: "Er gibt immer an."
      },
      {
        prefix: "auf- (up/open)",
        meaning: "aufgeben (to give up)",
        example: "Gib nicht auf!"
      },
      {
        prefix: "aus- (out)",
        meaning: "ausgeben (to spend money/distribute)",
        example: "Ich gebe zu viel aus."
      },
      {
        prefix: "mit- (with)",
        meaning: "mitgeben (to give along/pack for journey)",
        example: "Die Mutter gibt dem Kind Bonbons mit."
      },
      {
        prefix: "nach- (after)",
        meaning: "nachgeben (to give in/yield)",
        example: "Ich werde nicht nachgeben."
      },
      {
        prefix: "um- (around)",
        meaning: "umgeben (to surround - from geben concept)",
        example: "Sie ist von Büchern umgeben."
      },
      {
        prefix: "zu- (to/at)",
        meaning: "zugeben (to admit/allow)",
        example: "Ich muss zugeben, dass ich Angst habe."
      },
      {
        prefix: "zurück- (back)",
        meaning: "zurückgeben (to give back/return)",
        example: "Gib mir das Buch zurück!"
      }
    ]
  },

  {
    id: "v012",
    infinitive: "sehen",
    english: "to see / to look",
    category: "irregular",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Vision, perception, appearance, understanding (ich sehe = I understand)",
    example: "Ich sehe einen Mann. / Du siehst müde aus.",
    
    conjugation: {
      präsens: {
        ich: "sehe",
        du: "siehst",
        er_sie_es: "sieht",
        wir: "sehen",
        ihr: "seht",
        sie_Sie: "sehen"
      },
      präteritum: {
        ich: "sah",
        du: "sahst",
        er_sie_es: "sah",
        wir: "sahen",
        ihr: "saht",
        sie_Sie: "sahen"
      },
      perfekt: {
        ich: "habe gesehen",
        du: "hast gesehen",
        er_sie_es: "hat gesehen",
        wir: "haben gesehen",
        ihr: "habt gesehen",
        sie_Sie: "haben gesehen"
      },
      konjunktiv_2: {
        ich: "sähe",
        du: "sähst",
        er_sie_es: "sähe",
        wir: "sähen",
        ihr: "säht",
        sie_Sie: "sähen"
      }
    },

    collocations: [
      "schaun/sehen wir mal (let's see)",
      "das sehe ich (I see that)",
      "Ich sehe, was du meinst (I see what you mean)",
      "fernsehen (to watch TV)",
      "aus sehen (to look/appear)",
      "nach sehen (to look after/check)",
      "über sehen (to overlook)",
      "vorbei sehen (to pass by/overlook)"
    ],

    etymology: "Indo-European root *sekw- (to follow/see) | Related to English 'see', Dutch 'zien'",

    mnemonicTip: "SEH-SIEHST-SIEHT (vowel change e→ie) = SEE",

    prefixes: [
      {
        prefix: "ab- (away)",
        meaning: "absehen (to foresee/refrain from)",
        example: "Ich sehe von der Klage ab."
      },
      {
        prefix: "an- (on)",
        meaning: "ansehen (to look at/regard)",
        example: "Schau mich an!"
      },
      {
        prefix: "auf- (up)",
        meaning: "aufsehen (to look up)",
        example: "Das erregt Aufsehen."
      },
      {
        prefix: "aus- (out)",
        meaning: "aussehen (to look/appear)",
        example: "Du siehst müde aus."
      },
      {
        prefix: "be- (with),
        meaning: "besehen (to examine)",
        example: "Ich habe alles besehen."
      },
      {
        prefix: "fern- (far/television)",
        meaning: "fernsehen (to watch TV)",
        example: "Ich sehe fern."
      },
      {
        prefix: "über- (over)",
        meaning: "übersehen (to overlook)",
        example: "Das kann ich nicht übersehen."
      },
      {
        prefix: "vor- (before)",
        meaning: "vorsehen (to foresee/provide for)",
        example: "Das ist vorgesehen."
      },
      {
        prefix: "zu- (to/towards)",
        meaning: "zusehen (to watch)",
        example: "Ich sehe dir zu."
      }
    ]
  },

  {
    id: "v013",
    infinitive: "kommen",
    english: "to come / to arrive",
    category: "irregular",
    cefr: "A1",
    frequency: "VERY COMMON",
    usage: "Arrival, approach, origin, causation (etwas kommt dazu = something is added)",
    example: "Ich komme morgen. / Woher kommst du?",
    
    conjugation: {
      präsens: {
        ich: "komme",
        du: "kommst",
        er_sie_es: "kommt",
        wir: "kommen",
        ihr: "kommt",
        sie_Sie: "kommen"
      },
      präteritum: {
        ich: "kam",
        du: "kamst",
        er_sie_es: "kam",
        wir: "kamen",
        ihr: "kamt",
        sie_Sie: "kamen"
      },
      perfekt: {
        ich: "bin gekommen",
        du: "bist gekommen",
        er_sie_es: "ist gekommen",
        wir: "sind gekommen",
        ihr: "seid gekommen",
        sie_Sie: "sind gekommen"
      },
      konjunktiv_2: {
        ich: "käme",
        du: "kämst",
        er_sie_es: "käme",
        wir: "kämen",
        ihr: "kämt",
        sie_Sie: "kämen"
      }
    },

    collocations: [
      "kommst du mit (will you come along)",
      "es kommt vor (it happens/occurs)",
      "in Frage kommen (to be in question)",
      "zur Sprache kommen (to come up/be discussed)",
      "es kommt mir vor (it seems to me)",
      "zu Bewusstsein kommen (to regain consciousness)",
      "ins Gespräch kommen (to get into conversation)"
    ],

    etymology: "Germanic root *kum- (to come together) | Related to English 'come', Dutch 'komen'",

    mnemonicTip: "KOMME-KOMMST-KOMMT (double M) = COME",

    prefixes: [
      {
        prefix: "an- (towards)",
        meaning: "ankommen (to arrive)",
        example: "Wann kommst du an?"
      },
      {
        prefix: "aus- (out from)",
        meaning: "auskommen (to manage/get along)",
        example: "Ich komme mit dem Geld aus."
      },
      {
        prefix: "her- (from here)",
        meaning: "herkommen (to come from here)",
        example: "Woher kommst du her?"
      },
      {
        prefix: "hin- (to there)",
        meaning: "hinkommen (to get to)",
        example: "Wie komme ich hin?"
      },
      {
        prefix: "mit- (with/along)",
        meaning: "mitkommen (to come along)",
        example: "Kommst du mit?"
      },
      {
        prefix: "über- (over),
        meaning: "überkommen (to overcome/befall)",
        example: "Angst kommt über mich."
      },
      {
        prefix: "um- (around)",
        meaning: "umkommen (to die/perish)",
        example: "Er ist umgekommen."
      },
      {
        prefix: "ver- (astray)",
        meaning: "verkommen (to fall into ruin)",
        example: "Das Haus ist verkommen."
      },
      {
        prefix: "vor- (before/ahead)",
        meaning: "vorkommen (to occur/seem)",
        example: "Das kommt mir bekannt vor."
      },
      {
        prefix: "zu- (to/towards)",
        meaning: "zukommen (to come to/befit)",
        example: "Das kommt dir zu."
      },
      {
        prefix: "zurück- (back)",
        meaning: "zurückkommen (to come back)",
        example: "Komm bald zurück!"
      },
      {
        prefix: "zwisch- (between)",
        meaning: "zwischenkommen (to intervene)",
        example: "Es ist etwas dazwischengekommen."
      }
    ]
  },

  {
    id: "v014",
    infinitive: "gehen",
    english: "to go / to walk",
    category: "irregular",
    cefr: "A1",
    frequency: "MOST COMMON",
    usage: "Movement, departure, functioning (wie geht es = how are you), continuation",
    example: "Ich gehe zur Schule. / Wie geht es dir?",
    
    conjugation: {
      präsens: {
        ich: "gehe",
        du: "gehst",
        er_sie_es: "geht",
        wir: "gehen",
        ihr: "geht",
        sie_Sie: "gehen"
      },
      präteritum: {
        ich: "ging",
        du: "gingst",
        er_sie_es: "ging",
        wir: "gingen",
        ihr: "gingt",
        sie_Sie: "gingen"
      },
      perfekt: {
        ich: "bin gegangen",
        du: "bist gegangen",
        er_sie_es: "ist gegangen",
        wir: "sind gegangen",
        ihr: "seid gegangen",
        sie_Sie: "sind gegangen"
      },
      konjunktiv_2: {
        ich: "ginge",
        du: "gingest",
        er_sie_es: "ginge",
        wir: "gingen",
        ihr: "ginget",
        sie_Sie: "gingen"
      }
    },

    collocations: [
      "wie geht es (how are you)",
      "es geht mir gut (I'm doing well)",
      "das geht nicht (that doesn't work)",
      "es geht ums Prinzip (it's about the principle)",
      "das geht dich nichts an (that's none of your business)",
      "voraus gehen (to go ahead)",
      "einkaufen gehen (to go shopping)",
      "spa­zieren gehen (to go for a walk)"
    ],

    etymology: "Germanic root *gai- (to go/move) | Related to English 'go', Dutch 'gaan'",

    mnemonicTip: "GEHE-GEHST-GEHT (vowel e constant) = GO",

    prefixes: [
      {
        prefix: "ab- (away)",
        meaning: "abgehen (to leave/depart)",
        example: "Die Maschine geht ab."
      },
      {
        prefix: "an- (on/towards)",
        meaning: "angehen (to concern/begin)",
        example: "Das geht dich an."
      },
      {
        prefix: "auf- (up/open)",
        meaning: "aufgehen (to rise/open/understand)",
        example: "Die Sonne geht auf."
      },
      {
        prefix: "aus- (out/off)",
        meaning: "ausgehen (to go out/assume)",
        example: "Ich gehe aus."
      },
      {
        prefix: "begeg- (encounter)",
        meaning: "begegnen (to meet/encounter)",
        example: "Ich bin ihm begegnet."
      },
      {
        prefix: "ein- (into)",
        meaning: "eingehen (to enter/agree)",
        example: "Wir gehen einen Kompromiss ein."
      },
      {
        prefix: "empor- (upwards)",
        meaning: "emporheben (to lift up)",
        example: "Er geht empor."
      },
      {
        prefix: "entgegen- (towards/against)",
        meaning: "entgegengehen (to go towards)",
        example: "Ich gehe dem Problem entgegen."
      },
      {
        prefix: "fort- (away/forward)",
        meaning: "fortgehen (to leave/continue)",
        example: "Er geht fort."
      },
      {
        prefix: "hinter- (behind)",
        meaning: "hintergehen (to deceive)",
        example: "Er wurde hintergangen."
      },
      {
        prefix: "los- (loose/away)",
        meaning: "losgehen (to be let loose/start going)",
        example: "Der Hund geht los."
      },
      {
        prefix: "mit- (with)",
        meaning: "mitgehen (to go along)",
        example: "Gehst du mit?"
      },
      {
        prefix: "nach- (after)",
        meaning: "nachgehen (to pursue/investigate)",
        example: "Ich gehe dem nach."
      },
      {
        prefix: "spazier- (stroll)",
        meaning: "spazieren gehen (to go for a walk)",
        example: "Lass uns spazieren gehen."
      },
      {
        prefix: "über- (over)",
        meaning: "übergehen (to pass over/skip)",
        example: "Das kann ich nicht übergehen."
      },
      {
        prefix: "um- (around)",
        meaning: "umgehen (to avoid/deal with)",
        example: "Ich weiß nicht, wie ich damit umgehe."
      },
      {
        prefix: "unter- (under)",
        meaning: "untergehen (to sink/go under)",
        example: "Die Sonne geht unter."
      },
      {
        prefix: "vor- (before/forward)",
        meaning: "vorgehen (to go ahead/proceed)",
        example: "Das geht mir vor."
      },
      {
        prefix: "voraus- (ahead)",
        meaning: "vorausgehen (to go ahead)",
        example: "Der Chef geht voraus."
      },
      {
        prefix: "vorbei- (past)",
        meaning: "vorbeigehen (to pass by)",
        example: "Ich gehe vorbei."
      },
      {
        prefix: "vorüber- (past/over)",
        meaning: "vorübergehen (to pass/go by)",
        example: "Das wird vorübergehen."
      },
      {
        prefix: "wander- (wander/hike)",
        meaning: "wandern gehen (to go hiking)",
        example: "Lass uns wandern gehen."
      },
      {
        prefix: "weg- (away)",
        meaning: "weggehen (to go away)",
        example: "Geh weg!"
      },
      {
        prefix: "weiter- (further)",
        meaning: "weitergehen (to continue going)",
        example: "Wir gehen weiter."
      },
      {
        prefix: "wider- (against)",
        meaning: "widergehen (archaic: to resist)",
        example: "Es geht mir wider."
      },
      {
        prefix: "zu- (towards/to)",
        meaning: "zugehen (to go towards)",
        example: "Das geht schnell zu Ende."
      },
      {
        prefix: "zugleich- (at same time)",
        meaning: "zugleich gehen (to go at same time)",
        example: "Wir gehen zugleich."
      },
      {
        prefix: "zurück- (back)",
        meaning: "zurückgehen (to go back/decrease)",
        example: "Geh zurück!"
      },
      {
        prefix: "zusammen- (together)",
        meaning: "zusammengehen (to go together)",
        example: "Wir gehen zusammen."
      },
      {
        prefix: "zuwander- (towards)",
        meaning: "zuwandern (to immigrate)",
        example: "Viele Menschen wandern zu."
      }
    ]
  }
];

// Make database available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = verbDatabase;
}
