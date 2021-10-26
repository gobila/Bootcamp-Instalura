import React, { useState } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Footer from '../../common/Footer';
import { Box } from '../../foundation/layout/Box';
import Menu, { MenuLoged } from '../../common/Menu';
import Modal from '../../common/Modal';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../common/SEO';
import { WebsitePageContext } from './context';
import { CardNewPost } from '../../common/Card';

export { WebsitePageContext } from './context';

// o prop {menuProps} pega os props vinda das paginas para
// redenrizar ou nao o menu
export default function WebsitePageWrapper({
  children, seoProps, pageBoxProps, menuProps, messages,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostModal, setNewPostModal] = useState(false);
  return (
    // provendo a context api para fazer o toggle de abri/fecha modal
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setIsModalOpen(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),

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

        <Modal
          isOpen={newPostModal}
          onClose={() => setNewPostModal(false)}
          newPost
        >
          {(propsDoModal) => (
            <CardNewPost
              propsDoModal={propsDoModal}
            />
          )}
        </Modal>
        {/* menu props server para definir se o menu vai aparecer ou nao */}
        {menuProps.display && menuProps.variant === 'default' && (
          // função sendo passada traves da prop para abrir o modal
          <Menu onCadastrarClick={() => setIsModalOpen(true)} />
        )}
        {menuProps.display && menuProps.variant === 'loged' && (
          // função sendo passada traves da prop para abrir o modal
          <MenuLoged onNewPostClick={() => setNewPostModal(true)} />
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
    variant: 'default',
  },
  messages: '',
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    variant: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
