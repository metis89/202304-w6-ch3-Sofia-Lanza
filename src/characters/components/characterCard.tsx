/* eslint-disable no-prototype-builtins */
import { Character } from "../types/character";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  const handleClick = () => {
    console.log(`Personaje ${item.name} ha morido`);
  };

  return (
    <li className="character col" key={item.id}>
      <div className="card character__card">
        <img
          src={item.image}
          width={250}
          alt={`${item.name} ${item.family}`}
          className={`character__picture card-img-top ${
            !item.isAlive ? "dead" : ""
          }`}
        />
        <div className="card-body">
          <h2 className="character__name card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="character__info">
            <ul className="list-unstyled">
              <li>Edad: {item.age}</li>
              <li>
                Estado:
                {item.isAlive ? (
                  <i className="fas fa-thumbs-up"></i>
                ) : (
                  <i className="fas fa-thumbs-down"></i>
                )}
              </li>
            </ul>
          </div>
          <div className="character__overlay">
            <ul className="list-unstyled">
              {item.hasOwnProperty("reignyears") ? (
                <li>Años de reinado: {item.regnalYears}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("weapon") ? (
                <li>Arma: {item.weapon}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("skill") ? (
                <li>Destreza: {item.skill}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("characterToAdvise") ? (
                <li>Asesora a: {item.characterToAdvise}</li>
              ) : (
                ""
              )}
              {item.hasOwnProperty("brownNose") ? (
                <li>Peloteo:{item.brownNose} </li>
              ) : (
                ""
              )}
            </ul>
            <div className="character__actions">
              <button className="character__action btn">habla</button>
              <button className="character__action btn" onClick={handleClick}>
                muere
              </button>
            </div>
          </div>
        </div>
        {item.hasOwnProperty("reignyears") ? <i className="emoji">👑</i> : ""}
        {item.hasOwnProperty("weapon") ? <i className="emoji">🗡️</i> : ""}
        {item.hasOwnProperty("characterToAdvise") &&
        !item.hasOwnProperty("brownNose") ? (
          <i className="emoji">🗿</i>
        ) : (
          ""
        )}
        {item.hasOwnProperty("brownNose") &&
        item.hasOwnProperty("characterToAdvise") ? (
          <i className="emoji">🛡️</i>
        ) : (
          ""
        )}
      </div>
    </li>
  );
}
