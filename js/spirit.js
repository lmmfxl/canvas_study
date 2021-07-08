function spirit(options) {
    this._init(options);
}

spirit.prototype = {
    _init : function (options) {
        this.imgSrc = options.imgSrc || '';
        this.imgX = options.imgX || 40;
        this.imgY = options.imgY || 65;
        this.imgW = options.imgW || 40;
        this.imgH = options.imgH || 65;
        this.x = options.x ===0 ? 0 : (options.x || 10);
        this.y = options.y ===0 ? 0 : (options.y || 10);
        this.w = options.w || 40;
        this.h = options.h || 65;


        this.frameIndex = 0;
        this.dirIndex = 0;
        this.fps = options.fps || 40;

    },
    render:function(ctx){
        const img = new Image();
        img.src = this.imgSrc;
        const self = this;
        img.onload = function () {
            setInterval(function () {
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
                ctx.drawImage(
                    img
                    ,self.frameIndex * self.imgW
                    ,self.dirIndex * self.imgH
                    ,self.imgW
                    ,self.imgH
                    ,self.x
                    ,self.y
                    ,self.w
                    ,self.h
                );
                self.frameIndex ++;
                self.frameIndex %=4;
            },1000 / self.fps);

        }
    }


}