import "./styles.css"

export function FrontCard({number, holder,mm,yy}) {
  return (
    <div className="first">
      <img className="fir" src="/images/bg-card-front.png" alt="" />
      <img className="avatar" src="/images/card-logo.svg" alt="" />
      <div className="number">{number}</div>
      <div className="name">{holder}</div>
      <div className="date">
        {mm}
        {mm ? "/" : ""}
        {yy}
      </div>
    </div>
  );
}


