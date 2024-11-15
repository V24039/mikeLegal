import { createContext, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import UserData from "./components/UserDetails/UsersData";

import "./App.css";

export const AppContext = createContext({
  name: "",
  email: "",
  setName: () => {},
  setEmail: () => {},
});

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AppContext.Provider value={{ name, email, setEmail, setName }}>
      <div className="app">
        <SearchBar />
        <UserData />
      </div>
    </AppContext.Provider>
  );
}

export default App;
