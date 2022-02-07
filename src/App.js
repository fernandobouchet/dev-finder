import "./App.css";
import Card from "./components/Card";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";

library.add(fas, faTwitter, faFontAwesome);

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
