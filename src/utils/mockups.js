export const setupContentsMockups = (cnt = 163) => {
  return [...Array(cnt)]
    .map((_) => {
      return {
        title: getRandomTitle(),
        isUpdate: getRandomBoolean(0.5),
        isNew: getRandomBoolean(0.3),
        isEnd: getRandomBoolean(0.4),
        isFree: getRandomBoolean(0.5),
        description: getRandomDescription(),
        authers: [...Array(1 + getRandomNum(3))].map((_) => getRandomName()),
        subscribers: 1 + getRandomNum(150, 1),
        stars: 8 + getRandomNum(2, 1),
        updateDay: getRandomNum(8),
        img: getRandomImg(),
      };
    })
    .sort((a, b) => {
      if (b.subscribers === a.subscribers) return b.stars - a.stars;
      return b.subscribers - a.subscribers;
    });
};

const getRandomBoolean = (percent) => Math.random() < percent;

const getRandomNum = (최댓값 = 100, 소수점자릿수 = 0) => {
  const 소수오프셋 = Math.pow(10, 소수점자릿수);
  return Math.floor(Math.random() * 최댓값 * 소수오프셋) / 소수오프셋;
};

// 출처: https://erulabo.com/16
const getRandomName = () => {
  let text = "";
  let first =
    "김이박최정강조윤장임한오서신권황안송류전홍고문양손배조백허유남심노정하곽성차주우구신임나전민유진지엄채원천방공강현함변염양변여추노도소신석선설마주연방위표명기반왕모장남탁국여진구";
  let last =
    "가강건경고관광구규근기길나남노누다단달담대덕도동두라래로루리마만명무문미민바박백범별병보사산상새서석선설섭성세소솔수숙순숭슬승시신아안애엄여연영예오옥완요용우원월위유윤율으은의이익인일자잔장재전정제조종주준중지진찬창채천철초춘충치탐태택판하한해혁현형혜호홍화환회효훈휘희운모배부림봉혼황량린을비솜공면탁온디항후려균묵송욱휴언들견추걸삼열웅분변양출타흥겸곤번식란더손술반빈실직악람권복심헌엽학개평늘랑향울련";

  for (var i = 0; i < 1; i++)
    text += first.charAt(Math.floor(Math.random() * first.length));
  for (var i = 0; i < 2; i++)
    text += last.charAt(Math.floor(Math.random() * last.length));

  return text;
};

const getRandomTitle = () => {
  const num = getRandomNum(titleList.length - 1);
  return titleList[num];
};

const getRandomDescription = () => {
  const num = getRandomNum(descriptionList.length - 1);
  return descriptionList[num];
};

const getRandomImg = () => {
  const num = getRandomNum(imgList.length - 1);
  return imgList[num];
};

