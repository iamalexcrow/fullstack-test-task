import { ReactElement, useContext } from "react";
import { Modal } from "react-bootstrap";
import { UIModalContext } from "./UIModal.context";

const UIModal: React.FunctionComponent = (): ReactElement => {
  const { title, body, show, dispatch } = useContext(UIModalContext);

  const handleClose = () => dispatch && dispatch({ type: "close" });

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
    </Modal>
  );
};

export default UIModal;
