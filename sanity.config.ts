import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'homepage',
  projectId: 'i4m7aez4',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema()],
  schema: {
    types: [
      {
        name: 'post',
        type: 'document',
        title: 'Post',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'date',
            title: 'Date',
            type: 'datetime'
          }
        ]
      }
    ]
  }
})
