/**
 * Multilingual Translations Dictionary (FR / AR / EN)
 * Cabinet Géomètre Expert Foncier - Agréé OGEF
 * Conforme au cadre réglementaire et juridique algérien (Lois 08-15, 22-55, 02-07, Cadastre)
 */

const translations = {
  fr: {
    // Top Bar & Meta
    pageTitle: "Cabinet Géomètre Expert Foncier Agréé OGEF | Bornage, Cadastre & Régularisation",
    certifiedBadge: "Membre de l'Ordre des Géomètres-Experts Fonciers (OGEF)",
    officeHours: "Dimanche au jeudi : 8 h – 16 h",
    callUs: "Appelez-nous",

    // Nav
    brandTitle: "Cabinet Géomètre Expert",
    brandSubtitle: "Agréé OGEF • Expertise Foncière & Topographie",
    navHome: "Accueil",
    navServices: "Prestations",
    navCadastre: "Régularisation & Lois",
    navLivrables: "Réalisations",
    navProcess: "Démarche",
    navCabinet: "Le cabinet",
    navTestimonials: "Avis clients",
    navFaq: "FAQ",
    navContact: "Contact",
    btnFreeQuote: "Devis gratuit",

    // Hero
    heroBadge: "Cabinet Agréé par l'Ordre des Géomètres-Experts (OGEF)",
    heroTitle: "Sécurisez vos limites de propriété en toute sérénité",
    heroDesc: "Bornage contradictoire, régularisation foncière (Lois 08-15, 22-55, 02-07), division de terrain, plans cadastraux et topographie : nous réalisons l'ensemble de vos dossiers avec rigueur et conformité légale.",
    btnHeroQuote: "Demander un devis gratuit",
    btnHeroServices: "Découvrir nos services",
    btnWhatsApp: "Échanger sur WhatsApp",
    
    // Hero Trust
    trustResponseTitle: "Réponse sous 48 h",
    trustResponseDesc: "Étude rapide et devis sans engagement",
    trustCoverageTitle: "Interventions toute la wilaya",
    trustCoverageDesc: "Déplacements rapides urbain & rural",
    trustQualityTitle: "Dossiers agréés OGEF & Cadastre",
    trustQualityDesc: "Relevé de précision et conformité juridique",

    // Hero Blueprint Card
    cardHeaderTitle: "Levé Topographique & Foncier",
    cardHeaderTech: "GPS RTK Centimétrique",
    cardStatusLabel: "Statut dossier",
    cardStatusVal: "Conforme & Agréé OGEF",
    cardToleranceLabel: "Tolérance",
    cardDelimLabel: "Délimitation",
    cardDelimVal: "Procès-verbal",

    // Social Proof
    trustBarLabel: "Partenaire de confiance des institutions et des professionnels :",
    partnerNotaires: "Études Notariales",
    partnerParticuliers: "Particuliers & Familles",
    partnerPromoteurs: "Promoteurs & Constructeurs",
    partnerArchitectes: "Architectes & BET",

    // Services - General
    servicesTag: "Nos prestations officielles",
    servicesTitle: "Une expertise foncière, cadastrale et technique complète",
    servicesSubtitle: "Agréés par l'OGEF, nous assurons l'ensemble des opérations d'arpentage, de bornage, de régularisation et d'études techniques en Algérie.",
    serviceQuoteLink: "Demander un devis pour cette prestation",

    // Official Algerian Catalog Section
    catalogTag: "Cadre Juridique & Cadastre Algérien",
    catalogTitle: "Nos domaines d'intervention spécialisés",
    catalogSubtitle: "Conformité stricte avec les lois foncières, le cadastre, la conservation foncière et les services de l'urbanisme.",

    // Specific Algerian Services
    servDocArpentageTitle: "Document d'Arpentage (وثيقة القياس)",
    servDocArpentageDesc: "Établissement de la وثيقة القياس officielle obligatoire pour toute transaction, mutation ou mise à jour cadastrale.",

    servLoi0207Title: "Acte de Propriété (Loi 02-07)",
    servLoi0207Desc: "Constitution du dossier technique pour l'obtention de l'acte de propriété dans le cadre de la régularisation foncière (القانون 02-07).",

    servPossessionTitle: "Certificat de Possession (شهادة الحيازة)",
    servPossessionDesc: "Constitution et suivi des dossiers de demande de certificat de possession pour terrains non titrés.",

    servHabitatRuralTitle: "Habitat Rural (البناء الريفي)",
    servHabitatRuralDesc: "Élaboration du plan de masse et plan de situation cotés exigés pour l'aide et le permis de construire rural.",

    servExpertiseTitle: "Expertise Foncière & Conseil",
    servExpertiseDesc: "Expertises amiables et judiciaires, évaluation de biens, estimation vénale et résolution de conflits de mitoyenneté.",

    servBornageTitle: "Bornage & Partage Amiable (القسمة الودية)",
    servBornageDesc: "Fixation contradictoire des limites, pose de bornes officielles normalisées et rédaction du procès-verbal opposable.",

    servPermisLotirTitle: "Permis de Lotir & Division (رخصة التجزئة)",
    servPermisLotirDesc: "Plans parcellaires de morcellement et dossiers complets pour l'obtention du permis de lotir auprès des APC et DUAC.",

    servEDDTitle: "État Descriptif de Division (الجدول الوصفي)",
    servEDDDesc: "Plans d'intérieurs et calcul des quotes-parts et millièmes de copropriété pour immeubles et ensembles immobiliers.",

    servCadastreTitle: "Plans de Cadastre & Parcellaires",
    servCadastreDesc: "Relevés de délimitation parcellaire et mise en concordance avec les sections cadastrales de la Conservation Foncière.",

    servCompteInconnuTitle: "Biens Non Réclamés & Compte Inconnu",
    servCompteInconnuDesc: "Dossiers de régularisation pour les biens inscrits au compte des inconnus (حساب المجهول) ou non réclamés (غير مطالب به).",

    servEstimationTitle: "Évaluation & Estimation Immobilière",
    servEstimationDesc: "Expertise de la valeur marchande de terrains nus, bâtis, exploitations agricoles et locaux commerciaux.",

    servLoi0815Title: "Conformité Bâti (Lois 08-15 & 22-55)",
    servLoi0815Desc: "Dossier de régularisation et d'achèvement des constructions dans le cadre des lois 08-15 et 22-55 (certificat de conformité).",

    servVRDTitle: "Topographie, Géodésie & VRD",
    servVRDDesc: "Levés altimétriques, implantation d'ouvrages, réseaux d'assainissement, eau potable et voiries (VRD) pour chantiers de BTP.",

    servInvestissementTitle: "Investissement Agricole & Industriel",
    servInvestissementDesc: "Accompagnement technique et délimitation de concessions agricoles (APFA), zones industrielles et projets touristiques.",

    servAgricoleTitle: "Carte Fellah & Forage de Puits",
    servAgricoleDesc: "Enquêtes foncières certifiées pour l'obtention de la carte d'agriculteur (بطاقة فلاح) et autorisations de forage de puits artésien.",

    // Deliverables / Technical Showcase Section
    livrablesTag: "Livrables Techniques",
    livrablesTitle: "Exemples de nos réalisations et plans d'expertise",
    livrablesSubtitle: "Aperçu de plans architecturaux, relevés de copropriété avec calculs de surfaces cotées et graphes d'accessibilité.",
    livrable1Title: "Plan architectural & État Descriptif de Division (EDD)",
    livrable1Desc: "Mesurage certifié de logements avec zonage fonctionnel (pièces de réception, chambres, espaces de service) et calcul exact des surfaces habitables et communes.",
    livrable2Title: "Catalogue officiel de nos compétences foncières",
    livrable2Desc: "Prise en charge intégrale de toutes les procédures notariales, cadastrales et administratives algériennes.",

    // Process
    processTag: "Notre démarche",
    processTitle: "Un accompagnement simple, de la demande à la livraison",
    processSubtitle: "Une méthode rigoureuse, transparente et éprouvée pour sécuriser l'ensemble de vos opérations.",
    step1Badge: "Étape 01",
    step1Title: "Prise de contact",
    step1Desc: "Vous nous décrivez votre projet. Nous vous répondons sous 48 h avec une première évaluation.",
    step2Badge: "Étape 02",
    step2Title: "Devis transparent",
    step2Desc: "Une offre détaillée, sans frais cachés, avec le calendrier prévisionnel de l'intervention.",
    step3Badge: "Étape 03",
    step3Title: "Travaux de terrain et calculs",
    step3Desc: "Nos équipes interviennent, relèvent et contrôlent les données avec du matériel de précision.",
    step4Badge: "Étape 04",
    step4Title: "Livraison du dossier",
    step4Desc: "Plans, procès-verbaux et documents remis en main propre ou transmis aux services compétents.",

    // Cabinet
    cabinetTag: "Le cabinet",
    cabinetTitle: "Une équipe de professionnels agréés à votre service",
    cabinetLead: "Inscrit au tableau national de l'Ordre des Géomètres-Experts Fonciers (OGEF), notre cabinet allie expérience du terrain et maîtrise des technologies de pointe (GPS RTK centimétrique, stations totales motorisées, DAO/SIG).",
    cabCheck1Title: "Agrément officiel OGEF & Prestation de serment",
    cabCheck1Desc: "Habilitation officielle garantissant la pleine autorité légale de tous nos procès-verbaux et plans.",
    cabCheck2Title: "Respect strict des normes et de la déontologie",
    cabCheck2Desc: "Neutralité impartiale, secret professionnel absolu et rigueur technique irréprochable.",
    cabCheck3Title: "Maîtrise complète de la réglementation algérienne",
    cabCheck3Desc: "Expertise approfondie du Code foncier, du cadastre, de la conservation foncière et des lois 08-15, 22-55 et 02-07.",
    cabCheck4Title: "Interventions rapides en urbain comme en rural",
    cabCheck4Desc: "Équipes mobiles équipées pour intervenir rapidement sur toute la wilaya.",
    btnTalkExpert: "Parler à un géomètre expert",

    stat1Text: "années d'expérience",
    stat1Sub: "au service du foncier",
    stat2Text: "dossiers réalisés",
    stat2Sub: "particuliers & professionnels",
    stat3Text: "délai de réponse",
    stat3Sub: "engagement devis rapide",
    stat4Text: "dossiers suivis",
    stat4Sub: "de A à Z avec rigueur",

    techBoxTitle: "Matériel & Outils de Haute Précision",
    techBoxDesc: "Récepteurs GPS GNSS Bi-fréquence RTK, Stations Totales motorisées avec mesure laser sans prisme, logiciels DAO/SIG pour des plans aux normes cadastrales officielles.",

    // Testimonials Section
    testimonialsTag: "Témoignages & Confiance",
    testimonialsTitle: "Ce que disent nos clients",
    testimonialsSubtitle: "La satisfaction de nos mandants et la conformité légale de leurs dossiers sont notre première priorité.",
    testi1Name: "Karim Benali",
    testi1Role: "Propriétaire foncier",
    testi1Comment: "Un litige de mitoyenneté réglé rapidement et dans le calme grâce à un bornage contradictoire irréprochable. Le procès-verbal a été accepté sans réserve par le notaire.",
    testi2Name: "Sarah Mansouri",
    testi2Role: "Architecte DPLG",
    testi2Comment: "Nous collaborons régulièrement pour nos levés topographiques et implantations. Les fichiers DWG sont ultra-précis, livrés dans les temps et parfaitement conformes.",
    testi3Name: "Maître R. Khelifi",
    testi3Role: "Notaire",
    testi3Comment: "Des dossiers de division, d'actes de propriété et de mise en copropriété toujours clairs, rigoureux et conformes aux exigences du cadastre et de la conservation foncière.",

    // FAQ Section
    faqTag: "Foire Aux Questions",
    faqTitle: "Questions fréquentes sur les travaux fonciers",
    faqSubtitle: "Toutes les réponses indispensables pour démarrer votre projet en toute sérénité.",
    faqQ1: "Pourquoi faire réaliser un bornage contradictoire ?",
    faqA1: "Le bornage contradictoire est le seul acte juridique qui fixe définitivement et officiellement les limites de propriété entre deux terrains contigus. Il prévient les empiétements et protège la valeur de votre bien.",
    faqQ2: "En quoi consiste la régularisation dans le cadre des lois 08-15 et 22-55 ?",
    faqA2: "Ces lois permettent d'achever et de mettre en conformité les constructions non pourvues de permis d'achèvement ou construites sans permis. Le géomètre expert établit les plans de récolement et l'état descriptif nécessaires au dossier administratif.",
    faqQ3: "Le devis est-il totalement gratuit et sans engagement ?",
    faqA3: "Oui, absolument. Nous analysons votre besoin sous 48 h et vous remettons un devis détaillé, transparent et sans aucun frais caché.",
    faqQ4: "Vos plans et procès-verbaux sont-ils reconnus par le Cadastre et la Conservation Foncière ?",
    faqA4: "Oui. En tant que géomètres experts assermentés et inscrits à l'Ordre (OGEF), tous nos livrables ont pleine valeur légale et sont directement exploitables par les notaires, mairies, conservations foncières et tribunaux.",

    // Contact
    contactTag: "Contact & Devis",
    contactTitle: "Demandez votre devis gratuit",
    contactSubtitle: "Décrivez-nous votre besoin, nous revenons vers vous sous 48 h.",
    contactInfoTitle: "Coordonnées du cabinet",
    contactInfoDesc: "Nous sommes disponibles pour vous conseiller et vous accompagner dans toutes vos démarches foncières et cadastrales.",
    contactAddressLabel: "Adresse",
    contactAddressVal: "Adresse du cabinet, Ville, Wilaya",
    contactPhoneLabel: "Téléphone",
    contactEmailLabel: "Email",
    contactHoursLabel: "Horaires",
    contactHoursVal: "Dimanche au jeudi, 8 h – 16 h",
    quickCallTitle: "Besoin d'un renseignement immédiat ?",
    quickCallDesc: "Nos géomètres sont à votre écoute par téléphone ou sur WhatsApp durant les heures d'ouverture.",
    btnCallDirect: "Appeler le cabinet",

    // Form
    formSuccessTitle: "Merci ! Votre demande a bien été envoyée.",
    formSuccessDesc: "Nous vous recontactons sous 48 h avec une première évaluation de votre dossier.",
    labelFullName: "Nom complet",
    placeholderFullName: "Ex: Mohamed Benali",
    labelPhone: "Téléphone",
    placeholderPhone: "05XX XX XX XX ou +213 ...",
    labelEmail: "Email",
    labelPrestation: "Type de prestation",
    selectPrestationDefault: "Sélectionnez votre besoin foncier",
    
    // Form Select Options
    optBornage: "Bornage contradictoire & Délimitation",
    optDivision: "Division de terrain & Permis de lotir",
    optTopo: "Plan topographique & Courbes de niveau",
    optImplantation: "Implantation d'ouvrages & Réseaux VRD",
    optSurfaces: "Calcul de surfaces & Document d'arpentage",
    optCopro: "Mise en copropriété & Tableau descriptif (EDD)",
    optLoi0815: "Régularisation constructions (Lois 08-15 / 22-55)",
    optLoi0207: "Dossier acte de propriété (Loi 02-07)",
    optPossession: "Certificat de possession (شهادة الحيازة)",
    optHabitatRural: "Plan de masse habitat rural",
    optCompteInconnu: "Régularisation compte inconnu / non réclamé",
    optAgricole: "Enquête carte fellah & Puits artésien",
    optExpertise: "Expertise foncière & Évaluation vénale",
    optOther: "Autre prestation foncière ou cadastrale",

    labelLocation: "Localisation du terrain",
    placeholderLocation: "Commune, Ville ou Wilaya de situation de la parcelle",
    labelMessage: "Votre message",
    placeholderMessage: "Précisez la superficie approximative, le numéro de section/ilot ou l'objet de votre démarche...",
    privacyText: "Vos données restent strictement confidentielles et ne sont utilisées que pour répondre à votre demande.",
    btnSubmitQuote: "Demander un devis gratuit",
    btnSending: "Envoi de votre demande...",
    // QR Code and Networks
    btnOpenQrModal: "QR Code Contact & Réseaux",
    qrModalTitle: "Scanner le QR Code du Cabinet",
    qrModalSubtitle: "Enregistrez nos coordonnées et accédez à nos réseaux en un instant avec votre smartphone.",
    qrTabVcard: "Contact Téléphone (vCard)",
    qrTabWhatsapp: "WhatsApp Direct",
    qrVcardHelp: "Pointez votre appareil photo pour enregistrer automatiquement le cabinet dans vos contacts.",
    qrWhatsappHelp: "Scannez pour démarrer une conversation WhatsApp instantanée avec nos géomètres experts.",
    btnDownloadVcard: "Télécharger la fiche contact (.vcf)",
    qrNetworksLabel: "Réseaux & Liens officiels du cabinet :",
    netFacebook: "Page Facebook",
    netLinkedIn: "Profil LinkedIn",
    netMaps: "Itinéraire Google Maps",

    // Email and Devis Dispatch Modal
    quoteModalTitle: "Votre demande de devis est prête !",
    quoteModalDesc: "Votre dossier a été mis en forme. Vous pouvez l'envoyer directement par email ou le transmettre par WhatsApp.",
    btnSendEmail: "Envoyer par Email (Messagerie)",
    btnSendWhatsapp: "Transmettre sur WhatsApp",
    btnCopyQuote: "Copier les détails du devis",
    copiedQuoteToast: "Détails du devis copiés dans le presse-papier !",
    quoteSummaryHeader: "Récapitulatif de votre demande :",


    // Errors
    errName: "Veuillez renseigner votre nom complet.",
    errPhone: "Veuillez renseigner un numéro de téléphone valide.",
    errPrestation: "Veuillez sélectionner le type de prestation.",
    errEmail: "Veuillez renseigner une adresse email valide.",

    // Footer
    footerTagline: "Cabinet Géomètre Expert Foncier agréé par l'Ordre des Géomètres-Experts (OGEF). Travaux fonciers, cadastraux et topographiques conformes aux normes légales algériennes.",
    footerBadge1: "Agréé Ordre des Géomètres Experts (OGEF)",
    footerBadge2: "Interventions sur toute la Wilaya",
    footerColServices: "Prestations",
    footerColNav: "Navigation",
    footerColContact: "Nous joindre",
    footerCopyright: "© Cabinet Géomètre Expert Foncier Agréé OGEF. Tous droits réservés.",
    footerBackToTop: "Retour en haut"
  },

  ar: {
    // Top Bar & Meta
    pageTitle: "مكتب المهندس الخبير العقاري المعتمد OGEF | تحديد المعالم، المسح والتسوية العقارية",
    certifiedBadge: "معتمد لدى الهيئة الوطنية للمهندسين الخبراء العقاريين (OGEF)",
    officeHours: "الأحد إلى الخميس : 8:00 – 16:00",
    callUs: "اتصل بنا",

    // Nav
    brandTitle: "مكتب المهندس الخبير العقاري",
    brandSubtitle: "معتمد OGEF • الخبرة العقارية والطبوغرافية",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navCadastre: "التسوية والقوانين",
    navLivrables: "نماذج الأعمال",
    navProcess: "منهجية العمل",
    navCabinet: "عن المكتب",
    navTestimonials: "آراء العملاء",
    navFaq: "الأسئلة الشائعة",
    navContact: "اتصل بنا",
    btnFreeQuote: "عرض سعر مجاني",

    // Hero
    heroBadge: "معتمد لدى الهيئة الوطنية للمهندسين الخبراء العقاريين (OGEF)",
    heroTitle: "أمّنوا حدود عقاراتكم وسوّوا وضعياتكم بكل ثقة وراحة بال",
    heroDesc: "تحديد المعالم (البورناج)، تسوية العقارات (القوانين 08/15 و 22/55 و 02-07)، تقسيم وتجزئة الأراضي، مخططات المسح، شهادة الحيازة والطبوغرافيا: ننجز كافة أعمالكم بدقة مطابقة للتشريع الجزائري.",
    btnHeroQuote: "طلب عرض سعر مجاني",
    btnHeroServices: "اكتشف خدماتنا",
    btnWhatsApp: "تواصل عبر واتساب",
    
    // Hero Trust
    trustResponseTitle: "رد خلال 48 ساعة",
    trustResponseDesc: "دراسة سريعة للطلب وعرض بدون التزام",
    trustCoverageTitle: "تدخلات عبر كامل الولاية",
    trustCoverageDesc: "تنقلات سريعة في المناطق الحضرية والريفية",
    trustQualityTitle: "ملفات معتمدة رسمياً لدى مسح الأراضي",
    trustQualityDesc: "رفع ميداني دقيق ومطابقة قانونية كاملة",

    // Hero Blueprint Card
    cardHeaderTitle: "رفع طبوغرافي وعقاري معتمد",
    cardHeaderTech: "نظام GPS RTK سنتيمتري",
    cardStatusLabel: "حالة الملف",
    cardStatusVal: "مطابق ومعتمد لدى OGEF",
    cardToleranceLabel: "نسبة التسامح",
    cardDelimLabel: "تحديد المعالم",
    cardDelimVal: "محضر رسمي نافذ",

    // Social Proof
    trustBarLabel: "شريك موثوق لدى الهيئات الرسمية والمحترفين :",
    partnerNotaires: "مكاتب التوثيق (الموثقين)",
    partnerParticuliers: "الملاك والأفراد والعائلات",
    partnerPromoteurs: "المرقون العقاريون وشركات البناء",
    partnerArchitectes: "المهندسون المعماريون ومكاتب الدراسات",

    // Services - General
    servicesTag: "الخدمات الرسمية للمكتب",
    servicesTitle: "خبرة عقارية ومسحية شاملة وفق التشريع الجزائري",
    servicesSubtitle: "باعتمادنا من الهيئة الوطنية للمهندسين الخبراء العقاريين، نضمن إنجاز كافة الإجراءات الطبوغرافية، المسحية والملفات الإدارية.",
    serviceQuoteLink: "طلب عرض سعر لهذه الخدمة",

    // Official Algerian Catalog Section
    catalogTag: "الإطار القانوني والمسح العقاري في الجزائر",
    catalogTitle: "مجالات الاختصاص والخدمات المعتمدة",
    catalogSubtitle: "مطابقة تامة لقوانين العقار ومصالح مسح الأراضي، الحفظ العقاري ومديريات التعمير والبلديات.",

    // Specific Algerian Services
    servDocArpentageTitle: "وثيقة القياس",
    servDocArpentageDesc: "إعداد وثيقة القياس الرسمية المعتمدة والإلزامية لكافة المعاملات وعقود نقل الملكية والتحيين لدى مسح الأراضي.",

    servLoi0207Title: "ملف عقد الملكية (القانون 02-07)",
    servLoi0207Desc: "إعداد الملف التقني الطبوغرافي للحصول على عقد الملكية المشهر في إطار قانون التسوية العقارية 02-07.",

    servPossessionTitle: "طلب شهادة الحيازة",
    servPossessionDesc: "إعداد ومتابعة ملفات طلب شهادة الحيازة للعقارات غير الممسوحة وغير المزودة بسندات مشهرة.",

    servHabitatRuralTitle: "مخطط الكتلة والموقع (البناء الريفي)",
    servHabitatRuralDesc: "إعداد مخطط الكتلة ومخطط الموقع المحددين والمطلوبين للحصول على إعانة ورخصة البناء الريفي.",

    servExpertiseTitle: "الخبرات العقارية والاستشارية",
    servExpertiseDesc: "إجراء الخبرات الودية والقضائية، تقدير وتثمين العقارات، وحل نزاعات الحدود والارتفاقات.",

    servBornageTitle: "تحديد معالم الحدود والقسمات الودية",
    servBornageDesc: "تثبيت دقيق لحدود الملكية بحضور الأطراف، غرس المعالم الرسمية وتحرير وتوقيع محضر تحديد المعالم.",

    servPermisLotirTitle: "ملف رخصة التجزئة والتقسيم",
    servPermisLotirDesc: "إعداد مخططات الفرز والتجزئة والملف التقني للحصول على رخصة التجزئة من البلدية ومديرية التعمير.",

    servEDDTitle: "الجدول الوصفي للتقسيم (الملكية المشتركة)",
    servEDDDesc: "رفع مخططات العمارات وتحديد الأجزاء المشتركة والخاصة وحساب الأجزاء من الألف (الأسهم) لعقود البيع على التصميم والمشتركة.",

    servCadastreTitle: "مخططات المسح ومخططات الأراضي",
    servCadastreDesc: "إعداد المخططات المطابقة لقسمات المسح العقاري وتسوية التداخل والترقيم لدى المحافظة العقارية.",

    servCompteInconnuTitle: "العقار غير المطالب به وحساب المجهول",
    servCompteInconnuDesc: "إعداد ملفات تسوية وإخراج العقارات المقيدة في حساب المجهول أو حساب العقار غير المطالب به لدى مصالح المسح.",

    servEstimationTitle: "تقييم وتثمين العقارات",
    servEstimationDesc: "تحديد القيمة السوقية الحقيقية للأراضي العارية، البنايات، المزارع والمحلات التجارية والمستودعات.",

    servLoi0815Title: "تسوية البنايات (القانون 08/15 و 22/55)",
    servLoi0815Desc: "إعداد ملفات مطابقة البنايات غير المكتملة أو المشيدة دون رخصة في إطار أحكام القانونين 08/15 و 22/55.",

    servVRDTitle: "الطبوغرافيا، الجيوديزيا وشبكات الطرق (VRD)",
    servVRDDesc: "الرفوعات الطبوغرافية الشاملة، خطوط التسوية، توقيع الأساسات ودراسة ومتابعة شبكات الصرف والماء الصالح للشرب والطرق.",

    servInvestissementTitle: "الاستثمار الفلاحي والصناعي والسياحي",
    servInvestissementDesc: "مرافقة وتعيين حدود الأوعية العقارية المخصصة للامتياز الفلاحي، المناطق الصناعية والمشاريع السياحية.",

    servAgricoleTitle: "بطاقة فلاح ورخصة حفر بئر ارتوازي",
    servAgricoleDesc: "إجراء التحقيقات العقارية المعتمدة وإعداد المخططات لملفات استخراج بطاقة الفلاح ورخص حفر الآبار الارتوازية.",

    // Deliverables Section
    livrablesTag: "نماذج الأعمال والخبرة",
    livrablesTitle: "معاينة من واقع مخططاتنا وملفاتنا التقنية",
    livrablesSubtitle: "نماذج حقيقية لمخططات توزيع الشقق، حساب المساحات المعتمدة بدقة وجداول الإفراز التوصيفي.",
    livrable1Title: "مخطط معماري وكشف وصفي للفرز والتقسيم",
    livrable1Desc: "قياس معتمد للشقق مع توضيح الفضاءات (غرف النوم، المعيشة، المطبخ، الخدمات) وتحليل مسارات الدخول والربط وحساب المساحة الصافية بدقة.",
    livrable2Title: "الدليل الشامل للخدمات العقارية والمسحية",
    livrable2Desc: "متابعة شاملة لكافة الإجراءات التوثيقية، المسحية والإدارية لدى مختلف المصالح العمومية.",

    // Process
    processTag: "منهجية العمل",
    processTitle: "مرافقة واضحة من تقديم الطلب حتى استلام الملف",
    processSubtitle: "طريقة عمل احترافية، شفافة ومجربة لحماية حقوقكم العقارية.",
    step1Badge: "المرحلة 01",
    step1Title: "الاتصال الأولي",
    step1Desc: "تصفون لنا مشروعكم واحتياجكم، ونوافيكم بالتقييم الأولي خلال 48 ساعة.",
    step2Badge: "المرحلة 02",
    step2Title: "عرض سعر شفاف",
    step2Desc: "عرض تكلفة مفصل بدون مصاريف خفية، مع تحديد الموعد التقديري للتدخل.",
    step3Badge: "المرحلة 03",
    step3Title: "الأشغال الميدانية والحسابات",
    step3Desc: "تتدخل فرقنا المتخصصة لرفع المعطيات ومراقبتها بأحدث أجهزة القياس.",
    step4Badge: "المرحلة 04",
    step4Title: "تسليم الملف النهائي",
    step4Desc: "تسليم المخططات والمحاضر الرسمية باليد أو إرسالها للجهات الإدارية المعنية.",

    // Cabinet
    cabinetTag: "عن المكتب",
    cabinetTitle: "فريق من المحترفين المعتمدين في خدمتكم",
    cabinetLead: "مسجل بالجدول الوطني للهيئة الوطنية للمهندسين الخبراء العقاريين (OGEF)، يجمع مكتبنا بين الخبرة الميدانية الواسعة وأحدث تقنيات القياس المساحي (GPS RTK السنتيمتري، محطات الرصد المتكاملة، ونظم المعلومات الجغرافية).",
    cabCheck1Title: "اعتماد رسمي OGEF وأداء اليمين القانونية",
    cabCheck1Desc: "اعتماد رسمي يضمن الحجية والقوة القانونية النافذة لكافة محاضرنا ومخططاتنا لدى الهيئات الرسمية.",
    cabCheck2Title: "التزام صارم بأخلاقيات وضوابط المهنة",
    cabCheck2Desc: "حياد تام، أمانة مهنية، سرية مطلقة، ودقة تقنية تضمن حقوق الأطراف.",
    cabCheck3Title: "إلمام تام بالقوانين والإجراءات العقارية الجزائرية",
    cabCheck3Desc: "خبرة واسعة في التشريع العقاري، قانون مسح الأراضي وقوانين التسوية 08/15 و 22/55 و 02-07.",
    cabCheck4Title: "تدخلات سريعة في كافة المناطق الحضرية والريفية",
    cabCheck4Desc: "فرق عمل ميدانية جاهزة للتنقل في جميع بلديات الولاية.",
    btnTalkExpert: "تحدث مع مهندس خبير معتمد",

    stat1Text: "سنوات خبرة معتمدة",
    stat1Sub: "في المجال العقاري والطبوغرافي",
    stat2Text: "ملف تم إنجازه",
    stat2Sub: "للأفراد والمحترفين",
    stat3Text: "وقت الرد الأقصى",
    stat3Sub: "التزام بالسرعة والفعالية",
    stat4Text: "ملفات متابعة بدقة",
    stat4Sub: "من البداية حتى المصادقة",

    techBoxTitle: "عتاد وتجهيزات ذات دقة ميليمترية",
    techBoxDesc: "أجهزة استقبال GPS GNSS ثنائية التردد بنظام RTK، محطات رصد متكاملة Total Stations بقياس ليزري، وبرمجيات CAD/GIS لمخططات مطابقة للمعايير الوطنية.",

    // Testimonials Section
    testimonialsTag: "آراء عملائنا",
    testimonialsTitle: "شهادات تعكس ثقة الشركاء والزبائن",
    testimonialsSubtitle: "رضا عملائنا وسلامة وثائقهم القانونية هي أولويتنا الدائمة.",
    testi1Name: "كريم بن علي",
    testi1Role: "مالك عقار خاص",
    testi1Comment: "تم حل خلاف حدود مع الجيران بكل هدوء وبمحضر رسمي دقيق في وقت قياسي. تم قبول الملف فوراً لدى الموثق والبلدية.",
    testi2Name: "سارة منصوري",
    testi2Role: "مهندسة معمارية",
    testi2Comment: "نتعامل مع المكتب بانتظام في جميع مشاريعنا لرفع التضاريس وإسقاط المباني. ملفات DWG دقيقة ومطابقة تماماً للمعايير الهندسية.",
    testi3Name: "الأستاذ ر. خليفي",
    testi3Role: "موثق",
    testi3Comment: "ملفات التسوية والقسمة والجدول الوصفي محررة بدقة فائقة وتسهل عمل التوثيق والمحافظة العقارية ومسح الأراضي.",

    // FAQ Section
    faqTag: "الأسئلة الشائعة",
    faqTitle: "إجابات الخبير على تساؤلاتكم العقارية",
    faqSubtitle: "كل ما تحتاج معرفته قبل البدء في مشروعك العقاري بكل طمأنينة.",
    faqQ1: "ما هي أهمية تحديد المعالم (البورناج)؟",
    faqA1: "تحديد المعالم الوجاهي هو الإجراء القانوني الوحيد الذي يثبت حدود الملكية بصفة قطعية بين العقارات المجاورة، ويمنع التعديات ويحمي القيمة المالية والقانونية لعقارك.",
    faqQ2: "كيف تتم تسوية البنايات في إطار القانون 08/15 و 22/55؟",
    faqA2: "تسمح هذه القوانين بتسوية ومطابقة البنايات غير المكتملة أو المنجزة بدون رخصة. يقوم المهندس الخبير العقاري بإعداد مخططات الوضعية الحالية والمطابقة والجدول الوصفي اللازم لإيداع الملف لدى البلدية.",
    faqQ3: "هل عرض السعر (Devis) مجاني وبدون التزام؟",
    faqA3: "نعم، بكل تأكيد. نقوم بدراسة مشروعكم وتقديم عرض سعر دقيق ومفصل ومجاني تماماً خلال 48 ساعة وبدون أي رسوم خفية.",
    faqQ4: "هل مخططاتكم ومحاضركم مقبولة لدى مسح الأراضي والمحافظة العقارية؟",
    faqA4: "نعم، بصفتنا مهندسين خبراء عقاريين محلفين ومعتمدين لدى الهيئة الوطنية OGEF، فإن جميع وثائقنا تحظى بالقوة القانونية الكاملة ومقبولة لدى المحافظات العقارية، المحاكم ومصالح الدولة.",

    // Contact
    contactTag: "اتصل بنا",
    contactTitle: "اطلب عرض سعر مجاني لمشروعك",
    contactSubtitle: "اشرح لنا طبيعة طلبك وسنعاود الاتصال بك خلال 48 ساعة.",
    contactInfoTitle: "معلومات الاتصال بالمكتب",
    contactInfoDesc: "نحن في خدمتكم لتقديم الاستشارة والمرافقة الميدانية في جميع معاملاتكم العقارية والمطابقة.",
    contactAddressLabel: "العنوان",
    contactAddressVal: "عنوان المكتب، المدينة، الولاية",
    contactPhoneLabel: "الهاتف",
    contactEmailLabel: "البريد الإلكتروني",
    contactHoursLabel: "أوقات العمل",
    contactHoursVal: "الأحد إلى الخميس، 8:00 – 16:00",
    quickCallTitle: "هل تحتاج إلى استشارة عاجلة؟",
    quickCallDesc: "مهندسونا رهن إشارتكم عبر الهاتف أو تطبيق واتساب خلال أوقات العمل الرسمية.",
    btnCallDirect: "الاتصال المباشر بالمكتب",

    // Form
    formSuccessTitle: "شكراً لك! تم إرسال طلبك بنجاح.",
    formSuccessDesc: "سنتواصل معك في غضون 48 ساعة مع دراسة أولية لمشروعك.",
    labelFullName: "الاسم واللقب",
    placeholderFullName: "مثال: محمد بن علي",
    labelPhone: "رقم الهاتف",
    placeholderPhone: "05XX XX XX XX أو +213 ...",
    labelEmail: "البريد الإلكتروني",
    labelPrestation: "نوع الخدمة المطلوبة",
    selectPrestationDefault: "اختر نوع الخدمة العقارية المطلوبة",

    // Form Select Options
    optBornage: "تحديد المعالم (البورناج) وتثبيت الحدود",
    optDivision: "تقسيم وتجزئة الأراضي وملف رخصة التجزئة",
    optTopo: "مخطط طبوغرافي وخطوط التسوية",
    optImplantation: "التوقيع والإسقاط الطبوغرافي وشبكات VRD",
    optSurfaces: "وثيقة القياس وحساب المساحات المعتمدة",
    optCopro: "الملكية المشتركة والجدول الوصفي للتقسيم (EDD)",
    optLoi0815: "تسوية البنايات في إطار القانون 08/15 و 22/55",
    optLoi0207: "ملف عقد الملكية في إطار القانون 02-07",
    optPossession: "طلب شهادة الحيازة",
    optHabitatRural: "مخطط الكتلة والموقع للبناء الريفي",
    optCompteInconnu: "تسوية العقار غير المطالب به وحساب المجهول",
    optAgricole: "تحقيقات بطاقة فلاح ورخصة حفر بئر ارتوازي",
    optExpertise: "الخبرات العقارية والاستشارية وتثمين العقار",
    optOther: "خدمة عقارية أو مسحية أخرى",

    labelLocation: "موقع العقار",
    placeholderLocation: "البلدية أو الولاية أو رقم القسمة / الجزيرة",
    labelMessage: "رسالتكم",
    placeholderMessage: "حدد المساحة التقريبية، الهدف من المعاملة (تسوية، بيع، نزاع، بناء)...",
    privacyText: "بياناتكم تظل سرية تماماً وتستخدم فقط للرد على استفساركم.",
    btnSubmitQuote: "إرسال طلب عرض السعر المجاني",
    btnSending: "جارٍ إرسال طلبكم...",
    // QR Code and Networks
    btnOpenQrModal: "رمز QR للتواصل والشبكات",
    qrModalTitle: "امسح رمز QR للتواصل مع المهندس الخبير",
    qrModalSubtitle: "احفظ معلومات الاتصال وادخل على شبكاتنا مباشرة عبر كاميرا هاتفك.",
    qrTabVcard: "حفظ جهة الاتصال (vCard)",
    qrTabWhatsapp: "واتساب مباشر",
    qrVcardHelp: "وجّه كاميرا هاتفك نحو الرمز لإضافة رقم المكتب مباشرة إلى جهات اتصالك.",
    qrWhatsappHelp: "امسح الرمز لبدء محادثة واتساب فورية مع المهندس الخبير.",
    btnDownloadVcard: "تحميل بطاقة الاتصال (.vcf)",
    qrNetworksLabel: "شبكات ومنصات التواصل للمكتب :",
    netFacebook: "صفحة فيسبوك",
    netLinkedIn: "حساب لينكدإن",
    netMaps: "موقع المكتب على Google Maps",

    // Email and Devis Dispatch Modal
    quoteModalTitle: "تم تجهيز طلب عرض السعر بنجاح !",
    quoteModalDesc: "تمت صياغة طلبكم. يمكنكم توجيهه مباشرة عبر البريد الإلكتروني أو تطبيق واتساب.",
    btnSendEmail: "إرسال عبر البريد الإلكتروني",
    btnSendWhatsapp: "إرسال عبر تطبيق واتساب",
    btnCopyQuote: "نسخ تفاصيل الطلب",
    copiedQuoteToast: "تم نسخ تفاصيل الطلب إلى الحافظة !",
    quoteSummaryHeader: "ملخص طلبكم :",


    // Errors
    errName: "يرجى إدخال الاسم واللقب كاملاً.",
    errPhone: "يرجى إدخال رقم هاتف صالح للاستخدام.",
    errPrestation: "يرجى تحديد نوع الخدمة المطلوبة.",
    errEmail: "يرجى إدخال بريد إلكتروني صحيح.",

    // Footer
    footerTagline: "مكتب المهندس الخبير العقاري معتمد لدى الهيئة الوطنية للمهندسين الخبراء العقاريين (OGEF). أشغال عقارية، مسحية وطبوغرافية مطابقة للتشريع الجزائري.",
    footerBadge1: "معتمد لدى الهيئة الوطنية OGEF",
    footerBadge2: "تدخلات تغطي كامل الولاية",
    footerColServices: "الخدمات",
    footerColNav: "روابط سريعة",
    footerColContact: "تواصل معنا",
    footerCopyright: "© جميع الحقوق محفوظة لمكتب المهندس الخبير العقاري المعتمد OGEF.",
    footerBackToTop: "الرجوع إلى الأعلى"
  },

  en: {
    // Top Bar & Meta
    pageTitle: "Chartered Land Surveyor Office - OGEF Licensed | Cadastre, Boundary & Legal Regularization",
    certifiedBadge: "Member of the National Board of Chartered Surveyors (OGEF)",
    officeHours: "Sunday to Thursday: 8:00 AM – 4:00 PM",
    callUs: "Call us",

    // Nav
    brandTitle: "Chartered Land Surveyor",
    brandSubtitle: "OGEF Licensed • Land Expertise & Topography",
    navHome: "Home",
    navServices: "Services",
    navCadastre: "Cadastre & Laws",
    navLivrables: "Deliverables",
    navProcess: "Our Process",
    navCabinet: "The Office",
    navTestimonials: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",
    btnFreeQuote: "Free Quote",

    // Hero
    heroBadge: "Licensed by the National Board of Chartered Surveyors (OGEF)",
    heroTitle: "Secure your property boundaries and resolve land titles with peace of mind",
    heroDesc: "Boundary surveys, title regularization (Laws 08-15, 22-55, 02-07), land subdivision, cadastral plans, and topography: high-precision surveying services adhering strictly to Algerian statutory standards.",
    btnHeroQuote: "Request a Free Quote",
    btnHeroServices: "Discover Our Services",
    btnWhatsApp: "Chat on WhatsApp",
    
    // Hero Trust
    trustResponseTitle: "Response within 48h",
    trustResponseDesc: "Fast project assessment and no-obligation quote",
    trustCoverageTitle: "Interventions across the Wilaya",
    trustCoverageDesc: "Rapid deployment in urban & rural areas",
    trustQualityTitle: "OGEF & Cadastral Certified Files",
    trustQualityDesc: "Millimeter measurement and statutory compliance",

    // Hero Blueprint Card
    cardHeaderTitle: "Topographic & Cadastral Survey",
    cardHeaderTech: "Centimetric RTK GNSS",
    cardStatusLabel: "File status",
    cardStatusVal: "Certified & OGEF Licensed",
    cardToleranceLabel: "Tolerance",
    cardDelimLabel: "Demarcation",
    cardDelimVal: "Official Minute",

    // Social Proof
    trustBarLabel: "Trusted partner of institutions and professionals:",
    partnerNotaires: "Notary Offices",
    partnerParticuliers: "Private Homeowners",
    partnerPromoteurs: "Property Developers & Builders",
    partnerArchitectes: "Architects & Engineering Firms",

    // Services - General
    servicesTag: "Our Official Services",
    servicesTitle: "Comprehensive land, cadastral and engineering expertise",
    servicesSubtitle: "Licensed by OGEF, we carry out all surveying, demarcation, regularization, and engineering studies in Algeria.",
    serviceQuoteLink: "Request a quote for this service",

    // Official Algerian Catalog Section
    catalogTag: "Algerian Legal & Cadastral Framework",
    catalogTitle: "Specialized areas of intervention",
    catalogSubtitle: "Strict adherence to property laws, cadastral mapping, land registry, and municipal urban planning.",

    // Specific Algerian Services
    servDocArpentageTitle: "Document of Survey (وثيقة القياس)",
    servDocArpentageDesc: "Preparation of the official Survey Document (وثيقة القياس) mandatory for property conveyancing and cadastral records.",

    servLoi0207Title: "Property Title Deed (Law 02-07)",
    servLoi0207Desc: "Compilation of technical surveying files to obtain registered property title deeds under Law 02-07.",

    servPossessionTitle: "Possession Certificate (شهادة الحيازة)",
    servPossessionDesc: "Preparation and tracking of Possession Certificate applications for untitled parcels.",

    servHabitatRuralTitle: "Rural Housing Plans (البناء الريفي)",
    servHabitatRuralDesc: "Drafting dimensioned site and layout plans required for rural housing grants and building permits.",

    servExpertiseTitle: "Land Appraisal & Advisory",
    servExpertiseDesc: "Amicable and judicial expert assessments, market valuation, boundary dispute resolution, and easements.",

    servBornageTitle: "Boundary Survey & Amicable Division",
    servBornageDesc: "Statutory demarcation of boundaries, placement of certified boundary stones, and drafting official minutes.",

    servPermisLotirTitle: "Subdivision Permit (رخصة التجزئة)",
    servPermisLotirDesc: "Parcel division plans and documentation for municipal subdivision and development permits.",

    servEDDTitle: "Strata Division Statement (EDD - الجدول الوصفي)",
    servEDDDesc: "Floor-by-floor interior plans, co-ownership share calculations, and Descriptive Statements of Division.",

    servCadastreTitle: "Cadastral & Parcel Mapping",
    servCadastreDesc: "Boundary alignment and verification surveys matching official Cadastral and Land Registry sections.",

    servCompteInconnuTitle: "Unknown & Unclaimed Accounts",
    servCompteInconnuDesc: "Regularization files for parcels registered under unknown accounts (حساب المجهول) or unclaimed properties.",

    servEstimationTitle: "Property Valuation & Estimation",
    servEstimationDesc: "Fair market valuation for vacant land, residential buildings, agricultural properties, and commercial premises.",

    servLoi0815Title: "Building Compliance (Laws 08-15 & 22-55)",
    servLoi0815Desc: "Regularization files for completed and ongoing constructions under Laws 08-15 and 22-55 for certificate of compliance.",

    servVRDTitle: "Topography, Geodesy & Utilities (VRD)",
    servVRDDesc: "Altimetric surveys, structural setting-out, drainage, water supply, and road network (VRD) engineering.",

    servInvestissementTitle: "Agricultural & Industrial Concessions",
    servInvestissementDesc: "Technical survey support and demarcation for APFA agricultural concessions, industrial parks, and tourism projects.",

    servAgricoleTitle: "Farmer Card & Water Well Drilling",
    servAgricoleDesc: "Certified land investigations for the issuance of Farmer Cards (بطاقة فلاح) and artesian borehole permits.",

    // Deliverables Section
    livrablesTag: "Technical Deliverables",
    livrablesTitle: "Examples of our technical surveys and plans",
    livrablesSubtitle: "Real-world floor plans, strata co-ownership subdivisions with measured areas and circulation graphs.",
    livrable1Title: "Architectural Plan & Strata Division Statement",
    livrable1Desc: "Certified interior measurements with functional zoning (reception, bedrooms, service areas), circulation graphs, and net floor area breakdowns.",
    livrable2Title: "Comprehensive Algerian Surveying Catalog",
    livrable2Desc: "Full management of all notarial, cadastral, and administrative procedures across public departments.",

    // Process
    processTag: "Our Process",
    processTitle: "A seamless workflow, from inquiry to final delivery",
    processSubtitle: "A disciplined, transparent, and proven methodology to protect your property rights.",
    step1Badge: "Step 01",
    step1Title: "Initial Contact",
    step1Desc: "You describe your project. We respond within 48h with a preliminary evaluation.",
    step2Badge: "Step 02",
    step2Title: "Transparent Quote",
    step2Desc: "A detailed proposal with zero hidden costs, including an estimated project timeline.",
    step3Badge: "Step 03",
    step3Title: "Field Surveys & Computations",
    step3Desc: "Our teams deploy on-site to collect, verify, and calculate data using millimeter-grade gear.",
    step4Badge: "Step 04",
    step4Title: "Delivery of the File",
    step4Desc: "Certified plans, minutes, and legal deliverables handed over directly or forwarded to relevant authorities.",

    // Cabinet
    cabinetTag: "The Office",
    cabinetTitle: "A dedicated team of licensed professionals",
    cabinetLead: "Officially registered with the National Board of Chartered Surveyors (OGEF), our firm merges field experience with cutting-edge surveying tech (RTK GNSS, robotic total stations, GIS) to produce legally enforceable deliverables.",
    cabCheck1Title: "Official OGEF License & Sworn Authority",
    cabCheck1Desc: "State certification guaranteeing statutory legal standing to all our minutes and plans.",
    cabCheck2Title: "Strict adherence to standards and professional ethics",
    cabCheck2Desc: "Unwavering impartiality, professional secrecy, and impeccable technical accuracy.",
    cabCheck3Title: "In-depth mastery of Algerian land laws",
    cabCheck3Desc: "Extensive expertise in the Land Code, cadastre, land registry, and Laws 08-15, 22-55, and 02-07.",
    cabCheck4Title: "Prompt intervention in urban and rural settings",
    cabCheck4Desc: "Mobile survey crews equipped to operate swiftly across all terrains and locations.",
    btnTalkExpert: "Speak with a Chartered Surveyor",

    stat1Text: "Years of Experience",
    stat1Sub: "in Land & Cadastral Surveying",
    stat2Text: "Projects Completed",
    stat2Sub: "for Homeowners & Businesses",
    stat3Text: "Response Time",
    stat3Sub: "Fast quote commitment",
    stat4Text: "Files Followed Through",
    stat4Sub: "from A to Z with precision",

    techBoxTitle: "High-Precision Equipment & Tools",
    techBoxDesc: "Dual-frequency RTK GNSS receivers, robotic total stations with reflectorless lasers, and CAD/GIS software for plans meeting official cadastral standards.",

    // Testimonials Section
    testimonialsTag: "Client Reviews",
    testimonialsTitle: "What our clients say about us",
    testimonialsSubtitle: "The complete peace of mind of our clients and the statutory validity of their documents are our highest commitment.",
    testi1Name: "Karim Benali",
    testi1Role: "Property Owner",
    testi1Comment: "A boundary dispute with neighbors resolved calmly and swiftly thanks to an impeccable mutual demarcation. The official minute was accepted without hesitation by the notary.",
    testi2Name: "Sarah Mansouri",
    testi2Role: "Chartered Architect",
    testi2Comment: "We collaborate regularly on our site surveys and building staking. The CAD files are extremely accurate, delivered on time, and strictly conform to planning requirements.",
    testi3Name: "Maître R. Khelifi",
    testi3Role: "Notary Public",
    testi3Comment: "Subdivision, title deeds, and strata division files are always clear, rigorous, and completely aligned with Cadastral and Land Registry requirements.",

    // FAQ Section
    faqTag: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Everything you need to know before starting your land survey project.",
    faqQ1: "Why is a formal mutual boundary demarcation essential?",
    faqA1: "Mutual demarcation is the only legally binding act that permanently fixes boundaries between contiguous properties. It prevents future disputes, encroachments, and preserves property value.",
    faqQ2: "What is regularisation under Laws 08-15 and 22-55?",
    faqA2: "These laws allow finalizing and regularizing buildings constructed without permits or lacking completion certificates. The surveyor establishes as-built plans and technical division statements needed for administrative approval.",
    faqQ3: "Is the price estimate completely free and without commitment?",
    faqA3: "Yes, absolutely. We evaluate your inquiry within 48h and deliver a transparent, itemized quotation with no hidden costs.",
    faqQ4: "Are your surveys recognized by the Cadastre and Land Registry?",
    faqA4: "Yes. As sworn, state-licensed chartered land surveyors (OGEF), all our deliverables hold legal standing and are directly usable by notaries, municipal planning departments, and judicial courts.",

    // Contact
    contactTag: "Contact & Quote",
    contactTitle: "Request Your Free Quote",
    contactSubtitle: "Describe your project and we will get back to you within 48 hours.",
    contactInfoTitle: "Office Coordinates",
    contactInfoDesc: "We are available to advise and support you throughout all your land and cadastral procedures.",
    contactAddressLabel: "Address",
    contactAddressVal: "Office Address, City, Wilaya",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactHoursLabel: "Working Hours",
    contactHoursVal: "Sunday to Thursday, 8:00 AM – 4:00 PM",
    quickCallTitle: "Need immediate information?",
    quickCallDesc: "Our surveyors are available by phone or WhatsApp during official working hours.",
    btnCallDirect: "Call the Office",

    // Form
    formSuccessTitle: "Thank you! Your request has been successfully submitted.",
    formSuccessDesc: "We will contact you within 48 hours with an initial evaluation of your file.",
    labelFullName: "Full Name",
    placeholderFullName: "Ex: Mohamed Benali",
    labelPhone: "Phone Number",
    placeholderPhone: "05XX XX XX XX or +213 ...",
    labelEmail: "Email Address",
    labelPrestation: "Service Type",
    selectPrestationDefault: "Select your surveying requirement",

    // Form Select Options
    optBornage: "Boundary Demarcation (Bornage)",
    optDivision: "Land Subdivision & Permis de Lotir",
    optTopo: "Topographic Survey & Contours",
    optImplantation: "Structural Staking & VRD Networks",
    optSurfaces: "Area Measurement & Survey Document (وثيقة القياس)",
    optCopro: "Strata Division Statement (EDD)",
    optLoi0815: "Building Regularization (Laws 08-15 / 22-55)",
    optLoi0207: "Property Title Deed (Law 02-07)",
    optPossession: "Possession Certificate (شهادة الحيازة)",
    optHabitatRural: "Rural Housing Site Plan (البناء الريفي)",
    optCompteInconnu: "Unknown Account Regularization (حساب المجهول)",
    optAgricole: "Farmer Card & Well Drilling (بطاقة فلاح)",
    optExpertise: "Land Appraisal & Market Valuation",
    optOther: "Other Surveying Inquiry",

    labelLocation: "Land Location",
    placeholderLocation: "Municipality, City or Wilaya where parcel is located",
    labelMessage: "Your Message",
    placeholderMessage: "Specify estimated area, cadastral section/ilot number, or project goals...",
    privacyText: "Your data remains confidential and is exclusively used to answer your inquiry.",
    btnSubmitQuote: "Request Free Quote",
    btnSending: "Submitting your inquiry...",
    // QR Code and Networks
    btnOpenQrModal: "Contact & Networks QR Code",
    qrModalTitle: "Scan the Office QR Code",
    qrModalSubtitle: "Save our contact details and access our networks instantly using your smartphone.",
    qrTabVcard: "Phone Contact (vCard)",
    qrTabWhatsapp: "Direct WhatsApp",
    qrVcardHelp: "Point your camera at the QR code to automatically save the office to your phone contacts.",
    qrWhatsappHelp: "Scan to start an instant WhatsApp chat with our chartered surveyors.",
    btnDownloadVcard: "Download contact card (.vcf)",
    qrNetworksLabel: "Office Channels & Direct Links:",
    netFacebook: "Facebook Page",
    netLinkedIn: "LinkedIn Profile",
    netMaps: "Google Maps Location",

    // Email and Devis Dispatch Modal
    quoteModalTitle: "Your Quote Request is Ready!",
    quoteModalDesc: "Your inquiry has been formatted. You can submit it directly via Email or send it over WhatsApp.",
    btnSendEmail: "Send via Email (Email App)",
    btnSendWhatsapp: "Send via WhatsApp",
    btnCopyQuote: "Copy Quote Details",
    copiedQuoteToast: "Quote details copied to clipboard!",
    quoteSummaryHeader: "Summary of your inquiry:",


    // Errors
    errName: "Please enter your full name.",
    errPhone: "Please enter a valid phone number.",
    errPrestation: "Please select a service type.",
    errEmail: "Please enter a valid email address.",

    // Footer
    footerTagline: "Chartered Land Surveyor Office licensed by the National Board of Chartered Surveyors (OGEF). Cadastral, demarcation, and engineering surveys fully compliant with Algerian statutory laws.",
    footerBadge1: "Licensed by OGEF (Ordre des Géomètres-Experts)",
    footerBadge2: "Interventions across the Wilaya",
    footerColServices: "Services",
    footerColNav: "Navigation",
    footerColContact: "Get in Touch",
    footerCopyright: "© Chartered Land Surveyor Office - OGEF Licensed. All rights reserved.",
    footerBackToTop: "Back to top"
  }
};

window.translations = translations;
