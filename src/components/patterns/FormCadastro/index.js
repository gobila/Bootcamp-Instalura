import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Aproved from '../../../assets/animation/aproved.json';
import Denied from '../../../assets/animation/denied.json';
// eslint-disable-next-line import/no-named-as-default
import { Button } from '../../common/Button';
import TextField from '../../forms/TextFild';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormValid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      setIsFormSubmited(true);// setando true para o formulario ficar disponvel para envio

      const userDTO = {
        username: userInfo.usuario,
        name: userInfo.nome,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      }).then((responseServer) => {
        if (responseServer.ok) {
          return responseServer.json();
        }
        throw new Error('Não foi possivel cadastrar usuario');
      })
        .then((responseConverted) => {
          // eslint-disable-next-line no-console
          console.log(responseConverted);
          setSubmissionStatus(formStates.DONE);
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
          setSubmissionStatus(formStates.ERROR);
        });
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está
        rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <Box>
        <TextField
          placeholder="Usuario"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormValid}
        fullWidth
      >
        Cadastrar
      </Button>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: Aproved, loop: false, autoplay: true }}
          />
        </Box>
      )}
      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: Denied, loop: false, autoplay: true }}
          />
        </Box>
      )}

    </form>
  );
}

export default function FormCadastro({ propsDoModal }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 6, lg: 7 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
