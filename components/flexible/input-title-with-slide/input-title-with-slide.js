// components/flexible/input-title-with-slide/input-title-with-slide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: Object,
    inputIndex: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    result: undefined
  },

  /**
   * 组件的方法列表
   */
  methods: {
    slideChanging(e){
      this.setData({
        result: e.detail.value
      })
    },
    slideChanged(e) {
      this.setData({
        result: e.detail.value
      })
      this.triggerEvent('valueChanged', { index: this.data.inputIndex, value: this.data.result })
    },
    inputChanged(e){
      this.setData({
        result: e.detail.value
      })
      this.triggerEvent('valueChanged', { index: this.data.inputIndex, value: this.data.result })
    }
  },
  attached(){
    console.log(this.data.inputIndex)
    this.setData({
      result:this.data.detail.default
    })
  },
  ready(){
    this.triggerEvent('valueChanged', { index: this.data.inputIndex, value: this.data.result })
  }
})
