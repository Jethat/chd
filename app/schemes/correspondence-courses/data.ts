/* Content for the Correspondence Courses page. Edit text here; the page layout lives in page.tsx. */

/* ───────── Overview ───────── */
export const objective =
  "The Department of Correspondence Courses, within Central Hindi Directorate was set up in 1968 with an aim to impart knowledge of Hindi through correspondence to the people of non-Hindi speaking Indian states, Indians settled abroad and foreign nationals desirous of learning Hindi.";

export const coursesOffered = [
  "The Department of Correspondence Courses of Central Hindi Directorate started an elementary course PRAVESH in the year 1968 with a limited enrolment of 1008 students. The scheme gained tremendous popularity and on the demand of students an advanced course PARICHAYA, subsequent to PRAVESH Course, was commenced in 1973. Apart from these language teaching courses, three more officialese-oriented courses PRABODH, PRAVEEN & PRAGYA were also added in the years 1969, 1970 and 1972 respectively to arrange postal coaching for the officials of Central Government including staff working in Public Undertakings and Autonomous Organizations. The PRAVESH & PARICHAYA Courses of two years duration each have now been replaced by Certificate Course and Diploma Course in Hindi, of one year duration each.",
  "A 'Civil Service Course' in Hindi was introduced for teaching Hindi to such graduate candidate hailing from North-Eastern states of India, whose mother tongue is not included in the Eighth Schedule of the Constitution of India and who intend to opt for Hindi in the compulsory Indian Language paper in the Civil Services Examination. Besides Certificate and Diploma Courses, an Advance Diploma Course in Hindi was started in the year 2003-2004. Advance Diploma Course in Hindi is intended to provide adequate knowledge of Hindi language and literature.",
  "Consequently, the number of students increased manifold, nearly 10,000 students are on the rolls of the Department every year. The total number of students who have so far benefited from these courses is more than 5.10 lacs.",
];

export const medium =
  "The Certificate Course in Hindi and Diploma Course in Hindi are conducted through the medium of English, Tamil, Malayalam and Bangla. Prabodh, Praveen, Pragya, Civil Services Course in Hindi are conducted through the medium of English only. The Advance Diploma Course in Hindi is conducted through the medium of Hindi.";

/* ───────── Admission ───────── */
export const sessions = [
  { courses: "Certificate Course, Diploma Course and Advance Diploma Course in Hindi", text: "One year duration each. The session commences from July every year." },
  { courses: "Prabodh, Praveen and Pragya courses", text: "One year duration each. The session commences from January every year." },
  { courses: "Civil Service Course in Hindi", text: "One year duration. The session commences from January every year." },
];

export const eligibility: { course: string; text?: string; points?: string[] }[] = [
  {
    course: "Certificate Course in Hindi",
    points: [
      "(Indians and foreigners residing in India) whose mother tongue is not Hindi and who are above 10 years of age.",
      "Children of Non-resident Indians (irrespective of their mother tongue) who are above 10 years of age.",
    ],
  },
  {
    course: "Diploma Course in Hindi",
    text: "Besides the eligibility condition as mentioned above, the candidate should have passed the Certificate Course in Hindi of Central Hindi Directorate or the Praveen Course of the Ministry of Home Affairs or should possess requisite language skills.",
  },
  {
    course: "Prabodh, Praveen and Pragya Courses",
    text: "These courses are only for the employees of Central Government, Public Undertakings, and Autonomous Bodies etc. For these courses, Central Hindi Directorate functions only as a teaching agency. Examinations for these courses are conducted by Department of Official Language, Ministry of Home Affairs.",
  },
  {
    course: "Civil Services Course in Hindi",
    points: [
      "This course is meant for graduate candidates or for those who are studying in the final year of a degree course, who are from the North-Eastern States of India, whose mother tongue is not included in the Eighth Schedule of the Constitution of India, and who intend to opt for Hindi in the compulsory Indian Language paper in the Civil Services Examination.",
      "Candidate must belong to one of the following states: Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland and Sikkim.",
    ],
  },
  {
    course: "Advance Diploma Course in Hindi",
    points: [
      "This Course is meant for Indians and Foreigners residing in India and abroad, whose mother tongue is not Hindi and who are above 15 years of age.",
      "The candidate should have passed the Diploma Course in Hindi of Central Hindi Directorate or the High School examination with Hindi as a subject.",
    ],
  },
];

/* ───────── Fee and payment ───────── */
export const fees: { course: string; indian: string[]; foreign: string[] }[] = [
  {
    course: "Certificate Course in Hindi and Diploma Course in Hindi",
    indian: ["Rs. 50.00 per student, per session"],
    foreign: ["US $ 50.00 or £ 30.00 per student, per session or amount equal to US $ in local currency in case of foreign exchange restriction."],
  },
  {
    course: "Advance Diploma Course",
    indian: ["Rs. 200.00 per student, per session"],
    foreign: ["US $ 200.00 or £ 120.00 per student per session or amount equal to US $ in local currency in case of foreign exchange restriction."],
  },
  { course: "Civil Service Course in Hindi", indian: ["No fee charged"], foreign: ["-"] },
  {
    course: "Prabodh, Praveen and Pragya Courses",
    indian: [
      "At the time of admission: Rs. 50.00 per student, per session.",
      "With the submission of examination form: Prabodh Rs. 100.00, Praveen Rs. 100.00, Pragya Rs. 100.00.",
    ],
    foreign: ["-"],
  },
];

export const payment = [
  "Fee should be remitted in the form of crossed Indian Postal Order or a Bank Draft drawn on any bank payable at New Delhi in favour of Director, Central Hindi Directorate, Ramakrishna Puram, New Delhi-110066. For the candidate residing abroad, the payment may be made through Bank Draft drawn in favour of The Director, Central Hindi Directorate, payable at New Delhi on any authorized Bank in India.",
  "In case an applicant residing abroad finds it difficult to remit fees in hard currency on account of local foreign exchange restriction, he/she is advised to deposit the fees in equivalent local currency with the Indian Mission/Embassy in the country where the candidate is residing and send us the receipt in original along with the application.",
];

/* ───────── Teaching and assessment ───────── */
export const teaching = [
  {
    title: "Method of coaching",
    text: [
      "Course material for all the courses, consisting of kits of lessons and response sheets is dispatched as per pre-decided schedule. Students are advised to submit attempted response sheets as early as possible. Evaluated response sheets are then returned to the students with grammatical Guide-notes.",
      "Last date for submission of response-sheets for Certificate/Diploma/Advance Diploma Course in Hindi is 30th April of every year. Last date for submission of response sheets for Prabodh, Praveen, Pragya Courses is 1st November of every year.",
    ],
  },
  {
    title: "Personal Contact Programme",
    text: [
      "In order to make good the absence of class-room teaching and to establish direct contact with the students, Personal Contact Programmes of five to eight days duration are conducted at different places according to the concentration of the students. During these programmes, class-room lectures are arranged and the students are imparted training in speech, pronunciation and conversation with the help of audio-visual aids.",
    ],
  },
  {
    title: "Assessment / Examination",
    text: [
      "Examination is held at the end of each course at different centers in India and abroad. Students are awarded internal assessment marks on the basis of performance in their response-sheets and these marks are added to the total marks awarded to them in the final examination.",
      "No examination is held for the students of Civil Service Course in Hindi.",
    ],
  },
  {
    title: "Prizes / Incentives etc.",
    text: [
      "Cash and Book prizes are awarded to meritorious students of Hindi Certificate / Hindi Diploma / Advance Hindi Diploma Course on the basis of their examination results. Prabodh / Praveen / Pragya students are also eligible for prizes, increment and cash incentives from their respective Departments / Ministries.",
    ],
  },
];

/* ───────── Audio-visual programmes ───────── */
export const avIntro = [
  "The Central Hindi Directorate has prepared supplementary educational material under the linguistic and academic system, the details of which are given below.",
  "The aim of preparation of video programmes is to make a clear, cogent and interesting presentation of grammar points, divergent facets of literature and the latest methodologies for teaching Hindi. These programmes shall go a long way in helping students to comprehend the Hindi language, literature and culture.",
  "Programmes produced by Department of Correspondence Course, Central Hindi Directorate are being telecast on Gyandarshan Channel of MHRD, Govt. of India.",
  "The Department of Correspondence Course has produced a number of videos. Each CD/DVD is a video film approximately of half-an-hour duration that lays stress on teaching basic and elementary Hindi expressions, sentence structures and varied grammatical points with an attempt to assimilate flavours of Indian culture in it. This video film will certainly create interest for students of foreign origin as well as non-Hindi speaking Indian students in learning Hindi.",
];

export type Av = { no: string; title?: string; parts?: string[]; desc?: string[] };

const prog = (t: string) =>
  `This programme deals about the main trends of ${t} prevalent in modern Hindi poetry. Scholars/Researchers may find this programme as a reference material.`;

