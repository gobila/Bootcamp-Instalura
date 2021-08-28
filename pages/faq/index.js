import React from 'react';
import FAQScreen from '../../src/components/common/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  // const [faqCategories, setFaqCategories] = useState('');
  // useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((respostaDoServer) => respostaDoServer.json())
  //     .then((respostaConvertida) => respostaConvertida.data)
  //     .then((resposta) => {
  //       console.log('faqCategories', resposta);
  //       setFaqCategories(resposta);
  //     });
  // }, []);
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

// para criar paginas estaticas no NextJs
export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: { faqCategories },
  }; // pasando o que o componete precisa em formato de prop (statica)
}
