export default [
  {
    name: 'Blog Title',
    desc: 'An AI Tool that generates blog titles depends on your blog content.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/2800/2800015.png',
    aiPrompt:
      'Give me 5 blog topics idea in bullet wise only based on given niche & outline, and give me result in rich text editor format.',
    slug: 'generate-blog-title',
    form: [
      {
        label: 'Enter your blog niche',
        field: 'input',
        name: 'niche',
        required: true,
      },
      {
        label: 'Enter your blog outline',
        field: 'textarea',
        name: 'outline',
      },
    ],
  },
];
