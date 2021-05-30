// componenta prezentationala
import React from "react";
// se conecteaza componenta de react cu redux pentru modificarea state-ului
import { connect } from "react-redux";
// import actiunea pe care vreau sa o declansez din fisierul actions
import { addToCart } from "../redux/actions/cart";

function ProductItem(props) {
  const { name, price, currency, image, addToCartWithDispatch } = props;
  return (
    <div className="col-12 col-md-4 mb-2">
      <img src={image} alt="random" className="w-100" />
      <div className="text-center">
        <p className>{name}</p>
        <p>
          {currency} {price}
        </p>
        {/* componenta care va face modiifcarea state-ului este ProductItem pentru ca acolo se afa butonu */}
        {/* in ProductItem scriu codul care modifica state-ul din store */}
        <button
          className="btn btn-outline-dark"
          onClick={() => {
            addToCartWithDispatch({
              name,
              price,
              currency,
              image,
            });
          }}
        >
          Adauga in cos
        </button>
      </div>
    </div>
  );
}

// exporta ProductItem conectat la store
// mapStatetoProps-partea de abonare la store
// mapDispatchToProps-partea de modificare a storeu-lui

function mapDispatchToProps(dispatch) {
  return {
    // metoda care apeleaza actiunea si o trimite catre store
    addToCartWithDispatch: (product) => {
      // rezulttul actiunii in momentul in care este apelata
      const actionResult = addToCart(product);
      // vreau sa ajunga rezultatul actinii catre reducer cu dispatch
      // iar reducer-ul va modofica store-ul
      dispatch(actionResult);
    },
  };
}

// vreau sa modific store-ul prin adaugarea unui produs, deci pun prima metoda ca fiind null
export default connect(null, mapDispatchToProps)(ProductItem);
