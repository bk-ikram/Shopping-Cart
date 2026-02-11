import { useState, useEffect } from "react";
import "./Root.css";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiThemeLightDark } from "@mdi/js";
import { NavLink, Outlet } from "react-router-dom";
import NavElement from "../NavElement/NavElement.jsx";

function getPreviousTheme() {
  return localStorage.getItem("theme");
}

function getPreviousCart() {
  return localStorage.getItem("cart");
}

function getSystemTheme() {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
/*
function addToCart
*/
function Root() {
  const [theme, setTheme] = useState(() => {
    return getPreviousTheme() ?? getSystemTheme();
  });
  const [cart, setCart] = useState(getPreviousCart() ?? []);

  function addToCart(product, quantity = 1) {
    console.log("add to cart clicked");
    setCart((prev) => [...prev, { product, quantity }]);
  }

  function updateCartQuantity(productId, quantity) {
    setCart((prev) =>
      prev.map((p) => (p.productId === productId ? { ...p, quantity } : p))
    );
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((p) => p.productId !== productId));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav>
        <NavElement path="/" style={false}>
          <div className="logo-header">
            <h4>Chyne</h4>
          </div>
        </NavElement>
        <ul>
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <div className="icon-container">
                <Icon path={mdiThemeLightDark} size={1} />
              </div>
            </button>
          </li>
          <li>
            <NavElement path="/">Home</NavElement>
          </li>
          <li>
            <NavElement path="shop">Shop</NavElement>
          </li>
          <li>
            <NavElement path="cart">
              <div className="icon-container">
                <Icon path={mdiCartOutline} size={1} />
              </div>
            </NavElement>
          </li>
        </ul>
      </nav>
      <Outlet
        context={{ cart, addToCart, updateCartQuantity, removeFromCart }}
      />
    </>
  );
}

export default Root;
