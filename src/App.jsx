import React, { useState } from "react";
import { initialFriends } from "./App";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? " Add friend" : "Close"}
        </Button>
      </div>
    </div>
  );
}

export default App;

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className='red'>
          You owe {friend.name} ₤{Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} owes you ₤{friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
      <label htmlFor='name'>👨🏿‍🤝‍👨🏿Friend name</label>
      <input type='text' />

      <label htmlFor='image'>🖼Image URL</label>
      <input type='text' />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with X</h2>

      <label htmlFor='image'> 💰 Bill value</label>
      <input type='text' />

      <label htmlFor='Your expense'> 👤 Your expense</label>
      <input type='text' />

      <label htmlFor='friend expense'>👨🏿‍🤝‍👨🏿 X's expense</label>
      <input type='text' disabled />

      <label>🤑 Who is paying the bill</label>

      <select>
        <option value='user'>You</option>
        <option value='friend'>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
