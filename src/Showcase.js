import bulbasaur from "./images/bulbasaur.jpg";
import "./Showcase.css";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };

  return (
    <div>
      <h1>{favPokemon} Showcase Component</h1>
      <img className="poke-image" src={bulbasaur} />
      <h2>
        Bulbasaur's type is{" "}
        <span
          style={{
            background: "green"
          }}
        >
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is <span>{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}
export default Showcase;
