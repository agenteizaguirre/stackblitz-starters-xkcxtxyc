'use client';

import { NextStudio } from 'next-sanity/studio';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Aquí definimos qué campos tendrá tu formulario de carga
const schemaTypes = [
  {
    name: 'revista',
    title: 'Ediciones de la Revista',
    type: 'document',
    fields: [
      { name: 'titulo', title: 'Título de la Edición', type: 'string' },
      { name: 'numero', title: 'Número de Edición', type: 'number' },
      {
        name: 'portada',
        title: 'Imagen de Portada',
        type: 'image',
        options: { hotspot: true },
      },
      { name: 'archivoPdf', title: 'Archivo PDF', type: 'file' },
      { name: 'fechaPublicacion', title: 'Fecha de Publicación', type: 'date' },
    ],
  },
];

const config = defineConfig({
  projectId: '8kro1jc4', // El que copiaste en el paso anterior
  dataset: 'production',
  title: 'Panel de Control - Revista Digital',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default function AdminPage() {
  return <NextStudio config={config} />;
}
