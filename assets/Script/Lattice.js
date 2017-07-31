cc.Class({
    extends: cc.Component,

    properties: {



    },

    onLoad: function () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        console.log('加载！');
        this.cards = null;



    },

    /**
     * 当碰撞产生的时候调用
     * @param  {Collider} other 产生碰撞的另一个碰撞组件
     * @param  {Collider} self  产生碰撞的自身的碰撞组件
     */
    onCollisionEnter: function (other, self) {


        if (other.node.type != null) {

            if (other.node.type == 'Card') {

                if (this.cards == null) {
                    //如果cards为null，就代表这个格子没有卡牌，可以放置
                    this.cards = other;
                    self.node.isPlace = true;//可以放置
                    self.node.getChildByName('label').getComponent("cc.Label").string = 'false';
                    other.node.isis++;

                } else {
                    //如果cards不为null，就代表这个格子有卡牌，不可以放置
                    self.node.isPlace = false;//不可以放置
                    self.node.getChildByName('label').getComponent("cc.Label").string = 'false';

                }


            }
        }


    },
    /**
 * 当碰撞产生后，碰撞结束前的情况下，每次计算碰撞结果后调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
    onCollisionStay: function (other, self) {




    },
    /**
 * 当碰撞结束后调用
 * @param  {Collider} other 产生碰撞的另一个碰撞组件
 * @param  {Collider} self  产生碰撞的自身的碰撞组件
 */
    onCollisionExit: function (other, self) {

        if (other.node.type != null) {

            if (other.node.type == 'Card') {

                if (this.cards == other) {
                    //如果是自身离开，就重新设置为可以放置
                    this.cards = null;
                    self.node.isPlace = true;//可以放置
                    self.node.getChildByName('label').getComponent("cc.Label").string = 'true';
                    other.node.isis--;

                }

            }
        }

    }

});
