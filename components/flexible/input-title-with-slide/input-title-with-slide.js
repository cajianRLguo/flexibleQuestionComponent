// components/flexible/input-title-with-slide/input-title-with-slide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detail: Object,
    fatherIndex: Number
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

  },
  attached(){
    this.setData({
      result:this.data.detail.default
    })
  }
})
