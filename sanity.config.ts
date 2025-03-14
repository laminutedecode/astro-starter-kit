import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'project-name',
  title: 'Project Name',
  projectId: '<YOUR-PROJECT-ID>',
  dataset: '<YOUR-DATASET-NAME>',
  plugins: [structureTool()],
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})