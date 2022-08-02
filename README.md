# React SWR

## React Hooks useSWR ile veri yakalama

React SWR ile ilgili yaptığım çalışmalarda yazmış olduğum kodların yer aldığı repodur.

![image](https://user-images.githubusercontent.com/98388628/182477749-1c5ecbd4-34eb-42ae-8a89-b8fe7957b860.png)

SWR veri yakalamak için NEXT.JS’in yaratıcısı vercel ekibi tarafından geliştirilmiş React Hooks kütüphanesidir.

https://swr.vercel.app/

SWR, Vercel tarafından oluşturulmuş bir React Hooks kitaplığıdır, adı bayat iken yeniden doğrulama teriminden gelir. Adından da anlaşılacağı gibi, müşterinize eski/eski veriler sunulurken, müşteri tarafında en güncel veriler SWR aracılığıyla alınır (yeniden doğrulanır). SWR, verileri yalnızca bir kez yeniden doğrulamakla kalmaz, SWR’yi, bir istemci İnternet’e yeniden bağlandığında veya programlı olarak yeniden bağlandığında sekme yeniden odaklandığında belirli aralıklarla verileri yeniden doğrulayacak şekilde yapılandırabilirsiniz.

## React SWR Özellikleri

* Tek bir kod satırı ile projenizde veri alma mantığını basitleştirebilir. SWR çok daha fazla özelliğe sahiptir.
* Hızlı , hafif ve yeniden kullanılabilir veri alma
* Yerleşik önbellek ve istek tekilleştirme
* Gerçek zamanlı deneyim
* Taşıma ve protokolden bağımsız
* SSR / ISR / SSG desteği
* TypeScript desteği
* Hızlı sayfa gezinme
* Aralıkta yoklama
* Veri bağımlılığı
* Odak üzerinde yeniden doğrulama
* Ağ kurtarmada yeniden doğrulama
* Yerel mutasyon (İyimser Kullanıcı Arayüzü)
* Akıllı hata yeniden denemesi
* Sayfalandırma ve kaydırma konumu kurtarma
* Tepki Gerilimi
