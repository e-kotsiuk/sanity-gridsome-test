export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61027762f74fd99f3f365411',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-test-studio-z52zw12r',
                  apiId: 'ad7bfeaa-5b6d-4ca1-8e2f-2db34982ed95'
                },
                {
                  buildHookId: '610277631823c2967c9c6a55',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-test-web-cqy6vzmi',
                  apiId: '4735164f-1cf3-4987-9467-8e581685e959'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/e-kotsiuk/sanity-gridsome-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-test-web-cqy6vzmi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
