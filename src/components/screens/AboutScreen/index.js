import React from 'react';
import { PropTypes } from 'prop-types';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

export default function AboutScreen({ messages }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
    >
      <Grid.Container>
        <Grid.Row
          marginTop={{ xs: '32px', md: '120px' }}
          flex="1"
        >
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 6 }}
            offset={{ md: 2 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
            >
              {messages.pageSobre.pageTitle}
            </Text>

            <Box
            // Por esta usando Estilo de HTML no DATO,
            // é preciso informar ao React que estamos inserindo um html
            // caso contrario é mostrado codigo na tela.
            // o mesmo sempre tenta passar texto puro e no DATO fornece como html
              dangerouslySetInnerHTML={{
                __html: messages.pageSobre.pageDescription,
              }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

AboutScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};
