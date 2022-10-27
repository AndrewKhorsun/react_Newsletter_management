export const ModalSave = ({showToast}) => {
  return (
    <div
      className="modal fade"
      id="ModalSave"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h1 className="text-center">Вы уверены?</h1>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              id="liveToastBtn"
              onClick={() => showToast("toast fade show")}
            >
              Да
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Нет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
