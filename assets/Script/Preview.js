cc.Class({
    extends: cc.Component,

    properties: {

        back: {
            default: null,
            type: cc.Node
        },

        yl: {
            default: null,
            type: cc.Node
        },




    },

    onLoad: function () {

    },

    update: function (dt) {

    },

    show: function (card) {

        var newCard = cc.instantiate(card);
        this.showNode = newCard;
        this.node.addChild(newCard);

        newCard.setScale(0.41, 0.41);//改变缩放
        newCard.position = this.yl.position;//设置位置
        newCard.opacity = 255;

        this.node.opacity = 255;

    },

    hide: function () {
        this.node.opacity = 0;
        this.showNode.destroy();


    }
});
