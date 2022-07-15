import React from "react";

function Armoury(props) {
  const { products } = props;
  return (
    <div className="container-home">
      <h1 className="text-center"> ARMOURY </h1>

      <div className="container-products mt-4 d-flex mb-5">
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-4 mt-5" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top w-100"
                />
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <div className="d-flex justify-content-between">
                    <p className="card-text">{product.desc}</p>
                    <p className="card-text mx-2 text-success">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Armoury;
