import { useState } from "react";
import "./Banana.css";
const Banana = () => {
  const [account, setAccount] = useState(0);
  const [bookingamount, setBookingamount] = useState(0);

  //   --- Einzahlung
  const add = () => {
    setAccount(Number(account + bookingamount));
    setBookingamount("");
  };
  //   --- Auszahlung
  const substract = () => {
    bookingamount > account
      ? window.alert("minus")
      : setAccount(Number(account - bookingamount));

    setBookingamount("");
  };

  return (
    <div className="banana">
      <img src="../../../public/logo.png" alt="logo" />
      <img src="../../../public/girokonto02.png" alt="" />
      <div className="kontostand-wrapper">
        <img
          className="kontostand-img"
          src="../../../public/kontostand02.png"
          alt=""
        />
        <p>{account} €</p>
      </div>
      <input
        onChange={(event) => setBookingamount(Number(event.target.value))}
        type="number"
        placeholder="Betrag in €"
        value={bookingamount}
      />
      <div className="buttons">
        <button onClick={add}>Einzahlen</button>
        <button onClick={substract}>Auszahlen</button>
      </div>
    </div>
  );
};

export default Banana;
