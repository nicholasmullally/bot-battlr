import React from "react";

function BotCollection() {
  const displayBotCards = props.BotCollection.map(bot => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
