import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/partner/list_menu");
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div>
      {menus.map((menu) => (
        <div key={menu.menuId}>
          <h1>{menu.name}</h1>
          <p>Carb: {menu.carb}</p>
          <p>Fat: {menu.fat}</p>
          <p>Protein: {menu.protein}</p>
          <p>{menu.picture.image}</p>
          <img
            src={`data:${menu.picture.fileType};base64,${menu.picture.image}`}
            alt="Menu"
          />
        </div>
      ))}
    </div>

    
  );
};

export default MenuList;
