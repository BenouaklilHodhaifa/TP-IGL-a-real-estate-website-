import React, { useState } from "react";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [formType, setFormType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ phoneNumber, price, area, formType });
  };

  return (
    <form className="p-5 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="phoneNumber"
          type={"number"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="area">
          Area
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="area"
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="formType"
        >
          Form Type
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="formType"
          value={formType}
          onChange={(e) => setFormType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="type1">Terrain</option>
          <option value="type2">Terrain Agricole</option>
          <option value="type2"> Appartement</option>
          <option value="type2">Maison</option>
          <option value="type2">Bungalow</option>
        </select>
      </div>
      <button
        className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
