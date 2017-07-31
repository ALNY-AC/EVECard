cc.Class({
    extends: cc.Component,

    properties: {
        //============================
        //参数label
        iskLabel: {
            default: null,
            type: cc.Label
        },
        nameLabel: {
            default: null,
            type: cc.Label
        },
        cardTypeLabel: {
            default: null,
            type: cc.Label
        },
        attackLabel: {
            default: null,
            type: cc.Label
        },

        attackDistanceLabel: {
            default: null,
            type: cc.Label
        },

        hpLabel: {
            default: null,
            type: cc.Label
        },

        infoLabel: {
            default: null,
            type: cc.Label
        },
        //============================
        //场面参数label
        cm_attackLabel: {
            default: null,
            type: cc.Label
        },
        cm_hpLabel: {
            default: null,
            type: cc.Label
        },

        //============================
        //手牌和场面牌
        spNode: {
            default: null,
            type: cc.Node
        },
        cmNode: {
            default: null,
            type: cc.Node
        },

        //============================


        cardIndex: -1//在mods文件中的索引


    },

    setCardIndex: function (index) {
        this.cardIndex = index;

        //根据索引来装载卡牌
        //============================
        //装载卡牌mod信息

        var cardMods = require("CardMods");//加载Card Mod信息

        if (this.cardIndex != -1) {
            //装载信息
            this.node.modInfo = cardMods.d[this.cardIndex];
        }

        this.node.type = 'Card';//设置node的识别


        //============================
        //设置场面卡牌形态
        this.cmNode.setContentSize(190 * this.node.modInfo.size.w, 190 * this.node.modInfo.size.h);//设置大小

        //============================

        //加载图片资源

        var spImgSrc = this.node.modInfo.imgSrc.sp;//手牌、预览牌的图片地址
        var cmImgSrc = this.node.modInfo.imgSrc.cm;//场面牌的图片地址
        // 加载 SpriteFrame
        var self = this;
        cc.loader.loadRes("Texture/" + spImgSrc, cc.SpriteFrame, function (err, spriteFrame) {
            //手牌图片
            self.spNode.getComponent('cc.Sprite').spriteFrame = spriteFrame;
            self.spNode.opacity = 255;


        });
        cc.loader.loadRes("Texture/" + cmImgSrc, cc.SpriteFrame, function (err, spriteFrame) {
            //场面图片
            self.cmNode.getComponent('cc.Sprite').spriteFrame = spriteFrame;

        });
        self.spNode.opacity = 255;

    },

    onLoad: function () {

    },



    update: function (dt) {
        //============================
        //更新数据
        this.iskLabel.string = this.node.modInfo.isk;//金钱
        this.nameLabel.string = this.node.modInfo.info.cardName;//舰船名
        this.cardTypeLabel.string = this.node.modInfo.info.type;//舰船类别
        this.attackLabel.string = this.node.modInfo.attack;//攻击力
        this.attackDistanceLabel.string = this.node.modInfo.attackDistance;//攻击距离
        this.hpLabel.string = this.node.modInfo.hp;//血量
        this.infoLabel.string = this.node.modInfo.info.cardInfo;//信息

        //============================
        //场面
        this.cm_attackLabel.string = this.node.modInfo.attack;//攻击力
        this.cm_hpLabel.string = this.node.modInfo.hp;//血量

    },
});
