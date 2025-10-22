export default {
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Service Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Service Description',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Service Icon',
      options: { hotspot: true },
    },
  ],
};
