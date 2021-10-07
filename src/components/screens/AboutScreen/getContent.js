import { CMSGraphQlClient, gql } from '../../../infra/cms/CMSGraphQlClient';

export async function getContent() {
  const query = gql`
    query {
      pageSobre {
        pageTitle
        pageDescription
      }
    }
  `;
  const client = CMSGraphQlClient();

  const response = await client.query({ query });

  return response.data.messages;
}
