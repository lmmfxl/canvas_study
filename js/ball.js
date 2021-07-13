function ball(option) {
    this._init(option);

};
ball.prototype = {
    _init:function (option) {
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.radius = option.radius || 0;
        this.outerRadius = option.outerRadius || 0;
        this.fill = option.fill || 'red';
        this.text = option.text || '未输入文字';

        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        });

        const innerCircle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.radius,
            fill:this.fill,
            opacity:.6
        });
        const ring = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.radius,
            outerRadius:this.outerRadius,
            fill:'#E1E1E1',
            opacity:.5
        })
        const text = new Konva.Text({
            x:0 - this.radius/2,
            y:-8,
            width:this.radius,
            align:'center',
            fontSize:16,
            fill:'#fff',
            text:this.text
        })
        this.group.add(innerCircle);
        this.group.add(ring);
        this.group.add(text);
    },
    addToLayer:function (arg) {
        arg.add(this.group);
    }
}