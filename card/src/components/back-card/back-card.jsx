import "./style.css"

export function BackCard({cvc}) {
  return (
    <div className="second">
      <img className="sec" src="/images/bg-card-back.png" alt="" />
      <div className="CVC"> {cvc} </div>
    </div>


  );
}


