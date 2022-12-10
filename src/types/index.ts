export type Experience = {
  name: string
  location: string
  description: string
  url: string
  image: string
  tags: string[]
  startDate: string
  endDate: string
}

export interface Experiences {
  title: string
  details: Experience[]
}