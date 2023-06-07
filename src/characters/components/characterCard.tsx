import { Character } from "../types/character";

type PropsType = {
  item: Character;
};

export function CharacterCard({ item }: PropsType) {
  function handleClick() {
    console.log("cum");
  }

  return (
    <li className="character col" key={item.id}>
      <div className="card charactercard">
        <img
          src={item.image}
          alt={item.name}
          className={`characterpicture card-img-top ${
            !item.isAlive ? "dead" : ""
          }`}
        />
        <div className="card-body">
          <h2 className="charactername card-title h4">
            {item.name} {item.family}
          </h2>
          <div className="characterinfo">
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
          <div className="characteroverlay">
            <ul className="list-unstyled">
              $
              {item.regnalYears ? (
                <li>Años de reinado: ${item.regnalYears} </li>
              ) : (
                ""
              )}
              ${item.regnalYears ? <li>Arma: ${item.weapon} </li> : ""}$
              {item.skill ? <li>Destreza: ${item.skill} </li> : ""}$
              {item.characterToAdvise ? (
                <li>Asesora a: ${item.characterToAdvise} </li>
              ) : (
                ""
              )}
              ${item.brownNose ? <li>Peloteo: ${item.brownNose} </li> : ""}
            </ul>
            <div className="characteractions">
              <button className="characteraction btn">habla</button>
              <button className="characteraction btn" onClick={handleClick}>
                muere
              </button>
            </div>
          </div>
        </div>
        <i className="emoji">👑</i>
        <i className="emoji">🗡️</i>
        <i className="emoji">🗿</i>
        <i className="emoji">🛡️</i>
      </div>
    </li>
  );
}