export const avProgrammes: Av[] = [
  { no: "1", parts: [
    "Welcome to India - Common conversational sentences of Hindi for non-Hindi speaking Indian and foreign students as are used in hotels, markets and restaurants.",
    "Usage of pronouns - The usages of pronoun 'you'. The usage of 'tu', 'tum' and 'aap' for the pronoun 'you' is explained in this CD." ] },
  { no: "2", parts: [
    "Subject + '-ne' construction - Three main factors of sentence construction in Hindi - Subject, Object and verb are explained in this CD.",
    "Use of particles - Usage of particles 'to', 'bhi' and 'hi'. Changes the meaning of a sentence though their own meaning never changes." ] },
  { no: "3", parts: [
    "Subject + 'ko' construction - Subject + 'ko' is generally used when the subject is animate and the sentence involves certain actions which essentially belong to human or living beings. In Hindi there are a number of Subject + 'ko' patterns requiring the use of 'ko' with the subject denoting physiological state such as liking, feeling, necessity etc. All of these have been explained in this CD.",
    "Usage of Idioms - This CD is related to the usage and meaning of idioms in Hindi. Idioms express specific meanings. By using idioms language becomes more interesting and effective. This CD explains all these characteristics of the idioms." ] },
  { no: "4", title: "Gender Training", desc: ["In this CD emphasis is on gender training. To write correct Hindi it is essential to have correct knowledge of gender formation. Gender can be ascertained through pronouns like 'Mera', 'Meri' etc and through adjectives like 'Bada', 'Badi' etc used in the sentences. How to ascertain the gender of a noun has been explained in this CD."] },
  { no: "5", parts: [
    "Compound verbs - Compound verb is made of two verbs - main verb and intensifier. The forms of such compound verbs have been explained in this CD.",
    "Subject + Verb Agreement - In Hindi according to usage of verbs Subjectival, Objectival and Neutral construction of sentences are common. In this CD emphasis is on subject + verb agreement." ] },
  { no: "6", parts: [
    "Subject - verb agreement - According to verb usage there are three types of sentence constructions - Subjectival construction, Objectival construction and Neutral construction. In Subjectival construction verb agrees with the subject, in Objectival construction verb agrees with the object and in Neutral construction verb is always used in masculine singular form.",
    "Standardization of Devanagari script - Hindi is written in Devanagari script which is a scientific script. However, some new rules of standardization have been framed to maintain its uniformity. All these rules have been explained in this CD." ] },
  { no: "7", title: "Learn Hindi", desc: ["This CD is intended to be useful to those who have started learning Hindi and desire to pick up spoken and conversational form of Hindi for their day-to-day dealings. It is equally valuable to the tourists and visitors who seek to get familiar with the basic conversation patterns of Hindi and employ them during their visit to those areas of India where Hindi is the language of common parlance."] },
  { no: "8", title: "Bangla medium", parts: ["Hindi Mein Ling Ka Nirdharan", "Subject + Verb Agreement"] },
  { no: "9", title: "Malayalam medium", parts: ["Hindi Mein Ling Ka Nirdharan", "Subject + Verb Agreement"] },
  { no: "10", title: "Tamil medium", parts: ["Hindi Mein Ling Ka Nirdharan", "Subject + Verb Agreement"] },
  { no: "11", title: "Plural form Nouns and Adjectives", desc: ["This CD deals with rules of plural formation of Nouns and Adjectives. The changes in Nouns and Adjectives due to the use of post-positions are presented in an interesting and effective manner."] },
  { no: "12", title: "Imperative Mood", desc: ["This CD is about imperative construction. It explains how to address your youngers, elders and equals by using appropriate verb form."] },
  { no: "13", title: "Hindi Mein Kridant", desc: ["This CD is about Participle in Hindi. In this CD we learn the structure of participle in different forms and its correct uses in a sentence."] },
  { no: "14", title: "Hindi Mein Kaal", desc: ["This CD is about tenses in Hindi. It deals with various types of tenses in Hindi. It also discusses the formation of different verb forms from the verb root and their use in Hindi sentences."] },
  { no: "15", title: "English-Hindi Conversational Guide", desc: ["This is a CD version of English-Hindi Conversational (Book). With the help of this CD one can know the Hindi version of English sentences in hypothetical situations."] },
  { no: "16-17", title: "Hindi Ka Akhil Bhartiya Swaroop", desc: ["These two CDs contain vivid description of Pan-Indian Hindi. Basically this concept has got developed based on theory of socio-linguistics."] },
  { no: "18", title: "Lok Geet", desc: ["In this CD our great Indian traditions/customs have been depicted. In fact this is a colourful presentation of Indian culture through folk-songs of different states of India."] },
  { no: "19", title: "Hindi Mein Karak Chinha", desc: ["This CD is about Hindi cases, case endings, their correct usage and how they are used in different situations."] },
  { no: "20", title: "Upsarga Aur Pratyaya Ka Tulnatmak Adhyayan", desc: ["To know the appropriate meaning of a Hindi word, the knowledge of prefixes and suffixes is a must, so that one can know the exact or the derived meaning of a word. Keeping this purpose in mind, an exhaustive CD/DVD of one hour duration has been prepared. This CD/DVD will be helpful to get insight into the word-formation and the coinage of new terminology in Hindi."] },
  { no: "21-22", title: "Hindi Ki Vikas Yatra (Part I & II)", desc: ["Although we speak Hindi we don't know much about the development and genesis of Hindi. Due to this lack of knowledge we are unable to know the importance of our rich language. As the title itself suggests this is a generic programme, which depicts the glorious journey of Hindi to its present rich form. This CD/DVD will certainly cater to the need of students/researchers of Hindi language and literature."] },
  { no: "23", title: "Alankars", desc: ["This CD/DVD deals with different Alankars i.e. figures of speech of Hindi in a very comprehensive, lucid and interesting manner."] },
  { no: "24", title: "Hindi Mein Samaas", desc: ["This CD/DVD deals with Samaas i.e. Compound. In this CD/DVD attempt has been made to highlight different aspects of compound formation in a very lucid manner."] },
  { no: "25-26", title: "Prayojanmoolak Hindi (Part I & II)", desc: ["These CDs/DVDs deal with how to use Hindi in a more functional way in our day-to-day business. They deal mainly with official Hindi, Hindi in Journalism, Law, Advertising, Computer etc."] },
  { no: "27", title: "Sangya (Noun)", desc: ["This CD/DVD deals with grammatical point 'Noun'. In this CD/DVD the definition of noun, its different types and subtypes are thoroughly discussed."] },
  { no: "28", title: "Sarvnam (Pronoun)", desc: ["This CD/DVD deals with grammatical point 'Pronoun'. In this CD/DVD the definition of pronoun, its different types and subtypes are thoroughly discussed."] },
  { no: "29", title: "Visheshan (Adjective)", desc: ["This CD/DVD deals with grammatical point 'Adjective'. It contains the definition of adjective, its different types and subtypes."] },
  { no: "30-31", title: "Bhakti Sahitya Ki Dhara (Part I & II)", desc: ["These two CDs/DVDs are developed specially taking in account the 'Bhakti period' of Hindi literature. Through these CDs/DVDs viewer undoubtedly will be able to know the melodious journey of Bhakti Sahitya and our high traditions/culture."] },
  { no: "32-33", title: "Kahavatein / Lokoktiya (Part I & II)", desc: ["This topic is divided in two parts and is on proverbs of Hindi. The whole programme is presented in a quizzical form in a very lucid manner."] },
  { no: "34-35", title: "Shabd Vichar (Part I & II)", desc: ["Formation of words has been the matter of great interest for the learners. Keeping this in mind, the programme 'Shabd Vichar' was developed in two parts. This programme deals about the different aspects of Hindi words. Apart from this, the programme includes other relevant points such as formation of words and the connotative & denotative meaning of the words."] },
  { no: "36", title: "Kriya Visheshan (Adverb)", desc: ["'Kriya Visheshan' is an important constituent of a sentence. The above said concept is developed with the help of jingle and on the high parameters of language pedagogy. No doubt, this colourfully and beautifully illustrated program will help teachers and students to know the concept easily."] },
  { no: "37-38", title: "Hindi Sahitya Ke Sanskritik Srot (Part I & II)", desc: ["This programme deals mainly with Hindi Alphabets. Apart from this the programme includes the definition of letter, syllable, cluster etc. This may prove beneficial for those who wish to know the basics of Hindi Grammar."] },
  { no: "39-40", title: "Anuvad Hai Aagar Gyan Ka Sagar (Part I & II)", desc: ["Now-a-days Anuvad plays an important role to bridge the gap among different language people. Therefore, knowing the theoretical & practical aspects of translation may prove fruitful for those who are indulged in the field of translation."] },
  { no: "41-43", title: "Varn Vichar (Part I, II & III)", desc: ["This programme deals mainly with Hindi Alphabets. Apart from this the programme includes the definition of letter, syllable, cluster etc. This may prove beneficial for those who wish to know the basics of Hindi Grammar."] },
  { no: "44-46", title: "Kriya (Verb) (Part I, II & III)", desc: ["As we know that the verb is a very essential component of a sentence. Therefore, knowing verb may prove very useful for a language learner. This programme deals with all the major and minor aspects of Verb and its correct uses in a sentence."] },
  { no: "47-49", title: "Hindi Mein Gadya Sahitya Ki Pramukh Pravrittiyan (Part I, II & III)", desc: ["The above said programme which is divided into three parts deals with the overall trends of Hindi Prose. The contents of the programme include all the major and minor details such as periodical division of Hindi Prose and information on the contributors of Hindi Prose. Therefore, this programme may be described as the latest survey of Hindi Prose."] },
  { no: "50-52", title: "Shabd Kosh: Ek Parichaya (Part I, II & III)", desc: ["The programme Shabd Kosh: Ek Parichaya is developed into three parts of approx 30 minutes duration each. As we know, the dictionary is a very reliable tool for the language learners, translators, journalists etc. This programme highlights on all the major aspects of Dictionary such as definition of dictionary, the history of dictionary, the techniques of dictionary compilation based on linguistic theories etc. Further, the programme also discusses the aims and objectives of a dictionary and its classification."] },
  { no: "53-55", title: "Sandhi (Part I, II & III)", desc: ["The grammatical point 'Sandhi' is developed into three parts of approx 30 minutes duration each. The topic Sandhi occupies a prominent place in the teaching of Hindi language and grammar. This programme covers different aspects of Sandhi such as definition of Sandhi and its types and subtypes."] },
  { no: "56-58", title: "Hindi Ke Badhte Kadam (Part I, II & III)", desc: ["The above said programme is developed into three parts of approx 30 minutes duration each. This programme presents the glorious journey of Hindi. The programme depicts the development of Hindi at its two levels: National and International.", "The programme is very informative, educative and innovative in its nature."] },
  { no: "59", title: "Paribhashik Shabdawali: Moolbhoot Sankalpnaen", desc: ["This programme deals about the basic concepts of technical terminology."] },
  { no: "60", title: "Paribhashik Shabdawali: Nirman Prakriya", desc: ["This programme deals about the coining of technical terms. In nutshell it discusses all the aspects of technical terminology, especially about its evolution process. It may prove useful for those who are working in the field of technical terminology, translation and research etc."] },
  { no: "61", title: "Paribhashik Shabdawali: Vaiyaktik evam Sansthagat Prayatna", desc: ["In this programme, attempt has been made to discuss about the efforts made by the government, individuals and private institutions as well. This programme is useful for those who are working towards popularization of technical terminology."] },
  { no: "62", title: "Vakya Vichar: Moolbhoot Sankalpnaen", desc: ["In this programme basic concept of sentence formation has been discussed in a very comprehensive and lucid manner. This programme may prove useful for Hindi learner in general."] },
  { no: "63", title: "Vakya Vichar: Vakya Nirman", desc: ["As we know that without apt expression, no one can communicate effectively. Therefore, in this programme, the process of sentence formation has been discussed in such a very simple manner that even the general Hindi learner may get benefited with this."] },
  { no: "64", title: "Vakya Vichar: Vakya Vargikaran", desc: ["As the title itself suggests, in this programme different basics of sentence classification have been discussed to get command on sentence formation."] },
  { no: "65", title: "Adhunik Hindi Padya Sahitya Ki Pramukh Pravrittiyan: Bhartendu evam Dwivedi Yug", desc: [prog("Bhartendu Evam Dwivedi Period")] },
  { no: "66", title: "Adhunik Hindi Padya Sahitya Ki Pramukh Pravrittiyan: Chhayavadi Kavya", desc: [prog("Chhayavadi Kavya period")] },
  { no: "67", title: "Adhunik Hindi Padya Sahitya Ki Pramukh Pravrittiyan: Pragatiwad Evam Prayogwad", desc: [prog("Pragatiwaad Evam Prayogwaad period")] },
  { no: "68", title: "Rajbhasha Hindi: Samvidhanik Vyavastha", desc: ["As we know that Hindi is the official language of India. In this programme basic concept of language has been discussed in the wake of official language policy as inscribed in the Constitution of India."] },
  { no: "69", title: "Rajbhasha Hindi: Neeti Karyanvayan", desc: ["This programme deals about the implementation of Hindi language in its own country as per the constitutional provision. The programme may prove useful for those who are working in the field of promotion of official language Hindi."] },
  { no: "70", title: "Rajbhasha Hindi: Vaiyaktik Evam Sansthangat Prayatna", desc: ["There are a lots of individual as well as institutional efforts involved in the promotion of Hindi. Needless to say, this programme provide the vivid description about the Herculean efforts of different individuals, NGO's and Institutions as well who are working in the field of promotion of Hindi. The programme provides ample guidance and inspiration for the Hindi learner who loves to work in Hindi."] },
  { no: "71", title: "Kendriya Hindi Nideshalaya: Ek Parichaya", desc: ["This CD highlights about the different schemes of Central Hindi Directorate. This CD is available free of cost."] },
  { no: "72", title: "Hindi Mein Viram Chihna (Part I)", desc: ["The programme titled 'Hindi Mein Viram Chihna' (Part-I) mainly discuss about the several punctuation marks that are used in Hindi. The punctuation marks are 'poornaviram', 'prashnachihna', 'vismaysuchak chihna', 'upviram', and 'ardhaviram'. Apart from this the concepts of accent, pitch and tone are also discussed which are used at the spoken level of the language."] },
  { no: "73", title: "Hindi Mein Viram Chihna (Part II)", desc: ["The programme titled 'Hindi Mein Viram Chihna' (Part-II) discuss about the several punctuation marks that are used in Hindi. The punctuation marks are 'alpaviram', 'urdhwaviram', 'nirdeshak chihna', 'viram chihna', 'uddharan chihna', 'shabd chihna', 'koshthak', 'lop chihna', 'sankshepsuchak chihna', 'hans pad' and 'yojak chihna'."] },
  { no: "74", title: "Hindi Ke Bhagirath Sahityakar: Jai Shankar Prasad (Part I)", desc: ["The Programme Hindi Ke Bhagirath Sahityakar: Jai Shankar Prasad (Part-I) discuss about the different creative dimensions of the personality of Jai Shankar Prasad. In the first Part of the programme discussion is concentrated on the poetry, novel and essays written by this personality. The programme also discuss about the early life of Jai Shankar Prasad."] },
  { no: "75", title: "Hindi Ke Bhagirath Sahityakar: Jai Shankar Prasad (Part II)", desc: ["The Programme Hindi Ke Bhagirath Sahityakar: Jai Shankar Prasad (Part-II) discuss about the drama and stories which are written by the famous personality Jai Shankar Prasad."] },
  { no: "76-77", title: "Karyalaeen Patrachar", desc: ["Karyalaeen Patrachar Programme has two parts. In the first part of the programme, various types of formal and informal letters, nature, language and formal structure of official letters have been discussed.", "In the second part of the programme; official letters, demi-official letters, reminders, acknowledgements, endorsements and office orders have been discussed."] },
  { no: "78-79", title: "Maukhik Abhivyakti (Part I & II)", desc: ["This programme deals about the different aspects of the oral expressions such as Bhashana, Ashubhashana, Vad-Vivad, Vartalap etc."] },
  { no: "80", title: "Hindi Ke Bhagirath Sahityakar: Ramdhari Singh 'Dinkar' (Part I)", desc: ["This part of programme depicts the early life of the writer. This programme is beautifully crafted to entertain, inform and educate the viewer in a lighter vein."] },
  { no: "81", title: "Hindi Ke Bhagirath Sahityakar: Ramdhari Singh 'Dinkar' (Part II)", desc: ["Second part of the programme exclusively concentrates on the creative world of Ramdhari Singh 'Dinkar' and his contribution towards not only Hindi literature but regional language and literature of India as well. This colorful programme is full of lively enactments of poems composed by the great writer. Sincere efforts have been made to present the Hindi legend Ramdhari Singh 'Dinkar' in a complete and a comprehensive way to educate the viewer."] },
  { no: "82-83", title: "Lipi Ki Vikas Yatra (Part I & II)", desc: ["This Programme is divided into two parts. In this Programme, there is a discussion in content of various scripts, especially Brahmi and Devanagari highlighting the development of script. There is a detailed discussion on the nature and characteristics of Devanagari script in context to Hindi."] },
  { no: "84-85", title: "Hindi Ke Bhagirath Sahityakar: Mahadevi Verma (Part I & II)", desc: ["In this new episode of the Bhagirath literary theme of Hindi series, there is a discussion about Mahadevi Verma, an eminent personality of Hindi literature. The first part of the programme focuses primarily on her early life and some of her works, while in the second part her creative work has been highlighted in detail and her literary contributions have been discussed."] },
  { no: "86-87", title: "Purvottar Bharat Mein Hindi (Part I & II)", desc: ["This programme is divided into two parts. First part of this programme highlights the cultural and natural beauty of the North-East India. At the same time, establishment of Hindi in these states has been presented in an interesting manner.", "Second part of the programme is entirely dedicated to the development and expansion of Hindi in these North-Eastern states. In this part, sincere effort has been made to present the situation, direction and propagation of Hindi in the North Eastern states."] },
  { no: "88-89", title: "Hindi Ke Bhagirath Sahityakar: Bhartendu Harishchandra (Part I & II)", desc: ["In this Programme there is a discussion about the personality and creativity of Bhartendu Harishchandra, a legend of Hindi Literature. The first part of the programme primarily focuses on the early life of the writer and some of his work, and in the second part, his creative work have been highlighted in detail."] },
  { no: "90-91", title: "Dakshin Bharat Mein Hindi (Part I & II)", desc: ["In this programme, an effort has been made to highlight the efforts and the constitutional provisions for the propagation of Hindi along with the back-ground of Hindi in south-India.", "In the first part there is a descriptive discussion of the wave and propagation of Hindi as a contact language in South India. In the second part of this DVD, efforts have been made to cover all information regarding the status of Hindi teaching, Hindi Volunteers, Translators, Writers and Journalism in South India."] },
];

