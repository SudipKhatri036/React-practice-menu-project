import { useState } from "react";
import Menu from "./Menu";
import menus from "./data";
import Title from "./Title";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(menus.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menus);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menus);
      return;
    }
    const newData = menus.filter((item) => item.category === category);
    setMenuItems(newData);
  };

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
