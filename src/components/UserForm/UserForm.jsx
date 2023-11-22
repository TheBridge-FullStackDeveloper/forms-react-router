import React, { useState } from "react";

export const UserForm = () => {
  const initialValue = {
    name: "",
    email: "",
  };
  const [data, setData] = useState(initialValue);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("info form", data);
    console.log(`Soy ${data.name} y mi correo es ${data.email}`);
    setData(initialValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
