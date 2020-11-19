import React, { useEffect, useRef, useState } from "react";
import ConfirmProduit from "./ConfirmProduit";

function ConfirmPage({ wisky, status }) {
  const [check, setCheck] = useState(false);
  const [price, setPrice] = useState();

  useEffect(() => {
    let pd = wisky.reduce((acc, cur) => {
      console.log(acc + cur.price);
      return acc + cur.price;
    }, 0);
    setPrice(pd);
  }, [status]);

  return (
    <div className="confirm-container">
      <div className="confirm-list-product-info">
        <div className="confirm-list-product">
          <div className="confirm-list">
            {wisky.map((item) => {
              return (
                <ConfirmProduit
                  key={item.id}
                  productImage={item.img_url}
                  name={item.title}
                  price={item.price}
                />
              );
            })}
          </div>
          <div className="confirm-info-price">
            <div className="confirm-shipping-price">
              <p className="confirm-shipping">shipping</p>
              <p>a tobacco packet to the delivery man</p>
            </div>
            <div className="confirm-total-price">
              <p>Total</p>
              <p>$ {price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="confirm-container-info-shipping">
        <div className="separete-ligne"></div>
        <p className="confirm-message">
          please pay by cash when you are delivry{" "}
        </p>
        <form className="confirm-form">
          <div className="confirm-radio-form">
            <input
              type="radio"
              name="place"
              id="myPlace"
              defaultChecked
              onChange={() => {
                setCheck(false);
                console.log(check);
              }}
              className="confirm-radio"
            />
            <label htmlFor="myPlace" className="confirm-radio-text">
              shipping on my place
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="place"
              id="other"
              onChange={() => {
                setCheck(true);
                console.log(check);
              }}
              className="confirm-radio"
            />
            <label htmlFor="other" className="confirm-radio-text">
              select an other place
            </label>
          </div>
          {check && (
            <div>
              <div>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="addres"
                  className="confirm-input-text"
                />
              </div>
              <div>
                <input
                  type="text"
                  defaultValue=""
                  placeholder="*appart"
                  className="confirm-input-text"
                />
              </div>
            </div>
          )}
          <div>
            <button type="submit" className="confirm-button">
              confirm my adress
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmPage;