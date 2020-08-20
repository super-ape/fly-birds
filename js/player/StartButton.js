// 游戏结束时,显示在屏幕中央的图标

import { Sprite } from "../base/Sprite";
import { DataStore } from "../base/DataStore";

export class StartButton extends Sprite{
  constructor(){
    // 获取图片
    const img = Sprite.getImg('startButton');
    // 获取地板高度
    const land = Sprite.getImg('land').height;
    // 获取屏幕高度
    const height = DataStore.getInstance().canvas.height-land;
    const width = DataStore.getInstance().canvas.width;
    // 图片的高
    const h = img.height;
    // 图片的宽
    const w = img.width;
    // 图标的起始坐标
    const y = height/2 - h/2;
    const x = width/2 - w/2;
    super(img,0,0,w,h,x,y,img.width,img.height);
  }
}