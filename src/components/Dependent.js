import React from "react";
import useSWR from "swr";

function Dependent() {
  const { data: user } = useSWR("https://jsonplaceholder.typicode.com/users/4");
  //placeholder'dan 4 numaralı user'ı fetch ediyor.
  //Bu user'ın ID sini kullanarak farklı bir url'e istek atılıyor
  const { data: posts } = useSWR(
    () => "https://jsonplaceholder.typicode.com/posts?userId=" + user.id
  );
  //Bu işlemin yapılması üst taraftaki işlemin düzgün bir şekilde yapılmasına bağlıdır.

  if (!posts) {
    return <div>Loading Post...</div>;
  }
  return (
    <div>
      <h1>Dependent</h1>
      <br />
      <hr />
      <br />
      {posts.map((post) => (
        <div key={post.id}>
          <h4>User Id: {post.userId}</h4>
          <h4>id: {post.id}</h4>
          <h4>Title: {post.title}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dependent;
