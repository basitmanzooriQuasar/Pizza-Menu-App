import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// //Button component
// function Button() {
//   return (
//     <div>
//       <button type="submit">Add To Cart</button>
//     </div>
//   );
// }

function Header() {
  //   const style = { color: "red", fontSize: "70px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const pizzasLen = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasLen > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza
              pizzaObj={pizza}
              key={pizza.name}
              // name={pizza.name}
              // ingredients={pizza.ingredients}
              // photoName={pizza.photoName}
              // price={pizza.price}
            />
          ))}
        </ul>
      ) : (
        <p>
          We do not have any Pizza's available right now. Please come back
          later!
        </p>
      )}
    </main>
  );
}

//new component
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span className="sold-out">SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are open untill {closeHour}:00 . Come visit us or order after
            {openHour}:00
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

//project comp

// function Project() {
//   return (
//     <div className="challenge">
//       <img
//         src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//         width="220px"
//         height="300px"
//       ></img>
//       <h1>Basit Manzoor</h1>
//       <p>
//         lorem ipsum dolor sit am liber tempor inc habitant dolore magna aliqu
//         sapient et accus tempus.
//       </p>
//       <div className="skills">
//         <Skill skills="HTML+CSS💪" color="red" />
//         <Skill skills="JavaScript👇" color="orange" />
//         <Skill skills="Web Design🤟" color="green" />
//         <Skill skills="Git and GitHub💪" color="red" />
//         <Skill skills="React💪" color="yellow" />
//       </div>
//     </div>
//   );
// }

// function Skill(props) {
//   return <h6 style={{ backgroundColor: props.color }}>{props.skills}</h6>;
// }
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
