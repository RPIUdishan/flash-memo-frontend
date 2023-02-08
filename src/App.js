import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlashCardsPage from "./pages/flash-cards/flash-cards";
import HomePage from "./pages/home/home-page";
import SignIn from "./pages/sign-in/sign-in-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={  <HomePage />} />
          <Route exact path="/sign-in" element={ <SignIn /> }/>
          <Route exact path="/flash-cards/:id" element={ <FlashCardsPage/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