const titleList = [
  "후궁계약",
  "대마법사의 딸",
  "프로야구생존기",
  "아비무쌍",
  "엔젤릭 레이디",
  "깨어나세요, 용사여",
  "파멸의 공주님",
  "망할 가문을 살려보겠습니다",
  "그 책에 마음을 주지 마세요",
  "미운 노새 이야기",
  "폭군의 가정교사가 되겠습니다",
  "그 결혼 제가 할게요",
  "그녀를 사수하세요",
  "가짜 공녀님의 만렙 토끼",
  "샬롯에게는 다섯 명의 제자가 있다",
  "하렘생존기",
  "말하지 말까",
  "학사재생",
  "카르세아린",
  "여우신랑",
  "흔한 환생녀의 사정",
  "크레이지 가드너",
  "공작부인의 50가지 티 레시피",
  "여신의 취향",
  "미생 시즌2 2부",
  "지독한 릴리",
  "나오세요, 로미오",
  "봄날의 팔광",
  "베이비 드래곤",
  "블랙윈터",
  "악한 기사",
  "아기 황후님",
  "엑스텐",
  "메모라이즈(MEMORIZE)",
  "우리집이거든요!",
  "위튜브스쿨",
  "애월의 꿈",
  "주인님이라 부르지 마!",
  "간지몬스터",
  "폭군 남편이 달라졌어요",
  "달빛조각사",
  "더 챌린저",
  "씨방것들",
  "유리의 벽",
  "마릴린은 라리엔사를 너무 좋아해!",
  "첫사랑 조작단",
  "눌림굿",
  "부기영화",
  "조국이 당신을 원한다",
  "서천화원",
  "악녀의 탄생",
  "FFF급 관심용사",
  "침묵의 정원",
  "웽툰",
  "잉어님과 떡볶이",
  "귀싸대기",
  "버그 트레인",
  "킬러지만 공주로 살아볼까 해",
  "엄마는 외국인 시즌5",
  "랑데부",
  "나 홀로 버그로 꿀빠는 플레이어",
  "후궁공략",
  "순정 히포크라테스",
  "감방에서 남자주인공을 만났습니다",
  "눈부시게 빛나는",
  "강려크한 지지리",
  "공녀님은 이상형과 결혼하기 싫어요",
  "히어로가 되지 않기로 했다",
  "남주와 그리는 로맨스",
  "슈퍼맨",
  "냐아! 미술학원",
  "드래곤에고",
  "내가 죽였다",
  "저는 용사님이 아닌데요!",
  "가장 평범한 이세계",
  "도깨비 아빠",
  "어른이",
  "시히트왕국정복기",
  "강호표사",
  "허니머슬",
  "배트맨",
  "지금은 연애를 쉽니다",
  "0번째 마법사",
  "키몽의 호구로운 생활",
  "춘식툰 시리즈1. 라이언 집사일기",
  "기억의 밤",
  "엄마는 외국인 시즌3,4",
  "우리집 고양이는 베지테리언",
  "제19회 대한민국창작만화공모전",
  "변신합시다",
  "골렘 잡고 흙수저 탈출",
  "소울아크",
  "일곱번째 배심원",
  "삼장전",
  "춘식툰 시리즈2. 춘식이는 집순이",
  "겁쟁이 피지컬",
  "아크",
  "보이즈 립스틱",
  "공중정원",
  "이세계 전담반",
  "니니툰즈",
  "춘식툰 시리즈3. 춘식이는 프렌즈",
  "왕좌고 제패기",
  "죠르디 24시",
  "어린(물고기 비늘)",
  "할리 퀸",
  "나비 [가네코 후미코]",
  "라이언, 더 라이언",
  "트레이스 - 세이브",
  "Dr.브레인 시즌2",
  "노력의 卍(만)",
  "아임프롬조선 [강혜원]",
  "아싸가 알아버렸다",
  "선택",
  "체벌교사",
  "파베로제",
  "자본주의가 낳은 괴물",
  "승리호",
  "슈퍼매치 1탄 : LoL BJ 멸망전",
  "그래서 오늘도 삽니다",
  "개구리 공주",
  "사랑하나봄",
  "스틸레인2 : 강철비",
  "2020 전남콘랩 웹툰 창작 아카데미",
  "소소한 이야기",
  "마애 (磨崖)",
  "만해몬 어드벤처 [한용운]",
  "블랙마리아",
  "부산스러운 웹툰 시즌4",
  "질풍의 노도",
  "오늘도 반듯하게",
  "극락왕생 [흑백판]",
  "미운 노새 이야기",
  "위튜브스쿨",
  "그녀를 사수하세요",
  "여우신랑",
  "제19회 대한민국창작만화공모전",
];

