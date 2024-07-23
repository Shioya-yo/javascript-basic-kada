// 引数で渡した値を二乗した計算結果を戻り値として返す関数を記述してください。
// 計算結果（関数の戻り値）はコンソールに出力してください。

const Squared=(num)=>{
  console.log(num*num);
} 

// functionもやってみた
function sQuared(num) {
  console.log(num * num);
  return num * num;
}

// 関数を呼び出して、引数として渡す。
Squared(10);

// function
sQuared(25);
