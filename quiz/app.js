const quiz = [
  {
    id: "1",
    question: 'このご時世、他の人が使った鉛筆はちょっと不安...\n\"マイ鉛筆\"で投票はできるの?',
    answers: {
      A: "投票所で用意している筆記具しかダメ",
      B: "必要な手続きをした人しかダメ",
      C: "投票所の人に聞いて大丈夫なら使える",
    },
    correct: { C: "投票所の人に聞いて大丈夫なら使える"},
    explanation: "投票所備えつけの鉛筆を必ず使わなければいけないわけではありません。ボールペンはインクがにじむ可能性があるので、鉛筆かシャープペンシルの使用を推奨しています。感染症対策で、使い捨てできるクリップペンシルプラスチックの軸の先に鉛筆の芯がついたものを導入する自治体もあります。",
    explanation2:"#マイ鉛筆で投票   #実は持っていけるマイ鉛筆   #投票所の感染症対策"
  },
  {
    id: "2",
    question: '多くの選挙の投票用\"紙\"はフツーの紙ではなく、実は合成紙で作られています。そのすごい特徴とは？',
    answers: {
      A: "光にかざすと文字が浮き出る",
      B: "プラスチックとしてリサイクルできる",
      C: "火をつけても燃えない"
    },
    correct: { B : "プラスチックとしてリサイクルできる"},

    explanation: "使い終わった投票用紙は、プラスチック製品としてリサイクルされうちわ、投票所の足元に引く養生シート、ポスター掲示板などに生まれ変わっています。また、投票用紙は折り畳んでも投票箱の中で自然に開くので開票作業がスムーズに行えます。しっとり滑らかな書き心地をぜひ投票所でお試しください。",
    explanation2:"#投票用紙のナゾ   #投票用紙が大変身   #極上の書き味"
  },
  {
    id: "3",
    question: '親と一緒に投票所までついてきた４歳のツムギちゃん と１７歳のハルトくん。「一緒に中に入りたいな〜」。入ることはできる？',
    answers: {
      A: "２人とも入れない",
      B: "ツムギさんは入れる",
      C: "２人とも入れる"
    },
    correct: { C: "２人とも入れる"},

    explanation: "公職選挙法の改正で平成28年から、選挙人が投票所に同伴できる子どもの範囲が「幼児」から「18歳未満」に拡大されました。早い段階から投票所の雰囲気に触れてもらい 一票の大切さを学んでもらおうというものです。 ただし、大声で騒いだり、他の人の投票をのぞき見したりはしないでくださいね。",
    explanation2: "#18歳未満でも入れるよ #親と一緒に行ってみた ＃一票の大切さを学ぼう"
  },
  {
    id: "4",
    question: '候補者を広くアピールする選挙カー。日本では、他にどんな乗り物で選挙運動をすることができる？',
    answers: {
      A: "船",
      B: "オープンカー",
      C: "セグウェイ"
    },
    correct: { A: "船" },

    explanation: "海に囲まれた島々では、自動車のほか「船舶」で選挙運動をすることもあります。実は東京都墨田区でも、川沿いに住宅が立ち並ぶエリアでは候補者が船上からアピールすることも。また、同じ車でもオープンカーでの選挙運動は公職選挙法で認められていません。",
    explanation2:"#車だけじゃなかった   ＃東京でも見られるよ   ＃選挙っておもしろい"
  },
  {
    id: "5",
    question: 'インターネットで投票できたらいいのにな～？えっ海外にはあるの？どこの国',
    answers: {
      A: "IT 大国 インド",
      B: "電子国家 エストニア",
      C: "GAFA を生み出した アメリカ"
    },
    correct: { B : "電子国家 エストニア"},

    explanation: "人口約130万人のエストニアは、行政サービスのほとんどが電子化された、まさに電子政府の国。2005年に世界で初めて全国規模の選挙でネット投票を実施し、2019年の国会議員選挙では全投票の43.8%が電子投票システムによって投票されました。ちなみに、日本でも人工知能（AI）などを活用した国の特区「スーパーシティ構想」で、「インターネット投票」の実施を目標に掲げている自治体もあります。",
    explanation2:"#ネット選挙   ＃便利そう   ＃世界で唯一"
  }
];

