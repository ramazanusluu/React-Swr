import React from "react";
import useSWR from "swr";

const endpoint = "http://localhost:3000/videos";
//istek yapılacak url için endpoint oluşturulur.

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
//? fetcher fonksiyonu : url'e istek yapıp veriyi yakalayan bir fonksiyon
//! Global olarak src/index.js içerinde fetcher fonksiyonu tanımlandı.

function QuickStart() {
  const { data, isValidating, error } = useSWR(endpoint); //useSWR(key(url), fetcher, options)
  //  data: yakaladığımız veri.
  //  error: Hata ile karşılaştığında hata mesajını döndürür
  //  isValidating: veri yakalama süreci ile ilgili bilgi verir

  console.log({ isValidating, data });

  if (error) {
    return <div>failed to load</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }
  /*
    Axios ve normal fetch'ten ne farkı var sorusunun cevabı ise;
    useEffect'in içerisinde kullanmamıza gerek kalmadı.
    async fonksiyon tanımlamamıza gerek kalmadı.
   */
  //*Artılarından bir tanesi : Veri güncellendiğinde ve ekrana focus olunduğunda; stale bayat(eski) veriyi gösterirken güncellenen veriyide revalidate ediyor. Bunu axios veya fetch ile yapmak için extra işlemler yapmak gerekiyor.
  return (
    <div>
      <h1>Quick Start</h1>
      <hr />
      {data &&
        data.map((video) => (
          <h3 key={video.id}>
            {video.id}-{video.title}
          </h3>
        ))}
    </div>
  );
}

export default QuickStart;
