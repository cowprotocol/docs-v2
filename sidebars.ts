import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tutorialSidebar: [
    {
      type: 'category',
      label: 'CoW Protocol (Batch Auctions)',
      link: {
        type: 'doc',
        id: 'cow-protocol/README',
      },
      items: [
        {
          type: 'category',
          label: 'Creating orders',
          link: {
            type: 'doc',
            id: 'cow-protocol/create/README',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/create',
            }
          ]
        },
        {
          type: 'category',
          label: 'Viewing orders',
          link: {
            type: 'doc',
            id: 'cow-protocol/view/README',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/view'
            }
          ]
        },
        {
          type: 'category',
          label: 'Messaging',
          link: {
            type: 'doc',
            id: 'cow-protocol/message/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/message',
            },
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/reference/apis'
            }
          ]
        },
        {
          type: 'category',
          label: 'Solving auctions',
          link: {
            type: 'doc',
            id: 'cow-protocol/solve/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/solve'
            }
          ]
        },
        {
          type: 'category',
          label: 'Arbitrating auctions',
          link: {
            type: 'doc',
            id: 'cow-protocol/arbitrate/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/arbitrate'
            }
          ]
        },
        {
          type: 'category',
          label: 'Settling auctions',
          link: {
            type: 'doc',
            id: 'cow-protocol/settle/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/settle'
            }
          ]
        },
        {
          type: 'category',
          label: 'Analysing auctions',
          link: {
            type: 'doc',
            id: 'cow-protocol/analyse/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/analyse'
            },
            {
              type: 'doc',
              id: 'cow-protocol/reference/apis/orderbook'
            }
          ]
        },
        {
          type: 'category',
          label: 'Technical reference',
          link: {
            type: 'doc',
            id: 'cow-protocol/reference/README'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'cow-protocol/reference'
            }
          ]
        }
      ]
    }
  ]
};

export default sidebars;