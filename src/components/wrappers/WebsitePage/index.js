import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../common/Footer';
import { Box } from '../../foundation/layout/Box';
import Menu from '../../common/Menu';
import Modal from '../../common/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../common/SEO';

// adicionando o context api para o botao de cadastro da home ter
// acesso ao a função de abrir o modal
export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});
// o prop {menuProps} pega os props vinda das paginas para
// redenrizar ou nao o menu
export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    // provendo a context api para fazer o toggle de abri/fecha modal
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <SEO {...seoProps} />
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        {...pageBoxProps}
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
            <FormCadastro propsDoModal={propsDoModal} />
          )}
        </Modal>
        {/* menu props server para definir se o menu vai aparecer ou nao */}
        {menuProps.display && (
          // função sendo passada traves da prop para abrir o modal
          <Menu onCadastrarClick={() => setIsModalOpen(true)} />
        )}
        {children}
        <Footer />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
