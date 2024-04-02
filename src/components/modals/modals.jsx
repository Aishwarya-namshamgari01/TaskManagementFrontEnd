import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./modalSlice";
import createTaskModal from "./createTaskModal";
import createEditCategoryModal from "./createEditCategoryModal";

const Modals = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.open);
  const modalProps = useSelector((state) => state.modal.modalProps);
  const close = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);
  const modals = {
    createTaskModal: createTaskModal,
    createEditCategoryModal: createEditCategoryModal
  };
  const ModalComponent = useMemo(() => modals[open], [open]);

  return (
    <>
      {ModalComponent && (
        <ModalComponent
          open={true}
          handleClose={() => {
            close();
          }}
          {...modalProps}
        />
      )}
    </>
  );
};

export default Modals;
