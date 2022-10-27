import { useState } from "react";
import { AgentSearch } from "../AgentSeacrh/AgentSearch";

export const NotificationsWeb = ({ checkedButton }) => {
  const [news, setNews] = useState(checkedButton);
  const [build, setBuild] = useState(checkedButton);

  const busines = ["Seo", "Продвижение", "Аналитика"];
  const numbers = ["Seo", "Аналитика"];
  const seo = ["Seo", "Продвижение", "Аналитика"];
  const exchange = ["Биржи ссылок: Не обнаружен"];

  return (
    <>
      <h3 className="mb-4 category">Уведомление по Сайтам</h3>
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
                checked={news}
                onChange={() => {
                  setNews(!news);
                }}
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="agent-search">Поисковые агенты</p>
      <AgentSearch
        checkedButton={checkedButton}
        topicsList={busines}
        topicsName="Бизнес"
        topicsDescription="Поисковый агент присылает 1 письмо в неделю и только при условии,
              что найдены новые площадки"
      />
      <AgentSearch
        topicsList={numbers}
        topicsName="123"
        checkedButton={checkedButton}
      />
      <AgentSearch
        topicsList={seo}
        topicsName="SEO"
        checkedButton={checkedButton}
      />
      <AgentSearch
        topicsList={exchange}
        topicsName="Бирж. ссылки"
        checkedButton={checkedButton}
      />

      <p className="agent-search">Рекламные компании</p>
      <div className="container text-center p-0">
        <div className="row">
          <div className="col-7 text-start d-flex gap-1 align-items-center">
            <p className="m-0">Строительство домов в Украине</p>
          </div>
          <div className="col-1">
            <div className="form-check form-switch">
              <input
                className="form-check-input mr-5"
                type="checkbox"
                checked={build}
                onChange={() => {
                  setBuild(!build);
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
    </>
  );
};
