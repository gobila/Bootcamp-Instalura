import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;
// prop preview que por padrão/defalt é false
export function CMSGraphQlClient({ preview } = { preview: false }) {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  // se preview for true recebe a url de preview caso contrario recebe a de produção
  const DataCMSURL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/';
  const client = new GraphQLClient(DataCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query, variables }) {
      const messages = await client.request(query, variables);

      return {
        data: {
          messages,
        },
      };
    },
  };
}
