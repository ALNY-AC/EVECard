var cardMods = {
    'd': [
        {
            "size": {
                "w": "1",//x格位
                "h": "1"//y格位
            },
            "t": "T1",//科技等级
            "armsType": "导弹",//武器类型
            "isk": 1,//所需isk
            "attack": 1,//攻击力
            "attackDistance": 1,//攻击距离
            "hp": 1,//血量，有效值
            "valueRatio": 1,//价值比
            "effect": "",//效果，效果索引
            "info": {
                "type": "护卫舰",//类别
                "cardName": "茶隼级",//舰船、卡牌名
                "effectInfo": "效果文本",//效果描述文本
                "cardInfo": "茶隼级舰船"//卡牌描述
            },
            "imgSrc": {
                "sp": "sp_csj.png",
                "cm": "cm_csj.png"

            }
        },
        {
            "size": {
                "w": "1",//x格位
                "h": "1"//y格位
            },
            "t": "T1",//科技等级
            "armsType": "导弹",//武器类型
            "isk": 7,//所需isk
            "attack": 8,//攻击力
            "attackDistance": 3,//攻击距离
            "hp": 7,//血量，有效值
            "valueRatio": 1,//价值比
            "effect": "",//效果，效果索引

            "info": {
                "type": "战列舰",//类别
                "cardName": "乌鸦级",//舰船、卡牌名
                "effectInfo": "效果文本",//效果描述文本
                "cardInfo": "飞不起来"//卡牌描述，告诉玩家这张卡牌的背景故事或一些简介和解释
            },
            "imgSrc": {
                "sp": "sp_wy.png",
                "cm": "cm_wy.png"
            }
        },
        {
            "size": {
                "w": "2",//x格位
                "h": "2"//y格位
            },
            "t": "T1",//科技等级
            "armsType": "激光",//武器类型
            "isk": 14,//所需isk
            "attack": 25,//攻击力
            "attackDistance": 2,//攻击距离
            "hp": 30,//血量，有效值
            "valueRatio": 1.9,//价值比
            "effect": "",//效果，效果索引

            "info": {
                "type": "泰坦",//类别
                "cardName": "神使级",//舰船、卡牌名
                "effectInfo": "效果文本",//效果描述文本
                "cardInfo": "自天庭俯瞰 大地邪恶暗涌 战火连绵\r\n神怒火中烧 亲入凡间\r\n裁决卑贱之徒 救赎纯洁之心\r\n——《圣典·启示录2:12》"//卡牌描述，告诉玩家这张卡牌的背景故事或一些简介和解释
            },
            "imgSrc": {
                "sp": "sp_ssj.png",
                "cm": "cm_ssj.png"
            }
        },
    ]
}

module.exports = cardMods;