# -
问卷灵活题型组件

##应用场景
如果问卷问题type为“flexible”，则可以使用本组件
flexible组件接受以下几个参数：
* question:Object 题目内容
* theIndex:Number 当前题目在问卷中所处的下标（用于数据传输）

##问卷数组范例
```json
[
  {
    "creatorId": 0,
    "title": "长乐市胃癌筛查自测问卷",
    "lastUpdated": "2018/03/12 14:45:44",
    "description": "针对长乐市特点设计的胃癌筛查问卷，问卷设计参考了长乐市多年来的癌症统计数据，筛选出其中关键性的危险因素。该问卷用于长乐地区早期胃癌防治的筛查。",
    "tags": [
      "危险因素",
      "中医信息",
      "长乐特点",
      "遗传信息"
    ],
    "questions": [
      {
        "tags": [
          0,
          1
        ],
        "notNull": true,
        "title": "您多久吃一次腌制食品？",
        "type": "select",
        "items": [
          "经常吃",
          "偶尔吃",
          "从来不吃"
        ]
      },
      {
        "tags": [
          0,
          1,
          2
        ],
        "title": "请从下列症状中选出符合您近期情况的症状？",
        "type": "multiSelect",
        "items": [
          "牙龈肿痛",
          "口干",
          "便秘"
        ]
      },
      {
        "tags": [
          0
        ],
        "title": "填写您最近使用的药物名称",
        "type": "addableBlank",
        "placeholder": [
          " 药物名称",
          "添加药品"
        ]
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "notNull": true,
        "title": "请填写您的体重",
        "type": "blank",
        "placeholder": [
          "请输入体重"
        ],
        "tips": {
          "front": "体重",
          "back": "千克"
        }
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "title": "您是否吸烟？",
        "type": "flexible",
        "components": [
          {
            "type": "selectItem",
            "items": [
              "是",
              "否"
            ]
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "若是，您吸烟约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "平均吸烟约",
              "@input",
              "支/天"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "现戒烟",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          }
        ]
      },
      {
        "tags": [
          0,
          1,
          2,
          3
        ],
        "title": "您是否食用以下食品？",
        "type": "flexible",
        "components": [
          {
            "type": "onelineMultiSelectTitle",
            "titles": [
              "从不",
              "偶尔\n<3次/周",
              "经常\n>=3次/周"
            ]
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "自制鱼露",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "持续 约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "虾油",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "inputTitleWithSlide",
            "titles": [
              "持续 约",
              "@input",
              "年"
            ],
            "max": 40,
            "min": 0,
            "default": 20
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "腌制食品",
            "itemNum": 3,
            "checkType": "radio"
          },
          {
            "type": "onelineMultiSelectItem",
            "title": "隔夜菜",
            "itemNum": 3,
            "checkType": "radio"
          }
        ]
      }
    ]
  }
]
```
