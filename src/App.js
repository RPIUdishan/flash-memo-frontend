import AddCard from "./components/add-card-deck/add-card-deck-component";
import CardDeck from "./components/card-deck/card-deck";

function App() {
  return (
    <div className="App">
      <div className="mx-5">
        <AddCard />
        <CardDeck />
      </div>
    </div>
  );
}

export default App;
