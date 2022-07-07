import React from "react";
import UserEmail from "./UserEmail";
import UserName from "./UserName";

//? UserNmae.js ve UserEmail.js componentlarında aynı url'lere request atıyolar ama burda tekrar tekrar request gönderilmiyor.
//* API sadece 1 tane request gönderiliyor ve cache'lenmiş veriyi 2 componentta kullanıyor.
//! Component başına request gönderilmiyor.

function User() {
  return (
    <div>
      <h1>User Component</h1>
      <hr />
      <UserName />
      <hr />
      <UserEmail />
    </div>
  );
}

export default User;
