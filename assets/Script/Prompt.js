cc.Class({
    extends: cc.Component,

    properties: {

        label: {
            default: null,
            type: cc.Label
        },
        Sprite: {
            default: null,
            type: cc.Sprite
        }

    },

    onLoad: function () {

    },

    update: function (dt) {

    },

    show: function (str) {


        this.label.string = str;

        this.node.width = this.label.node.width;
        this.Sprite.node.width = this.label.node.width + 100;


        var myAction = cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(1.0));
        this.node.runAction(myAction);
    }
});
