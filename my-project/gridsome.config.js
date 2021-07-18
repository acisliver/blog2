// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: "acisliver's blog",
  siteUrl: "https://acisliver.github.io",
  prefix: "/blog",
  plugins: [
    // Load all Blog Posts from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },

    // Netlify CMS Plugin

    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
  ],

  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:day/:slug',
        componenent: '~/templates/Post.vue',
      },
    ],
    Tag: [
      {
        path: '/tag/:slug',
        componenent: '~/templates/Tag.vue',
      },
    ],
  },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
};
