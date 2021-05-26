export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'ChristianKomodo/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '60ad9514ce90a505c668486a',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-3a33omke',
                  apiId: 'c6a18671-c146-4727-b042-b2c561b57691'
                },
                {
                  buildHookId: '60ad9514ce90a50094684991',
                  title: 'Website',
                  name: 'sanity-angular-website-web-k82xf5gp',
                  apiId: '71343a55-71dc-480c-9b7b-89833bb8862f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ChristianKomodo/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-k82xf5gp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
