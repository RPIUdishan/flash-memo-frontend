import AddCard from "./components/add-card-deck/add-card-deck-component";
import CardDeckContainer from "./components/card-deck/card-deck-container-component";

function App() {
  return (
    <div className="App">
      <div className="mx-5">
        <AddCard />
        <CardDeckContainer />
      </div>
    </div>
  );
}

export default App;
