import "./App.css";
import { CargoProvider } from "./context/CargoContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <CargoProvider>
        <AppRouter />
      </CargoProvider>
    </div>
  );
}

export default App;
