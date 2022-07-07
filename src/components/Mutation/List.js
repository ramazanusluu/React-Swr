import React from "react";
import useSWR from "swr";

const endpoint = "https://jsonplaceholder.typicode.com/users";

function List() {
  const { data, error } = useSWR(endpoint);

  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default List;
