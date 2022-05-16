const url = new URL(window.location.href);
let score = url.searchParams.get('score');
if (!score) {
  score = 0;
}
document.getElementById("score").textContent = `${score} 問正解！`;
  switch (score) {
    case "0":
      document.getElementById("comment").textContent = "残念・・・もう一度頑張ろう！";
      break;
    case "1":
      document.getElementById("comment").textContent = "頑張ろう！何回もチャレンジだね！";
      break;
    case "2":
      document.getElementById("comment").textContent = "もう一度チャレンジしよう！";
      break;
    case "3":
      document.getElementById("comment").textContent = "惜しい！あともう一息だよ";
      break;
    case "4":
      document.getElementById("comment").textContent = "すごい！上出来だね！";
      break;
    case "5":
      document.getElementById("comment").textContent = "素晴らしい！パーフェクト！";
  }
