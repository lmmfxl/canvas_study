function progressBar(option) {
    this._init(option);
}

progressBar.prototype = {
    _init:function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.fill = option.fill || 'red';
        this.stroke = option.stroke || 'blue';

        const innerRect =new Konva.Rect({
            x:this.x,
            y:this.y,
            width:60,
            height:this.h,
            fill:this.fill,
            id:'innerRect',
            cornerRadius:this.h/2
        });

        const outerRect = new Konva.Rect({
            x:this.x,
            y:this.y,
            width:this.w,
            height:this.h,
            stroke:this.stroke,
            strokeWidth:3,
            cornerRadius:this.h/2
        });

        this.group = new Konva.Group({
            x:0,
            y:0
        });
        this.group.add(innerRect);
        this.group.add(outerRect);

    },

    addToLayer:function (arg) {

        arg.add(this.group);

    },

    changeValue: function (value) {
        if(value > 1){
            value = value/100;
        }
        const inner = this.group.findOne("#innerRect");
        inner.to({
            width:value * this.w,
            duration:2
        });

    }


}
