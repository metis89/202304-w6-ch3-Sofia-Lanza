import { CharacterCard } from "./characterCard";
import { useCharacters } from "../hook/use.character";

export function List() {
  const { characters } = useCharacters();

  return (
    <>
      <div className="app container">
        <ul className="characters-list row list-unstyled">
          {characters.map((item) => (
            <CharacterCard item={item} key={item.id}></CharacterCard>
          ))}
        </ul>
      </div>
    </>
  );
}
