import React from "react";

const Modal = props => {
  return (
    <>
      <div className="modal-container">this is modal</div>
      <button className="button modal-button" onClick={props.onClick}>
        Modal
      </button>
    </>
  );
};

export default Modal;
