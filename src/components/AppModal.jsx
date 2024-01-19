import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function AppModal({ modal, toggle, handleStudentDelete, stId }) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete?</ModalHeader>
        <ModalBody>Are you sure that you want delete this user?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              handleStudentDelete(stId);
              toggle();
            }}
          >
            Delete
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AppModal;
