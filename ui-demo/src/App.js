import React from 'react';
import DatePicker from 'antd/lib/date-picker';
import message from 'antd/lib/message';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;         //分级菜单
const MenuItemGroup = Menu.ItemGroup;

import Button from 'antd/lib/button'; //按钮

class App extends React.Component {
  componentDidMoune(){
    message.info('Good Boy!');
  }

  handleClick = (e) => {
   console.log('click ', e);
  }
  render(){
    return(
      <div>
        <Button type="primary" style={{width:'150px',height:'50px',color:'black'}}>Primary</Button>
        <Button type="danger" style={{width:'150px',height:'50px',color:'black'}}>Danger</Button>

        <DatePicker />
        <Menu
          onClick={this.handleClick}
          style={{ width: 240 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <MenuItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default App;
