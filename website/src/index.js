import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import ReadMeAboutSite from "./routes/readMe";
import Invoices from "./routes/invoices";
import Invoice from './routes/invoice';
import CryptoPriceApi from "./routes/cryptoPriceApi";

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>

        <Route path="readMe" element={<ReadMeAboutSite />} />
        <Route path="cryptoPriceApi" element={<CryptoPriceApi />} /> 
        
        /* Be carful, put new page lings above this If you want this invoice / invoices link they go together*/
        <Route path="invoices" element={<Invoices />} >
        <Route path=":invoiceId" element={<Invoice />} />
        
    </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
