import { useState } from "react";

export const NotificationsTelegram = ({checkedButton}) => {
  const [checked, setChecked] = useState(checkedButton);

  return (
    <>
      <h3 className="mb-4 category">Уведомления по Телеграму</h3>
      <div className="container text-start p-0 mb-3">
        <div className="row">
          <div className="col-7 text-start">
            <p className="m-0">Новости</p>
          </div>
          <div className="col-1">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
