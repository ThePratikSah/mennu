import khandaLogo from "./assets/khanda.png";
import searchLogo from "./assets/search.svg";
import coffeeLogo from "./assets/coffee.svg";
import starLogo from "./assets/star.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isVegSelected, setIsVegSelected] = useState(false);
  const [isNonVegSelected, setIsNonVegSelected] = useState(false);
  const date = new Date();
  return (
    <div className="p-4">
      {/* Logo */}
      <div className="has-text-centered">
        <img src={khandaLogo} alt="Khanda" style={{ width: "200px" }} />
      </div>
      {/* Details Card */}
      <div className="card">
        <div className="card-image"></div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4 mb-2">ಅಮೃತಸರಿ ಕುಲ್ಚಾ ಲ್ಯಾಂಡ್</p>
              <p className="subtitle is-6 has-text-weight-bold">
                Amritsari Kulcha Land
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img src={starLogo} alt="Star" />
                <p className="subtitle">4.2 (1,228) | ₹₹</p>
              </div>
            </div>
          </div>

          <div className="content">
            <p>
              Vinayaka Nagar, J P Nagar Phase 5, 560078 Bengaluru, Karnataka
              560078
            </p>
            <time dateTime="2016-1-1">{date?.toLocaleDateString()}</time>
          </div>
        </div>
      </div>
      {/* Search and Filter */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          overflow: "hidden",
          backgroundColor: "white",
        }}
        className="card"
      >
        <div className="card-content">
          <div className="control has-icons-right">
            <input
              style={{ borderWidth: "2px", borderColor: "#e1e1e1" }}
              className="input is-medium"
              type="text"
              placeholder="Search in kulcha land"
            />
            <span className="icon is-right">
              <img src={searchLogo} alt="Search" />
            </span>
          </div>
          <div className="mb-4"></div>
          <button
            onClick={() => setIsVegSelected(!isVegSelected)}
            className={`button is-rounded is-success mr-2 ${
              isVegSelected ? "" : "is-outlined"
            }`}
          >
            Pure Veg
          </button>
          <button
            onClick={() => setIsNonVegSelected(!isNonVegSelected)}
            className={`button is-rounded is-danger ${
              isNonVegSelected ? "" : "is-outlined"
            }`}
          >
            Non Veg
          </button>
        </div>
      </div>
      {/* List */}
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Amritsari Kulchas</p>
        </header>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/746/53bfc7d3dd609fe5996f0e2bd1a25746.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Aloo Kulcha</p>
              <p className="subtitle is-6">₹179</p>
              <div className="content">
                Good For One | 1 Aloo Kulcha + Chole + Chutney
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/3e6/340adc8c32aa4eec54a93fbc921543e6.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Gobi Kulcha Combo</p>
              <p className="subtitle is-6">₹179</p>
              <div className="content">
                1 Kulcha + Chhole + Onion Imli Chutney
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/716/4badf360f1b816adba5ee917ccc12716.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Mixed Kulcha Combo</p>
              <p className="subtitle is-6">₹179</p>
              <div className="content">
                Kulcha Stuffed With Aloo And Paneer.1 Kulcha + Chhole + Onion
                Imli Chutney
              </div>
            </div>
          </div>
        </div>
        <header className="card-header">
          <p className="card-header-title">Veg Starters</p>
        </header>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/2c1/f7855cb5a9141fa368aa78e9b277e2c1.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Aachari Paneer Tikka</p>
              <p className="subtitle is-6">₹289</p>
              <div className="content">
                7 Pcs Cubes Of Paneer, Onion And Bell Peppers Are Marinated With
                Spices, Yogurt, Pickle Masala And Then Roasted In The Clay Oven.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/763/a424192ae438377aebebf1672c186763.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Paneer Malai Tikka</p>
              <p className="subtitle is-6">₹279</p>
              <div className="content">
                7 Pcs Cubes Of Paneer, Onion And Bell Peppers Are Marinated With
                Spices And Yogurt Cashew Paste And Then Roasted In The Clay Oven
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img
                  style={{ borderRadius: "5px" }}
                  src="https://b.zmtcdn.com/data/dish_photos/572/f50e19167711b5119187a872c6c6a572.jpeg?fit=around|130:130&crop=130:130;*,*"
                  alt="Aloo Kulcha"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Paneer Tikka</p>
              <p className="subtitle is-6">₹179</p>
              <div className="content">
                7 Pcs Cubes Of Paneer, Onion And Bell Peppers Are Marinated With
                Spices And Yogurt And Then Roasted In The Clay Oven.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      {/* Floating Menu Button */}
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="has-text-centered"
      >
        <button
          data-target="modal-js-example"
          className="button is-medium is-inverted"
        >
          <img className="mr-2" src={coffeeLogo} alt="Menu" />
          Menu
        </button>
      </div>
      {/* Floating Menu Modal */}
    </div>
  );
}

export default App;
