import React from 'react';
import './subscribeModal.css';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register to receive updates
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ResponsiveEmbed aspectRatio="16by9">
            <embed  height="100%" src="https://cdn.forms-content.sg-form.com/d8bcca8b-e631-11ea-b40f-021f7c9c8210" />
        </ResponsiveEmbed>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function SubscribeModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" className="subscribeBtn" onClick={() => setModalShow(true)}>
        Subscribe for daily updates via email
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default SubscribeModal;