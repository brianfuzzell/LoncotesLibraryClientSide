import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import { PatronList } from "./components/PatronList";
import { PatronDetails } from "./components/PatronDetails";
import { PatronEdit } from "./components/PatronEdit";
import { CheckoutList } from "./components/CheckoutList";
import { BrowseList } from "./components/BrowseList";
import { CheckoutForm } from "./components/CheckoutForm";
import { OverdueCheckoutsList } from "./components/OverdueCheckoutsList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path=":id/edit" element={<PatronEdit />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList />} />
          <Route path=":id/new" element={<CheckoutForm />} />
        </Route>
        <Route path="browse">
          <Route index element={<BrowseList />} />
        </Route>
        <Route path="overdue">
          <Route index element={<OverdueCheckoutsList />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
