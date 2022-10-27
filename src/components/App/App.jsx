import { useState } from "react";
import "../../components/App/App.css";
import { ModalSave } from "../Modals/ModalSave";
import { NotificationGeneral } from "../NotificationsGeneral/NotificationsGeneral";
import { NotificationsTelegram } from "../NotificationsTelegram/NotificationsTelegram";
import { NotificationsWeb } from "../NotificationsWeb/NotificationsWeb";

function App() {
  const [onDefault, setOnDefault] = useState(true);
  const [toast, setToast] = useState("toast fade hide");

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Управление рассылками</h1>
        <h3 className="subtitle">
          Здравствуйте, Андрей. Выберите, категории писем, от которых хотите
          отписаться. Но пожалуйста, исключите только те категории, которые
          действительно вас не интересуют. Мы обещаем слать только полезные
          письма где 😊
        </h3>
        <NotificationGeneral checkedButton={onDefault} />
        <NotificationsWeb checkedButton={onDefault} />
        <NotificationsTelegram checkedButton={onDefault} />
        <div className="d-flex justify-content-start mt-4">
          <button
            type="button "
            className="btn btn-outline-primary  me-3 "
            onClick={() => {
              setOnDefault(true);
              console.log("test", onDefault);
            }}
          >
            По умолчанию
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#ModalSave"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
      <ModalSave showToast={setToast}/>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className={toast}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Сохранение</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            Все сохранинеия прошли успешно!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
