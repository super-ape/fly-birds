// 地板类

import { DataStore } from "../base/DataStore";
import { Sprite } from "../base/Sprite";

export class Land extends Sprite{
  constructor(){
    // 获取背景图
    const img = Sprite.getImg('land');
    // 获取屏幕高度
    const height = DataStore.getInstance().canvas.height;
    // 图片的高
    const h = img.height;
    // 图片的起点坐标
    const y = height - img.height;
    // 重写父类构造
    super(img,0,0,img.width,img.height,0,y,img.width,img.height);
    this.Landx = 0;
  }

  // 重写draw方法,实现地板的移动效果
  draw(){
    this.x = this.x - 2;
    const canvas = DataStore.getInstance().canvas;
    if(this.img.width-canvas.width+this.x<=0){
      this.x = 0;                             
    }
    // 调用父类的draw方法
    // 没有传参数,父类draw方法使用默认参数
    // 也就是对应的属性值
    super.draw();
  }
}