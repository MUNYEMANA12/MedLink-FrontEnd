export type OrganisationType = {
  id: string
  name: string
  description: string
}

export type Organisation = {
  id: string
  name: string
  address: string
  phone: string
  email: string
  type_id: string | null
}

export type User = {
  id: string
  full_name: string
  email: string
  phone: string
  gender: string
  is_active: boolean
  organisation_id: string | null
}

export const organisationTypes: OrganisationType[] = [
  {
    id: "f610ad0d-41ff-4e5e-b6b2-e0e7c6d55bd4",
    name: "Hospital",
    description:
      "Comprehensive inpatient facilities providing surgical and emergency care across Rwanda.",
  },
  {
    id: "ba556c90-9c21-4c14-8f55-51d4e93654d4",
    name: "Health Centre",
    description:
      "Community health centres offering primary care and maternal services.",
  },
  {
    id: "3c4dc1e8-13b0-46c9-a29f-36f2f4a63cba",
    name: "Diagnostics",
    description:
      "Laboratories and imaging centres supporting specialised diagnostics.",
  },
]

export const organisations: Organisation[] = [
  {
    id: "0e50ac2f-4d45-4956-8ef9-2c2b5f0e27e0",
    name: "Kigali University Teaching Hospital",
    address: "KN 3 Rd, Nyarugenge, Kigali",
    phone: "+250-788-123-456",
    email: "info@kuth.rw",
    type_id: "f610ad0d-41ff-4e5e-b6b2-e0e7c6d55bd4",
  },
  {
    id: "9f2f0671-d8f8-4397-9b7d-4aa4cbe39456",
    name: "Remera Health Centre",
    address: "KG 17 Ave, Gasabo, Kigali",
    phone: "+250-738-210-987",
    email: "contact@remerahealth.rw",
    type_id: "ba556c90-9c21-4c14-8f55-51d4e93654d4",
  },
  {
    id: "4ef97bee-0b5d-4b23-9a20-71abd7ed52a2",
    name: "Vision Diagnostics Lab",
    address: "RN3, Huye District, Southern Province",
    phone: "+250-728-554-332",
    email: "support@visiondiag.rw",
    type_id: "3c4dc1e8-13b0-46c9-a29f-36f2f4a63cba",
  },
]

export const users: User[] = [
  {
    id: "5f8f9d73-55f1-4b03-a4d1-7998cdb5128e",
    full_name: "Danny Niyonzima",
    email: "danny.niyonzima@gmail.com",
    phone: "+250-788-210-654",
    gender: "male",
    is_active: true,
    organisation_id: "0e50ac2f-4d45-4956-8ef9-2c2b5f0e27e0",
  },
  {
    id: "920e95a2-8cf4-4bd0-bf98-6f2a1294fa60",
    full_name: "Gloria Uwase",
    email: "gloria.uwase@gmail.com",
    phone: "+250-781-445-230",
    gender: "female",
    is_active: true,
    organisation_id: "9f2f0671-d8f8-4397-9b7d-4aa4cbe39456",
  },
  {
    id: "c208cfe9-3cfb-4aed-9e37-e132f47ddb40",
    full_name: "Gady Hakizimana",
    email: "gady.hakizimana@gmail.com",
    phone: "+250-789-665-421",
    gender: "male",
    is_active: false,
    organisation_id: "4ef97bee-0b5d-4b23-9a20-71abd7ed52a2",
  },
  {
    id: "f7b1b11c-65c5-4afb-aa3c-b6864f315f25",
    full_name: "Rebecca Mukamana",
    email: "rebecca.mukamana@gmail.com",
    phone: "+250-780-992-118",
    gender: "female",
    is_active: true,
    organisation_id: "0e50ac2f-4d45-4956-8ef9-2c2b5f0e27e0",
  },
]

