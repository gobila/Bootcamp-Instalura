import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQlClient() {
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const DataCMSURL = 'https://graphql.datocms.com/';
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
