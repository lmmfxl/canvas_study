function HistoGram(option) {
    this._init(option);
};

HistoGram.prototype = {
    _init:function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.w = option.w || 0;
        this.h = option.h || 0;
        this.data = option.data || [];

        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        });

        //创建坐标轴
        const bsLine = new Konva.Line({
            points:[0,0,this.w,0],
            strokeWidth:1,
            stroke:'lightgreen'
        });
        this.group.add(bsLine);

        const self = this;
        //创建矩形
        this.data.forEach(function (item,index) {
            const rect = new Konva.Rect({
                x:(1/4 + index) * self.w / self.data.length,
                y:- item.value * self.h,
                height:item.value * self.h,
                width:1/2 * self.w / self.data.length,
                fill:item.color,
                cornerRadius:10
            });
            self.group.add(rect);

            //创建百分比文字
            const scaleText = new Konva.Text({
                x:( index) * self.w / self.data.length,
                y:- item.value * self.h - 16,
                fontSize:16,
                fill:item.color,
                text:item.value * 100 + '%',
                width: self.w / self.data.length,
                align:'center',
                name:'scale'
            });
            self.group.add(scaleText);

            //创建底部文字
            const bottomText = new Konva.Text({
                x:index * self.w / self.data.length,
                y: 0,
                fontSize:16,
                fill:item.color,
                text:item.name,
                width:self.w / self.data.length,
                align:'center',
                rotation:30
            });
            self.group.add(bottomText);
        });

    },

    addToLayer:function (arg) {
        arg.add(this.group);

    },



    animate:function () {
        const self = this;
        //长方形动画
        this.group.find('Rect').each(function (item,index) {
            item.y(0);
            item.height(0);
            item.to({
                duration:1,
                y:-self.data[index].value * self.h,
                height:self.data[index].value * self.h
            })
        });

        //百分比文字动画
        this.group.find('.scale').each(function (item,index) {
            item.y(-16);
            item.to({
                duration:1,
                y:-self.data[index].value * self.h -16
            })

        })

    }
}