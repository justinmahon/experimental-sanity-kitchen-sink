export default {
  widgets: [
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
                  buildHookId: '61798d1f383fb74a18923ece',
                  title: 'Sanity Studio',
                  name: 'experimental-sanity-kitchen-sink-studio',
                  apiId: 'cf07fb23-6f75-4ea1-ada7-4894afd90d02'
                },
                {
                  buildHookId: '61798d1ffa2469509fb1be47',
                  title: 'Blog Website',
                  name: 'experimental-sanity-kitchen-sink',
                  apiId: '41f30aaf-7429-42d5-8ab9-c1aaabfdb7b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmahon/experimental-sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://experimental-sanity-kitchen-sink.netlify.app', category: 'apps'}
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
