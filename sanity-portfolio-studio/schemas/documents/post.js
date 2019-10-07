import { FaPencilAlt } from 'react-icons/fa';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FaPencilAlt,
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
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}]
    // },
    {
      name: 'published',
      title: 'Published',
      type: 'datetime',
      options: {
        dateFormat: 'MMM D, YYYY'
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText'
    },
    {
      name: 'code',
      title: 'Code Block',
      type: 'code',
      options: {
        language: 'js'
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'image'
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      });
    }
  }
};
