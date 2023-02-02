import React, { useState } from "react";

const Recherche = ({ types }) => {
  const [commune, setCommune] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [date_debut, setDate_debut] = useState("");
  const [type, setType] = useState("");
  const [mot_cle, setMot_cle] = useState("");

  return (
    <form>
      <div id="commune">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="commune"
        >
          Commune
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="commune"
          type={"text"}
          required
          value={commune}
          onChange={(e) => setCommune(e.target.value)}
        />
      </div>

      <div id="wilaya">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="wilaya"
        >
          Wilaya
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="wilaya"
          type={"text"}
          required
          value={wilaya}
          onChange={(e) => setWilaya(e.target.value)}
        />
      </div>

      <div id="date_debut">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="date_debut"
        >
          Date_debut
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="date_debut"
          type={"date"}
          required
          value={date_debut}
          onChange={(e) => setDate_debut(e.target.value)}
        />
      </div>

      <div id="type">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="type">
          Type
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="type"
          type={"text"}
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>

      <div id="mot_cle">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="mot_cle"
        >
          Mot_cle
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="mot_cle"
          type={"text"}
          required
          value={mot_cle}
          onChange={(e) => setMot_cle(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Recherche;
