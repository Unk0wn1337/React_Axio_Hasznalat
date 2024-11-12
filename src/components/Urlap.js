import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Urlap() {
  const { postAdat, kategoriaLista } = useContext(ApiContext);

  const [adat, setAdat] = useState({
    title: "Ez a termek neve",
    price: "1000",
    category: "...",
    description: "...",
    image: "...",
  });

  function valtoztatasKezeles(event) {
    /*Az inputba beírt adatokkal kell frissíteni az objektumot*/
    const sObj = { ...adat };
    sObj[event.target.id] = event.target.value;
    setAdat({ ...sObj });
  }

  function elkuld(event) {
    // leszedjük az alapértelmezett eseménykezelőt
    event.preventDefault();
    postAdat("/products", adat);

    // összegyűjtűk az adatokat az űrlap mezőiből és összeállitnuk egy objektumot
    // Ezt az objektumot küldjük el a post kéréssel a végpontra
    console.log("elküld", adat);
    // itt kellene validalni az adatokat, ha formailag helyes
  }

  return (
    <div>
      <form onSubmit={elkuld}>
        <div class="mb-3">
          <label htmlFor="title" className="form-label">
            Termek neve
            <input
              type="text"
              value={adat.title}
              onChange={valtoztatasKezeles}
              class="form-control"
              id="title"
              aria-describedby="titleHelp"
              placeholder="Termek neve"
            />
          </label>
        </div>
        <div class="mb-3">
          <label htmlFor="price" className="form-label">
            Termek ára
          </label>
          <input
            type="number"
            min={1000}
            max={99999}
            value={adat.price}
            onChange={valtoztatasKezeles}
            class="form-control"
            id="price"
            aria-describedby="priceHelp"
            placeholder="Ar"
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">
            leírás
          </label>
          <textarea
            class="form-control"
            id="description"
            onChange={valtoztatasKezeles}
            rows="3"
          ></textarea>
        </div>
        <select class="form-select" aria-label="Default select example">
          {/* {
            kategoriaLista.map((kategoria) => {
                befejezni a kategóriát


          } */}
        </select>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Urlap;
