import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: '<YOUR-PROJECT-ID>',
  dataset: '<YOUR-DATASET-NAME>',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
