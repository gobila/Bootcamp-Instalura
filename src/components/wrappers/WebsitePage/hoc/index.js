/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

// componte de HOC que vai definir a renderização de componets
// o GlobalProvider cuida das partes de estilos e temas
// o PageWrapper é a casca padrão do site
// PageComponet recebe o que deve ser renderizado dentro da casca
// por fim o next se encarrega do resto no _app.js

export default function websitePageHOC(
  PageComponet,
  // { pageWrapperProps }
  // pansando um valor padrão para que seja possivel receber cindo do componet
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      {/* props.pageWrapperProps recebe do componet */}
      {/* pageWrapperProps recebe diretamente do HOC */}
      <WebsitePageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
        messages={props.messages}
        userContext={props.userContext}
      >
        <PageComponet {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
