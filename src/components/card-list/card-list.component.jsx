import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;

//-------------------------------------------------------------------------------------

//Props in classes
//we can name the prop whatever we want
//Notice in the recived OBJ the name will be the KEY
//Notice and what inside of the {} is the value!
//When ever PROPS IS DIFFERENT RENDER WILL BE CALLED AGAIN
//SO 1 TIME IN THE INITIAL STAGE AND EVERY TIME PROPS GET CHANGED

//So in a nutshell there is 2 cases when components gets re-rendered
//1. when setState gets called
//2. when props get changed
