cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {

        var checkerboards = this.node.children;

        var x = 0;
        var y = 0;

        for (var index in checkerboards) {
            checkerboards[index].num = { x: x, y: y };
            checkerboards[index].name = x + ',' + y;

            var BoxCollider = checkerboards[index].addComponent(cc.BoxCollider);
            // BoxCollider.size.width = checkerboards[index].width;
            // BoxCollider.size.height = checkerboards[index].height;

            BoxCollider.offset.x = 95;
            BoxCollider.offset.y = -95;

            checkerboards[index].addComponent("Lattice");


            checkerboards[index].getChildByName('label').getComponent("cc.Label").string = x + ',' + y;

            if (x % 4 == 0 && x >= 4) {

                y++;

                x = -1;

            }

            x++;

        }
    },

    // update: function (dt) {

    // },
});
