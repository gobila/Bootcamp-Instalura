import React, { useState } from 'react';
import { Button } from '../src/components/common/Button';
import Footer from '../src/components/common/Footer';
import Menu from '../src/components/common/Menu';
import Text from '../src/components/foundation/Text';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import Modal from '../src/components/common/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box
      flex={1}
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      {/* pegando o valor de isOpen e modal para execultar o modal */}
      {/* {isModalOpen && <Modal />} */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {(propsDoModal) => (// usando () para nao precisar passar o return()
          <Box
            backgroundColor="white"
            {...propsDoModal}
          >
            <div style={{ padding: '20px', width: '30vw' }}>
              Cadastro de perfil
            </div>
          </Box>
        )}
      </Modal>
      {/* Menu */}
      <Menu />
      {/* COntainer baseados em grid do conteudo principal */}
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '60px',
        }}
      >
        {/* conteudo principal */}
        <Grid.Row>
          {/* Imagem do Cage */}
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          {/* Imagem do Cage */}
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <Box
              display="flex"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <img
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                alt=""
                src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
              />
            </Box>
          </Grid.Col>

        </Grid.Row>
      </Grid.Container>
      <Footer />
    </Box>
  );
}
