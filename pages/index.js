import styled from 'styled-components'
import { Button } from '../src/components/common/Button'
import Footer from '../src/components/common/Footer'
import Menu from '../src/components/common/Menu'
import Text from '../src/components/foundation/Text'
import {Grid}  from '../src/components/foundation/layout/Grid'


export default function Home() {
  const divStyle={flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between'}
  return (
    <div style={divStyle}>
      <Menu/>
      {/* COntainer baseados em grid */}
      <Grid.Container>
        <Grid.Row>
          <Grid.Col  offset={{xs:0, md:1}} value={{ xs: 12, md: 5 }}>
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              margin="20px"
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
              margin="20px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text> 

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: '0px 10px 0px 10px',
              }}
              display="block"
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col  value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto', width:'100%'}}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      {/* <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
          margin="20px"
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
          margin="20px"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
        </Text> 

        <Button
          variant="primary.main"
          margin={{
            xs: 'auto',
            md: '0px 10px 0px 10px',
          }}
          display="block"
        >
          Cadastrar
        </Button>
      </div> */}

      <Footer/>
    </div>
  )
}
