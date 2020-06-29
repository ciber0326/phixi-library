/// <reference path='./pixi.js.extend.d.ts'/>
import { Container } from "pixi.js"
import { addMethod } from "./utils"

/**
 * PIXI.Container.setOrigin
 */
addMethod<(PIXI.Container | PIXI.Sprite)>(Container.prototype, "setOrigin", function (x: number, y: number) {
  if ('anchor' in this) {
    this.anchor.set(x, y)
  } else if (this.pivot) {
    this.pivot.set(this.width * x, this.height * y)
  }
  return this;
})

/**
 * PIXI.Container.addChildTo
 */
addMethod(Container.prototype, "addChildTo", function (parent: PIXI.Container) {
  this.setParent(parent);
  return this;
})

/**
 * PIXI.Container.remove
 */
addMethod(Container.prototype, "remove", function () {
  this.parent.removeChild(this)
  // this.emit(PhinaEvent.Removed) // 元々removedイベントはpixiも発火するため不要
  return this;
})
