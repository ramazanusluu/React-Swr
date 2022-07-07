import React, { useState } from "react";
import useSWR from "swr";
import PaginationNavbar from "../Navbar/PaginationNavbar";

function Pagination1() {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=5`
  );
  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <PaginationNavbar />
      <h1>Pagination</h1>
      <br />
      <hr />
      <br />
      {data.map((item) => (
        <div key={item.id}>
          <h3>
            {item.id}-{item.title}
          </h3>
        </div>
      ))}
      <br />
      <br />
      <button className="button" onClick={() => setPageIndex(pageIndex - 1)}>
        Previous
      </button>
      <button className="button" onClick={() => setPageIndex(pageIndex + 1)}>
        Next
      </button>
    </div>
  );
}

export default Pagination1;