/* ───────── Conversational guides ───────── */
export const guidesIntro = [
  "Scheme of teaching Hindi through Postal tuition (Correspondence) to non-Hindi Speaking Indians & foreigners in and outside the country was started in 1968 by Central Hindi Directorate. To make this process of teaching more convenient, bilingual Conversational Guides & Self-Taught books in different regional languages (accepted under eighth schedule of constitution of India) along with Hindi have been and yet are being prepared & published.",
  "Conversational Guides are intended to be useful to those whose mother tongue is not Hindi and who desire to pick up spoken & conversational form of Hindi for their day to day dealings. It is equally valuable to the tourists & visitors who seek to get familiar with the basic conversational patterns of Hindi and employ them during their visits to those areas of the country where Hindi is the language of common parlance. These Conversational Guides are Hindi based as well as regional language based. Through these books Hindi speaking persons may also be made aware of regional language words and sentences because words and sentences have been given in Devanagari script also.",
  "Bilingual Conversational book is divided into two parts. Part-one contains conversational expressions and part-two contains a glossary of useful words.",
  "The material of conversational books has been subsequently scrutinized and modified by a committee of linguists and departmental experts, set up for this purpose.",
];

export type Guide = { name: string; cols: string[]; meta?: string; status?: string };

export const languageGuides: Guide[] = [
  { name: "English–Hindi Conversational Guide", cols: ["English sentences / words", "Translation of English sentences / words into Hindi", "Transliteration of Hindi sentences / words into English"], meta: "Price: Rs 20 · Total pages: 184 · Year of publication: 2013" },
  { name: "Tamil–Hindi–Tamil Conversational Guide", cols: ["Tamil sentences / words", "Devanagari transliteration of Tamil sentences / words", "Translation of Tamil sentences / words into Hindi", "Tamil transliteration of Hindi translation"], meta: "Price: Rs 20 · Total pages: 238 · Year of publication: 2013" },
  { name: "Assamese–Hindi–Assamese Conversational Guide", cols: ["Assamese sentences / words", "Devanagari transliteration of Assamese sentences / words", "Translation of Assamese sentences / words into Hindi", "Assamese transliteration of Hindi translation"], meta: "Price: Rs 20 · Total pages: 275 · Year of publication: 2008" },
  { name: "Punjabi–Hindi–Punjabi Conversational Guide", cols: ["Punjabi sentences / words", "Devanagari transliteration of Punjabi sentences / words", "Translation of Punjabi sentences / words into Hindi", "Punjabi transliteration of Hindi translation"], meta: "Price: Rs 20 · Total pages: 271 · Year of publication: 2016" },
  { name: "Dogari–Hindi–Dogari Conversational Guide", cols: ["Dogari sentences / words", "Hindi translation and transliteration of Dogari sentences / words"], meta: "Price: Rs 20 · Total pages: 204 · Year of publication: 2017" },
  { name: "Nepali–Hindi–Nepali Conversational Guide", cols: ["Nepali sentences / words", "Hindi translation and transliteration of Nepali sentences / words"], meta: "Price: Rs 20 · Total pages: 205 · Year of publication: 2016" },
  { name: "Malayalam–Hindi–Malayalam Conversational Guide", cols: ["Malayalam sentences / words", "Translation of Malayalam sentences / words into Hindi", "Malayalam transliteration of Hindi sentences / words"], meta: "Price: Rs 20 · Total pages: 189 · Year of publication: 1997" },
  { name: "Bangla–Hindi–Bangla Conversational Guide", cols: ["Bangla sentences / words", "Devanagari transliteration of Bangla sentences / words", "Translation of Bangla sentences / words into Hindi", "Bangla transliteration of Hindi translation"], meta: "Price: Rs 20 · Total pages: 270 · Year of publication: 2001" },
  { name: "Marathi–Hindi–Marathi Conversational Guide", cols: ["Marathi sentences / words", "Hindi translation and transliteration of Marathi sentences / words"], meta: "Price: Rs 20 · Total pages: 191 · Year of publication: 2018" },
  { name: "Oriya–Hindi–Oriya Conversational Guide", cols: ["Oriya sentences / words", "Devanagari transliteration of Oriya sentences / words", "Translation of Oriya sentences / words into Hindi", "Oriya transliteration of Hindi translation"], status: "Guide / book is under publication." },
  { name: "Kannada–Hindi–Kannada Conversational Guide", cols: ["Kannada sentences / words", "Devanagari transliteration of Kannada sentences / words", "Translation of Kannada sentences / words into Hindi", "Kannada transliteration of Hindi"], status: "Guide is under preparation." },
];