const descriptionList = [
  "후궁으로 입궁해 다오. 그게 내 의뢰다.",
  "진짜 아빠를 찾아 떠나다!",
  "노영웅의 프로야구생존기!",
  "좌충우돌 무협 액션&amp;육아 일지!",
  "나도 네가 불행해졌으면 좋겠어.",
  "다섯 남자 중 당신의 취향은?!",
  "복권 당첨 날 차원 이동되다?!",
  "빙의한 김에, 가문 하나 살리겠습니다!",
  "우연히 주운 일기장이 미래를 예지한다.",
  "이게 그 여자 딸이라고?",
  "직접 여주인공을 찾아주겠어",
  "언니, 비켜봐",
  "팀장님, 혹시 저 좋아하세요?",
  "스치는 만남이 운명이 되어..",
  "대마법사 샬롯의 제자들이 이상하다?",
  "하렘 속 두 소녀의 핏빛 욕망",
  "다시 찾고 싶은 첫사랑의 향기",
  "금수저를 물고 태어나 버렸다!",
  "지구 최초 가출 드래곤의 인간계 모험!",
  "여우와 얽힌 친구를 구하라!",
  "모두 내 손으로 키우고 말겠어! ",
  "홍차 덕질만 하면 안 될까요?",
  "여신으로 만들어줄게",
  "나만을 위해 한없이 지독해지겠어",
  "당신, 스스로 나오게 될 거야",
  "달의 이름으로 널 용서하지 않겠다!",
  "여고생, 드래곤으로 환생하다!",
  "조선 후기, 저주받은 소년과 죄를 지은 소녀",
  "복수를 위해 악한 기사가 되다.",
  "사람들을 구하려면 결혼해야 된다고?",
  "신기록을 세운 날 불행이 시작되다",
  "그들을, 살리시겠습니까?",
  "게스트하우스 상속녀!",
  "위튜브배틀로 누명을 풀겠어!",
  "감정을 억제 당한 묘족의 비밀",
  "나 좀 내버려둬!!",
  "이제부턴 진짜 간지를 장착할 때.",
  "우리 남편이 달라졌어요!",
  "시즌3, 레전드의 귀환!",
  "게임 속에서 나는 최고가 된다!",
  "관종 패밀리의 막내, 첫사랑은 연예인! ",
  "그를 만난 순간부터 시작이었다.",
  "내가 관심 있는 건 너야",
  "한두 번이 아닌 실패, 점점 멀어지는 사이",
  "여러분을 대신해 공포 체험해드립니다.",
  "약쟁이들의 병맛 영화 리뷰!!",
  "조까치의 슬기로운 군대생활!",
  "공주님의 좌충우돌 모험 로맨스!",
  "그녀 앞에 나타난 세 남자, 그녀의 선택은?",
  "10년 개고생했더니, 인성 F등급?!",
  "기적처럼 찾아온 두 번째 삶",
  "바보짓은 웽 때문이아!",
  "뭐든 망가뜨리는 잉어 각시!",
  "일단 귀싸대기 한 방 돌리고 시작하겠습니다.",
  "나는 '버그'가 되었다",
  "전문 킬러였던 내가 낯선 세계에서 공주로 빙의했다?!",
  "K-아줌마 패치된 외국인 엄마",
  "생존이 아닌, 복수를 선택했다!",
  "버그로 성공하기!?",
  "가상현실 게임에 갇혀버렸다?",
  "늦깎이 의대생에게 찾아온 순정",
  "눈 떠보니 책속 감방?!",
  "누나, 저 기억 안 나요?",
  "누구보다 아싸가 되고 싶은 최강 찌질이.",
  "적군에 이상형이 있다.",
  "'초인'이 되면 뭘 해야 하지?",
  "썸 비스무리한 것이 시작된다?!",
  "다시 한번 최고의 히어로로!",
  "미술학원 원장이 파라오?!",
  "게임 몬스터의 랭커들을 향한 복수!",
  "누가 아군이고, 누가 적인가.",
  "마녀로 환생한 내게 용사가 되라고?!",
  "결코 평범할 수 없는 능력자 세계",
  "초보 아빠의 인간 아들 키우기",
  "20대가 되면 멋진 어른이 되는 줄 알았어.",
  "아시르하트의 공주가 되어주지 않을래요?",
  "속물 표사 무영! 협객이 되어라!",
  "통통녀의 근육미녀 도전기!",
  "올빼미 법정을 경계하라!",
  "'갑자기 연애를 쉬자니 대체 무슨 소리야?'",
  "천재 마법사의 몰락과 대재앙",
  "엉뚱한 그들의 호구같은 나날!",
  "초보집사 라이언과 길냥 춘식이",
  "무인도에서 탈출할 수 있을까?",
  "엄마가 돌아왔다!!",
  "내 집사가 되어라!",
  "코피가 터져야 변신하는 소녀?!",
  "이까짓 세상, 망해버려라!",
  "'라그나로크' 이명진 작가의 신작!",
  "진실을 밝히는 자는 누구일까.",
  "삼장 법사, 한국으로 타임슬립하다?!",
  "악마의 부활을 막아라!",
  "대기업 면접이 가상현실게임?!",
  "난, 너의 감정이 보여",
  "톱스타의 첫사랑♥ 삼각 비행 로맨스?!",
  "내 방에 엘프가 몰래 숨어살고 있다고? ",
  "다음 챕터의 주인공은 누구?!",
  "강자들에게 도전장을 내밀다!",
  "귀여운 죠르디의 짠내 나는 취준일기!",
  "윤태호 작가가 남극에서 본 것 ",
  "광기가 팡팡 터지는 우주 활극!",
  "아무도 몰랐던 라이언의 속마음!",
  "각자의 생존을 위한 싸움이 시작된다!",
  "죽은 후에도, 인간의 뇌는 37시간 동안 살아있다",
  "세상을 지배해 최정상까지 올라가겠어!",
  "독립을 원했던 우리의 이야기",
  "극한직업...  '고등학생'",
  "둘 중 하나는 죽어야 해",
  "수상한  야자를 통해 시작된 통쾌한 역전극",
  "그가 궁금해졌다.",
  "이 세상에 돈으로 이기지 못할 건 없다!",
  "황폐화된 지구, 거대 음모에 휩싸이다",
  "스트레스 극복 방법 'ㅅㅂ비용'",
  "여긴 어디? 너는 누구…?",
  "우리, 돌아갈 수 있을까?",
  "남북한 두 '철우'의 첩보 스릴러",
  "바우 장군의 역사 팩션",
  "DP 김보통 작가의 독립만화!",
  "오늘도 지구의 안전을 무사히!",
  "윤회의 끝을 향한 신비한 여정!",
  "이게 그 여자 딸이라고?",
  "위튜브배틀로 누명을 풀겠어!",
  "팀장님, 혹시 저 좋아하세요?",
  "여우와 얽힌 친구를 구하라!",
];

