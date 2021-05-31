import logo from "../src/assets/logo.png";
import award from "../src/assets/award.png";
import ceremony from "../src/assets/ceremony.png";
import items from "../src/assets/items.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <div className="info">
        <img src={award} className="award" />
        <div className="content">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
          </ul>
          <img src={ceremony} />
          <p>
            Government of India has awarded the{" "}
            <b> "National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="s-sec">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
        <img src={items} />
        <p className="valves">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="line"></div>
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <ul>
          <li>CHEMICALS & PROCESS</li>
          <li>POWER</li>
          <li>WATER & WASTE WATER</li>
          <li>OILS & GAS</li>
          <li>PHARMA</li>
          <li>SUGARS & DISTILLERIES</li>
          <li>PAPER & PULP</li>
          <li>MARINE & DEFENCE</li>
          <li>METAL & MINING</li>
          <li>FOOD & BEVERAGE</li>
          <li>PETROCHEMICAL & REFINERIES</li>
          <li>SOLAR</li>
          <li>BUILDING</li>
          <li>HVAC</li>
          <li>FIRE FIGHTING</li>
          <li>AGRICULTURE & RESIDENTIAL</li>
        </ul>
      </div>
      <footer>
        <a href="#">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="phone-square-alt"
            class="svg-inline--fa fa-phone-square-alt fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"
            ></path>
          </svg>
          Toll free <span style={{marginLeft:'4px',fontSize:'16px',fontWeight:'600'}}> 1800 200 1234</span>
        </a>
        <a href="#">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            class="svg-inline--fa fa-facebook fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            ></path>
          </svg>
          www.facebook.com/cripumps
        </a>
        <a href="#">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="globe"
            class="svg-inline--fa fa-globe fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
            ></path>
          </svg>
          www.crigroups.com
        </a>
      </footer>
    </div>
  );
}

export default App;