export const hindiGuides: Guide[] = [
  { name: "Hindi–Telugu Conversational Guide", cols: ["Hindi sentences / words", "Transliteration of Hindi sentences / words into Telugu", "Translation of Hindi sentences / words in Telugu", "Transliteration of Telugu sentences / words into Devanagari"], meta: "Price: Rs 20 · Total pages: 201 · Year of publication: 2005" },
  { name: "Hindi–Bangla Conversational Guide", cols: ["Hindi sentences / words", "Transliteration of Hindi sentences / words into Bangla", "Translation of Hindi sentences / words into Bangla", "Transliteration of Bangla sentences / words into Devanagari"], meta: "Price: Rs 20 · Total pages: 230 · Year of publication: 2008" },
  { name: "Hindi–English Conversational Guide", cols: ["Hindi sentences / words", "Transliteration of Hindi sentences / words into Roman", "Translation of Hindi sentences / words into English"], meta: "Price: Rs 20 · Total pages: 146 · Year of publication: 2013" },
];

export const guidesNote = "Each guide has been prepared keeping in view its utility for students and tourists.";

/* ───────── Self-taught books ───────── */
export const selfTaughtIntro = [
  "The chief aim of self taught book is to eliminate all linguistic barrier found between various Indian languages and to support emotional unity of nation.",
  "These self taught books are prepared as supplementary teaching material, keeping in mind requirements of non-Hindi speaking Indians and foreigners.",
  "There are four parts in self taught containing pictorial introduction of words, grammar based chapters, chapters based on various situations and applied vocabulary respectively.",
  "Self taught is most useful for those learners whose mother tongue is not Hindi and who want to learn Hindi through self study at their own convenience.",
  "The material of self taught has been subsequently scrutinized and modified by a committee of linguists and departmental experts set up for this purpose.",
];

