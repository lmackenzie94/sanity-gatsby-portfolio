import S from '@sanity/desk-tool/structure-builder'; // this is preferred but...
// could also do: import { list, listItem } from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .child(
          S.editor()
            .id('config')
            .schemaType('config')
            .documentId('global-config')
        )
    ]);

// Each segment of the structure can return a plain structure definition (as above), a promise, or an observable. This will allow you to do things like providing different navigation and workflows for different users or change content based on external APIs, in real time.

// to use, add the below to the parts array in sanity.json:
// {
//     "name": "part:@sanity/desk-tool/structure",
//     "path": "./deskStructure.js"
// }
