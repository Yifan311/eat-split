import "./index.css";
import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [selectedId, setSelectedId] = React.useState(null);
  function handleSelectId(id) {
    setSelectedId((preId) => (id === preId ? null : id));
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={initialFriends}
          onSelectId={handleSelectId}
          selectedId={selectedId}
        />
        <AddFriend />
      </div>

      <SplitBillForm />
    </div>
  );
}

function FriendList({ friends, onSelectId, selectedId }) {
  return (
    <form>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p
              className={
                friend.balance > 0 ? "red" : friend.balance < 0 ? "green" : ""
              }
            >
              {friend.balance === 0
                ? `You and ${friend.name} are even`
                : friend.balance > 0
                  ? `You owe ${friend.name} $${friend.balance}`
                  : `${friend.name} owes you $${friend.balance * -1}`}
            </p>
            <button
              type="button"
              className="button"
              onClick={() => onSelectId(friend.id)}
            >
              {friend.id === selectedId ? "Close" : "Select"}
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

      <button className="button">Add</button>
    </form>
  );
}

function SplitBillForm() {
  return <div></div>;
}
