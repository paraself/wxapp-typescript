"use strict";var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},Immediate_1=require("../util/Immediate"),AsyncAction_1=require("./AsyncAction"),AsapAction=function(t){function e(e,n){t.call(this,e,n),this.scheduler=e,this.work=n}return __extends(e,t),e.prototype.requestAsyncId=function(e,n,i){return void 0===i&&(i=0),null!==i&&i>0?t.prototype.requestAsyncId.call(this,e,n,i):(e.actions.push(this),e.scheduled||(e.scheduled=Immediate_1.Immediate.setImmediate(e.flush.bind(e,null))))},e.prototype.recycleAsyncId=function(e,n,i){return void 0===i&&(i=0),null!==i&&i>0||null===i&&this.delay>0?t.prototype.recycleAsyncId.call(this,e,n,i):void(0===e.actions.length&&(Immediate_1.Immediate.clearImmediate(n),e.scheduled=void 0))},e}(AsyncAction_1.AsyncAction);exports.AsapAction=AsapAction;