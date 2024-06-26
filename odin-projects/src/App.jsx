import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <Router basename="/odinprojectfoundations">
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
