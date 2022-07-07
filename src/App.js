import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import QuickStart from "./components/QuickStart";
import Home from "./components/Design/Home";
import Navbar from "./components/Navbar";
import RefreshInterval from "./components/Options/RefreshInterval";
import ConditionalFetching from "./components/ConditionalFetching";
import Dependent from "./components/Dependent";
import User from "./components/Deduplication/User";
import Options from "./components/Options";
import RevalidateOnFocus from "./components/Options/RevalidateOnFocus";
import Pagination from "./components/Pagination";
import Pagination1 from "./components/Pagination/Pagination1";
import Pagination2 from "./components/Pagination/Pagination2";
import RevalidateIfStale from "./components/Options/RevalidateIfStale";
import RefreshWhenHidden from "./components/Options/RefreshWhenHidden";
import RevalidateOnReconnect from "./components/Options/RevalidateOnReconnect";
import Mutation from "./components/Mutation/Mutation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quick-start" element={<QuickStart />} />
        <Route path="axios" element={<Axios />} />
        <Route path="options" element={<Options />} />
        <Route path="options/refreshInterval" element={<RefreshInterval />} />
        <Route
          path="options/revalidateOnFocus"
          element={<RevalidateOnFocus />}
        />
        <Route
          path="options/revalidateIfStale"
          element={<RevalidateIfStale />}
        />
        <Route
          path="options/refreshWhenHidden"
          element={<RefreshWhenHidden />}
        />
        <Route
          path="options/revalidateOnReconnect"
          element={<RevalidateOnReconnect />}
        />
        <Route path="conditional-fetching" element={<ConditionalFetching />} />
        <Route path="dependent" element={<Dependent />} />
        <Route path="Deduplication/user" element={<User />} />
        <Route path="pagination" element={<Pagination />} />
        <Route path="pagination/pagination1" element={<Pagination1 />} />
        <Route path="pagination/pagination2" element={<Pagination2 />} />
        <Route path="mutation" element={<Mutation />} />
      </Routes>
    </div>
  );
}

export default App;
