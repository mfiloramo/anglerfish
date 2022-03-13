const Market = props => (
  <div className="marketBox">
    <h4>Market ID: {props.currentMarket.id}</h4>
    <h4>Location: {props.currentMarket.location}</h4>
    <h4>Cards: {props.currentMarket.cards}</h4>
    <h4>% of total: {}</h4>
    <button id={props.currentMarket.id} onClick={props.addCard}>Add Card</button>
    <button id={props.currentMarket.id} onClick={props.deleteCard}>Delete Card</button>
  </div>
);

export default Market;