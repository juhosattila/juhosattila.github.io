import { NONE_TYPE } from "@angular/compiler"
import { Competition } from "../models/competition.type"
import { Conference, Publication, StudentConference } from "../models/conference.type"
import { Language } from "../models/foreign-language.type"
import { Job } from "../models/job.type"
import { Level, ProgrammingLanguage } from "../models/programming-language.type"
import { Research } from "../models/research.type"
import { School, SummerSchool } from "../models/school.type"

export const LANGUAGES: Language[] = [
    { name: "English", level: "C1", institution: "Cambridge Certification", year: 2014 },
    { name: "German", level: "B1", institution: "Goethe Institut", year: 2015 },
    { name: "Romanian", level: "B2", institution: "Maturita examination", year: 2015 },
    { name: "Hungarian", level: "Native", institution: "", year: 0},
]

export const PROGRAMMING_LANGUAGES: ProgrammingLanguage[] = [
    { name: "C++ (98/11)", level: Level.advanced },
    { name: "C#", level: Level.advanced },
    { name: "CUDA", level: Level.intermediate },
    { name: "Elixir", level: Level.intermediate },
    { name: "Java", level: Level.advanced },
    { name: "JavaScript", level: Level.advanced },
    { name: "Matlab", level: Level.intermediate },
    { name: "OpenCL", level: Level.intermediate },
    { name: "OpenGL", level: Level.advanced },
    { name: "Prolog", level: Level.intermediate },
    { name: "Python", level: Level.advanced },
    { name: "SQL", level: Level.advanced },
    { name: "UNIX shell scripting", level: Level.intermediate },
    { name: "WebGL", level: Level.advanced },
]

export const TECHNOLOGIES: string[] = [
    "TensorFlow", "NumPy"
]

export const SOFTWARE: string[] = [
    "TeXstudio (LaTeX)", "PyCharm", "Visual Studio Code", "Visual Studio 2017", "Windows and Linux-based OS'"
]

export const CONFERENCES: Conference[] = [
    {
        date: new Date(2019, 2),
        nameShort: "STACS 2019",
        nameLong: "36th International Symposium on Theoretical Aspects of Computer Science",
        country: "Germany",
        city: "Berlin",
        institution: "TU Berlin",
        paperTitle: "Pairwise preferences in the stable marriage problem",
        webpage: "https://stacs2019.akt.tu-berlin.de",
        paperLink: "https://dl.acm.org/doi/fullHtml/10.1145/3434427",
        authors: ["Ágnes Cseh", "Attila Juhos"]
    }
]

export const STUDENTCONFERENCES: StudentConference[] = [
    {
        conference: {
            date: new Date(2021, 4),
            nameShort: "TDK",
            nameLong: "Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Eötvös Loránd University, Faculty of Informatics",
            paperTitle: "CNN-based iterative regularisation for CT image reconstructions.",
            webpage: "http://tda.inf.elte.hu/index.php?option=com_tdk&view=results",
            paperLink: "",
            authors: []
        },
        supervisor: "Dániel Hadházi",
        result: "Second prize"
    },
    {
        conference: {
            date: new Date(2021, 2),
            nameShort: "OTDK",
            nameLong: "National Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Eötvös Loránd University, Faculty of Informatics",
            paperTitle: "Neural network-aided tomographic reconstructions.",
            webpage: "",
            paperLink: "",
            authors: []
        },
        supervisor: "Dániel Hadházi",
        result: "Special prize"
    },
    {
        conference: {
            date: new Date(2020, 4),
            nameShort: "TDK",
            nameLong: "Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Eötvös Loránd University, Faculty of Informatics",
            paperTitle: "Neural network-aided tomographic reconstructions.",
            webpage: "",
            paperLink: "",
            authors: []
        },
        supervisor: "Dániel Hadházi (BME Department of Measurement and Information Systems)",
        result: "Second prize"
    },
    {
        conference: {
            date: new Date(2019, 3),
            nameShort: "OTDK",
            nameLong: "National Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Budapest University of Technology and Economics, Faculty of Electrical Engineering and Informatics",
            paperTitle: "Egalitarian solutions in the stable roommates problem.",
            webpage: "",
            paperLink: "",
            authors: []
        },
        supervisor: "Dr. Ágnes Cseh (Hungarian Academy of Sciences, Centre for Economic and Regional Studies), Dr. Tamás Fleiner (BME Department of Computer Science and Information Theory)",
        result: "Second prize"
    },
    {
        conference: {
            date: new Date(2018, 10),
            nameShort: "TDK",
            nameLong: "Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Budapest University of Technology and Economics, Faculty of Electrical Engineering and Informatics",
            paperTitle: "Egalitarian solutions in the stable roommates problem.",
            webpage: "https://tdk.bme.hu/VIK/Szimu1/Egalitarianus-stabil-parositasok-a-stabil",
            paperLink: "https://tdk.bme.hu/VIK/DownloadPaper/Egalitarianus-stabil-parositasok-a-stabil",
            authors: []
        },
        supervisor: "Dr. Ágnes Cseh, Dr. Tamás Fleiner",
        result: "First prize"
    },
    {
        conference: {
            date: new Date(2017, 10),
            nameShort: "TDK",
            nameLong: "Scientific Conference for Students",
            country: "Hungary",
            city: "Budapest",
            institution: "Budapest University of Technology and Economics, Faculty of Electrical Engineering and Informatics",
            paperTitle: "Performance modelling and analysis of distributed P2P download systems.",
            webpage: "https://tdk.bme.hu/VIK/Halozatok2/2131",
            paperLink: "https://tdk.bme.hu/VIK/DownloadPaper/2131",
            authors: []
        },
        supervisor: "Dr. János Levendovszky (BME Department of Networked Systems and Services)",
        result: "Third prize"
    }
]

