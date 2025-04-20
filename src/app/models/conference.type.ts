export interface Conference {
    date: string,
    nameShort: string,
    nameLong: string,
    country: string,
    city: string,
    institution: string,
    paperTitle: string,
    webpage: string,
    paperLink: string,
    authors: string
}

export interface StudentConference {
    conference: Conference,
    supervisor: string,
    result: string
}