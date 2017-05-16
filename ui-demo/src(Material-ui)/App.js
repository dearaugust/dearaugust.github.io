import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {green100, green500, green700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton'; //按钮

import DatePicker from 'material-ui/DatePicker';  //日期选择器

import RaisedButtonExampleComplex from './RaisedButtonExampleComplex.js'

import Feiji from 'material-ui/svg-icons/action/bug-report' //SVG图标
import {red500, yellow500, blue500,cyan900} from 'material-ui/styles/colors';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'; //主题
import getMuiTheme from 'material-ui/styles/getMuiTheme';


// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: green500,
//     primary2Color: green700,
//     primary3Color: green100,
//   },
// }, {
//   avatar: {
//     borderColor: null,
//   },
//   userAgent: req.headers['user-agent'],
// });
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledDate: null,
    };
  }
  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };
  let myTheme ={
    palette:{

    }
  }
  render() {
    console.log(this.state.controlledDate);
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
        <div>
          <div>Hello world</div>
          <RaisedButton label="Default Button" />
          <RaisedButton label="Default Button" />
          <RaisedButton label="Default Button" />
          <DatePicker
            hintText="Controlled Date Input"
            value={this.state.controlledDate}
            onChange={this.handleChange}
          />
          <RaisedButtonExampleComplex/>
          <DatePicker hintText="Portrait Dialog" />
          <DatePicker hintText="Landscape Dialog" mode="landscape" />

          <Feiji color={red500}/>
          <Feiji color={cyan900} style={{width:'100px',height:'100px'}}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
