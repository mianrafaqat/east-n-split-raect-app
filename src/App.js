import { useState } from "react";

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

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  const handleShowAddFriends = () => {
    setShowAddFriend((show) => !show);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFreind />}
        <Button onClick={handleShowAddFriends}>
          {showAddFriend ? "Close" : "AddFriend"}
        </Button>
      </div>
      <FromSplitBill />
    </div>
  );
}
const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

const FriendList = () => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          )}

          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owes you {Math.abs(friend.balance)}$
            </p>
          )}

          {friend.balance === 0 && <p>You and {friend.name} are even</p>}

          <Button>Select</Button>
        </li>
      ))}
    </ul>
  );
};

const FormAddFreind = () => {
  return (
    <form className="form-add-friend">
      <label>👯‍♀️ Friend name</label>
      <input type="text" />

      <label>🎆 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

const FromSplitBill = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🕴️Your expense</label>
      <input type="text" />

      <label>👯‍♀️ X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is patying the bill ?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
};

export default App;
