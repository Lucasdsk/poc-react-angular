import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ReactModal from "react-modal";
import { StyledModal } from "./Modal.styled";

ReactModal.setAppElement("#root");

const Modal = ({
  children,
  title,
  maxWidth = "50%",
  onSave,
  onClose,
  ...rest
}) => (
  <ReactModal
    ariaHideApp={false}
    style={{
      content: {
        maxWidth,
        padding: 0,
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }}
    onRequestClose={onClose}
    {...rest}
  >
    <StyledModal>
      <div className="modal-title">{title}</div>
      <div className="modal-content">{children}</div>
      <div className="modal-footer">
        <FormattedMessage id="modal.actions.save">
          {value => (
            <button className="btn-save" onClick={onSave}>
              {value}
            </button>
          )}
        </FormattedMessage>
        <FormattedMessage id="modal.actions.cancel">
          {value => (
            <button className="btn-cancel" onClick={onClose}>
              {value}
            </button>
          )}
        </FormattedMessage>
      </div>
    </StyledModal>
  </ReactModal>
);

Modal.propTypes = {
  title: PropTypes.string,
  maxWidth: PropTypes.string,
  onSave: PropTypes.func,
  onClose: PropTypes.func
}

export { Modal };
