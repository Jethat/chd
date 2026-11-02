
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftRight,
  BookMarked,
  BookOpen,
  ChevronDown,
  Globe,
  GraduationCap,
  Languages,
  Map,
  MessageSquare,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kosh | Central Hindi Directorate • केन्द्रीय हिन्दी निदेशालय",
  description:
    "Kosh Yojana of the Central Hindi Directorate: multilingual, trilingual and bilingual dictionaries, Hindi vocabulary, conversational guides and grammar.",
};

type Tone =
  | "slate"
  | "amber"
  | "blue"
  | "emerald"
  | "purple"
  | "rose"
  | "teal"
  | "indigo";

type DictionaryEntry = {
  title: string;
  description: string;
};

type DictionarySection = {
  heading: string;
  description?: string;
  entries: DictionaryEntry[];
};

type KoshItem = {
  id: string;
  title: string;
  icon: typeof BookOpen;
  tone: Tone;
  content: string[];
  bullets?: string[];
  sections?: DictionarySection[];
};

/* ------------------------------------------------------------------ */
/* CONTENT                                                             */
/* ------------------------------------------------------------------ */

const items: KoshItem[] = [
  {
    id: "kosh-yojana",
    title: "Kosh Yojana",
    icon: Landmark,
    tone: "slate",
    content: [
      "Language is a medium through which people of different regions, cultures and languages come close to each other. To encourage reciprocal exchange at the linguistic level and facilitate the learning of other Indian and foreign languages, bilingual, trilingual and multilingual dictionaries prove helpful.",
      "The Central Hindi Directorate has published and is publishing dictionaries to facilitate people of different languages with the rich vocabulary of Indian languages, establish Hindi in the international arena and work towards including it in the list of recognized languages of the United Nations.",
    ],
  },

  {
    id: "regional-languages",
    title: "Dictionaries of Regional Languages",
    icon: Languages,
    tone: "amber",
    content: [
      "The Central Hindi Directorate undertakes the preparation and publication of multilingual, trilingual and bilingual dictionaries to promote linguistic exchange between Hindi and other Indian languages. These dictionaries help students, researchers and readers understand the vocabulary, meanings and equivalents of different languages.",
    ],

    sections: [
      /* ---------------------------------------------------------- */
      /* MULTILINGUAL DICTIONARIES                                  */
      /* ---------------------------------------------------------- */

      {
        heading: "I. Multi Lingual Dictionaries",
        entries: [
          {
            title: "Bharatiya Bhasha Kosh",
            description:
              "This dictionary familiarizes readers with the rich and common vocabulary heritage of Indian languages. It is arranged in two parts: classified words in thesaurus style and general words in alphabetical order. It includes Hindi words, grammatical categories, shades of meaning and synonyms in 13 scheduled Indian languages in Devanagari script. The revised edition also includes Sanskrit, Konkani, Nepali and Manipuri. The current revision covers 22 scheduled languages, including Dogri, Bodo, Maithili and Santhali. Third edition under publication. Price: Rs. 4,138 | Pages: 2,187.",
          },
          {
            title: "Tatsam Shabd Kosh",
            description:
              "Prepared to identify the Sanskrit roots of words used in Indian languages. Contains approximately 1,600 Tatsama entries. Its 15 columns include Sanskrit (Tatsam) words as basic entries, Hindi equivalents and parallel word forms in 13 scheduled Indian languages. All columns are in Devanagari script. Price: Rs. 323 | Pages: 657.",
          },
          {
            title: "Bhartiya Bhasha Parichay",
            description:
              "A consolidated introduction to all 22 scheduled Indian languages: Assamese, Oriya, Urdu, Kannada, Kashmiri, Konkani, Gujarati, Dogri, Tamil, Telugu, Nepali, Punjabi, Bangla, Bodo, Manipuri, Marathi, Malayalam, Maithili, Santhali, Sanskrit, Sindhi and Hindi. Includes linguistic, historical and geographical introductions written by subject experts. Price: Rs. 237 | Pages: 556.",
          },
          {
            title: "Hindi Lekhak Sandarbhika",
            description:
              "A revised edition of the Directorate's earlier publication Hindi Sahityakar Vivarnika. Provides profiles, creative contributions and personal information of 1,198 Hindi writers. It also includes writers working in fields such as science, journalism and environment, in addition to Hindi literature. Price: Rs. 450 | Pages: 773.",
          },
        ],
      },

      /* ---------------------------------------------------------- */
      /* TRILINGUAL DICTIONARIES                                    */
      /* ---------------------------------------------------------- */

      {
        heading: "II. Trilingual Dictionaries",
        description:
          'The Directorate initiated the development of Hindi-Regional Language-English dictionaries following the introduction of the "Three-Language Formula" in the Indian education system. These dictionaries present words of all three languages in a systematic manner, helping students, researchers and other users communicate across constitutionally recognized languages.',

        entries: [
          {
            title: "Hindi-Assamese-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words as main entries. Includes grammatical categories, different nuances of Hindi entries, Assamese equivalents, Devanagari transliteration of Assamese equivalents and English equivalents. Published in 3 volumes. Consolidated Price: Rs. 2,063 | Pages: 2,216.",
          },
          {
            title: "Hindi-Bangla-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words selected on the basis of everyday usage. Includes Hindi entries, grammatical categories, Hindi nuances, Bangla equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 642 | Pages: 2,216.",
          },
          {
            title: "Hindi-Gujarati-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Gujarati equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 464 | Pages: 2,216.",
          },
          {
            title: "Hindi-Kannada-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, different nuances, Kannada equivalents, Devanagari transliteration and English equivalents. The revised edition has been published in 3 volumes. Consolidated Price: Rs. 1,795 | Pages: 2,216.",
          },
          {
            title: "Hindi-Kashmiri-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Kashmiri equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 641 | Pages: 2,216.",
          },
          {
            title: "Hindi-Malayalam-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Malayalam equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 464 | Pages: 2,216.",
          },
          {
            title: "Hindi-Marathi-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Marathi equivalents and English equivalents. Published in 3 volumes. Price: Rs. 1,424 | Pages: 2,216.",
          },
          {
            title: "Hindi-Punjabi-English Dictionary",
            description:
              "Contains approximately 20,000 entries with grammatical categories, different nuances, Punjabi equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Consolidated Price: Rs. 1,954 | Pages: 2,216.",
          },
          {
            title: "Hindi-Sindhi-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Sindhi equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 631 | Pages: 2,216.",
          },
          {
            title: "Hindi-Tamil-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi words with grammatical categories, Hindi nuances, Tamil equivalents, Devanagari transliteration and English equivalents. Published in 3 volumes. Price: Rs. 464 | Pages: 2,216.",
          },
          {
            title: "Hindi-Bodo-English Dictionary",
            description:
              "Contains approximately 20,000 Hindi entries selected mainly on the basis of everyday usage. Includes Hindi words, grammatical categories, Bodo synonyms and English synonyms. Bodo synonyms are provided in Devanagari script. Price: Rs. 572 | Pages: 706.",
          },
          {
            title: "Gujarati-Hindi-English Dictionary",
            description:
              "Contains approximately 20,000 Gujarati words as main entries. Includes Devanagari transliteration, grammatical categories, Gujarati nuances, Hindi equivalents and English equivalents. Published in 3 volumes. Price: Rs. 1,270 | Pages: 4,386.",
          },
          {
            title: "Bangla-Hindi-English Dictionary",
            description:
              "Contains approximately 25,000 Bangla words as main entries. Includes grammatical categories, Devanagari transliteration, Bangla nuances, Hindi equivalents and English equivalents. Published in 3 volumes. Price: Rs. 2,982 | Pages: 2,129.",
          },
          {
            title: "Marathi-Hindi-English Dictionary",
            description:
              "Contains approximately 20,000 Marathi words with grammatical categories, Marathi nuances, Hindi equivalents and English equivalents. Published in 2 volumes. Consolidated Price: Rs. 726 | Pages: 2,365.",
          },
          {
            title: "Tamil-Hindi-English Dictionary",
            description:
              "Contains approximately 20,000 Tamil words in Tamil script. Includes Devanagari transliteration, grammatical categories, Tamil nuances, Hindi equivalents and English equivalents. Published in 2 volumes. Price: Rs. 385 | Pages: 2,131.",
          },
        ],
      },

      /* ---------------------------------------------------------- */
      /* COMPILATION AND PUBLICATION                                */
      /* ---------------------------------------------------------- */

      {
        heading: "III. Compilation and Publication of Dictionaries",
        entries: [
          {
            title: 'Bi-Lingual Dictionary – "Vyavharik Laghu Kosh"',
            description:
              "The Dictionary Committee recommended developing dictionaries for languages included in the Eighth Schedule of the Indian Constitution, except Sanskrit. It was decided that 13 Hindi-based and 13 regional-language-based dictionaries would be developed. Work on this scheme began in 1977. A limit of 10,000 words was decided for these dictionaries. Hindi-based vocabulary is sourced from the Directorate, while regional-language-based dictionaries provide translations of linguistic synonyms in both the target-language and original-language scripts, enabling users unfamiliar with the other script to use them conveniently.",
          },
        ],
      },

      /* ---------------------------------------------------------- */
      /* BILINGUAL HINDI BASED                                      */
      /* ---------------------------------------------------------- */

      {
        heading: "IV. Bi-Lingual Dictionaries – Hindi Based",
        description:
          "These dictionaries aim to familiarize Hindi speakers with regional languages and vice versa. The dictionaries contain approximately 10,000 Hindi entries selected primarily on the basis of everyday usage.",

        entries: [
          {
            title: "Hindi-Assamese Dictionary",
            description:
              "Contains approximately 10,000 Hindi words. Includes Hindi entries, grammatical categories, Assamese transliteration of Hindi words, Assamese equivalents and Devanagari transliteration of Assamese equivalents. Price: Rs. 109 | Pages: 436.",
          },
          {
            title: "Hindi-Gujarati Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Gujarati transliteration of Hindi words, Gujarati equivalents and Devanagari transliteration of Gujarati equivalents. Price: Rs. 291 | Pages: 383.",
          },
          {
            title: "Hindi-Kashmiri Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Kashmiri transliteration of Hindi words, Kashmiri equivalents and Devanagari transliteration of Kashmiri equivalents. Price: Rs. 126 | Pages: 395.",
          },
          {
            title: "Hindi-Marathi Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories and Marathi equivalents. Devanagari transliteration is not provided because Marathi uses the Devanagari script. Price: Rs. 88 | Pages: 268.",
          },
          {
            title: "Hindi-Malayalam Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Malayalam transliteration of Hindi words, Malayalam equivalents and Devanagari transliteration of Malayalam equivalents. Price: Rs. 88 | Pages: 386.",
          },
          {
            title: "Hindi-Sindhi Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Sindhi transliteration of Hindi words, Sindhi equivalents and Devanagari transliteration of Sindhi equivalents. Price: Rs. 88 | Pages: 447.",
          },
          {
            title: "Hindi-Tamil Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Tamil transliteration of Hindi entries, Tamil equivalents and Devanagari transliteration of Tamil equivalents. Price: Rs. 125 | Pages: 388.",
          },
          {
            title: "Hindi-Telugu Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Telugu transliteration of Hindi words, Telugu equivalents and Devanagari transliteration of Telugu equivalents. Price: Rs. 1,115 | Pages: 658.",
          },
          {
            title: "Hindi-Urdu Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Urdu (Persian-Arabic) transliteration of Hindi entries, Urdu equivalents and Devanagari transliteration of Urdu equivalents. Price: Rs. 390 | Pages: 386.",
          },
          {
            title: "Hindi-Oriya Dictionary",
            description:
              "Contains approximately 10,000 Hindi entries with grammatical categories, Oriya transliteration of Hindi words, Oriya equivalents and Devanagari transliteration of Oriya equivalents. Price: Rs. 88 | Pages: 424.",
          },
          {
            title: "Vyavharik Hindi-English Shabd-Kosh",
            description:
              "Contains approximately 7,000 Hindi entries covering different genres of Hindi literature, humanities, administration, science, computers and other fields. Includes Roman transliteration, grammatical categories and English equivalents. Price: Rs. 475 | Pages: 678.",
          },
          {
            title: "Hindi-Maithili Dictionary",
            description:
              "Contains approximately 20,000 Hindi words as main entries, with grammatical categories and Maithili equivalents. Under preparation.",
          },
          {
            title: "Hindi-Dogri Dictionary",
            description:
              "Contains approximately 20,000 Hindi words as main entries, with grammatical categories and Devanagari transliteration of Dogri equivalents. Under publication.",
          },
        ],
      },

      /* ---------------------------------------------------------- */
      /* BILINGUAL LANGUAGE BASED                                   */
      /* ---------------------------------------------------------- */

      {
        heading: "V. Bi-Lingual Dictionaries – Language Based",
        description:
          "These dictionaries use regional-language words as their basic entries and provide Hindi equivalents, transliteration and grammatical information.",

        entries: [
          {
            title: "Malayalam-Hindi Dictionary",
            description:
              "Contains approximately 10,000 Malayalam words as basic entries. Includes grammatical categories, Devanagari transliteration of Malayalam words, Hindi equivalents and Malayalam transliteration of Hindi equivalents. Price: Rs. 215 | Pages: 641.",
          },
          {
            title: "Urdu-Hindi Dictionary",
            description:
              "Contains approximately 10,000 Urdu words as basic entries. Includes grammatical categories, Devanagari transliteration of Urdu words, Hindi equivalents and Urdu transliteration of Hindi equivalents. Price: Rs. 166.",
          },
          {
            title: "Oriya-Hindi Dictionary",
            description:
              "Contains approximately 10,000 Oriya words as basic entries. Includes grammatical categories, Devanagari transliteration of Oriya words, Hindi equivalents and Oriya transliteration of Hindi equivalents. Price: Rs. 196 | Pages: 590.",
          },
          {
            title: "Punjabi-Hindi Dictionary",
            description:
              "Contains approximately 50,000 Punjabi entries. Includes Devanagari transliteration of Punjabi words, grammatical categories, Hindi equivalents and Punjabi transliteration of Hindi equivalents. Price: Rs. 757.",
          },
          {
            title: "Gujarati-Hindi Dictionary",
            description:
              "Contains approximately 20,000 Gujarati entries with grammatical categories, Devanagari transliteration, Hindi equivalents and Gujarati transliteration of Hindi equivalents. Under publication.",
          },
          {
            title: "Kashmiri-Hindi Dictionary",
            description:
              "Contains approximately 10,000 Kashmiri entries with grammatical categories, Devanagari transliteration, Hindi equivalents and Kashmiri transliteration of Hindi equivalents. Under publication.",
          },
          {
            title: "Tamil-Hindi Dictionary",
            description:
              "Contains approximately 20,000 Tamil entries with grammatical categories, Hindi equivalents, Devanagari transliteration of Tamil words and Tamil transliteration of Hindi equivalents. Price: Rs. 343 | Pages: 674.",
          },
        ],
      },
    ],
  },

  
{
  id: "brihat-abhinav-kosh",
  title: "Brihat Hindi Kosh & Abhinav Hindi Kosh",
  icon: BookMarked,
  tone: "blue",
  content: [
    "The Central Hindi Directorate undertakes special dictionary projects to enrich Hindi vocabulary and provide updated, subject-specific terminology to students, teachers, researchers and other readers."
  ],
  sections: [
    {
      heading: "Special Dictionary Projects",
      entries: [
        {
          title: "1. Brihat Hindi Kosh",
          description:
            "Hindi is a lively language and its vocabulary is increasing day by day. Although many comprehensive dictionaries have been published, during the last fifty years many new disciplines in various subjects have emerged, and their terms are missing from the dictionaries presently available. Therefore, these dictionaries are unable to fulfil the desired demands of the modern age. In the present age of globalization and understanding the international market value of Hindi, the Central Hindi Directorate has decided to launch a new project known as Brihat Hindi Kosh under the Special Dictionary Plan. This dictionary will include new and common words from mass communication, Medical Sciences, Games, Sports, Biology, Chemistry and Computer Science. It will also include standard pronunciation, grammatical categories, popular scientific and technical words and their equivalents, brief definitions, idioms and phrases, their origins, etc. The dictionary is going to be published in two volumes."
        },
        {
          title: "2. Abhinav Hindi Kosh",
          description:
            "Due to ever-growing research and scientific inventions, new dimensions and disciplines in the field of knowledge are developing every day. Hindi is a living language, and its vocabulary is also being enriched continuously. Although various Hindi-Hindi dictionaries are available in the market, they do not cover the entire range of new words and are not sufficiently up to date. Consequently, they do not cater to the needs of modern learned readers, especially students. The need for an up-to-date Hindi-Hindi dictionary is therefore self-evident. To meet this purpose, the Central Hindi Directorate has been working on the special project of Abhinav Hindi Dictionary since January 2002. The dictionary compiles terminology from various subjects used in textbooks at secondary and undergraduate levels. It also includes standardized words that have gained popularity in Hindi magazines, journals and different branches of knowledge but are generally unavailable in other dictionaries. Specific definitions or short technical explanations are provided, along with English equivalents, synonyms, antonyms and grammatical categories wherever applicable. It will contain approximately 13,000 main entries and approximately 50,000 words subject-wise. Price: Rs. 2,256.00 | Pages: 762."
        },
        {
          title: "3. Hindi Paribhashik Laghu Kosh",
          description:
            "Due to new research and scientific inventions, new forms and genres are emerging day by day. Since Hindi is a lively language, its vocabulary is developing continuously. Although various Hindi-Hindi dictionaries are available in the market, they do not contain updated words and definitions required to meet the needs of students, especially those at the pre-secondary school level. To address this need, the Central Hindi Directorate initiated the compilation of a dictionary for pre-secondary school students in September 2008 under the Special Project Scheme. This Kosh compiles terminology relevant to various subjects used in pre-secondary school textbooks. It also includes technical and non-technical words standardized and used in textbooks over the last 50 years. Semi-technical definitions and meanings are provided to explain the words, along with grammatical categories, general meanings, English equivalents, synonyms and opposites wherever necessary. It contains approximately 10,000 entries and aims to provide standard Hindi terminology and new concepts for pre-secondary-level students. Price: Rs. 306 | Pages: 612."
        },
        {
          title: "4. Vyutpatti Kosh",
          description:
            "The construction of dictionaries is one of the most important schemes of the Central Hindi Directorate. Under this scheme, the Directorate started compiling A Dictionary of Hindi Etymology in May 2013. The etymology of words is considered an important subject in the study of language. This dictionary will benefit students, teachers, translators, language researchers and educationists. It will contain the origins of words, grammatical classes, their development and meanings. The services of non-government and local renowned experts and scholars are being taken for its compilation. The dictionary will comprise approximately one lakh entries."
        }
      ]
    }
  ]
},

  {
  id: "un-languages",
  title: "Dictionaries of Languages of UN",
  icon: Globe,
  tone: "emerald",
  content: [
    "Under this scheme, the Directorate has published and is publishing dictionaries related to the six official languages of the United Nations. These dictionaries are broadly classified into Hindi-based dictionaries and language-based dictionaries."],
  sections: [
    {
      heading: "Hindi Based Dictionaries",
      entries: [
        {
          title: "Hindi-Spanish Dictionary",
          description:
            "Published with a view to promoting the international recognition of Hindi and paving its way towards becoming one of the languages of the United Nations. It contains approximately 2,500 Hindi main entries, including nearly 2,000 words used in everyday life and 500 words related to international diplomacy. The entries include Hindi words, their grammatical categories, Spanish equivalents and Devanagari transliteration of the Spanish equivalents to indicate approximate pronunciation. Price: ₹83.00 | Pages: 95.",
        },
        {
          title: "Hindi-Arabic Dictionary",
          description:
            "Contains approximately 20,000 Hindi main entries selected on the basis of their usage in everyday life and international diplomacy. Entries are arranged alphabetically in Hindi and include grammatical categories, approximate transliteration of Hindi words in Arabic script, Arabic synonyms or equivalents, and their transliteration in Devanagari. The transliterations help readers understand the approximate pronunciation of words in both languages. A revised and enlarged edition is under publication.",
        },
        {
          title: "Hindi-Chinese Dictionary",
          description:
            "Contains nearly 20,000 Hindi main entries covering everyday usage and international diplomacy. Each entry includes the Hindi word, its grammatical category, Chinese translation, Chinese pronunciation, Chinese synonyms and Devanagari transliteration of the Chinese synonyms or equivalents. A revised and enlarged edition is under preparation.",
        },
        {
          title: "Hindi-French Dictionary",
          description:
            "Contains approximately 20,000 Hindi main entries selected on the basis of their usage in everyday life and international diplomacy. The entries include Hindi words, grammatical categories, approximate pronunciation of Hindi words in French, French synonyms or equivalents, and their transliteration in Devanagari script. These transliterations help Hindi-speaking readers understand the approximate pronunciation of French words. A revised and enlarged edition is under publication.",
        },
        {
          title: "Consolidated Hindi–U.N. Languages Dictionary",
          description:
            "Contains approximately 5,000 Hindi entries arranged in Hindi alphabetical order. Each entry includes its grammatical category and equivalents in English, Arabic, Chinese, French, Russian and Spanish. Price: ₹755.00 / $15.60 / £11.00 | Pages: 546.",
        },
        {
          title: "Hindi-Russian Dictionary",
          description:
            "Contains approximately 20,000 Hindi main entries selected on the basis of their usage in everyday life and international diplomacy. The entries include Hindi words, grammatical categories, approximate pronunciation of Hindi words in Russian, Russian synonyms or equivalents, and their transliteration in Devanagari script. The dictionary is under publication.",
        },
      ],
    },
    {
      heading: "Language Based Dictionaries",
      entries: [
        {
          title: "Arabic-Hindi Dictionary",
          description:
            "Contains approximately 5,000 Arabic entries selected on the basis of their usage in everyday life. Each entry includes the original Arabic word, its grammatical category, Devanagari transliteration and Hindi equivalent. The transliteration helps readers understand the approximate pronunciation of Arabic words. Price: ₹650.00 | Pages: 258.",
        },
        {
          title: "Chinese-Hindi Dictionary",
          description:
            "Contains approximately 7,000 Chinese entries selected on the basis of their usage in everyday life. Each entry includes the original Chinese word, its grammatical category, Devanagari transliteration and Hindi equivalent. The transliteration helps readers understand the approximate pronunciation of Chinese words. Price: ₹680.00 / $15.00 / £9.00 | Pages: 502.",
        },
        {
          title: "French-Hindi Dictionary",
          description:
            "Contains approximately 5,000 French main entries selected on the basis of their usage in everyday life and international diplomacy. The entries include French words, their grammatical categories, approximate transliteration in Devanagari and Hindi synonyms or equivalents. Price: ₹750.00 / $20.00 / £10.00 | Pages: 498.",
        },
        {
          title: "Russian-Hindi Dictionary",
          description:
            "Contains approximately 5,000 Russian entries selected on the basis of their usage in everyday life. Each entry includes the original Russian word, its grammatical category, Devanagari transliteration and Hindi equivalent. The transliteration helps readers understand the approximate pronunciation of Russian words. Price: ₹385.00 / $8.45 / £5.40 | Pages: 301.",
        },
        {
          title: "Spanish-Hindi Dictionary",
          description:
            "Contains approximately 7,000 Spanish main entries selected on the basis of their usage in everyday life and international diplomacy. The entries include Spanish words, their grammatical categories, approximate transliteration in Devanagari and Hindi synonyms or equivalents. The transliteration helps readers understand the approximate pronunciation of Spanish words. Price: ₹611.00 / $13.488 / £9.133 | Pages: 325.",
        },
      ],
    },
  ],
},
  {
  id: "neighbouring-countries",
  title: "Dictionaries of Neighboring Countries",
  icon: Map,
  tone: "purple",
  content:
    ["In order to promote cordial and friendly relations with neighbouring countries and facilitate the exchange of views, the Directorate has published and is publishing dictionaries in the languages of neighbouring countries. These dictionaries are broadly classified into Hindi-based and language-based dictionaries."],
  sections: [
    {
      heading: "Hindi Based Dictionaries",
      entries: [
        {
          title: "Hindi-Burmese Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Burmese transliteration of the Hindi word, its Burmese equivalent and Devanagari transliteration of the Burmese equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. Price: ₹530 / $11.00 / £29.15 | Pages: 400.",
        },
        {
          title: "Hindi-Persian Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. The entries include Hindi words, their grammatical categories, Persian transliteration of Hindi entries, Persian equivalents and Devanagari transliteration of Persian equivalents. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. Price: ₹230 | Pages: 289.",
        },
        {
          title: "Hindi-Bahasa Indonesia Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Indonesian transliteration of the Hindi word, its Indonesian equivalent and Devanagari transliteration of the Indonesian equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. Price: ₹250 / $9.00 / £29.15 | Pages: 289.",
        },
        {
          title: "Hindi-Nepali Dictionary",
          description:
            "Contains approximately 20,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Nepali transliteration of the Hindi word and its Nepali equivalent. A revised and enlarged edition is under preparation.",
        },
        {
          title: "Hindi-Pushto Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Pushto transliteration of the Hindi word, its Pushto equivalent and Devanagari transliteration of the Pushto equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. This dictionary is under publication.",
        },
        {
          title: "Hindi-Sinhala Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Sinhala transliteration of the Hindi word, its Sinhala equivalent and Devanagari transliteration of the Sinhala equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. Price: ₹230 | Pages: 286.",
        },
        {
          title: "Hindi-Swahili Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Swahili transliteration of the Hindi word, its Swahili equivalent and Devanagari transliteration of the Swahili equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. Price: ₹840 / $20.00 / £12.12 | Pages: 342.",
        },
        {
          title: "Hindi-Tibetan Dictionary",
          description:
            "Contains approximately 5,000 Hindi main entries selected on the basis of their usage in everyday life. Each entry includes the Hindi word, its grammatical category, Tibetan transliteration of the Hindi word, its Tibetan equivalent and Devanagari transliteration of the Tibetan equivalent. Reciprocal transliteration helps users understand the approximate pronunciation in both languages. This dictionary is under publication.",
        },
      ],
    },
    {
      heading: "Language Based Dictionaries",
      entries: [
        {
          title: "Nepalese-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Nepalese main entries selected on the basis of their usage in everyday life. The entries include Nepalese words, their grammatical categories, Devanagari transliteration with dialectical marks and Hindi equivalents. Price: ₹1,233 / $27.219 / £18.430 | Pages: 776.",
        },
        {
          title: "Bahasa Indonesia-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Indonesian main entries selected on the basis of their usage in everyday life. The entries include Indonesian words, their approximate transliteration in Devanagari, grammatical categories, Hindi synonyms or equivalents and transliteration of Hindi equivalents in Bahasa Indonesia. These transliterations help readers of both languages understand approximate pronunciation.",
        },
        {
          title: "Sinhalese-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Sinhalese main entries selected on the basis of their usage in everyday life. The entries include Sinhalese words, their grammatical categories, approximate transliteration in Devanagari, Hindi synonyms or equivalents and transliteration of Hindi equivalents in Sinhalese. This dictionary is under publication.",
        },
        {
          title: "Burmese-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Burmese main entries selected on the basis of their usage in everyday life. The entries include Burmese words, approximate transliteration in Devanagari, grammatical categories, Hindi synonyms or equivalents and transliteration of Hindi equivalents in Burmese. This dictionary is under publication.",
        },
        {
          title: "Persian-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Persian main entries selected on the basis of their usage in everyday life. The entries include Persian words, approximate transliteration in Devanagari, grammatical categories, Hindi synonyms or equivalents and transliteration of Hindi equivalents in Persian. This dictionary is under publication.",
        },
        {
          title: "Pushto-Hindi Dictionary",
          description:
            "Contains approximately 20,000 Pushto main entries selected on the basis of their usage in everyday life. The entries include Pushto words, approximate transliteration in Devanagari, grammatical categories, Hindi synonyms or equivalents and transliteration of Hindi equivalents in Pushto. This dictionary is under publication.",
        },
      ],
    },
  ],
},
  {
  id: "educational-exchange",
  title: "Dictionaries under Educational Exchange Programme",
  icon: ArrowLeftRight,
  tone: "rose",
  content: [
    "Agreements related to the Educational Exchange Programme (previously known as the Cultural Exchange Programme) have been established between India and various foreign countries. Under these agreements, the Central Hindi Directorate has been publishing conversation guides and dictionaries in different foreign languages.",
    "The conversation guides provide foreign-language support through easy translations of commonly spoken words and sentences. They help Hindi-speaking tourists, students, business and corporate professionals, diplomats and others communicate conveniently with people in foreign countries.",
  ],
  sections: [
    {
      heading: "Language-Based Dictionaries",
      entries: [
        {
          title: "Polish-Hindi Dictionary",
          description:
            "Contains approximately 15,000 Polish entries selected on the basis of their usage in everyday life. Each entry includes the Polish word, its grammatical category, Devanagari transliteration of the Polish word and its Hindi equivalent. The Devanagari transliteration helps readers understand the approximate pronunciation of Polish words. This dictionary is under preparation.",
        },
        {
          title: "Czech-Hindi Dictionary",
          description:
            "Contains approximately 15,000 Czech entries selected on the basis of their usage in everyday life. Each entry includes the Czech word, Devanagari transliteration, its grammatical category and its Hindi equivalent. The Devanagari transliteration helps readers understand the approximate pronunciation of Czech words. Price: ₹1,148 | Pages: 646.",
        },
        {
          title: "German-Hindi Dictionary",
          description:
            "Contains 45,000 German entries received from erstwhile East Germany (G.D.R.). The entries include German words, their Devanagari transliteration, grammatical categories and details covering common and popular meanings, colloquial language, literary usage, metaphorical and figurative meanings, technical terms, idioms, proverbs, special usage and sayings. Two volumes were published in 1990: Volume 1 covers A to F (pages 1–811), priced at ₹295.50; Volume 2 covers G to L (pages 812–1,374), priced at ₹205.00. The third and fourth volumes are under publication.",
        },
      ],
    },
    {
      heading: "Hindi-Based Dictionaries",
      entries: [
        {
          title: "Hindi-Bulgarian Dictionary",
          description:
            "Contains approximately 5,000 Hindi entries selected from everyday vocabulary. Each entry includes the Hindi word, its grammatical category, transliteration of the Hindi entry in Bulgarian, its Bulgarian synonym and transliteration of the Bulgarian synonym in Devanagari. This dictionary is under publication.",
        },
      ],
    },
  ],
},
  {
  id: "conversational-guide",
  title: "Conversational Guides",
  icon: MessageSquare,
  tone: "teal",
  content: [
    "The scheme of teaching Hindi through postal tuition (correspondence) to non-Hindi-speaking Indians and foreigners, both within and outside the country, was started by the Central Hindi Directorate in 1968. To make the learning process more convenient, bilingual conversational guides and self-learning books in different regional languages included in the Eighth Schedule of the Constitution of India, along with Hindi, have been and continue to be prepared and published.",
    "These conversational guides are intended for people whose mother tongue is not Hindi and who wish to learn spoken and conversational Hindi for everyday communication. They are also useful for tourists and visitors who want to become familiar with basic Hindi conversational patterns and use them while visiting areas where Hindi is commonly spoken.",
    "The guides are prepared in both Hindi-based and regional-language-based formats. They also help Hindi-speaking readers become familiar with regional languages, as words and sentences are provided in Devanagari script.",
    "Each bilingual conversational book is divided into two parts. Part One contains conversational expressions, while Part Two contains a glossary of useful words.",
    "The material in these conversational books has subsequently been scrutinized and modified by a committee of linguists and departmental experts constituted for this purpose.",
  ],
  sections: [],
},
  {
  id: "basic-grammar",
  title: "A Basic Grammar of Modern Hindi",
  icon: GraduationCap,
  tone: "indigo",
  content: [
    "This book presents a scientific grammar of Hindi based on modern research in the field of language learning. It reflects the true nature of Hindi and examines the subject using contemporary methods of language study. It is a comprehensive and authoritative work on Hindi grammar.",
    "The first edition was published in 1958. Since then, seven editions have been published, with the seventh edition released in 2012.",
    "Price: ₹1,080 | Total Pages: 406.",
  ],
},
];

