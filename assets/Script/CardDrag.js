cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {





        var chess = this.node.getChildByName("C");//场面卡牌

        chess.setContentSize(190 * this.node.modInfo.size.w, 190 * this.node.modInfo.size.h);
        this.node.isis = 0
        var hand = this.node.getChildByName("S");//手牌

        var legitimate = cc.find("legitimate");//合法提示框

        this.state = 'sp';//状态
        this.isDrag = false;

        this.initpisition = this.node.position;//初始位置
        this.GridNumber = '';

        var self = this;


        var isplace = false;


        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            //拖拽实现



            this.isDrag = true;


            hand.opacity = 0;
            chess.opacity = 150;
            legitimate.opacity = 50;
            legitimate.setContentSize(chess.getContentSize());
            this.setContentSize(chess.getContentSize());

            var BoxCollider = self.node.getComponent(cc.BoxCollider);



            BoxCollider.size.width = chess.width - 100;
            BoxCollider.size.height = chess.height - 100;

            BoxCollider.offset.x = chess.width / 2;
            BoxCollider.offset.y = 0 - chess.height / 2;



            var delta = event.touch.getDelta();

            this.x += delta.x;
            this.y += delta.y;




            //=====================

            var checkerboards = cc.find("checkerboard").children;//获取棋盘

            var min = null;//最小棋盘

            for (var x in checkerboards) {
                if (min == null) {
                    min = checkerboards[x];
                }

                var dist = cc.pDistance(this.position, checkerboards[x].position);

                if (dist <= cc.pDistance(this.position, min.position)) {
                    min = checkerboards[x];
                }


            }
            console.log('this.isis');
            console.log(this.isis);

            if (parseInt(min.num.y) <= 1 || min.isPlace == false || this.isis < this.modInfo.size.w * this.modInfo.size.h) {
                //不能放置
                var color = new cc.Color();//颜色
                legitimate.color = color.fromHEX("#ff0000");


                isplace = false;

            } else {

                //可以放置
                var color = new cc.Color();//颜色
                legitimate.color = color.fromHEX("#00ff00");
                isplace = true;

            }



            legitimate.x = min.x;
            legitimate.y = min.y;
            self.GridNumber = min.name;


            // 添加到新节点
            var cmPlayer01 = cc.find('cm/player01');//玩家场面
            this.parent = cmPlayer01;

            // 从原来的节点中移除 
            var player01 = cc.find('player/player01');//玩家
            player01.removeChild(this);







        }, this.node);


        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.isDrag = false;

            if (self.GridNumber != '') {
                chess.opacity = 255;
            }


            if (isplace == true) {
                //可以放置
                // this.position = legitimate.position//设置位置

                self.state = 'cm';

                var myAction = cc.sequence(cc.moveTo(0.2, legitimate.position.x, legitimate.position.y), cc.callFunc(function () {

                    self.initpisition = self.node.position;//设置初始位置

                }));
                this.runAction(myAction);




            } else {



                //不可以放置
                // 创建一个移动动作
                var action = cc.moveTo(0.1, self.initpisition.x, self.initpisition.y);
                // 执行动作
                this.runAction(action);
                var Prompt = cc.find('Prompt');//提示
                Prompt.getComponent('Prompt').show('非法位置~');//提示脚本的show()

                //如果是手牌状态
                if (self.state == 'sp') {
                    chess.opacity = 0;
                    hand.opacity = 255;
                    this.setContentSize(hand.getContentSize());

                    //添加回到原来的节点
                    var player01 = cc.find('player/player01');//玩家
                    this.parent = player01;


                    //删除在场面上
                    var cmPlayer01 = cc.find('cm/player01');//玩家场面
                    cmPlayer01.removeChild(this);



                }


            }
            legitimate.opacity = 0;
            legitimate.x = 0;
            legitimate.y = 0;
            isplace = false;

        }, this.node);



    },

    // update: function (dt) {

    // },
});
