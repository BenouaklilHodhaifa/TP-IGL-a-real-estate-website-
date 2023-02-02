import { data } from "autoprefixer";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [date_Publication, setDate_Publication] = useState("");
  const [typeai, setTypeai] = useState("");
  const [category, setCategory] = useState("");
  const [surface, setSurface] = useState("");
  const [prix, setPrix] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [commune, setCommune] = useState("");
  const [adresse_ai, setAdresse_ai] = useState("");
  const [information_tel, setinformation_tel] = useState("");
  const [information_email, setInformation_email] = useState("");
  const [information_nom, setInformation_nom] = useState("");
  const [information_prenom, setInformation_prenom] = useState("");
  const [information_adresse, setInformation_adresse] = useState("");
  const [user, setUser] = useState("1");
  const [uploadedimages, setUploadedimages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(typeai);
    let file_datas = [];
    // for (let i = 0; i < uploadedimages.length; i++) {
    let form = new FormData();
    form.append("Body", uploadedimages[0]);
    // console.log(uploadedimages[0]);
    // file_datas.push(form);
    file_datas.push(form);
    console.log(file_datas);
    //   file_datas.push(form);
    // }

    const data = {
      titre: titre,
      description: description,
      date_Publication: date_Publication,
      type_ai: typeai,
      category: category,
      surface: surface,
      prix: prix,
      wilaya: wilaya,
      commune: commune,
      adresse_ai: adresse_ai,
      information_tel: information_tel.toString(),
      information_email: information_email,
      information_nom: information_nom,
      information_prenom: information_prenom,
      information_adresse: information_adresse,
      user: "1",
      uploaded_images: file_datas,
    };
    // {
    //   titre: titre,
    //   description: description,
    //   typeai: "Terrain_Agricole",
    //   category: "Location",
    //   surface: surface,
    //   prix: prix,
    //   wilaya: wilaya,
    //   commune: commune,
    //   adresse_ai: adresse_ai,
    //   information_tel: information_tel,
    //   information_email: information_email,
    //   information_nom: information_nom,
    //   information_prenom: information_prenom,
    //   information_adresse: information_adresse,
    //   user: "1",
    //   uploadedimages: [],
    // };

    try {
      const rr = await axios.post("http://127.0.0.1:8000/ai/", data);
      alert("islamkmak");
    } catch (err) {
      console.log(err);
    }
  };

  const onImageChange = (e) => {
    setUploadedimages([...e.target.files]);
  };

  return (
    <form className="p-5 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="information_nom"
        >
          Nom
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="information_nom"
          type={"text"}
          value={information_nom}
          onChange={(e) => setInformation_nom(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="information_prenom"
        >
          Prenom
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="information_prenom"
          type={"text"}
          value={information_prenom}
          onChange={(e) => setInformation_prenom(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="information_adresse"
        >
          Adresse
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="information_adresse"
          type={"text"}
          value={information_adresse}
          onChange={(e) => setInformation_adresse(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="titre">
          Title
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="titre"
          type={"text"}
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="description"
        >
          description
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="description"
          type={"text"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="date_publication"
        >
          Publication Date
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="date_publication"
          type={"date"}
          value={date_Publication}
          onChange={(e) => setDate_Publication(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="typeai"
        >
          Type
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="typeai"
          value={typeai}
          onChange={(e) => setTypeai(e.target.value)}
        >
          <option value="Terrain">Terrain</option>
          <option value="Terrain_Agricole">Terrain_Agricole</option>
          <option value="Appartement"> Appartement</option>
          <option value="Maison">Maison</option>
          <option value="Bungalow">Bungalow</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <select
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Location">Location</option>
          <option value="Vente">Vente</option>
          <option value="Echange">Echange</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="surface"
        >
          Area
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="surface"
          type="text"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
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
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="wilaya"
        >
          wilaya
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="wilaya"
          type="text"
          value={wilaya}
          onChange={(e) => setWilaya(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="commune"
        >
          Commune
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="commune"
          type="text"
          value={commune}
          onChange={(e) => setCommune(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="adresse_ai"
        >
          Adresse Ai
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="adresse_ai"
          type="text"
          value={adresse_ai}
          onChange={(e) => setAdresse_ai(e.target.value)}
        />
      </div>

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
          value={information_tel}
          onChange={(e) => setinformation_tel(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block font-medium text-gray-700 mb-2"
          htmlFor="information_email"
        >
          email
        </label>
        <input
          className="w-full border border-gray-400 p-2 rounded-lg"
          id="information_email"
          type={"email"}
          value={information_email}
          onChange={(e) => setInformation_email(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2" htmlFor="imag">
          Images
        </label>
        <input type="file" multiple accept="image/*" onChange={onImageChange} />
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
