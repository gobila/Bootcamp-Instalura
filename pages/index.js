import styled from 'styled-components'
import Footer from '../src/components/common/Footer'
import Menu from '../src/components/common/Menu'

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
      <Footer/>
    </div>
  )
}
