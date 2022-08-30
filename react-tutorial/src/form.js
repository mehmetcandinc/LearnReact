import React from "react";
import "@popperjs/core"
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="ad" className="form-label">
          Ad
        </label>
        <input
          type="text"
          className="form-control"
          id="ad"
          name="ad"
          placeholder="name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="soyad" className="form-label">
          Soyad
        </label>
        <input
          type="text"
          className="form-control"
          id="soyad"
          name="soyad"
          placeholder="surname"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tc kimlik" className="form-label">
          Tc Kimlik
        </label>
        <input
          type="text"
          className="form-control"
          id="tckimlik"
          name="tckimlik"
          maxLength="11"
          placeholder="tc kimlik"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dogum" className="form-label">
          Doğum Tarihi
        </label>
        <input type="text" className="form-control" id="dogum" name="dogum" />
      </div>

      <div className="col-md-6">
        <label className="form-label">İl</label>
        <select id="il" className="form-select form-control" name="il">
          <option defaultValue>İl seçiniz</option>
          <option value="34">İstanbul</option>
          <option value="09">Aydın</option>
          <option value="41">Kocaeli</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="ilce" className="form-label">
          İlçe
        </label>
        <select
          id="ilce"
          name="ilce"
          className="form-select form-control"
          aria-label="Default select example"
        ></select>
      </div>

      <div className="mb-3">
        <label htmlFor="adres" className="form-control">
          Adres
        </label>
        <textarea
        
          type="adres"
          className="form-control"
          id="adres"
          name="adres"
          placeholder="adres"
          >
          </textarea>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cinsiyet"
          id="flexRadioDefault1"
          value="kadin"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          {" "}
          Kadın{" "}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="cinsiyet"
          id="flexRadioDefault2"
          value="erkek"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          {" "}
          Erkek{" "}
        </label>
      </div>
      <p>İlgi alanları:</p>
      <label htmlFor="c1">
        <input type="checkbox" name="alan" value="Müzik" id="c1" />
        Müzik
      </label>
      <label htmlFor="c2">
        <input type="checkbox" name="alan" value="resim" id="c2" /> Resim
      </label>
      <label htmlFor="c3">
        <input type="checkbox" name="alan" value="Spor" id="c3" />
        Spor
      </label>
      <p></p>

      <input className="form-control" type="file" id="formFile" name="dosya" />
      <button type="submit">Gönder</button>
    </form>
  );
};

export default Form;
