import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';

// sempre que um arquivo é nomeado entre cochetes []
// o next entende essa como uma pagina que o conteudo sera gerado de forma dinamica
// mesmo que a pagina venha ser estatica
// no roteamento é vai substituir o [nomeDoArquivo].js pelo nome do link dinamicamente

function FAQInternaScreen({ category, question }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;
// pasando o websitePageHOC direto sem o pageWrapperProps pois é
// passado jusnto com os props do componet mais abaixo na funcção getStaticProps
export default websitePageHOC(FAQInternaScreen);

// export default websitePageHOC(FAQInternaScreen, {
//   pageWrapperProps: {
//     seoProps: {
//       headTitle: 'Perguntas X',
//     },
//   },
// });

// getStaticProps gera paginas estaticas
export async function getStaticProps({ params }) {
  // buscando os dados na API
  const faqCategories = await fetch('http://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta.data;
    });
  // filtrando os dados da API e agrupando por categoria
  const dadosDaPage = faqCategories.reduce((valorAcumulado, faqCategory) => {
    const foundQuestion = faqCategory.questions.find((question) => {
      if (question.slug === params.id) {
        return true;
      }
      return false;
    });
    return {
      ...valorAcumulado,
      category: faqCategory,
      question: foundQuestion,
    };
  }, {});
  // retorno da funçãoa
  return {
    props: {
      category: dadosDaPage.category,
      question: dadosDaPage.question,
      // usando o pageWrapperProps para usar o question como title da page
      pageWrapperProps: {
        seoProps: {
          headTitle: dadosDaPage.question.title,
        },
      },
    },
  };
}

// o getStaticPaths é nescessario sempre que se quer criar paginas estaticas com conteudo dinamico
// é um array de objetos e o params recebe apenas um objeto com que precisa ser o do mesmo nome
// que o arquivo na aula foi usando [slug].js mas aqui para nao confundir com a API usarei [id].js
export async function getStaticPaths() {
  const faqCategories = await fetch('http://instalura-api.vercel.app/api/content/faq')
    .then(async (respostaDoServer) => {
      const resposta = await respostaDoServer.json();
      return resposta;
    });

  const paths = faqCategories.data.reduce((valorAcumulado, faqCategory) => {
    // console.log(faqCategory.questions);
    const questionsPath = faqCategory.questions.map((question) => {
      const questionSlug = question.slug;
      return { params: { id: questionSlug } };
      // nao esquecer que no params recebe sempre o mesmo no do arquivo
    });

    return [
      ...valorAcumulado,
      ...questionsPath,
    ];
  }, []);

  // console.log(paths);

  return {
    // path antigo
    // paths: [
    //   {
    //     params: {
    //       id: 'qual-e-a-raiz-quadrada-de-2',
    // o ID tem o mesmo nome do slug da api q sera a URL dinamica
    //     },
    //   }, // See the "paths" section below
    // ],
    paths, // novo vindo do retorno da função paths
    fallback: false,
  };
}
