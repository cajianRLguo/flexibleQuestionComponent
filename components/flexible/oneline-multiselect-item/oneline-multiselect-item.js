// components/flexible/oneline-multiselect-item/oneline-multiselect-item.js
import util from '../../../utils/util.js'
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
    result:undefined
  },

  /**
   * 组件的方法列表
   */
  methods: {
    radioChange(e) {
      this.triggerEvent('valueChanged',{ index: this.data.fatherIndex, value: parseInt(e.detail.value)},{})
      console.log(e)
    },
    checkboxChange(e) {
      this.triggerEvent('valueChanged', { index: this.data.fatherIndex, value: util.parseIntforArray(e.detail.value) }, {})
      console.log(e)
    }
  },
  created(){
  },
  attached(){
    this.setData({ indexs: util.fastRange(this.data.detail.itemNum) })
  },
  ready(){
    console.log(this.data)
  },
  relations:{
    '../flexible':{
      type:'ancestor'
    }
  }
  
})