/* ------------------------------------------------------------------ */
/* COLOUR THEMES                                                       */
/* ------------------------------------------------------------------ */

const tones: Record<
  Tone,
  {
    topLine: string;
    iconBg: string;
    badge: string;
    hover: string;
    open: string;
  }
> = {
  slate: {
    topLine: "from-slate-600 to-gray-700",
    iconBg: "bg-slate-700 text-white",
    badge: "bg-slate-100 text-slate-800 border-slate-200",
    hover: "hover:border-slate-400",
    open: "open:border-slate-300 open:from-slate-50/50 open:to-gray-50/20",
  },
  amber: {
    topLine: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500 text-white",
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    hover: "hover:border-amber-400",
    open: "open:border-amber-300 open:from-amber-50/50 open:to-orange-50/20",
  },
  blue: {
    topLine: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-600 text-white",
    badge: "bg-blue-100 text-blue-900 border-blue-200",
    hover: "hover:border-blue-400",
    open: "open:border-blue-300 open:from-blue-50/50 open:to-indigo-50/20",
  },
  emerald: {
    topLine: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-600 text-white",
    badge: "bg-emerald-100 text-emerald-900 border-emerald-200",
    hover: "hover:border-emerald-400",
    open: "open:border-emerald-300 open:from-emerald-50/50 open:to-teal-50/20",
  },
  purple: {
    topLine: "from-purple-600 to-violet-600",
    iconBg: "bg-purple-600 text-white",
    badge: "bg-purple-100 text-purple-900 border-purple-200",
    hover: "hover:border-purple-400",
    open: "open:border-purple-300 open:from-purple-50/50 open:to-violet-50/20",
  },
  rose: {
    topLine: "from-rose-500 to-pink-600",
    iconBg: "bg-rose-600 text-white",
    badge: "bg-rose-100 text-rose-900 border-rose-200",
    hover: "hover:border-rose-400",
    open: "open:border-rose-300 open:from-rose-50/50 open:to-pink-50/20",
  },
  teal: {
    topLine: "from-teal-600 to-cyan-600",
    iconBg: "bg-teal-600 text-white",
    badge: "bg-teal-100 text-teal-900 border-teal-200",
    hover: "hover:border-teal-400",
    open: "open:border-teal-300 open:from-teal-50/50 open:to-cyan-50/20",
  },
  indigo: {
    topLine: "from-indigo-600 to-purple-600",
    iconBg: "bg-indigo-600 text-white",
    badge: "bg-indigo-100 text-indigo-900 border-indigo-200",
    hover: "hover:border-indigo-400",
    open: "open:border-indigo-300 open:from-indigo-50/50 open:to-purple-50/20",
  },
};

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export default function KoshPage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="kosh-title"
        className="relative overflow-hidden border-b border-line bg-gradient-to-b from-brand-light/60 via-white to-amber-50/20 py-12 sm:py-16 hc:border-white hc:bg-black"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/5 blur-3xl hc:hidden"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 size-72 rounded-full bg-amber-500/5 blur-3xl hc:hidden"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 text-xs text-muted hc:text-white"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-brand-dark hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&raquo;</li>
              <li>
                <Link
                  href="/schemes"
                  className="hover:text-brand-dark hover:underline"
                >
                  Schemes
                </Link>
              </li>
              <li aria-hidden="true">&raquo;</li>
              <li
                aria-current="page"
                className="font-semibold text-brand-dark hc:text-white"
              >
                Kosh
              </li>
            </ol>
          </nav>

          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <h1
                id="kosh-title"
                className="mt-3 text-[clamp(2rem,3.6vw,2.8rem)] font-bold leading-tight text-brand-dark hc:text-white"
              >
                Kosh
              </h1>

              <p className="mt-2 text-sm leading-relaxed text-muted hc:text-neutral-300 sm:text-[15px]">
                Dictionaries, guides and grammar from the Central Hindi
                Directorate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DROPDOWN SECTIONS */}
      <section
        aria-label="Kosh scheme sections"
        className="py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-6 space-y-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              const t = tones[item.tone];

              return (
                <details
                  key={item.id}
                  id={item.id}
                  className={`group relative scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-white to-white shadow-xs transition-colors ${t.hover} ${t.open} open:shadow-md hc:border-white hc:bg-neutral-950 hc:open:from-neutral-950 hc:open:to-neutral-950`}
                >
                  {/* Top colour line */}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${t.topLine}`}
                  />

                  {/* Dropdown heading */}
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 pt-5 sm:p-5 sm:pt-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-3.5">
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-xl shadow-xs ${t.iconBg} hc:bg-neutral-800 hc:text-white`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </span>

                      <span className="text-sm font-bold leading-snug text-ink hc:text-white sm:text-base">
                        {item.title}
                      </span>
                    </span>

                    <span className="flex shrink-0 items-center gap-3">
                      <span
                        className={`hidden rounded-full border px-2.5 py-0.5 text-xs font-bold sm:inline ${t.badge} hc:bg-neutral-800 hc:text-white`}
                      >
                        {i + 1} / {items.length}
                      </span>

                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className="text-brand transition-transform duration-200 group-open:rotate-180 hc:text-yellow-300"
                      />
                    </span>
                  </summary>

                  {/* Dropdown content */}
                  <div className="border-t border-line/60 px-4 pb-6 pt-5 text-sm leading-relaxed text-slate-700 hc:border-white/20 hc:text-neutral-200 sm:px-5 sm:pl-[4.6rem]">
                    {/* Introductory paragraphs */}
                    <div className="space-y-3">
                      {item.content.map((paragraph, index) => (
                        <p key={index} className="text-justify">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Optional bullet points */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/70 hc:bg-white" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Nested dictionary sections */}
                    {item.sections && item.sections.length > 0 && (
                      <div className="mt-8 space-y-9">
                        {item.sections.map((section, sectionIndex) => (
                          <section key={section.heading}>
                            {/* Subsection heading */}
                            <div className="mb-4 flex items-center gap-3">
                              <span className="h-6 w-1 shrink-0 rounded-full bg-amber-500" />

                              <h3 className="text-base font-bold text-brand-dark hc:text-white sm:text-lg">
                                {section.heading}
                              </h3>
                            </div>

                            {/* Subsection description */}
                            {section.description && (
                              <p className="mb-5 text-justify text-sm leading-7 text-slate-600 hc:text-neutral-300">
                                {section.description}
                              </p>
                            )}

                            {/* Dictionary cards */}
                            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                              {section.entries.map((entry, entryIndex) => (
                                <article
                                  key={entry.title}
                                  className="group/card rounded-xl border border-line bg-white/80 p-4 transition-all duration-200 hover:border-amber-300 hover:shadow-sm hc:border-white/20 hc:bg-neutral-900 hc:hover:border-amber-400"
                                >
                                  <div className="mb-2.5 flex items-start gap-2.5">
                                    <span className="mt-0.5 shrink-0 text-xs font-bold tabular-nums text-amber-600 hc:text-amber-300">
                                      {String(entryIndex + 1).padStart(2, "0")}
                                    </span>

                                    <h4 className="text-sm font-semibold leading-snug text-ink group-hover/card:text-brand-dark hc:text-white">
                                      {entry.title}
                                    </h4>
                                  </div>

                                  <p className="text-justify text-[13px] leading-6 text-muted hc:text-neutral-300">
                                    {entry.description}
                                  </p>
                                </article>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
