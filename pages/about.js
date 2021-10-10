import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';

// trazendo a possibilidade de ativar o context.preview na chamada do sobre
export async function getStaticProps({ preview = false }) {
  // getContend recebe o preview para passar como parametro na chamada do Dato
  const messages = await getContent({ preview });
  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
