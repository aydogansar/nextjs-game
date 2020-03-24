import React from "react";

const roles = [
  {
    role: "katil",
    description:
      "Gözü dönmüş bir seri katilsin. Köylülerin günlerdir gözüne uyku girmiyor. Neden öldürdüğünü sen de bilmiyorsun. Bu sana sadece iyi hissettiriyor. Durmaya ğek niyetin yok. Peki o zaman sıradaki kurban kim? Şu köylü kadın, kahin olduğunu söyledikleri, dedektifin bile bulduğu ipuçlarıyla birleştirdiği hikayeden çok daha fazlasını biliyormuş gibi gözüküyor. Böyle şeylere pek inanmazsın ama tedbirli olmak lazım.",
    image: ""
  },
  {
    role: "kahin",
    description:
      "Yılların tecrübesiyle, daha 15 yaşında bir genç kızken annenden öğrendiğin bazı yeteneklerin var. Geceleri rüyanda seni endişelendiren, korkutan, ya da heyecanlandıran bazı olaylarla ilgili şeyler görüyorsun. Bunlar hiç bilmediğin hatta bilmenin mümkü olmadığı şeyler de olabiliyor. Ama daha hiç yanlış çıktığı olmadı. Köy halkından bir çok insan da bu yeteneğini biliyor ve sana saygı duyuyor. Tabi biraz yaşından dolayı da olabilir. Ama şu son seri katil olayların da dedektifin de esrarengiz bir şekilde ölmesiyle köyün tek umudu sensin gibi duruyor.",
    image: ""
  },
  {
    role: "halk",
    description:
      "Köy halkından, her gün tarlasına giden, dükkanını açan ya da kahveye gidip okey oynayan insanlardan birisin. Ama sen diğerlerinden biraz farklısın. Diğer köylülere göre daha zeki olduğunu her zaman biliyordun. İşte şimdi bunu göstermenin tam vakti. Dedektifin ölmesiyle beraber tüm köy katili şu yaşlı bunak, kahin dedikleri kadının bulmasını bekliyor. Ama bekleyerek olmayacağını sen de biliyorsun. Diğer köylülerle de konuşup kim olabileceğini bulmalısın. Çünkü biliyorsun ki dedektif ölmeden önce katilin kesinlikle bu köyde uzun zamandır yaşayan birisi olduğunu söylemişti. Her gün yüzünüze bakan, gülümseyen hatta beraber katile lanetler okuduğun en yakın arkadaşın bile olabilir.",
    image: ""
  }
];

const Role = ({ role }) => {
  return (
    <div className="containerM">
      <div className="image"></div>
      <div className="role"></div>
      <div className="desc"></div>
      <style jsx>{`
        .containerM {
          display: flex;
          align-items: space-around;
        }
      `}</style>
    </div>
  );
};
export default Role;
