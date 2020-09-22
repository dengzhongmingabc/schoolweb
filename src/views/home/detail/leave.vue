<template>
    <div class="container">
      <van-cell-group >
        <van-cell  class="vantcell">
          <template #default>
            <van-field
              readonly
              clickable
              label-align="right"
              name="picker"
              :value="value"
              label="申请学员："
              placeholder="点击选择学员"
              @click="showPicker = true"
            />
            <van-popup v-model="showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="showPicker = false"
              />
            </van-popup>


            <van-field
              readonly
              clickable
              name="calendar"
              :value="date"
              label-align="right"
              label="请假时间："
              placeholder="点击选择日期"
              @click="show = true"
            />
            <van-calendar v-model="show" type="range" allow-same-day @confirm="onDateConfirm" />



            <van-field
              readonly
              clickable
              label-align="right"
              name="pickerType"
              :value="valueType"
              label="请假类型："
              placeholder="点击选择请假类型"
              @click="showPickerType = true"
            />
            <van-popup v-model="showPickerType" position="bottom">
              <van-picker
                show-toolbar
                :columns="columnsType"
                @confirm="onConfirmType"
                @cancel="showPickerType = false"
              />
            </van-popup>

            <van-field
              v-model="message"
              rows="2"
              autosize
              label="事由："
              label-align="right"
              type="textarea"
              maxlength="50"
              placeholder="请输入说明"
              show-word-limit
            />
          </template>
        </van-cell>
      </van-cell-group>
      <div style="text-align: center;margin-top: 7px">
        <van-button type="primary" style="margin-left: 5px;border: none">提交申请</van-button>
      </div>

    </div>
</template>

<script>
  import Vue from 'vue';
  import { Popup } from 'vant';
  import { Picker } from 'vant';
  import { Calendar } from 'vant';

  Vue.use(Calendar);
  Vue.use(Picker);
  Vue.use(Popup);
  export default {
    name: 'workDetail',
    data() {
      return {
        value: '',
        columns: ['张三', '李四', '王五', '赵六', '李八'],
        showPicker: false,

        valueType: '',
        columnsType: ['事假', '病假', '其它'],
        showPickerType: false,

        date: '',
        show: false,

        message:''
      };
    },
    methods:{
      onConfirm(value) {
        this.value = value;
        this.showPicker = false;
      },
      onConfirmType(value) {
        this.valueType = value;
        this.showPickerType = false;
      },
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`;
      },
      onDateConfirm(date) {
        const [start, end] = date;
        this.show = false;
        this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      },
    }
  }
</script>

<style scoped>
  .container{
    height: 100%;
    background-color: #F2F2F2;
  }

</style>