export type Book = { name: string; paras?: string[]; meta?: string; status?: string };

export const languageBooks: Book[] = [
  { name: "Oriya-Hindi Swayam Shikshak", paras: ["The department of Correspondence Courses of Central Hindi Directorate has been teaching to non-Hindi speaking Indians and foreigners through many languages for the last 44 years. The first edition of the 'Oriya-Hindi Swayam Shikshak' was published in 2007. While preparing this book, it has been kept in mind that all the frequently used basic sentences of Oriya-Hindi language should be included in the book, so that tourists travelling to these places may use them in conversation. Hindi translation and meaning of Oriya sentences have been incorporated, for the convenience of Hindi speaking people. The purpose of this course is to teach Hindi to those Oriya speaking people, who wish to learn Hindi but unable to join any regular institution for the same."], meta: "Price: Rs 20 · Total pages: 224 · First edition: 2007" },
  { name: "Kannad-Hindi Swayam Shikshak", paras: ["The first edition of 'Kannad-Hindi Swayam Shikshak' was published in the year 1976. The book was prepared keeping in mind the requirements of Hindi and Kannad speaking people, to help them in speaking the language, other than their mother tongue, while travelling to those areas. Soon, it became very popular and its second edition was published in 2003. The words and the sentences that are used on daily basis, from both the languages have been included in the book and translation of Kannad sentences in Devanagari script have also been given so that Kannad speaking people can also use it."], meta: "Price: Rs 20 · Total pages: 196 · Second edition: 2003" },
  { name: "Malayalam-Hindi Swayam Shikshak", paras: ["The first edition of 'Malayalam-Hindi Swayam Shikshak' was published in 2003. In this sequence utter care was taken again in this book to include all the fundamental sentences of Hindi language so that Malayalam speaking persons and other tourists become familiar with Hindi language and find it useful. Meaning and translation of Hindi words and sentences have been given in Malayalam, so that Hindi-speaking people can also use it frequently."], meta: "Price: Rs 20 · Total pages: 172 · First edition: 2003" },
  { name: "Bangla-Hindi Swayam Shikshak", paras: ["The main purpose behind preparation of this book is to make tourists, Bangla speaking people and other non-Hindi speaking people familiar with the basic sentences of Hindi language. Translation and transliteration of commonly used Hindi words and sentences are also given in this book, so that the book is proved useful to Hindi speaking people equally.", "Pictorial introduction of the various words, grammar based chapters, applied and practical vocabulary as well the chapters based on various other situations are also included in the book.", "The second purpose of the book is to teach Hindi to those people who are interested in it but due to some reasons, cannot join any institutions for formal learning."], meta: "Price: Rs 20 · Total pages: 260 · First edition: 2001" },
];

