import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "8kro1jc4", 
  dataset: "production",
  apiVersion: "2024-04-16",
  useCdn: false, 
  // Añadimos esto para evitar problemas de entorno
  perspective: 'published',
})