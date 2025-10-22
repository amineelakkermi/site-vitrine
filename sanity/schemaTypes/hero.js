export default {
  name: 'hero',
  type: 'document',
  title: 'Hero Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Main Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
    },
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'buttonLink',
      type: 'url',
      title: 'Button Link',
    },
    {
      name: 'buttonText2',
      type: 'string',
      title: 'Button Text2',
    },
    {
      name: 'buttonLink2',
      type: 'url',
      title: 'Button Link2',
    },
  ],
};