export const hindiBooks: Book[] = [
  { name: "Hindi-Tamil Swayam Shikshak", paras: ["The third edition of 'Hindi-Tamil Swayam Shikshak' was published in 1998 to meet the increasing demand of the book. These 'Swayam Shikshak' books are not only useful as emotionally unifying agent but also helps in overcoming the obstacles in using various languages by various people. With the help of these books any Hindi speaking person can learn Tamil and vice-versa as well. All the words and topics of daily use have been included in the books through which one can easily learn other languages for their practical use."], meta: "Price: Rs 20 · Total pages: 218 · Third edition: 1998" },
  { name: "Hindi-Konkani Swayam Shikshak", paras: ["The main aim of this book is to focus on the basic structure of the sentence in Konkani language for all the tourists and Hindi speaking people, so that they can be comfortable while talking in Konkani during their visit to this region. In this book, words and sentences of daily use have been included and their Konkani translation is also given so that Konkani people can also use it frequently. Second main aim of this book is to teach Hindi to such Hindi speaker, who could not join formal classes of Konkani at any institution due to some reason."], meta: "Price: Rs 20 · Total pages: 173 · First edition: 2009" },
  { name: "Hindi-Malayalam Swayam Shikshak", paras: ["The purpose of this book was to explain basic structure of the sentence of Malayalam language to the tourists, visitors and Hindi-speaking people so they can use it during their visit to this state. The words and the sentences of day-to-day conversation have been incorporated in this book. Translation of Hindi words and their meaning have also been given in Malayalam for the convenience of Malayalam speaking people."], meta: "Price: Rs 20 · Total pages: 173 · First edition: 2003" },
  { name: "Hindi Swayam Shikshak (English Medium)", status: "This book is under preparation." },
  { name: "Hindi Swayam Shikshak (Bangla Medium)", status: "This book is under preparation." },
  { name: "Hindi Swayam Shikshak (Tamil Medium)", status: "This book is under publication." },
];

