let angle = 0; // 用於旋轉的角度
let r = 255, g = 0, b = 0; // 初始顏色（紅色）

function setup() {
  createCanvas(windowWidth, windowHeight);  // 產生一個畫布
  background("#fcd5ce");  // 設定背景顏色
}

function draw() {
  background("#fcd5ce");  // 背景顏色
  rectMode(CENTER);
  noFill();  // 物件不充滿顏色
  stroke("#b8c0ff");  // 線條的顏色
  strokeWeight(3);  // 線條的粗細
  
  let rect_width = 50 + mouseX / 10; // 方形的寬度
  let bc_width = 50 + mouseY / 10;   // 大圓的寬度
  let sc_width = 25 + mouseX / 10;   // 小圓的寬度

  // 繪製形狀的網格
  for (let j = 0; j < 20; j++) {  // 產生第幾排
    for (let i = 0; i < 40; i++) {  // 產生一整排物件
    
          if(j<5){  //0-4排的顏色
            stroke("#ffd6ff")
          } else if(j<10){  //5-9排的顏色
            stroke("#e7c6ff")
          } else{stroke("#b8c0ff")  //第10排之後的顏色
        }
      ellipse(25 + 50 * i, 25 + 50 * j, bc_width);  // 大圓
      rect(25 + 50 * i, 25 + 50 * j, rect_width);    // 正方形
      ellipse(50 + 50 * i, 50 + 50 * j, sc_width);    // 小圓
    }
  }

  // 更新顏色漸變
  r = (r + 1) % 256;
  g = (g + 2) % 256;
  b = (b + 3) % 256;

  // 設置字母的顏色和旋轉
  fill(r, g, b);
  textSize(50);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);  // 移動到畫布中心
  rotate(angle);  // 旋轉
  text('RENEE', 0, 0);  // 畫字母
  angle += 0.02;  // 每幀增加一點旋轉角度
}
