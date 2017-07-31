cc.Class({
    extends: cc.Component,

    properties: {


    },

    onLoad: function () {


        var self = this;


        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            //点击，生成牌到手牌


            var player01 = cc.find('player/player01');//获得场景上玩家对象
            var playerScript = player01.getComponent("Player");//获得玩家脚本


            if (playerScript.cards < 10) {
                //如果手牌数量未超过10，则可以抽牌，否则不可抽牌



                // 加载一个 Prefab 作为基础模型
                cc.loader.loadRes("prefab/card", function (err, prefab) {
                    var mod = parseInt(Math.random() * 3);//随机抽牌，后期加强算法

                    var card = cc.instantiate(prefab);


                    var CardScript = card.getComponent("Card");//获得卡牌脚本
                    CardScript.setCardIndex(mod);//调用卡牌脚本的函数，对卡牌进行装配
                    card.y = 90;
                    card.addComponent('CardDrag');//拖拽组件
                    card.addComponent('CardPreview');//预览组件
                    player01.addChild(card);

                });




            } else {

                var Prompt = cc.find('Prompt');//提示
                Prompt.getComponent('Prompt').show('牌库满了~');//提示脚本的show()

            }









        }, this.node);


    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