const url = new URL(window.location.href);
let quizIndex = url.searchParams.get('quizIndex');
let score = url.searchParams.get('score');
if (!score) {
  score = 0;
}
if (!quizIndex) {
  quizIndex = 0;
}
const quizLength = quiz.length;

let elmJsAnswerText = document.getElementById('js-answer-text');
let elmJsAnswer = document.getElementById('js-answer');
let elmAnswerText = document.getElementById('answer-text');
let elmAnswerText2 = document.getElementById('answer-text2');

if (elmJsAnswerText) {
  elmJsAnswerText.textContent = Object.values(quiz[quizIndex].correct);
}

if (elmJsAnswer) {
  elmJsAnswer.textContent = Object.keys(quiz[quizIndex].correct);
}

if (elmAnswerText) {
  elmAnswerText.textContent = quiz[quizIndex].explanation;
}
if (elmAnswerText2) {
  elmAnswerText2.textContent = quiz[quizIndex].explanation2;
}

const setUpQuiz = () => {
  document.getElementById('id').textContent = quiz[quizIndex].id;
  let elmJsQuestion = document.getElementById('js-question');
  if (elmJsQuestion) {
    elmJsQuestion.textContent = quiz[quizIndex].question;
  }
  let btnText = document.getElementsByClassName('q-btn-txt');

  if (window.location.pathname.includes('/quiz/question.html')) {
    btnText[0].textContent = quiz[quizIndex].answers.A;
    btnText[1].textContent = quiz[quizIndex].answers.B;
    btnText[2].textContent = quiz[quizIndex].answers.C;
  }

   if (quizLength === quizIndex + 1) {
    let t = document.getElementById("next_quiz_btn_img");
    if (t) {
      t.src = "../img/point.png";
    }
  }
}
 setUpQuiz();


// ○×要素追加
const addCircle = () => {
  const circle = document.createElement('div'); // div要素作成
  circle.setAttribute("class", "circle"); // div要素にclassを設定
  const parentCircle = document.getElementById("main"); //親要素（main）への参照を取得
  parentCircle.appendChild(circle); // 親要素に子要素を追加
}

const addCross = () => {
  const cross = document.createElement('div'); // div要素作成
  cross.setAttribute("class", "cross"); // div要素にclassを設定
  const parentCross = document.getElementById("main"); //親要素（main）への参照を取得
  parentCross.appendChild(cross); // 親要素に子要素を追加
}


const clickHandler = (e) => {
  if (Object.keys(quiz[quizIndex].correct)[0] === e.target.id) {
    const music= new Audio('../sound/Quiz-Correct_Answer02-1.mp3');
    addCircle();
    music.volume = .1;
    music.play();
    score++;

  } else {
    const music= new Audio('../sound/Quiz-Wrong_Buzzer02-2.mp3');
    addCross();
    music.volume = .1;
    music.play();
  }
  setTimeout(() => location.href = "https://sanaevvv.github.io/quiz/quiz/answer.html?quizIndex=" + quizIndex+"&score="+score, 1500);
}

 // クリックしたら正誤判定する
const btn = document.getElementsByTagName('button')
if (window.location.pathname.includes('/quiz/question.html')) {

  btn[0].addEventListener('click', (e) => {
    clickHandler(e);
  });

  btn[1].addEventListener('click', (e) => {
    clickHandler(e);
  });

  btn[2].addEventListener('click', (e) => {
    clickHandler(e);
  })
}

// カウントダウン
window.onload = function () {
  let count = 15;

    function timer() {
      if (count >= 0) {
        const timer = document.getElementById("timer");
        if (timer) {
          document.getElementById("timer").textContent = count
          count--;
        }
      } else {
        location.href = "https://sanaevvv.github.io/quiz/quiz/answer.html?quizIndex=" + quizIndex + "&score=" + score;
      }
    }
    setInterval(timer, 1000);

}

//  次のクイズへ
const nextClickHandler = () => {
  quizIndex++;

  if(quizIndex < quizLength) {
    setUpQuiz();
    location.href = "https://sanaevvv.github.io/quiz/quiz/question.html?quizIndex=" + quizIndex + "&score=" + score;

  } else {
    location.href = "https://sanaevvv.github.io/quiz/quiz/point.html?score=" + score;
  }
}

const button = document.getElementById("next_quiz_btn");

if (button) {
  button.addEventListener('click', nextClickHandler);
}
