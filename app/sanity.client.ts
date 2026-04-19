import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "TU8kro1jc4", // Cámbialo por tu ID real
  dataset: "production",
  apiVersion: "2024-04-16",
  useCdn: false, 
})