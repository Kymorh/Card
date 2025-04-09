import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { FrontCard, BackCard } from "./components";
import Form from "./components/form/form";
import emailjs from "emailjs-com";

function sendEmail() {
  emailjs.init("mYp9wxqE9TOMSMMIz");

  emailjs
    .send("service_nn2hwsf", "template_wu2k7mv", {
      // to_email: "gromyko.nna11@gmail.com",
      // subject: "еуі ьуі",
      // message: "hello world",
    })
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

function App() {
  const [number, setNumber] = useState(0);
  const [holder, setHolder] = useState(0);
  const [mm, setMm] = useState(0);
  const [yy, setYy] = useState(0);
  const [cvc, setCvc] = useState(0);
  return (
    <>
      <button onClick={sendEmail}>Send</button>
      <div className="content">
        <div className="card">
          <FrontCard number={number} holder={holder} mm={mm} yy={yy} />

          <BackCard cvc={cvc} />
        </div>
        <Form
          holder={holder}
          number={number}
          mm={mm}
          yy={yy}
          cvc={cvc}
          setHolder={setHolder}
          setNumber={setNumber}
          setMm={setMm}
          setYy={setYy}
          setCvc={setCvc}
        />
      </div>
    </>
  );
}

export default App;
