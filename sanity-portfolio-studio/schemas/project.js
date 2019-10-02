import { FaBeer } from 'react-icons/fa';

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FaBeer,
  // types can be found in sanity docs
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
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
      name: 'image',
      title: 'Project Screenshot',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'dateCreated',
      title: 'Creation Date',
      type: 'datetime'
    }
  ],

  // this declares the preview info we want to see for each project
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      // image references the 'image' name above
      media: 'image',
      date: 'dateCreated'
    },
    prepare(selection) {
      const { author, date } = selection;
      return {
        ...selection,
        // subtitle: author && `${author} is a genius`,
        subtitle: date
          ? `Date Created: ${date.split('-')[1]}-${date.split('-')[0]}`
          : author && `${author} is a genius`
      };
    }
  }
};
