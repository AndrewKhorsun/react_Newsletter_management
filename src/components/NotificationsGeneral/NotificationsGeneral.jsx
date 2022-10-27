import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import "../../components/NotificationsGeneral/NotificationsGeneral.css";
import { useState } from "react";

export const NotificationGeneral = ({ checkedButton }) => {
  const [welcome, setWelcome] = useState(checkedButton);
  const [webinars, setWebinars] = useState(checkedButton);
  const [privateMessage, setPrivateMessage] = useState(checkedButton);

  console.log("ghjdthrf", checkedButton);

  const renderTooltip = (props) => (
    <Tooltip {...props}>Письма об обновлениях и улучшениях платформы</Tooltip>
  );

  return (
    <div className="mb-5">
      <h3 className="mb-4 category">Общие уведомления</h3>
      <div className="container text-start p-0 mb-3">
        <div className="row">
          <div className="col-7 text-start">
            <p className="m-0">Приветственная серия</p>
          </div>
          <div className="col-1">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={welcome}
                onChange={() => {
                  setWelcome(!welcome);
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              4 полезных и емких письма в течение месяца
            </label>
          </div>
        </div>
      </div>
      <div className="container text-start p-0 mb-3">
        <div className="row">
          <div className="col-7 text-start">
            <p className="m-0">Образовательные вебинары</p>
          </div>
          <div className="col-1">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={webinars}
                onChange={() => {
                  setWebinars(!webinars);
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать
              2 письма с напоминанием о предстоящем вебинаре
            </label>
          </div>
        </div>
      </div>
      <div className="container text-center p-0">
        <div className="row">
          <div className="col-7 text-start d-flex gap-1 align-items-center">
            <p className="m-0">Личные сообщения</p>
            <OverlayTrigger placement="right" overlay={renderTooltip}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-info-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </OverlayTrigger>
          </div>
          <div className="col-1">
            <div className="form-check form-switch">
              <input
                className="form-check-input mr-5"
                type="checkbox"
                checked={privateMessage}
                onChange={() => {
                  setPrivateMessage(!privateMessage);
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
          <div className="col-4">
            <select className="form-select" aria-label="Default select example">
              <option spellCheck>Частота отправки</option>
              <option value="1">Мгновенно</option>
              <option value="2">1 раз в день</option>
              <option value="3">Отключить</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
