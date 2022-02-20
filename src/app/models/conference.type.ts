export interface Conference {
    date: Date,
    nameShort: string,
    nameLong: string,
    country: string,
    city: string,
    institution: string,
    paperTitle: string,
    webpage: string,
    paperLink: string,
    authors: string[]
}

export interface StudentConference {
    conference: Conference,
    supervisor: string,
    result: string
}

export interface Publication {
    date: number,
    title: string,
    journal: string,
    authors: string[]
}