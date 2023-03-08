import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { Category } from "./pages/Category";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Single } from "./pages/Single";
import { SearchResult } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" index exact element={<Home />}></Route>
        <Route path="/category/:name" exact element={<Category />}></Route>
        <Route path="/gif/:id" exact element={<Single />}></Route>
        <Route path="search/gif/:name" exact element={<SearchResult />}></Route>
        <Route path="/favorites" exact element={<Favorites />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
