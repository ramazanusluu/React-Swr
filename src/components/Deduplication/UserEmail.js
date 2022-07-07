import React from "react";
import useSWR from "swr";

const endpoint = "https://jsonplaceholder.typicode.com/users/1";

function UserEmail() {
  const { data, isValidating, error } = useSWR(endpoint);

  console.log({ isValidating, data });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>User Email Component</h1>
      <h3>User Email: {data.email}</h3>
    </div>
  );
}

export default UserEmail;
