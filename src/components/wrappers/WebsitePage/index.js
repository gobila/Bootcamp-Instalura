import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Footer from '../../common/Footer';
import { Box } from '../../foundation/layout/Box';
import Menu from '../../common/Menu';
import Modal from '../../common/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../common/SEO';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
});

export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
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
        {menuProps.display && (
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
