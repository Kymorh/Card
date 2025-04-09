import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { FrontCard, BackCard} from "./components";
import Form from "./components/form/form";



function App() {
  const [number, setNumber] = useState(0);
  const [holder, setHolder] = useState(0);
  const [mm, setMm] = useState(0);
  const [yy, setYy] = useState(0);
  const [cvc, setCvc] = useState(0);
  return (
    <>
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
