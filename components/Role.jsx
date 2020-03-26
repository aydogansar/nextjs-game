import React from "react";

const roles = [
  {
    role: "katil",
    description:
      "Gözü dönmüş bir seri katilsin. Köylülerin günlerdir gözüne uyku girmiyor. Neden öldürdüğünü sen de bilmiyorsun. Bu sana sadece iyi hissettiriyor. Durmaya ğek niyetin yok. Peki o zaman sıradaki kurban kim? Şu köylü kadın, kahin olduğunu söyledikleri, dedektifin bile bulduğu ipuçlarıyla birleştirdiği hikayeden çok daha fazlasını biliyormuş gibi gözüküyor. Böyle şeylere pek inanmazsın ama tedbirli olmak lazım.",
    image: "/static/killer.jpg",
    color: "214,28,15,0.5"
  },
  {
    role: "kahin",
    description:
      "Yılların tecrübesiyle, daha 15 yaşında bir genç kızken annenden öğrendiğin bazı yeteneklerin var. Fanusundan, belli şartların da sağlanmasıyla, istediğin olaylarla ilgili şeyler görüyorsun. Daha hiç yanlış çıktığı olmadı. Köy halkından bir çok insan da bu yeteneğini biliyor ve sana saygı duyuyor. Tabi biraz yaşından dolayı da olabilir. Ama şu son seri katil olaylarında dedektifin de esrarengiz bir şekilde ölmesiyle köyün tek umudu sensin gibi duruyor.",
    image: "/static/seer.jpg",
    color: "15,76,129,0.5"
  },
  {
    role: "halk",
    description:
      "Köy halkından, her gün tarlasına giden, dükkanını açan ya da kahveye gidip okey oynayan insanlardan birisin. Ama sen diğerlerinden biraz farklısın. Diğer köylülere göre daha zeki olduğunu her zaman biliyordun. İşte şimdi bunu göstermenin tam vakti. Dedektifin ölmesiyle beraber tüm köy, katili kahin dedikleri, şu yaşlı bunak kadının bulmasını bekliyor. Ama bekleyerek olmayacağını sen de biliyorsun. Diğer köylülerle de konuşup kim olabileceğini bulmalısın. Çünkü biliyorsun ki dedektif ölmeden önce katilin kesinlikle bu köyde uzun zamandır yaşayan birisi olduğunu söylemişti. Her gün yüzünüze bakan, gülümseyen, hatta beraber katile lanetler okuduğunuz en yakın arkadaşın bile olabilir.",
    image: "/static/people.jpg",
    color: "255,163,114,0.8"
  }
];

const Role = ({ role }) => {
  return (
    <div className="containerM">
      {role
        ? roles
            .filter(r => r.role === role)
            .map((r, i) => {
              return (
                <div className="info" key={i}>
                  <div
                    className="image"
                    style={{
                      background: `url('${r.image}')`
                    }}
                  ></div>
                  <div
                    className="role"
                    style={{ background: `rgba(${r.color})` }}
                  >
                    {r.role}
                  </div>
                  <div className="desc">{r.description}</div>
                </div>
              );
            })
        : null}

      <style jsx>{`
        .containerM {
          display: flex;
          align-items: space-around;
          width: 300px;
          height: 100%;
          border: 1px solid #333;
        }
        .role {
          width: 100%;
          padding: 10px;
          text-transform: capitalize;
        }
        .info {
          display: flex;
          flex-direction: column;
          align-items: space-around;
          width: 300px;
        }
        .image {
          width: 100%;
          height: 100%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .desc {
          overflow: auto;
          padding: 10px;
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};
export default Role;
