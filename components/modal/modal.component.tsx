import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({show, onClose, children, title}) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <StyledModalClose onClick={handleCloseClick}>x</StyledModalClose>
                </StyledModalHeader>
                {title && <StyledModalTitle>{title}</StyledModalTitle>}
                <StyledModalBody>{children}</StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalBody = styled.div`
`;

const StyledModalHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const StyledModalClose = styled.button`
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 18px;
    cursor: pointer;
    line-height: 36px;
    text-transform: uppercase;
    z-index: 100;
`

const StyledModal = styled.div`
  background: white;
  width: auto;
  height: auto;
  border-radius: 15px;
  padding: 0;
`;

const StyledModalTitle = styled.div`
    
`;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;