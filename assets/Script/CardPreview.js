cc.Class({
    extends: cc.Component,

    properties: {




    },

    onLoad: function () {

        var self = this;

        this.node.on('mouseenter', function () {
            var preview = cc.find("preview").getComponent('Preview');//获取预览

            var hand = self.node.getChildByName("S");//手牌
            preview.show(hand);


        }, this.node);

        this.node.on('mouseleave', function () {
            cc.find("preview").getComponent('Preview').hide();//隐藏

        }, this.node);



    },

    update: function (dt) {

    },



});
