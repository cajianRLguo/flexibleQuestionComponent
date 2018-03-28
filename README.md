# 小程序组件--flexibleQuestionComponent
问卷灵活题型组件

## 应用场景
本组件主要针对Questionnaire.questions[theIndex].type 属性为“flexible”的情况。
<flexible>组件接受以下几个参数：
* question:Object 题目内容，即整个question对象，包括type,title,components等
* theIndex:Number 当前题目在问卷中所处的下标（用于数据传递）

## 实现原理
本组件共有4个子组件，分别负责题目的几个部分，通过对flexible组件进行条件填充，完成整个问题的填充。他们分别是：
##### 子组件的共同特性：
> * 接受2个参数：
1、detail=question.components
2、inputIndex=inputIndexs[index] <br>这里的inputIndex是为了记录第几个组件会产生输出，如**input类型**的组件会有数据输出，而**title类**的组件没有数据输出
* 接受一个值改变函数：
bind:valueChanged="itemValueChanged" 子控件值改变会通过此事件进行数据传递

#### 1、select-item（input类）
灵活题型中的单选题，如：
> 您是否吸烟？
--是
--否

输出数据为所选的下标Number类型，如：0

#### 2、oneline-multiselect-item（input类）
灵活题型中的多选1题目，如
> 自制鱼露的食用频率
- [ ] 从不
- [ ] 偶尔  
- [x] 经常  
本组件还可以选择选框为radio还是checkbox，这个在题目里设置好了，无需额外设置

输出数据为所选的下标
radio对应Number类型，checkbox对应Array（Number）类型

#### 3、input-title-with-slide（input类）
灵活题型中的滑动填空题，上方数字可以手动输入，和下方的滑块共享数据，如
> 您吸烟持续约 **20** 年

输出数据为所选的值Number类型

#### 4、oneline-multiselect-title（title类）
灵活题型中的多选1题目中的标题。
> 从不 经常 偶尔


## 问卷数组范例
```json
"questions":[
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
```
