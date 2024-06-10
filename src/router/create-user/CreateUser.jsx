import React from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addToUsers } from "../../context/usersSlice";

function CreateUser() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(event.target)
    let newUser = Object.fromEntries(formData.entries())
    dispatch(addToUsers(newUser));
    event.target.reset()
  };
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input type="text" name="name" placeholder="name" required />
        <input type="text" name="profession" required placeholder="profession" />
        <input  type="number" name="age" required placeholder="age" />
        <select name="" required id="">
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
