export default {
  name: 'project',
  title: 'Project',
  type: 'document',
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
    }
  ],

  // this declares the preview info we want to see for each project
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      // image references the 'image' name above
      media: 'image'
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author && `${author} is a genius`
      };
    }
  }
};
