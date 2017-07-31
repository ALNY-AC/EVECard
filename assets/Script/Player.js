cc.Class({
    extends: cc.Component,

    properties: {

        hp: 0,//主血量
        isk: 0,//拥有的isk数量
        cards: 0,//目前手牌数量
        hpLabel: {//堡垒血量显示
            default: null,
            type: cc.Label
        },

    },

    onLoad: function () {



    },

    update: function (dt) {

        var middleLine = cc.find('middleLine');//玩家

        var middlePit = middleLine.x;//中间点

        var cannons = this.node.children;

        var width = 107;

        if (cannons.length > 0) {


            var allwidth = cannons.length * (width + 10);//计算整体宽度
            var allMiddlePit = middlePit - allwidth / 2;//计算整体中间点


            //开始进行重新排版
            for (var i = 0; i < cannons.length; i++) {
                var element = cannons[i];

                element.x = i * (width + 10) + 35 + allMiddlePit;

            }
        }
        this.cards = cannons.length;

        this.hpLabel.string = this.hp;

    },
});
