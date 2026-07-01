import { useState, useEffect, useRef } from "react";

import yiSangImg from "./assets/yiSangImg.webp";
import LCByiSangImg from "./assets/LCByiSangImg.webp";
import yiSangsdImg from "./assets/yiSangsdImg.webp";
import faustImg from "./assets/faustImg.webp";
import LCBfaustImg from "./assets/LCBfaustImg.webp";
import faustsdImg from "./assets/faustsdImg.webp";
import donkiImg from "./assets/donkiImg.webp";
import donkisdImg from "./assets/donkisdImg.webp";
import LCBdonkiImg from "./assets/LCBdonkiImg.webp";
import ryoshuImg from "./assets/ryoshuImg.webp";
import LCBryoshuImg from "./assets/LCBryoshuImg.webp";
import ryoshusdImg from "./assets/ryoshusdImg.webp";
import meursaultImg from "./assets/meursaultImg.webp";
import meursaultsdImg from "./assets/meursaultsdImg.webp";
import LCBmeursaultImg from "./assets/LCBmeursaultImg.webp";
import hongluImg from "./assets/hongluImg.webp";
import LCBhongluImg from "./assets/LCBhongluImg.webp";
import honglusdImg from "./assets/honglusdImg.webp";
import heathcliffImg from "./assets/heathcliffImg.webp";
import LCBheathcliffImg from "./assets/LCBheathcliffImg.webp";
import heathcliffsdImg from "./assets/heathcliffsdImg.webp";
import ishmaelImg from "./assets/ishmaelImg.webp";
import LCBishmaelImg from "./assets/LCBishmaelImg.webp";
import ishmaelsdImg from "./assets/ishmaelsdImg.webp";
import rodionImg from "./assets/rodionImg.webp";
import LCBrodionImg from "./assets/LCBrodionImg.webp";
import rodionsdImg from "./assets/rodionsdImg.webp";
import sinclairImg from "./assets/sinclairImg.webp";
import LCBsinclairImg from "./assets/LCBsinclairImg.webp";
import sinclairsdImg from "./assets/sinclairsdImg.webp";
import outisImg from "./assets/outisImg.webp";
import LCBoutisImg from "./assets/LCBoutisImg.webp";
import outissdImg from "./assets/outissdImg.webp";
import gregorImg from "./assets/gregorImg.webp";
import LCBgregorImg from "./assets/LCBgregorImg.webp";
import gregorsdImg from "./assets/gregorsdImg.webp";

export default function App() {
  const [selectedSinner, setSelectedSinner] = useState(null);
  const [selectedIdentity, setSelectedIdentity] = useState(null);
  const [showSD, setShowSD] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState("");
  const typingIntervalRef = useRef(null);

useEffect(() => {
  const interval = setInterval(() => {
    setProgress((prev) => {
      if (prev >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);

        return 100;
      }

      return prev + 2;
    });
  }, 60);

  return () => clearInterval(interval);
}, []);

