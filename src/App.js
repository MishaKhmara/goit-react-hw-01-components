import React from "react";
import data from "./data/data";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistical/Statistical";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// import transactions from "./transactions.json";
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
const App = () => {
  const { user, friends, statisticalData, transactions } = data;
  return (
    <div>
      <>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
};

export default App;
