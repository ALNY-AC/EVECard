cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

    },

    // use this for initialization
    onLoad: function () {

        this.a = 0;


    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

        if (this.a <= 50) {
            this.a++;
        } else {
            this.a = 0;
        }

        var color = new cc.Color();

        if (this.a <= 25) {

            this.node.color = color.fromHEX("#CF3939");

        } else {
            this.node.color = color.fromHEX("#FFFFFF");
        }
        // color.fromHEX("#CF3939"); 
        this.getComponent("cc.Label").string = this.a;
        //======================
  
    },
});