const imgList = [
  "https://dn-img-page.kakao.com/download/resource?kid=coL2BT/hzb7AO2NDX/kUIOK8kQUGSR1jVL7R9Sx0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=jrIdd/hyQ9TgH4QY/AvsnQkcz862RG6i4Kd6y40&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=brEVr3/hzhOkF7eSj/xHW4lqdI3DERYTAhj85wa1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bjeleh/hyqE8jN3G6/EVu8C9UFE6lHrix03zV4d0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=0CvZg/hzb7rxGCIw/rHqCxVFTy4Pci0fwEIEzb0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bIghi4/hzhOiO0RK2/3nk1EZ4lk7oiBKgMUEAhr0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=dpi2hQ/hzachb0swi/K1BPhQgvFpmpvM0MuK1Rm0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cSZvNP/hyATtZmAek/QlK4PcBrTSxbHzZKk6GFxk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=4i2ND/hy41JLoVim/MEkdJfaKxe99QY1C20PExk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bz4eLQ/hzhOj1oJl9/vnzBdr0fhwgLbPXwksflHK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=rGvCB/hyQ9SvdKaJ/352tI2IDzvR7DZts19N2A1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=ba9hD3/hyCviayDSb/1YnbHY9pZbhuoPRhhsQTVk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=eqfMZ/hzb7zvS9yr/cRm04K41ENVEcDxX4MQKEK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=iNQ5C/hyORZcC4uw/bcGTnQlm5TViUSWUPlprBk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=dy1Oc2/hywgI1bMRS/7QsDTWgZtp8XA30K0Si1u0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=c7MYlm/hzacg51sPK/BeTG2IBB2SQopN89PkjoeK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bLSjMP/hyATqOo1tL/EOpamut1aVtFlsn0C8yNz1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=B9yif/hyoXEYHVNL/gMonAbOI5FKnlnRpgUvmR0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cws2hh/hyfOlucjuP/ElSIwCpSyNvmQnZG2oXlU0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=wu2lt/hzhOdUlMZR/QYDG8wVV6s3tKkWcHwJoc1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=ccYwBr/hzb7uueOFg/8zKwiU60x4qynHH5gpXS40&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bgozrm/hzacc9w4du/IPiCrWsGU7P6buvUwydcGk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cInYNK/hyuhoXGQrt/6FrKojz27sCCDRZx9OBD5k&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bDmFqi/hyzcJwkL6e/PMkmB4ZMwzTikIfFB6DDxK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bnAvIc/hzacemjdcr/M7c1HjORSAisOxCj5Uwwt0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=uIL7S/hyVkMRW2rq/Mv5xkB75o1iy8oYXvwa0YK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=wHsNN/hyEdkYETiJ/rLK9TjlszrRAda9MbkWeo1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=btMdgU/hyZ8A0JC9C/618mSeS7Y5RzQmcewxgGn1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=xFknF/hzb7AHmG0T/1Ak5DEmCg4SGLDWauhOsU0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=buVD8U/hyQ9UHddmr/SJU4s67K7HWL2xRjd1bVMk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=0DbEn/hyCvkMAvWN/BNHJo68pzq5LUjQIEIPyx1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=chUX1P/hyVkI3H0ff/oBYHB6BQ8ZZCwsdZEfsod0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cRJGO8/hzacgrhs4k/cWdEKrEqQeH2Pn629kzKKK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=k4XUx/hyoXzW9UAY/wbX7BSnWm3yF6jNFR7Ft4K&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cjFo4e/hyEdjMX2CA/o8JiHhI9JLRbhzsoPF5xfk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=VtKmn/hzb7AhhCDc/MK2rp9BrPkzYhUJ3Qrdmk0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=czdyMc/hzacdm8zn0/BHDEfE1MZKN0efwhhyf4i0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cyxTfE/hyQ9VFTFxG/2yHbtFqdN4nLweeZlS3tak&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=deX3Y/hzaccWQ2rk/D9vgZcjlyL5c6qB4Gdf840&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=PLNFx/hyF27wdmrN/PplFuP5KO34FdgRaTr9Yg0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=WVu4n/hyATrN4GsP/PDyVRWqBes1wZfBN63iR3k&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=Tl2Q4/hzacfS2Bbs/kEUES1V6ggO21luFnVGca0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=De7tq/hyATtrkpyo/m6eQeaYzqhUTSBpGDGlW20&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=dmaZLT/hzb7rxhmlz/4UqTzrdzXkui9o6Lgs8CxK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bxOKhj/hyVkIPqw73/RXnB5pyvhjeuTIduHwfgJK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=jqHRN/hyQ9PZRLBv/eowWcMKYdkPcXuzZhOaFu0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bDTxiO/hy41O7MZfe/0Gkry4K1RDTTV4SvWvSCJK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=6gJqQ/hyQ9PFRK0t/3lMa7B6GQtaufzczUgqPYK&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=HM3KA/hyQ9T9nnRM/oY7uuxyJU0Giu2ZdH8AfM1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cDJMLx/hyF23OD52F/QYmAL7ibTqwql5lEN46Mkk&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=n79ft/hywgA9NVsj/sTq4TRecVyVL4cMEKuziO1&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=bLZEi9/hyQ9LpEAXn/jsKKjvkGlDhyJZchR7J7z0&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=RKoBr/hyZ8ByqwjA/8FDkViAdKZ0EBmKGtqFM9k&filename=th2",
  "https://dn-img-page.kakao.com/download/resource?kid=cExDFg/hy41IlvbWe/hrDNkrzhlvFPZ3HwVZANtK&filename=th2",
];
