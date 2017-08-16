import React,{Component} from 'react';
import { DatePicker } from 'antd';
import { Input, Button } from 'antd';
import './Date.css'
// const { MonthPicker, RangePicker } = DatePicker;

class PickerSizesDemo extends Component {
  state = {
    size: 'default',
  };


  render() {
    const { size } = this.state;
    return (
      <div className="date-input">
        <span className="fanwei">日期范围：</span><span></span>
        <DatePicker size={size} /><span></span>
        <DatePicker size={size} /><span></span>
        <Input
          type="text"
          size={size}
          value=''
          onChange={this.handleNumberChange}
          className="input-ziji"
        />
        <Button type="primary" htmlType="submit">搜索图片</Button>
      </div>
    );
  }
}
export default PickerSizesDemo