export const guideLists = {
  hindiBased: ["Hindi – Telugu – Hindi Conversational Guide", "Hindi – Bangla – Hindi Conversational Guide", "Hindi – English – Hindi Conversational Guide"],
  languageBased: [
    "English – Hindi – English Conversational Guide", "Oriya – Hindi – Oriya Conversational Guide", "Tamil – Hindi – Tamil Conversational Guide",
    "Assamiya – Hindi – Assamiya Conversational Guide", "Punjabi – Hindi – Punjabi Conversational Guide", "Dogri – Hindi – Dogri Conversational Guide",
    "Nepali – Hindi – Nepali Conversational Guide", "Malayalam – Hindi – Malayalam Conversational Guide", "Bangla – Hindi – Bangla Conversational Guide",
    "Marathi – Hindi – Marathi Conversational Guide",
  ],
};

/* ───────── Audio visual material (CDs based on conversational guides) ───────── */
export const guideCds: [string, string][] = [
  ["Assamiya – Hindi – Assamiya Conversational CD", "2006 – 2007"],
  ["Tamil – Hindi Conversational CD", "2006 – 2007"],
  ["Mizo – Hindi – Mizo Conversational CD", "2007 – 2008"],
  ["Hindi – Telugu Conversational CD", "2007 – 2008"],
  ["Bangla – Hindi – Bangla Conversational CD", "2008 – 2009"],
  ["Oriya – Hindi – Oriya Conversational CD", "2008 – 2009"],
  ["Kannada – Hindi – Kannada Conversational CD", "2008 – 2009"],
  ["Malayalam – Hindi – Malayalam Conversational CD", "2008 – 2009"],
  ["Konkani – Hindi – Konkani Conversational CD", "2009 – 2010"],
  ["Marathi – Hindi – Marathi Conversational CD", "2009 – 2010"],
  ["Gujrati – Hindi – Gujrati Conversational CD", "2009 – 2010"],
  ["Punjabi – Hindi – Punjabi Conversational CD", "2009 – 2010"],
  ["Hindi – Kashmiri – Hindi Conversational CD", "2010 – 2011"],
  ["English – Hindi – English Conversational CD", "2010 – 2011"],
  ["Maithili – Hindi – Maithili Conversational CD", "2010 – 2011"],
  ["Urdu – Hindi – Urdu Conversational CD", "2010 – 2011"],
  ["Manipuri – Hindi – Manipuri Conversational CD", "2010 – 2012"],
  ["Santhali – Hindi – Santhali Conversational CD", "2011 – 2012"],
  ["Hindi – Sanskrit Conversational CD", "2011 – 2012"],
  ["Hindi – Sanskrit Conversational CD", "2011 – 2012"],
  ["Hindi – Nepali Conversational CD", "2013 – 2014"],
  ["Hindi – Bodo Conversational CD", "2014 – 2015"],
  ["Nepali – Hindi Conversational CD", "2015 – 2016"],
];
export const cdPrice = "Rs 150 per CD only (including postage and packing expenses)";

/* ───────── Purchase and downloads ───────── */
export const purchase =
  "The material can be purchased on the payment of either paying the requisite amount in cash at the CHD sales counter or through the Demand Draft in favour of The Director, Central Hindi Directorate, Ramakrishnapuram, New Delhi-110066 and payable at Delhi/New Delhi. The request in this regard may be addressed to:";

export const salesAddress = ["Assistant Director (Sales)", "Central Hindi Directorate", "West Block-7, R.K. Puram", "New Delhi-110066"];
export const salesPhones = ["+91-11-26105211", "+91-11-26103160"];

/** Put the PDFs in /public/docs/ or change the paths. */
export const downloads = [
  { title: "Feedback Form", size: "239.04 KB", href: "/docs/feedback-form.pdf" },
  { title: "Information Booklet", size: "509.37 KB", href: "/docs/information-booklet.pdf" },
  { title: "Correspondence Courses Admission Notice-2026-27", size: "469.52 KB", href: "/docs/correspondence-courses-admission-notice-2026-27.pdf" },
];