export const COMPETITIONS: Competition[] = [
    { name: "BME Mathematics Competition", year: 2021, result: "First Prize" },
    { name: "BME Mathematics Competition", year: 2020, result: "Third Prize" },
    { name: "25th International Mathematics Competition for University Students, Blagoevgrad, Bulgaria", year: 2018, result: "Second Prize" },
    { name: "BME Mathematics Competition", year: 2018, result: "Second Prize" },
    { name: "40th Hajós György National Mathematics Competition", year: 2018, result: "Individual First Prize" },
]

export const SUMMER_SCHOOLS: SummerSchool[] = [
    {
        name: "Prague Summer School on Discrete Mathematics",
        year: 2018,
        topics:
            [
                "Combinatorics of posets: Sparsity and dimension",
                "Discrepancy theory and algorithmic applications",
                "Polynomial method"
            ],
        webpage: "http://pssdm.math.cas.cz/2018/index.html"
    },
    {
        name: "Swedish Summer School in Computer Science",
        year: 2018,
        topics:
            [
                "Quantum Computing",
                "Lattices and Cryptography"
            ],
        webpage: "https://s3cs.eecs.kth.se/2018/"
    },
]

export const SCHOOLS: School[] = [
    { dateFrom: new Date(2021, 3), dateTo: new Date(2021, 8), 
        name: "Technical University of Munich (TU München)", 
        result: "", 
        scholarships: [],  
        note: "One semester within the Erasmus program"
    },
    {
        dateFrom: new Date(2018, 8), dateTo: new Date(2021, 8),
        name: "MSc studies in Computer Science, Budapest University of Technology and Economics, Faculty of Electrical Engineering and Informatics (BME)",
        result: "Excellent with highest honours",
        scholarships: ["National scholarship for outstanding students in tertiary education."],
        note: ""
    },
    {
        dateFrom: new Date(2015, 8), dateTo: new Date(2018, 4),
        name: "BSc studies in Computer Science (BME)",
        result: "Excellent with highest honours",
        scholarships: [
            "Admitted to the advanced level study program of the faculty (IMSc).",
            "University scholarship for outstanding academic results.",
            "National scholarship for outstanding students in tertiary education."
        ],
        note: ""
    },
    {
        dateFrom: new Date(2011, 8),
        dateTo: new Date(2015, 4),
        name: "Székely Mikó High School, bilingual Mathematics-Informatics program (Sepsiszentgyörgy, Romania)",
        result: "Maturita examination (average: 9.88 out of 10)",
        scholarships: [],
        note: ""
    }
]

export const PUBLICATIONS: Publication[] = [
    { date: 2021, title: "Pairwise preferences in the stable marriage problem", journal: "ACM Transactions on Economics and Computation (TEAC)", authors: ["Ágnes Cseh", "Attila Juhos"] }
]

export const RESEARCH: Research[] = [
    {
        dateFrom: new Date(2019, 5),
        dateTo: new Date(2021, 4),
        title: "Medical (CT) image reconstructions with distinguished interest in CNN-based regularisation and iterative techniques.",
        supervisor: "Dániel Hadházi",
        supervisorsInstitution: "BME, Department of Measurement and Information Systems",
        supporter: "Ministry of Human Capacities under its New National Excellence Program (one year + half year)."
    },
    {
        dateFrom: new Date(2018, 8),
        dateTo: new Date(2019, 8),
        title: "The stable roommates problem with special interest in approximation algorithms for finding egalitarian stable roommates. The stable marriage problem with generalised preference structures.",
        supervisor: "Dr. Ágnes Cseh",
        supervisorsInstitution: "Hungarian Academy of Sciences, Centre for Economic and Regional Studies",
        supporter: "Cooperation of Excellences Grant, by the Ministry of Human Capacities under its New National Excellence Program (one year)."
    },
    {
        dateFrom: new Date(2017, 8),
        dateTo: new Date(2017, 11),
        title: "Performance modelling and analysis of distributed P2P download systems.",
        supervisor: "Dr. János Levendovszky",
        supervisorsInstitution: "BME Department of Networked Systems and Services",
        supporter: ""
    }
]

export const JOBS: Job[] = [
    {
        dateFrom: new Date(2018, 5),
        dateTo: new Date(2019, 5),
        title: "Scientific Assistant",
        institution: "Internship and research at the Hungarian Academy of Sciences, Centre for Economic and Regional Studies",
        details: ["Research on matching under preferences"]
    },
    {
        dateFrom: new Date(2016, 6),
        dateTo: new Date(2019, 11),
        title: "Teaching Assistant",
        institution: "Budapest University of Technology and Economics (BME), Faculty of Electrical Engineering and Informatics, Department of Computer Science and Information Theory",
        details:
            [
                "Introduction to the Theory of Computing 1 (linear algebra, seminar)",
                "Theory of Algorithms (seminar)",
                "Probability Theory (seminar)"
            ]
    }
]