useEffect(() => {
  return () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
  };
}, []);


  const sinners = [
    {
      name: "이상",
      desc: "박제가 되어버린 천재를 아시오?",
      image: yiSangImg,
      illustImage: LCByiSangImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 이상",
          desc: "이상이라고 하오. 소개는 이상이오.",
          keyword: "침잠",
          rarity: "0",
          story: ` No. 01 ⸺ 이상
주의사항 : 생각(반추)

[보안 검열] 날개 소속 최연소 수석 연구원 출신으로 타 수감자들에 비해 우수한 지능을 가지고 있습니다.
일상적인 소통은 아마 우리가 뽑은 관리자님의 수준에선 힘들 것으로 판단됩니다.

그렇다고 노골적으로 대화를 피하는 것 또한 불안 요소가 있습니다.
간혹 본 수감자의 침묵 상태가 길더라도 일련의 사고들을 뇌 속에서 처리 중이므로 너그럽게 기다려 주시는 걸 권장합니다.`,
          sdImage: yiSangsdImg,
        },
      ],
    },
    {
      name: "파우스트",
      desc: "인간은 노력하는 한, 방황하는 법입니다.",
      image: faustImg,
      illustImage: LCBfaustImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 파우스트",
          desc: "파우스트예요. 당신이 인생에서 한 번 마주칠까 말까 하는 천재죠.",
          keyword: "없음",
          rarity: "0",
          story: ` No. 02 ⸺ 파우스트
주의사항 : 오만함, 권태감

Limbus Company의 버스인 메피스토펠레스의 엔진을 개발한 수감자입니다.

도시 내에 대등히 지식과 지혜를 겨룰 수 있는 자는 없을 거라고 스스로 주장하지만, 틀린 말도 아닙니다.
관리자님을 대할 때 어쩔 수 없이 말을 섞는 것뿐이라는 수감자의 태도가 기분 나쁠 수도 있습니다.

모든 사람에게도 드러나지 않는 거만한 행동을 취하기에 개선의 가능성은 없으므로 대충 고개 끄덕이는 것을 권장합니다.
그 누구보다도 천재적이지만 우리는 이것의 사용법을 모릅니다. 어쩌면 관리자님이 알아낼 수도 있을지도요?`,
          sdImage: faustsdImg,
        },
      ],
    },
    {
      name: "돈키호테",
      desc: "닿을 수 없는 별에 도달하기 위하여!",
      image: donkiImg,
      illustImage: LCBdonkiImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 돈키호테",
          desc: "이 몸의 차례인가? 나는, 돈키호테일세!",
          keyword: "출혈",
          rarity: "0",
          story: ` No. 03 ⸺ 돈키호테
주의사항 : 과도한 열정, [보안 검열], 과대망상

열정으로만 수감자들의 질을 다시 측량한다면 최고의 점수를 받을 수감자일 것입니다.

해결사라는 것들에 관해서는 대단한 수집가이자 열성적인 팬이므로 온몸에 주렁주렁 해결사 기념품을 지니곤 합니다.
전투에 딱히 영향을 주진 않을 테니 굳이 제재를 가하실 필요는 없습니다.

본인 또한 정의의 해결사라는(그런 게 존재했던 적이나 있었을까요?) 역할에 잔뜩 심취해 있으므로 삼류 배우와도 같은 과장된 행동거지를 합니다.

원활한 임무를 위해선 장단에 같이 맞춰주는 편이 좋습니다.`,
          sdImage: donkisdImg,
        },
      ],
    },
    {
      name: "료슈",
      desc: "덜떨어진 화가들이 추악한 것의 아름다움을 알 도리가 없지.",
      image: ryoshuImg, // 작은 초상화
      illustImage: LCBryoshuImg, // 큰 일러스트
      
      identities: [
        {
          name: "[ LCB 수감자 ] 료슈",
          desc: "료슈. 요료슈쿠… 푸훗.",
          keyword: "호흡",
          rarity: "0",
          story: ` No. 04 ⸺ 료슈

주의사항 : 미적 감각, 간접흡연

수감자마다 그들만의 신조가 있는 법이고
그걸 존중해 주는 것이 마땅한 관리자의 소관이라고들 하겠지만
어떤 건 이해해 주는 시늉조차 힘들 때도 있을 겁니다.

해당 수감자는 평소에 담배만 태우며
과묵한 상태를 유지하지만 전투를 할 때만큼은
눈빛이 황홀함으로 아른거린다는 사실을 눈치챘을 테죠.

전투 중에 대책 없이 상대의 머리통을 으깨기만 하는 건
미를 퇴보시키는 무식한 행위라고 생각합니다.

[경고]

본 수감자는 우리 회사로도 감당이 어려운 뒷배경을 가졌으니
가능한 사적인 원한을 만들지 않도록 하십시오.`,
          sdImage: ryoshusdImg,
        },
      ],
    },
    {
      name: "뫼르소",
      desc: "오늘, 어머니를 죽였다. 아니, 어쩌면 어제일지도.",
      image: meursaultImg,
      illustImage: LCBmeursaultImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 뫼르소",
          desc: "뫼르소. 그렇게 불러주시겠습니까, 관리자님.",
          keyword: "진동",
          rarity: "0",
          story: ` No. 05 ⸺ 뫼르소
주의사항 : 판단 거부 명확하며 짧은 지시를,
즉 개인의 판단을 맡기지 않는 명령을 요함.`,
          sdImage: meursaultsdImg,
        },
      ],
    },
    {
      name: "홍루",
      desc: "옥에도 티가 있고, 좋은 일에도 탈은 있는 법이죠.",
      image: LCBhongluImg,
      illustImage: hongluImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 홍루",
          desc: "홍루라고 한답니다. 잘 해보자구요, 우리.",
          keyword: "파열,침잠",
          rarity: "0",
          story: ` No. 06 ⸺ 홍루
주의사항 : 도련님, 현실감각

우리 회사의 자산이 되기 전까지 부족함 없이 살아왔던 수감자입니다. 

그러므로 자유로움을 추구하려고 하지만 간혹, 타 수감자가 제조한 음식을 보고 하위 저급문화에 대한 무지함을 드러냄과 모멸적인 질문을 하는 등 

다른 수감자들의 속을 뒤집어지게 만드는 상황이 있을 수 있습니다.

하지만 비꼬는 것이 아닌 순수한 호기심에 불과하므로 서로 날붙이를 꺼내 들게 하는 건 썩 좋은 방법이 아닙니다.`,
          sdImage: honglusdImg,
        },
      ],
    },
    {
      name: "히스클리프",
      desc: "내가 한 게 아니야. 네가, 네 마음을 찢으면서 내 마음까지 찢어놓은 거야.",
      image: heathcliffImg,
      illustImage: LCBheathcliffImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 히스클리프",
          desc: "히스클리프. 사람 박살 내는 건 내 전문이지. 물론, 내가 내킬 때만.",
          keyword: "진동",
          rarity: "0",
          story: ` No. 07 ⸺ 히스클리프
주의사항 : 분노 조절 미숙, 폭력성, 내적열등감

논리적인 사고보다는 행동으로 실행하는 것을 더 선호하는 수감자입니다.

생각과 감정이 표정과 말에서 다 드러나며 숨길 노력도 하지 않으므로 관리자님과의 관계 형성에서 두통을
(또는 물리적인 외상까지...)
유발할 수도 있습니다.

수감자의 사고 체계에 심각한 문제가 있는 것은 아님을 숙지해 주시길 바랍니다.
만일 장시간 동안 분노가 가라앉지 않는다면 인사 부서에 문의주세요.

하지만 이런 유형일수록 생각이 멍청하고 단순하다는 것만 익힌다면 다루기 쉬운 법이죠.`,
          sdImage: heathcliffsdImg,
        },
      ],
    },
    {
      name: "이스마엘",
      desc: "저를 이스마엘이라고 불러주세요.",
      image: ishmaelImg,
      illustImage: LCBishmaelImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 이스마엘",
          desc: "저를, 이스마엘이라고 불러주세요.",
          keyword: "진동",
          rarity: "0",
          story: ` No. 08 ⸺ 이스마엘
주의사항 : 강박신경증

관리자님이 하자가 많아 보이는 여러 수감자들을 보며 막막해하고 있을지도 모르겠습니다.

안심하세요. 본 수감자는 비교적 군말 없이 일을 처리해 나갈 수 있는 몇 안 되는 유형입니다.
합리적인 의사결정을 내릴 가능성이 높은 유형이므로 조언을 구하고 싶을 땐 

해당 수감자 쪽을 바라보며 화두를 꺼내는 것도 좋은 방법입니다.

하지만 잊지 마세요.

멀고도 거대한 물웅덩이에서 말도 안 되는 그 항해를 겪고 살아남은 수감자이니만큼 인내심은 길겠지만,

한 번 관계가 틀어지기 시작하면 회복하기 어려울 것입니다.`,
          sdImage: ishmaelsdImg,
        },
      ],
    },
    {
      name: "로쟈",
      desc: "모든 것을 잊고, 다시금 시작할 수 있다면.",
      image: rodionImg,
      illustImage: LCBrodionImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 로쟈",
          desc: "안녕~ 로쟈야. 긴 이름도 있는데, 정 없어 보이니까 그냥 로쟈라고 불러줘~",
          keyword: "출혈",
          rarity: "0",
          story: ` No. 09 ⸺ 로쟈 = 로지온 = 로지온 로마노비치
주의사항 : 돈에 대한 집착, 도박광

뒷골목 태생이라는 안타까운 특징이 노골적으로 드러나는 수감자입니다.

돈을 밝히며 도박과 내기를 즐겨하므로 관리자의 세심한 주의가 필요합니다. 

지시를 내릴 때 되도 않는 윙크로 화답하거나 실없는 농담으로 맞받아치는 경향을 보이므로
때론 관리자로서 엄한 자세를 보이는 것을 추천합니다.

가라앉은 상태가 비주기적으로 나타날 때가 있는데 관리자님 측에서 해줄 수 있는 방법은 없으니
조용히 기다리는 것이 효율적입니다.`,
          sdImage: rodionsdImg,
        },
      ],
    },
    {
      name: "싱클레어",
      desc: "어느 날, 악의 세계가 우리 집 한 가운데에서 시작되었다.",
      image: sinclairImg,
      illustImage: LCBsinclairImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 싱클레어",
          desc: "싱클레어예요… 에밀, 싱클레어. 아, 번호는 음… 11번.",
          keyword: "파열",
          rarity: "0",
          story: ` No. 11 ⸺ 싱클레어
주의사항 : 심약함, 의존적, 끝나지 않을 것만 같은 불안정함

불안정한 성장 시기적 특징을 감안하여도 말을 걸 때 유독 놀라거나 인상을 구기는 행동이 두드러지는 수감자입니다.

전투에도 익숙하지 못하여 처음에는 내장을 보는 것도 힘겨워할 것입니다.
수감자 중엔 폭력적인 성향을 띄는 이도 있을 것이므로 관리자님은 본 수감자에게 채찍보다는 당근을 건네는 것이 권장됩니다.

본인도 인지 못 하는 살기를 띠고 있기도 합니다만, 우리 회사의 사업 분야에 대한 잠재성이 있다는 뜻이므로

적절한 자극만 주어진다면 훌륭히 성장할 것으로 기대합니다.`,
          sdImage: sinclairsdImg,
        },
      ],
    },
    {
      name: "오티스",
      desc: "저는… 아무것도 아닙니다.",
      image: outisImg,
      illustImage: LCBoutisImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 오티스",
          desc: "오티스입니다. 제 이름을 기억해주십시오. 관리자님.",
          keyword: "파열",
          rarity: "0",
          story: ` No. 12 ⸺ 오티스
주의사항 : 교활함

관리자의 역량에 따라 훌륭한 조언자가 되어줄 수도 있는 수감자입니다.
하지만 오지랖이 과한 수감자이기도 하므로 적당히 맞장구를 쳐주는 것을 권장합니다.

전술을 포함한 여러 경험에 있어서는 숙련자이므로 조언을 구하는 편이 효율적입니다.

덤으로 공방 기술들에 대한 해박한 지식도 있으니 버스의 간단한 수리 정도는 맡겨도 될 것입니다.


[주의] - 다른 수감자들과는 달리 과거 사의 열람이 허락되지 않습니다.

[주의] - 임무 외에 머리 굴러가는 소리가 나지 않도록 감독하십시오.`,
          sdImage: outissdImg,
        },
      ],
    },
    {
      name: "그레고르",
      desc: "악몽에서 깨어났을 때, 나는 흉측한 벌레가 되어있었다.",
      image: gregorImg,
      illustImage: LCBgregorImg,
      identities: [
        {
          name: "[ LCB 수감자 ] 그레고르",
          desc: "음… 그레고르다. 뭐, 자고 있을 때 빼고는 편하게 부르라고.",
          keyword: "파열",
          rarity: "0",
          story: ` No. 13 ⸺ 그레고르
주의사항 : 역겨움, 갑작스러운 이형 발작

본 수감자는 다른 수감자에 비해 인격적인 면에선 다루기가 무난한 편입니다.

하지만 감정 고조나 환경의 갑작스러운 변화에 따라서 신체의 일부,
간혹 가다가는 전부가 벌레 (갑각 충의 일부, ■■■■와 유사함)의 조직으로 변합니다.

무례한 관리자가 되고 싶지 않다면(그럴 필요는 물론 없지만) 역겨움을 드러내지 않도록 표정 관리는 철저히 하는 것을 권장합니다.

냉소적인 어조를 일부 사용하지만 요령만 안다면 원만한 의사소통이 가능한 수감자이므로
크게 어려움을 요하진 않습니다.`,
          sdImage: gregorsdImg,
        },
      ],
    },
  ];
