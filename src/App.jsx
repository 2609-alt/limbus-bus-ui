import { useState } from "react";

import yiSangImg from "./assets/yiSangImg.webp";
import faustImg from "./assets/faustImg.webp";
import donkiImg from "./assets/donkiImg.webp";
import ryoshuImg from "./assets/ryoshuImg.webp";
import meursaultImg from "./assets/meursaultImg.webp";
import hongluImg from "./assets/hongluImg.webp";
import heathcliffImg from "./assets/heathcliffImg.webp";
import ishmaelImg from "./assets/ishmaelImg.webp";
import rodionImg from "./assets/rodionImg.webp";
import sinclairImg from "./assets/sinclairImg.webp";
import outisImg from "./assets/outisImg.webp";
import gregorImg from "./assets/gregorImg.webp";

export default function App() {
  const [selectedSinner, setSelectedSinner] = useState(null);
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  const sinners = [
    {
      name: "이상",
      desc: "박제가 되어버린 천재를 아시오?",
      image: yiSangImg,
      identities: [
        {
          name: "W사 3등급 정리요원",
          desc: "충전 기반 고속 전투",
          keyword: "충전",
          rarity: "000",
          story: "이상은 세계를 관찰하며 자신을 변수로 본다.",
        },
      ],
    },
    {
      name: "파우스트",
      desc: "인간은 노력하는 한, 방황하는 법입니다.",
      image: faustImg,
      identities: [
        {
          name: "E.G.O",
          desc: "화상 기반 광역 전투",
          keyword: "화상",
          rarity: "000",
          story: "모든 결과를 알지만 선택하지 않는다.",
        },
      ],
    },
    {
      name: "돈키호테",
      desc: "닿을 수 없는 별에 도달하기 위하여!",
      image: donkiImg,
      identities: [
        {
          name: "중지",
          desc: "출혈 폭주",
          keyword: "출혈",
          rarity: "000",
        },
      ],
    },
    {
      name: "료슈",
      desc: "덜떨어진 화가들이 추악한 것의 아름다움을 알 도리가 없지.",
      image: ryoshuImg,
      identities: [
        {
          name: "흑운회",
          desc: "출혈 베기",
          keyword: "출혈",
          rarity: "000",
        },
      ],
    },
    {
      name: "뫼르소",
      desc: "오늘, 어머니를 죽였다. 아니, 어쩌면 어제일지도.",
      image: meursaultImg,
      identities: [
        {
          name: "N사",
          desc: "진동 탱커",
          keyword: "진동",
          rarity: "000",
        },
      ],
    },
    {
      name: "홍루",
      desc: "옥에도 티가 있고, 좋은 일에도 탈은 있는 법이죠.",
      image: hongluImg,
      identities: [
        {
          name: "K사",
          desc: "파열/회복",
          keyword: "파열",
          rarity: "000",
        },
      ],
    },
    {
      name: "히스클리프",
      desc: "내가 한 게 아니야. 네가, 네 마음을 찢으면서 내 마음까지 찢어놓은 거야.",
      image: heathcliffImg,
      identities: [
        {
          name: "R사",
          desc: "탄환 폭딜",
          keyword: "탄환",
          rarity: "000",
        },
      ],
    },
    {
      name: "이스마엘",
      desc: "저를 이스마엘이라고 불러주세요.",
      image: ishmaelImg,
      identities: [
        {
          name: "어금니",
          desc: "침잠",
          keyword: "침잠",
          rarity: "000",
        },
      ],
    },
    {
      name: "로쟈",
      desc: "모든 것을 잊고, 다시금 시작할 수 있다면.",
      image: rodionImg,
      identities: [
        {
          name: "디에치",
          desc: "침잠 탱커",
          keyword: "침잠",
          rarity: "000",
        },
      ],
    },
    {
      name: "싱클레어",
      desc: "어느 날, 악의 세계가 우리 집 한 가운데에서 시작되었다.",
      image: sinclairImg,
      identities: [
        {
          name: "쥐는 자",
          desc: "광신 폭딜",
          keyword: "진동",
          rarity: "000",
        },
      ],
    },
    {
      name: "오티스",
      desc: "저는… 아무것도 아닙니다.",
      image: outisImg,
      identities: [
        {
          name: "세븐",
          desc: "파열 분석",
          keyword: "파열",
          rarity: "000",
        },
      ],
    },
    {
      name: "그레고르",
      desc: "악몽에서 깨어났을 때, 나는 흉측한 벌레가 되어있었다.",
      image: gregorImg,
      identities: [
        {
          name: "료.고.파",
          desc: "출혈 난전",
          keyword: "출혈",
          rarity: "000",
        },
      ],
    },
  ];

  const safeSinners = Array.isArray(sinners) ? sinners : [];

  return (
    <div style={styles.bus}>
      
      {/* HEADER */}
      <div style={styles.header}>
        <div>BUS STATUS: OPERATIONAL</div>
        <div>LCB ROUTE // DISTORTION ZONE</div>
        <div>SYNC: STABLE</div>
      </div>

      <div style={styles.main}>
        
        {/* LEFT */}
        <div style={styles.left}>
          {safeSinners.map((s, i) => (
            <div key={i}>
              
              <div
                onClick={() =>
                  setSelectedSinner((prev) =>
                    prev?.name === s.name ? null : s
                  )
                }
                style={styles.tab}
              >
                <img src={s?.image} style={styles.smallImg} />
                <div>
                  <div>{s?.name}</div>
                  <div style={{ fontSize: "10px", color: "#777" }}>
                    {s?.desc}
                  </div>
                </div>
              </div>

              {/* identities */}
              {selectedSinner?.name === s?.name && (
                <div
                  style={{
                    ...styles.identityList,
                    animation: "slideDown 0.2s ease",
                  }}
                >
                  {s?.identities?.map((id, i2) => (
                    <div
                      key={i2}
                      onClick={() => setSelectedIdentity(id)}
                      style={styles.identityBtn}
                    >
                      {id?.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div style={styles.center}>
          {selectedSinner ? (
            <>
              <img src={selectedSinner?.image} style={styles.bigImg} />
              <h1 style={styles.centerName}>
                {selectedSinner?.name}
              </h1>
              <p style={styles.centerDesc}>
                {selectedSinner?.desc}
              </p>
            </>
          ) : (
            <div style={styles.empty}>SELECT SINNER</div>
          )}
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.rightTitle}>SYSTEM PANEL</div>
          <div style={{ color: "#777", fontSize: "12px" }}>
            Select identity for detail data.
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {selectedIdentity?.name && (
        <div
          style={styles.overlay}
          onClick={() => setSelectedIdentity(null)}
        >
          <div
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={styles.modalTitle}>
              {selectedIdentity?.name}
            </div>

            <div style={styles.modalSection}>
              <b>DESC</b>
              <p>{selectedIdentity?.desc}</p>
            </div>

            <div style={styles.modalSection}>
              <b>KEYWORD</b>
              <p>#{selectedIdentity?.keyword}</p>
            </div>

            <div style={styles.modalSection}>
              <b>RARITY</b>
              <p>{selectedIdentity?.rarity}</p>
            </div>

            <div style={styles.modalSection}>
              <b>LORE</b>
              <p>{selectedIdentity?.story || "NO DATA"}</p>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATION */}
      <style>{`
        * { font-family: "Courier New", monospace; }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ===== STYLE ===== */
const styles = {
  /* ROOT */
  bus: {
    backgroundColor: "#050506",
    color: "#eaeaea",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", // ✅ 전체 스크롤 차단 (핵심)
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    fontSize: "12px",
    borderBottom: "1px solid #222",
    flexShrink: 0,
  },

  /* MAIN LAYOUT */
  main: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    flex: 1,
    overflow: "hidden", // ✅ 레이아웃 밀림 방지
  },

  /* LEFT PANEL */
  left: {
    borderRight: "1px solid #222",
    padding: "12px",
    overflowY: "auto", // ✅ 내부 스크롤
    overflowX: "hidden",
    maxHeight: "100%", // ✅ 튀어나오는 것 방지
  },

  tab: {
    display: "flex",
    gap: "14px",
    padding: "14px",
    border: "1px solid #333",
    marginBottom: "12px",
    cursor: "pointer",
    backgroundColor: "#0c0c0e",
    alignItems: "center",
    transition: "0.2s",
  },

  smallImg: {
    width: "78px",
    height: "78px",
    objectFit: "cover",
    border: "1px solid #2a2a2a",
    boxShadow: "0 0 10px rgba(255, 60, 60, 0.15)",
    flexShrink: 0,
  },

  tabName: {
    fontSize: "16px",
    fontWeight: "500",
  },

  tabDesc: {
    fontSize: "12px",
    color: "#777",
  },

  identityList: {
    marginLeft: "24px",
    marginBottom: "12px",
  },

  identityBtn: {
    fontSize: "12px",
    padding: "6px",
    border: "1px solid #222",
    marginTop: "6px",
    cursor: "pointer",
    color: "#ff3b3b",
    backgroundColor: "#0b0b0b",
  },

  /* CENTER */
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #222",
    overflow: "hidden",
  },

  bigImg: {
    width: "320px",
    height: "440px",
    objectFit: "cover",
    border: "1px solid #333",
    boxShadow: "0 0 20px rgba(255, 60, 60, 0.15)",
  },

  centerName: {
    fontSize: "28px",
    color: "#ff3b3b",
    marginTop: "12px",
  },

  centerDesc: {
    fontSize: "13px",
    color: "#aaa",
  },

  empty: {
    color: "#444",
  },

  /* RIGHT */
  right: {
    padding: "12px",
    overflow: "hidden",
  },

  rightTitle: {
    fontSize: "12px",
    color: "#ff3b3b",
    marginBottom: "10px",
  },

  /* OVERLAY */
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    width: "420px",
    backgroundColor: "#0c0c0e",
    border: "1px solid #333",
    padding: "22px",
  },

  modalTitle: {
    fontSize: "20px",
    color: "#ff3b3b",
    marginBottom: "10px",
  },

  modalSection: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#ccc",
  },
};