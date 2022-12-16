export type Experience = {
  id: string
  name: string
  location: string
  description: string
  links: {
    label: string
    url: string
  }[]
  url: string
  image?: string
  tags: string[]
  startDate: string
  endDate: string
}

export interface Experiences {
  title: string
  details: Experience[]
}