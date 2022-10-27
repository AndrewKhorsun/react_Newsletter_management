import React from "react";
import { useState } from "react";
import { ModalDeteils } from "../Modals/ModalDeteils";

export const AgentSearch = ({
  topicsList,
  topicsName,
  topicsDescription = "",
  checkedButton,
}) => {
  const [checked, setChecked] = useState(checkedButton);
  const [topics, setTopics] = useState(topicsList);

  function onDelete(element) {
    setTopics(topics.filter((topic) => topic !== element));
  }

  return (
    <>
      <div className="container text-start p-0 mb-3">
        <div className="row">
          <div className="col-7 text-start">
            <p className="m-0">{topicsName}</p>
            <div className="row">
              <ul className="d-flex p-0 col-8">
                {topics.map((theme) => (
                  <div key={theme} className="topic me-3">
                    <li>{theme}</li>
                    <button
                      type="button"
                      className="btn-close btn-close-width"
                      aria-label="Close"
                      onClick={() => onDelete(theme)}
                    ></button>
                  </div>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn-link style"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Детали
              </button>
            </div>
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
          <div className="col-4">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {topicsDescription}
            </label>
          </div>
        </div>
      </div>
      <ModalDeteils/>
    </>
  );
};
