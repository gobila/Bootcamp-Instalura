import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* align-items: stretch; */
  background: rgba(0,0,0,0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: none;
  z-index:2;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
        opacity: 0;
        pointer-events: none;
      `;
  }}
`;
// tirando o scrrol
const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
function Modal({
  isOpen, onClose, children, newPost,
}) {
  if (newPost) {
    return (
      <ModalWrapper
        isOpen={isOpen}
        onClick={(event) => {
          const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
          const btnClose = event.target.closest('[data-modal-btn-close="true"]');
          if (!isSafeArea || btnClose) {
            onClose();
          }
        }}
      >
        {/* aplicando o LockScroll no modal */}
        {isOpen && <LockScroll />}
        {/* esse cildren passa para o filho essa data como prop */}
        {children({
          'data-modal-safe-area': 'true',
          'data-modal-btn-close': 'false',
        })}
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {/* aplicando o LockScroll no modal */}
      {isOpen && <LockScroll />}
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '200%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        {/* esse cildren passa para o filho essa data como prop */}
        {children({
          'data-modal-safe-area': 'true',
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
