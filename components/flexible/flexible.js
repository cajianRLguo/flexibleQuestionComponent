// components/flexible/flexible.js
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
    result:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemValueChanged(e){
      var newResult = this.data.result
      newResult[e.detail.index] = e.detail.value
      this.setData({ result: newResult})
      console.log(this.data.result)
    }
  },
  relations:{
    './oneline-multiselect-item/oneline-multiselect-item': {
      type: 'child'
    }
  },
  ready(){
  }
})
