import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { Category } from "./pages/Category";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Single } from "./pages/Single";
import { SearchResult } from "./pages/Search";
import { Favorites } from "./pages/Favorites";

function App() {
  window.scroll({
    top: 1000, // Captura a distancia do topo onde deseja ser rolado
    left: 0, // Faz o mesmo do top mas em um ambito horizontal
    behavior: "smooth", // Aqui eh onde vem toda a magica, ele suporta duas opcoes, o `smooth` e o `normal`
  });
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/category/:name" exact element={<Category />}></Route>
        <Route path="/gif/:id" element={<Single />}></Route>
        <Route path="search/gif/:name" exact element={<SearchResult />}></Route>
        <Route path="/favorites" exact element={<Favorites />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
