import styled from 'styled-components'
import { Button } from '../src/components/common/Button'
import Footer from '../src/components/common/Footer'
import Menu from '../src/components/common/Menu'
import Text from '../src/components/foundation/Text'
// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  const divStyle={flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between'}
  return (
    <div style={divStyle}>
      <Menu/>
      <div>
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
      </div>

      <Footer/>
    </div>
  )
}
