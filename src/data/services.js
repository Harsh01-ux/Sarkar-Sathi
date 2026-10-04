export const services = [
  {
    id: "voter-id",
    name: {
      en: "Voter ID Card",
      hi: "वोटर आईडी कार्ड"
    },
    shortName: {
      en: "Voter ID",
      hi: "वोटर आईडी"
    },
    description: "The Voter ID card (also called EPIC – Electoral Photo Identity Card) is an official identity document issued by the Election Commission of India. It is required to vote in elections and also serves as general-purpose photo identification.",
    category: "Identity",
    aliases: ["voter", "voter id", "voter card", "epic", "election card", "matdata", "matdata pehchan patra", "मतदाता पहचान पत्र", "मतदाता कार्ड", "vote karna", "voter id banana", "वोटर आईडी", "वोटर कार्ड"],
    eligibility: [
      "Must be a citizen of India",
      "Must be 18 years of age or older as of January 1 of the qualifying year",
      "Must be ordinarily resident of the constituency where applying",
      "Must not be disqualified under provisions of Representation of the People Act, 1950"
    ],
    documents: {
      en: [
        { name: "Proof of Age", examples: "Birth certificate, Class 10 marksheet, Passport, Aadhaar card", required: true },
        { name: "Proof of Address", examples: "Aadhaar card, Passport, Bank passbook, Utility bill (not older than 3 months)", required: true },
        { name: "Recent Passport-size Photograph", examples: "2 photos, white background preferred", required: true },
      ],
      hi: [
        { name: "आयु प्रमाण", examples: "जन्म प्रमाण पत्र, 10वीं की मार्कशीट, पासपोर्ट, आधार कार्ड", required: true },
        { name: "पता प्रमाण", examples: "आधार कार्ड, पासपोर्ट, बैंक पासबुक, बिजली का बिल (3 महीने से पुराना नहीं)", required: true },
        { name: "हालिया पासपोर्ट साइज फोटो", examples: "2 फोटो, सफेद बैकग्राउंड", required: true },
      ]
    },
    application: {
      formName: "Form 6 (for new voter registration)",
      formLink: "https://voters.eci.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Election Commission of India",
    officeInfo: "Contact your local Electoral Registration Officer (ERO) or Booth Level Officer (BLO). Offices located at District Collectorate / Tehsil offices.",
    process: {
      en: [
        { step: 1, title: "Visit the Voter Helpline Portal", detail: "Go to voters.eci.gov.in and click 'Register as a New Voter' or find your state's Chief Electoral Officer (CEO) website." },
        { step: 2, title: "Fill Form 6", detail: "Complete Form 6 online with your personal details, address, and constituency information. Upload scanned copies of required documents." },
        { step: 3, title: "Submit the application", detail: "Submit online. You will receive an application reference number via SMS/email. Note it down." },
        { step: 4, title: "Verification by BLO", detail: "A Booth Level Officer (BLO) may visit your residence to verify your details. Ensure someone is available at home." },
        { step: 5, title: "Track status", detail: "Use the reference number to track status at voters.eci.gov.in or call Voter Helpline 1950." },
        { step: 6, title: "Receive Voter ID", detail: "On approval, your EPIC card will be dispatched to your registered address by post, or you can collect from your ERO office." },
      ],
      hi: [
        { step: 1, title: "वोटर हेल्पलाइन पोर्टल पर जाएं", detail: "voters.eci.gov.in पर जाएं और 'नए मतदाता के रूप में पंजीकरण करें' पर क्लिक करें या अपने राज्य के CEO की वेबसाइट खोजें।" },
        { step: 2, title: "फॉर्म 6 भरें", detail: "ऑनलाइन फॉर्म 6 भरें। आवश्यक दस्तावेजों की स्कैन कॉपी अपलोड करें।" },
        { step: 3, title: "आवेदन जमा करें", detail: "ऑनलाइन सबमिट करें। आपको SMS/ईमेल द्वारा एक संदर्भ संख्या (Reference Number) मिलेगी।" },
        { step: 4, title: "BLO द्वारा सत्यापन", detail: "बूथ लेवल ऑफिसर (BLO) सत्यापन के लिए आपके घर आ सकते हैं। सुनिश्चित करें कि घर पर कोई उपलब्ध हो।" },
        { step: 5, title: "स्थिति ट्रैक करें", detail: "संदर्भ संख्या का उपयोग करके voters.eci.gov.in पर स्थिति ट्रैक करें या 1950 पर कॉल करें।" },
        { step: 6, title: "वोटर आईडी प्राप्त करें", detail: "मंजूरी मिलने पर, आपका EPIC कार्ड आपके पते पर भेज दिया जाएगा।" },
      ]
    },
    fee: "Free of charge",
    processingTime: "Typically 30–45 days after verification",
    officialSources: [
      { label: "National Voter's Service Portal (NVSP)", url: "https://voters.eci.gov.in/" },
      { label: "Election Commission of India", url: "https://www.eci.gov.in/" },
      { label: "Voter Helpline", url: "tel:1950" },
    ],
    notes: [
      "You can also apply for Voter ID via the Voter Helpline App (available on Play Store and App Store).",
      "If you move to a new address, apply for Form 8A to update your address in the electoral roll.",
      "Voter registration drives are held periodically – check with your local ERO office.",
    ],
    onlineApply: "https://voters.eci.gov.in/",
    stateDependent: false,
  },
  {
    id: "aadhaar-update",
    name: {
      en: "Aadhaar Update",
      hi: "आधार अपडेट"
    },
    shortName: {
      en: "Aadhaar Update",
      hi: "आधार अपडेट"
    },
    description: "Update your Aadhaar details (address, name, date of birth, gender, or mobile number) through UIDAI's official channels.",
    category: "Identity",
    aliases: ["aadhaar", "aadhar", "adhaar", "address update", "aadhaar address", "aadhaar update", "aadhar address change", "pata badalna", "पता बदलना", "aadhaar address update karwana", "आधार", "आधार कार्ड", "आधार अपडेट"],
    eligibility: [
      "Must already have a valid Aadhaar number",
      "Must have a mobile number linked to Aadhaar for OTP verification (for online update)",
      "Address proof must be in your name"
    ],
    documents: {
      en: [
        { name: "Valid Address Proof", examples: "Passport, Bank Statement/Passbook (last 3 months), Electricity/Water/Gas bill (last 3 months), Voter ID card, Driving Licence", required: true },
      ],
      hi: [
        { name: "वैध पता प्रमाण", examples: "पासपोर्ट, बैंक पासबुक (पिछले 3 महीने), बिजली/पानी का बिल, वोटर आईडी, ड्राइविंग लाइसेंस", required: true },
      ]
    },
    application: {
      formName: "Online: UIDAI Self-Service Portal",
      formLink: "https://myaadhaar.uidai.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Unique Identification Authority of India (UIDAI)",
    officeInfo: "Aadhaar Seva Kendras, Post Offices, Banks. Find nearest centre at appointments.uidai.gov.in.",
    process: {
      en: [
        { step: 1, title: "Go to the myAadhaar Portal", detail: "Visit myaadhaar.uidai.gov.in and log in using your Aadhaar number and OTP." },
        { step: 2, title: "Select 'Update Address'", detail: "Click on 'Update Address Online'." },
        { step: 3, title: "Upload address proof", detail: "Upload a clear scanned copy (JPG/PNG, under 2MB), and fill in your new address details." },
        { step: 4, title: "Verify and submit", detail: "Verify via OTP and submit. Note down the Update Request Number (URN)." },
        { step: 5, title: "Track your request", detail: "Use the URN to track the status of your update at uidai.gov.in." },
        { step: 6, title: "Download updated e-Aadhaar", detail: "Once approved, download your updated e-Aadhaar from the portal." },
      ],
      hi: [
        { step: 1, title: "myAadhaar पोर्टल पर जाएं", detail: "myaadhaar.uidai.gov.in पर जाएं और आधार नंबर व OTP से लॉग इन करें।" },
        { step: 2, title: "'अपडेट एड्रेस' चुनें", detail: "'Update Address Online' पर क्लिक करें।" },
        { step: 3, title: "पता प्रमाण अपलोड करें", detail: "अपने पते का प्रमाण अपलोड करें और नए पते का विवरण भरें।" },
        { step: 4, title: "सबमिट करें", detail: "OTP द्वारा सत्यापित कर सबमिट करें। URN (Update Request Number) नोट कर लें।" },
        { step: 5, title: "स्टेटस चेक करें", detail: "URN का उपयोग करके अपना स्टेटस चेक करें।" },
        { step: 6, title: "अपडेटेड ई-आधार डाउनलोड करें", detail: "मंजूरी मिलने के बाद, पोर्टल से अपना अपडेटेड ई-आधार डाउनलोड करें।" },
      ]
    },
    fee: "₹50 per update (online via myAadhaar portal).",
    processingTime: "Usually within 30–90 days of submission",
    officialSources: [
      { label: "myAadhaar Self-Service Portal", url: "https://myaadhaar.uidai.gov.in/" },
      { label: "UIDAI Official Website", url: "https://uidai.gov.in/" },
    ],
    notes: [
      "Online address update requires a mobile number linked to your Aadhaar.",
    ],
    onlineApply: "https://myaadhaar.uidai.gov.in/",
    stateDependent: false,
  },
  {
    id: "birth-certificate",
    name: {
      en: "Birth Certificate",
      hi: "जन्म प्रमाण पत्र"
    },
    shortName: {
      en: "Birth Certificate",
      hi: "जन्म प्रमाण पत्र"
    },
    description: "A birth certificate is a vital record issued by the government that officially records a person's birth.",
    category: "Civil Records",
    aliases: ["birth certificate", "janam praman patra", "birth", "janm", "janam", "जन्म प्रमाण पत्र", "birth proof", "born certificate", "जन्म", "जनम प्रमाण पत्र"],
    eligibility: [
      "Any person born in India is entitled to a birth certificate",
      "Late registration (after 1 year of birth) requires additional documents"
    ],
    documents: {
      en: [
        { name: "Hospital Birth Record", examples: "Issued by the hospital where the child was born", required: true },
        { name: "Parents' Identity Proof", examples: "Aadhaar card, Voter ID, Passport of either parent", required: true },
        { name: "Parents' Address Proof", examples: "Aadhaar, Electricity bill, Ration card", required: true },
      ],
      hi: [
        { name: "अस्पताल का जन्म रिकॉर्ड", examples: "अस्पताल द्वारा जारी किया गया रिकॉर्ड", required: true },
        { name: "माता-पिता का पहचान पत्र", examples: "आधार कार्ड, वोटर आईडी, पासपोर्ट", required: true },
        { name: "माता-पिता का पता प्रमाण", examples: "आधार कार्ड, बिजली का बिल, राशन कार्ड", required: true },
      ]
    },
    application: {
      formName: "Birth Registration Form (Form 1)",
      formLink: "https://crsorgi.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Office of the Registrar of Births and Deaths",
    officeInfo: "Municipal Corporation / Nagar Palika / Gram Panchayat.",
    process: {
      en: [
        { step: 1, title: "Register within 21 days", detail: "The hospital is required to report the birth to the local registrar." },
        { step: 2, title: "Visit local registrar", detail: "If not done, visit the Municipal Corporation / Gram Panchayat office." },
        { step: 3, title: "Submit documents", detail: "Submit hospital birth record, identity and address proofs of parents." },
        { step: 4, title: "Collect birth certificate", detail: "After verification, collect the birth certificate from the office or crsorgi.gov.in." },
      ],
      hi: [
        { step: 1, title: "21 दिनों के भीतर पंजीकरण", detail: "अस्पताल द्वारा जन्म की सूचना स्थानीय रजिस्ट्रार को दी जानी चाहिए।" },
        { step: 2, title: "स्थानीय रजिस्ट्रार के पास जाएं", detail: "यदि पंजीकरण नहीं हुआ है, तो नगर निगम / ग्राम पंचायत कार्यालय जाएं।" },
        { step: 3, title: "दस्तावेज़ जमा करें", detail: "अस्पताल का रिकॉर्ड और माता-पिता के प्रमाण जमा करें।" },
        { step: 4, title: "प्रमाण पत्र प्राप्त करें", detail: "सत्यापन के बाद, कार्यालय या ऑनलाइन पोर्टल से जन्म प्रमाण पत्र प्राप्त करें।" },
      ]
    },
    fee: "Typically ₹10–₹50 for timely registration.",
    processingTime: "Timely registration: 5–15 working days.",
    officialSources: [
      { label: "Civil Registration System", url: "https://crsorgi.gov.in/" },
    ],
    notes: [
      "Procedures and fees vary by state and local body.",
    ],
    onlineApply: "https://crsorgi.gov.in/",
    stateDependent: true,
  },
  {
    id: "income-certificate",
    name: {
      en: "Income Certificate",
      hi: "आय प्रमाण पत्र"
    },
    shortName: {
      en: "Income Certificate",
      hi: "आय प्रमाण पत्र"
    },
    description: "An income certificate certifies a person's annual family income.",
    category: "Revenue / Financial",
    aliases: ["income certificate", "aay praman patra", "income proof", "aay", "आय प्रमाण पत्र", "income", "salary certificate", "EWS", "income certificate kaise banaye", "इनकम सर्टिफिकेट", "आय"],
    eligibility: [
      "Any Indian citizen can apply",
      "Must be resident of the state where applying"
    ],
    documents: {
      en: [
        { name: "Identity Proof", examples: "Aadhaar card, Voter ID", required: true },
        { name: "Address Proof", examples: "Aadhaar, Electricity bill", required: true },
        { name: "Income Proof", examples: "Salary slips, CA certificate, affidavit", required: true },
      ],
      hi: [
        { name: "पहचान पत्र", examples: "आधार कार्ड, वोटर आईडी", required: true },
        { name: "पता प्रमाण", examples: "आधार कार्ड, बिजली का बिल", required: true },
        { name: "आय का प्रमाण", examples: "सैलरी स्लिप, CA सर्टिफिकेट या शपथ पत्र", required: true },
      ]
    },
    application: {
      formName: "Income Certificate Application",
      formLink: "https://services.india.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Revenue Department / Tehsil Office",
    officeInfo: "Tehsil / SDM office, or apply online through e-District.",
    process: {
      en: [
        { step: 1, title: "Visit e-District portal or Tehsil", detail: "Go to your state's e-District portal or nearest Tehsil." },
        { step: 2, title: "Fill application", detail: "Fill the form with details of family income." },
        { step: 3, title: "Submit documents", detail: "Attach supporting documents and pay fee." },
        { step: 4, title: "Verification", detail: "A Patwari may visit for field verification." },
        { step: 5, title: "Certificate issued", detail: "Download from the portal or collect from office." },
      ],
      hi: [
        { step: 1, title: "ई-डिस्ट्रिक्ट पोर्टल या तहसील जाएं", detail: "अपने राज्य के पोर्टल या नज़दीकी तहसील/CSC पर जाएं।" },
        { step: 2, title: "आवेदन भरें", detail: "परिवार की आय का विवरण देते हुए फॉर्म भरें।" },
        { step: 3, title: "दस्तावेज़ जमा करें", detail: "जरूरी दस्तावेज़ लगाएं और फीस जमा करें।" },
        { step: 4, title: "सत्यापन", detail: "पटवारी द्वारा सत्यापन किया जा सकता है।" },
        { step: 5, title: "प्रमाण पत्र जारी", detail: "सत्यापन के बाद, पोर्टल से अपना आय प्रमाण पत्र डाउनलोड करें।" },
      ]
    },
    fee: "Typically ₹10–₹30.",
    processingTime: "Usually 7–15 working days.",
    officialSources: [
      { label: "National Government Services Portal", url: "https://services.india.gov.in/" },
    ],
    notes: [
      "Income certificates are typically valid for 1 year.",
    ],
    onlineApply: "https://services.india.gov.in/",
    stateDependent: true,
  },
  {
    id: "caste-certificate",
    name: {
      en: "Caste Certificate",
      hi: "जाति प्रमाण पत्र"
    },
    shortName: {
      en: "Caste Certificate",
      hi: "जाति प्रमाण पत्र"
    },
    description: "A caste certificate certifies membership in SC/ST/OBC community.",
    category: "Revenue / Social",
    aliases: ["caste certificate", "jati praman patra", "sc certificate", "st certificate", "obc certificate", "जाति प्रमाण पत्र", "jati", "backward class", "reservation", "कास्ट सर्टिफिकेट", "जाति"],
    eligibility: [
      "Must belong to a community listed as SC/ST/OBC"
    ],
    documents: {
      en: [
        { name: "Identity Proof", examples: "Aadhaar card, Voter ID", required: true },
        { name: "Address Proof", examples: "Aadhaar card, Ration card", required: true },
        { name: "Proof of Caste", examples: "Caste certificate of parent, School records", required: true },
      ],
      hi: [
        { name: "पहचान पत्र", examples: "आधार कार्ड, वोटर आईडी", required: true },
        { name: "पता प्रमाण", examples: "आधार कार्ड, राशन कार्ड", required: true },
        { name: "जाति का प्रमाण", examples: "माता-पिता का जाति प्रमाण पत्र, स्कूल का रिकॉर्ड", required: true },
      ]
    },
    application: {
      formName: "Caste Certificate Application",
      formLink: "https://services.india.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Revenue Department / Tehsil Office",
    officeInfo: "Apply through your state's e-District portal or Tehsil.",
    process: {
      en: [
        { step: 1, title: "Visit portal or office", detail: "Visit state's e-District portal or nearest Tehsil." },
        { step: 2, title: "Fill application", detail: "Complete form with your caste details." },
        { step: 3, title: "Submit documents", detail: "Attach identity, address, and caste proof." },
        { step: 4, title: "Verification", detail: "A Village Officer may verify your claim." },
        { step: 5, title: "Certificate issued", detail: "Collect from office or download." },
      ],
      hi: [
        { step: 1, title: "पोर्टल या कार्यालय जाएं", detail: "राज्य के ई-डिस्ट्रिक्ट पोर्टल या तहसील/CSC पर जाएं।" },
        { step: 2, title: "आवेदन भरें", detail: "जाति विवरण के साथ फॉर्म भरें।" },
        { step: 3, title: "दस्तावेज़ जमा करें", detail: "पहचान, पता और जाति का प्रमाण संलग्न करें।" },
        { step: 4, title: "सत्यापन", detail: "अधिकारी द्वारा आपके दावे का सत्यापन किया जाएगा।" },
        { step: 5, title: "प्रमाण पत्र प्राप्त करें", detail: "सत्यापन के बाद प्रमाण पत्र डाउनलोड करें।" },
      ]
    },
    fee: "Typically ₹10–₹50.",
    processingTime: "Typically 7–21 working days.",
    officialSources: [
      { label: "National Government Services Portal", url: "https://services.india.gov.in/" },
    ],
    notes: [
      "OBC certificates must be 'Non-Creamy Layer' for central job reservations.",
    ],
    onlineApply: "https://services.india.gov.in/",
    stateDependent: true,
  },
  {
    id: "land-patta",
    name: {
      en: "Land Patta / Record of Rights",
      hi: "भूमि पट्टा / खतौनी"
    },
    shortName: {
      en: "Land Patta",
      hi: "भूमि पट्टा"
    },
    description: "A 'Patta' establishes your rights over agricultural or other land.",
    category: "Land & Revenue",
    aliases: ["patta", "land patta", "khasra", "khatauni", "khata", "record of rights", "land record", "bhumi", "भूमि", "jameen", "jameen ka patta", "7/12", "land ownership", "पट्टा", "भूमि पट्टा", "ज़मीन का पट्टा"],
    eligibility: [
      "Must be the owner or legal heir of the land"
    ],
    documents: {
      en: [
        { name: "Identity Proof", examples: "Aadhaar card, Voter ID", required: true },
        { name: "Ownership Documents", examples: "Sale Deed, Inheritance Documents", required: true },
        { name: "Previous Land Records", examples: "Old Patta, Khasra number", required: true },
      ],
      hi: [
        { name: "पहचान पत्र", examples: "आधार कार्ड, वोटर आईडी", required: true },
        { name: "स्वामित्व के दस्तावेज़", examples: "सेल डीड, विरासत के दस्तावेज़", required: true },
        { name: "पुराने भूमि रिकॉर्ड", examples: "पुराना पट्टा, खसरा नंबर", required: true },
      ]
    },
    application: {
      formName: "Revenue Application / Mutation Form",
      formLink: "https://bhulekh.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "State Revenue Department / Tehsil",
    officeInfo: "Apply at Tehsil / Taluk office or state land records portal.",
    process: {
      en: [
        { step: 1, title: "Identify state portal", detail: "Visit your state's land records portal (e.g. Bhulekh)." },
        { step: 2, title: "Apply for mutation", detail: "If land ownership recently changed, apply for mutation first." },
        { step: 3, title: "Submit application", detail: "Fill form and attach ownership documents." },
        { step: 4, title: "Field verification", detail: "Patwari verifies land records and boundaries." },
        { step: 5, title: "Receive Patta", detail: "After approval, download the updated Patta/Record of Rights." },
      ],
      hi: [
        { step: 1, title: "राज्य का पोर्टल खोजें", detail: "अपने राज्य के भूलेख (Land Records) पोर्टल पर जाएं।" },
        { step: 2, title: "दाखिल खारिज (Mutation) के लिए आवेदन", detail: "यदि जमीन का मालिकाना हक बदला है, तो पहले म्यूटेशन के लिए आवेदन करें।" },
        { step: 3, title: "आवेदन जमा करें", detail: "फॉर्म भरें और स्वामित्व के दस्तावेज़ लगाएं।" },
        { step: 4, title: "पटवारी द्वारा सत्यापन", detail: "पटवारी जमीन और रिकॉर्ड का सत्यापन करेगा।" },
        { step: 5, title: "पट्टा प्राप्त करें", detail: "मंजूरी के बाद, अद्यतन पट्टा डाउनलोड करें या तहसील से लें।" },
      ]
    },
    fee: "Typically ₹20–₹200.",
    processingTime: "Mutation: 30–90 days.",
    officialSources: [
      { label: "National Bhulekh Portal", url: "https://bhulekh.gov.in/" },
    ],
    notes: [
      "Land records are managed entirely by state governments.",
    ],
    onlineApply: "https://bhulekh.gov.in/",
    stateDependent: true,
  },
  {
    id: "ration-card",
    name: {
      en: "Ration Card",
      hi: "राशन कार्ड"
    },
    shortName: {
      en: "Ration Card",
      hi: "राशन कार्ड"
    },
    description: "A Ration Card allows eligible households to purchase subsidized food grains through PDS.",
    category: "Food & Civil Supplies",
    aliases: ["ration card", "rashan card", "rashan", "ration", "food card", "pds", "ration card banana", "राशन कार्ड", "राशन"],
    eligibility: [
      "Must be an Indian citizen",
      "Income limit applies for AAY/BPL category cards"
    ],
    documents: {
      en: [
        { name: "Identity Proof", examples: "Aadhaar card, Voter ID", required: true },
        { name: "Address Proof", examples: "Electricity bill, Water bill", required: true },
        { name: "Income Certificate", examples: "Required for BPL/AAY categories", required: false },
        { name: "Photographs", examples: "Recent photos of head of family", required: true },
      ],
      hi: [
        { name: "पहचान पत्र", examples: "आधार कार्ड, वोटर आईडी", required: true },
        { name: "पता प्रमाण", examples: "बिजली/पानी का बिल", required: true },
        { name: "आय प्रमाण पत्र", examples: "BPL/AAY के लिए आवश्यक", required: false },
        { name: "परिवार के मुखिया की फोटो", examples: "हालिया पासपोर्ट साइज फोटो", required: true },
      ]
    },
    application: {
      formName: "Ration Card Application Form",
      formLink: "https://nfsa.gov.in/",
      onlineAvailable: true,
      offlineAvailable: true,
    },
    department: "Department of Food and Civil Supplies",
    officeInfo: "Apply at the local Food office, Circle Office, or online e-District portal.",
    process: {
      en: [
        { step: 1, title: "Visit state portal", detail: "Go to your state's Food and Civil Supplies website." },
        { step: 2, title: "Fill application", detail: "Complete the form with details of all family members." },
        { step: 3, title: "Attach documents", detail: "Submit identity, address, and income proofs." },
        { step: 4, title: "Verification", detail: "A food inspector will verify your details." },
        { step: 5, title: "Collect Ration Card", detail: "Once approved, collect or download the e-Ration Card." },
      ],
      hi: [
        { step: 1, title: "राज्य के पोर्टल पर जाएं", detail: "खाद्य और नागरिक आपूर्ति विभाग की वेबसाइट पर जाएं।" },
        { step: 2, title: "आवेदन भरें", detail: "सभी परिवार के सदस्यों के विवरण के साथ फॉर्म भरें।" },
        { step: 3, title: "दस्तावेज़ संलग्न करें", detail: "पहचान, पता और आय के प्रमाण जमा करें।" },
        { step: 4, title: "सत्यापन", detail: "खाद्य निरीक्षक (Food Inspector) विवरणों का सत्यापन करेगा।" },
        { step: 5, title: "राशन कार्ड प्राप्त करें", detail: "मंजूरी के बाद, राशन कार्ड कार्यालय से लें या ई-राशन कार्ड डाउनलोड करें।" },
      ]
    },
    fee: "Nominal fee (typically ₹5–₹50).",
    processingTime: "Usually 15–30 days.",
    officialSources: [
      { label: "National Food Security Portal", url: "https://nfsa.gov.in/" },
    ],
    notes: [
      "Aadhaar seeding is mandatory in most states to avail benefits.",
    ],
    onlineApply: "https://nfsa.gov.in/",
    stateDependent: true,
  }
];

export function normalizeText(text) {
  if (!text) return '';
  return text.toLowerCase().trim()
    .replace(/[?.,!]/g, '')
    .replace(/\s+/g, ' ')
    // Normalize nukta/matras for fuzzy match
    .replace(/ज़/g, 'ज')
    .replace(/फ़/g, 'फ')
    .replace(/ख़/g, 'ख');
}

export function findService(query) {
  if (!query || query.trim().length < 2) return null;

  const normalizedQuery = normalizeText(query);
  const queryWords = normalizedQuery.split(' ');

  const scored = services.map(service => {
    let score = 0;
    
    // Check aliases
    for (const alias of service.aliases) {
      const normalizedAlias = normalizeText(alias);
      if (normalizedQuery.includes(normalizedAlias)) {
        score += normalizedAlias.length * 5; 
      }
      
      // Simple fuzzy: if words match
      const aliasWords = normalizedAlias.split(' ');
      let matchCount = 0;
      for (const w of queryWords) {
        if (aliasWords.includes(w)) matchCount++;
      }
      if (matchCount > 0 && matchCount >= aliasWords.length / 2) {
        score += matchCount * 10;
      }
    }

    if (normalizedQuery.includes(normalizeText(service.shortName.en))) score += 20;
    if (normalizedQuery.includes(normalizeText(service.name.en))) score += 30;
    if (service.name.hi && normalizedQuery.includes(normalizeText(service.name.hi))) score += 30;
    if (service.shortName.hi && normalizedQuery.includes(normalizeText(service.shortName.hi))) score += 20;

    return { service, score };
  });

  scored.sort((a, b) => b.score - a.score);

  if (scored[0].score < 10) return null; // threshold
  return scored[0].service;
}

export function getServiceById(id) {
  return services.find(s => s.id === id) || null;
}
