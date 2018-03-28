// components/flexible/select-item/select-item.js
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
    radioItems:[]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    radioChange(e) {
      var radioItems = this.data.radioItems;
      for (var i = 0, len = radioItems.length; i < len; ++i) {
        radioItems[i].checked = radioItems[i].value == e.detail.value;
      }
      this.setData({
        radioItems: radioItems
      });
      this.triggerEvent('valueChanged', { index: this.data.inputIndex, value: parseInt(e.detail.value) })
    }
  },
  attached(){
    console.log(this.data)
    var newArray = []
    this.data.detail.items.forEach(function(v,i,arr){
      newArray.push({"name":v,"value":i,"checked":false})
    })
    this.setData({
      radioItems:newArray
    })
  }
})
