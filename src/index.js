const onClickAdd = () => {
  if (document.getElementById("add-text").value) {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompletetTodo(inputText);
  } else {
    alert("入力してね！");
  }
}

const createIncompletetTodo = (todo) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = todo;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"
  completeButton.addEventListener("click", () => {
    const moveTarget = completeButton.closest("li");
    completeButton.nextElementSibling.remove();
    completeButton.remove();
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const todoText = backButton.previousElementSibling.innerText;
      createIncompletetTodo(todoText);
      backButton.closest("li").remove();
    });
    moveTarget.firstElementChild.appendChild(backButton);
    document.getElementById("complete-list").appendChild(moveTarget);
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除"
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);




// import "./styles.css";
/**
 * console.log("hogehoge");
 */

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数上書き";
// console.log(val2);

// letval2 = "let変数再宣言不可";
// console.log(val2);

// const val3 = "const変数";
// console.group(val3);

// val3 = "const変数上書き再宣言不可";
// console.group(val3);

// constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: "しょへ",
//   age: 37
// };
// console.log(val4);
// val4.name = "しょうへい"
// val4.address = "Kyoto"
// console.log(val4);

// constで定義した配列はプロパティの変更可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);
// val5.push = "monkey";
// console.log(val5);

// // テンプレート文字列
// const name = "しょへ"
// const age = 37;
// // 従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// // console.log(message1);
// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数
// 従来の関数
// const func1 =  function (str) {
//   return str;
// }
// console.log(func1("いえい"));
// アロー関数を使う =(引数、1つの場合はこのカッコ省略して引数名だけでも良い) => {}
// returnは{}も省略できる
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です！"));
// const func3 = str => str;
// console.log(func3("func3です！"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10,3));
// const func4 = (num1, num2) => ({
//   hoge: num1,
//   fuga: num2
// });
// console.log(func4(10,20));

// 分割代入
// const myProfile = {
//   name: "ほげ",
//   age: 22
// };
// // const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}だす。`;
// // console.log(message2);
// const { name, age } = myProfile;
// const message3 = `名前は${name}です。年齢は${age}だす。`;
// console.log(message3);
// const myProfile = ["じぇじぇじぇ  ", 34];
// const [name, age] = myProfile;
// const message4 = `僕${name}、年は${age}だ。`;
// console.log(message4);

// デフォルト値（引数、分割代入）
// const sayHello = (name) => console.log(`こんにちは！ ${name}さん！`);
// sayHello("しょへ");
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！ ${name}さん！`);
// sayHello();
// const myProfile = {
//   age: 31
// }
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記号
// const name = "へいへい";
// const age = 37;
// const myProfile = {
//   name: name,
//   age: age
// };
// console.log(myProfile);
// const myProfile = { name, age };
// console.log(myProfile);

// スプレッド構文 ...
// 配列の展開
// const arr1 = [1, 2]
// console.log(arr1);
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// まとめる
// const arr2 = [1,2,3,4,5];
// const[num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);
// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// // const arr6 = [...arr4];
// // console.log(arr6);
// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);
// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// mapやfilterを使った配列の処理
// const nameArr = ["山田", "田中", "安部"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "安部") {
//     return name;
//   } else {
//     return '${name}さん';
//   }
// });
// console.log(newNameArr);

//　三項演算子
// 条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 2 ? "trueです" : "falseです";
// console.log(val1);
// const num = 1111300;
// // console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です" ;
// }
// console.log(checkSum(40, 61));

// 論理演算子の本当の意味を知ろう && ||
// truthy, falsyについて
// const val = 1;
// if (val) {
//   console.log("valはtruthyです");
// } else {
//   console.log("valはfalsyです");
// }
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }
// // ||は左側がtruthyの時その時点で返却する
// const num = 1;
// const fee = num || "金額未設定です";
// console.log(fee);

// // &&は左側がfalthyの時その時点で返却する
// const num2 = 1;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);