const [typedText, setTypedText] = useState("");
const [isTyping, setIsTyping] = useState(false);

const typeStory = (text) => {
  // 이전 타이핑 강제 종료
  if (typingIntervalRef.current) {
    clearInterval(typingIntervalRef.current);
  }

  setTypedText("");
  setIsTyping(true);

  let i = 0;

  typingIntervalRef.current = setInterval(() => {
    setTypedText((prev) => prev + text[i]);

    i++;

    if (i >= text.length) {
      clearInterval(typingIntervalRef.current);
      setIsTyping(false);
    }
  }, 18);
};
if (loading) {
  return (
    <div style={styles.loadingScreen}>
      <div style={styles.loadingBox}>
        <div style={styles.loadingTitle}>
          LCB TERMINAL
        </div>

        <div style={styles.loadingText}>
          CONNECTING TO MEPHISTOPHELES...
        </div>

        <div style={styles.loadingText}>
          LOADING SINNER DATABASE...
        </div>

        <div style={styles.loadingText}>
          INITIALIZING E.G.O SYSTEM...
        </div>

        <div style={styles.loadingDone}>
          {progress >= 100 && (
  <div style={styles.loadingDone}>
    SYNC COMPLETE
  </div>
)}
        </div>
        <div style={styles.progressWrapper}>
  <div
    style={{
      ...styles.progressBar,
      width: `${progress}%`,
    }}
  />
</div>

<div style={styles.progressText}>
  {progress}%
</div>
      </div>
    </div>
  );
}

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
        <input
  type="text"
  placeholder="SEARCH SINNER..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={styles.search}
