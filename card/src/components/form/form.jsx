import { Button, TextField } from "@mui/material";
import "./style.css"
export default function Form({
  holder,
  number,
  mm,
  yy,
  cvc,
  setHolder,
  setNumber,
  setMm,
  setYy,
  setCvc,
}) {
  return (
    <form className="form">
      <TextField
        label="Cardholder name"
        variant="filled"
        color="secondary"
        focused
        value={holder}
        onChange={(e) => setHolder(e.target.value)}
      />

      <TextField
        label="Card number"
        variant="filled"
        color="secondary"
        focused
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div className="data">
        <div className="mmyy">
          {" "}
          <TextField
            label="MM"
            variant="filled"
            color="secondary"
            focused
            value={mm}
            onChange={(e) => setMm(e.target.value)}
          />
          <TextField
            label="YY"
            variant="filled"
            color="secondary"
            focused
            value={yy}
            onChange={(e) => setYy(e.target.value)}
          />
        </div>

        <TextField
          label="CVC"
          variant="filled"
          color="secondary"
          focused
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>

      <Button
        variant="contained"
        sx={{
          background:
            " linear-gradient(90deg, rgba(33,9,47,1) 0%, rgba(108,40,73,1) 48%, rgba(48,44,91,1) 100%)",
        }}
      >
        Confirm
      </Button>
    </form>
  );
}
