function rect(option) {
    this._init(option);
}
rect.prototype = {
    _init: function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.width || 10;
        this.h = option.height || 10;
        this.fillStyle = option.fillStyle || 'red';
        this.strokeStyle = option.strokeStyle || 'blue';
        this.opacity = option.opacity || 1;
        this.angle = option.angle || 0;
        this.transitionX = option.transitionX || 0;
        this.transitionY = option.transitionY || 0;
        this.scaleX = option.scaleX || 1;
        this.scaleY = option.scaleY || 1;
    },
    render: function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.globalAlpha = this.opacity;
        ctx.scale(this.scaleX,this.scaleY);
        ctx.rotate(this.angle * Math.PI / 180);
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

    }
}