/>
          {sinners
  .filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )
  .map((s, i) => {
            const isSelected = selectedSinner?.name === s.name;

            return (
  <div key={i}>
    <div
      onClick={() => {
        setSelectedSinner(isSelected ? null : s);
        setSelectedIdentity(null);
      }}
      style={{
        ...styles.tab,
        ...(isSelected ? styles.tabActive : {}),
      }}
    >
      <img src={s.image} style={styles.smallImg} />

      <div>
        <div>{s.name}</div>

        <div
          style={{
            fontSize: "10px",
            color: "#777",
          }}
        >
          {s.desc}
        </div>
      </div>
    </div>

                {/* IDENTITY LIST */}
                {isSelected && (
                  <div style={styles.identityList}>
                    {s.identities.map((id, i2) => (
                      <div
                        key={i2}
                        onClick={() => {
                          setSelectedIdentity(id);
                          setShowSD(false);
                        typeStory(id.story);
                          }}
                        style={{
                          ...styles.identityBtn,
                          ...(selectedIdentity?.name === id.name
                            ? styles.identityActive
                            : {}),
                        }}
                      >
                        {id.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CENTER */}
        <div style={styles.center}>
          {selectedIdentity ? (
            <>
              <img
  src={
    showSD
      ? selectedIdentity.sdImage
      : selectedSinner.illustImage
  }
  style={{
    ...styles.bigImg,
    objectFit: showSD ? "contain" : "cover",
    width: showSD ? "260px" : "320px",
  }}
/>

<div style={styles.imageSwitch}>
  <button
    onClick={() => setShowSD(false)}
    style={{
      ...styles.switchBtn,
      ...(showSD ? {} : styles.switchBtnActive),
    }}
  >
    ILLUST
  </button>

  <button
    onClick={() => setShowSD(true)}
    style={{
      ...styles.switchBtn,
      ...(showSD ? styles.switchBtnActive : {}),
    }}
  >
    SD
  </button>
</div>
  

              <h1 style={styles.centerName}>
                {selectedIdentity.name}
              </h1>

              <p style={styles.centerDesc}>
                {selectedIdentity.desc}
              </p>

              <div
  style={{
    ...styles.meta,
    color:
      selectedIdentity.rarity === "000"
        ? "#ffb347"
        : selectedIdentity.rarity === "00"
        ? "#6ec1ff"
        : "#999",
  }}
>
  #{selectedIdentity.keyword} / RARITY{" "}
  {selectedIdentity.rarity}
</div>
            </>
          ) : selectedSinner ? (
            <>
              <img src={selectedSinner.image} style={styles.bigImg} />
              <h1 style={styles.centerName}>{selectedSinner.name}</h1>
              <p style={styles.centerDesc}>{selectedSinner.desc}</p>
            </>
          ) : (
            <div style={styles.empty}>SELECT SINNER</div>
          )}
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.rightTitle}>SYSTEM PANEL</div>

          {selectedIdentity ? (
            <>
              <div style={styles.rightName}>
                {selectedIdentity.name}
              </div>

              <div style={styles.rightText}>
  {typedText}

  {isTyping && (
    <span style={{ color: "#ff3b3b" }}>
      █
    </span>
  )}
</div>
            </>
          ) : (
            <div style={{ color: "#777", fontSize: "12px" }}>
              Select identity for detail data.
            </div>
          )}
        </div>
      </div>

      {/* STYLE */}
<style>{`
  @keyframes glitch {
  0%,92%,100%{
    transform:translate(0);
  }

  93%{
    transform:translate(-2px,1px);
  }

  95%{
    transform:translate(2px,-1px);
  }

  97%{
    transform:translate(-1px,2px);
  }

  99%{
    transform:translate(1px,-2px);
  }
}

  @keyframes flicker {
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
  }

  @keyframes scan {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 8px;
    }
  }
`}</style>
    </div>
  );
}

/* ===== STYLE ===== */
const styles = {
  loadingScreen: {
  backgroundColor: "#050506",
  color: "#ff3b3b",
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},
search: {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  backgroundColor: "#111",
  border: "1px solid #333",
  color: "#fff",
  outline: "none",
  fontSize: "12px",
  boxSizing: "border-box",
},
imageSwitch: {
  display: "flex",
  gap: "10px",
  marginTop: "14px",
},

switchBtn: {
  backgroundColor: "#111",
  border: "1px solid #333",
  color: "#999",
  padding: "6px 14px",
  cursor: "pointer",
  fontSize: "12px",
  fontFamily: "Courier New",
},

switchBtnActive: {
  border: "1px solid #ff3b3b",
  color: "#ff3b3b",
  boxShadow: "0 0 10px rgba(255,60,60,0.3)",
},
progressWrapper: {
  width: "100%",
  height: "14px",
  border: "1px solid #333",
  marginTop: "25px",
  backgroundColor: "#111",
  overflow: "hidden",
},

progressBar: {
  height: "100%",
  background:
    "linear-gradient(90deg, #ff3b3b, #ff7a7a)",
  transition: "width 0.05s linear",
  boxShadow: "0 0 10px rgba(255,60,60,0.5)",
},

progressText: {
  marginTop: "10px",
  fontSize: "12px",
  color: "#999",
  textAlign: "right",
},

loadingBox: {
  width: "600px",
  border: "1px solid #222",
  padding: "40px",
  backgroundColor: "#0b0b0d",
  boxShadow: "0 0 30px rgba(255,0,0,0.15)",
},

loadingTitle: {
  fontSize: "28px",
  marginBottom: "30px",
  color: "#ffffff",
},

loadingText: {
  fontSize: "14px",
  marginBottom: "14px",
  color: "#999",
  animation: "flicker 1s infinite",
},

loadingDone: {
  marginTop: "30px",
  color: "#ff3b3b",
  fontSize: "16px",
},


bus: {
  position: "relative",

  backgroundColor: "#050506",
  color: "#eaeaea",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
},

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    fontSize: "12px",
    borderBottom: "1px solid #222",
  },

  main: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    flex: 1,
    overflow: "hidden",
  },

  left: {
    borderRight: "1px solid #222",
    padding: "12px",
    overflowY: "auto",
  },

  tab: {
    display: "flex",
    gap: "12px",
    padding: "12px",
    border: "1px solid #333",
    marginBottom: "10px",
    cursor: "pointer",
    backgroundColor: "#0c0c0e",
  },

  tabActive: {
    border: "1px solid #ff3b3b",
    backgroundColor: "#140606",
    boxShadow: "0 0 12px rgba(255,60,60,0.25)",
  },

  smallImg: {
    width: "70px",
    height: "70px",
    objectFit: "cover",
  },

  overlay: {
  position: "absolute",
  inset: 0,

  background: `
radial-gradient(
circle,
transparent 55%,
rgba(0,0,0,0.55) 100%
),
repeating-linear-gradient(
0deg,
rgba(255,255,255,0.02) 0px,
rgba(255,255,255,0.02) 1px,
transparent 2px,
transparent 4px
)
`,

  pointerEvents: "none",

  animation: "scan 0.18s linear infinite",

  opacity: 0.35,
},

  identityList: {
    marginLeft: "20px",
    marginBottom: "10px",
  },

  identityBtn: {
    fontSize: "12px",
    padding: "6px",
    border: "1px solid #222",
    marginTop: "6px",
    cursor: "pointer",
  },

  identityActive: {
    border: "1px solid #ff3b3b",
    color: "#ff3b3b",
  },

  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "1px solid #222",
  },

  bigImg: {
    width: "320px",
    height: "440px",
    objectFit: "cover",
    filter: "contrast(1.1) saturate(0.9)",
  },

  centerName: {
    fontSize: "26px",
    color: "#ff3b3b",
    marginTop: "10px",
  },

  centerDesc: {
    fontSize: "13px",
    color: "#aaa",
  },

  meta: {
    marginTop: "8px",
    fontSize: "12px",
    color: "#777",
  },

  empty: {
    color: "#444",
  },

  right: {
    padding: "12px",
  },

  rightText: {
  fontSize: "12px",
  color: "#aaa",
  marginTop: "10px",
  whiteSpace: "pre-wrap",
  lineHeight: "1.7",
},
  rightName: {
    fontSize: "14px",
    color: "#ff3b3b",
  }
};