// components/flexible/flexible.js

import util from '../../utils/util.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    question: Object,
    theIndex: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    result:[],
    inputIndexs:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemValueChanged(e){
      this.data.result[e.detail.index] = e.detail.value
      this.setData(this.data)
      console.log(this.data.result)
    }
  },
  relations:{
    './oneline-multiselect-item/oneline-multiselect-item': {
      type: 'child'
    }
  },
  attached(){
    var inputIndexs = util.getInputIndexs(this.data.question.components)
    this.setData({
      inputIndexs: inputIndexs
    })
    console.log(this.data)
  },
  ready(){
  }
})
