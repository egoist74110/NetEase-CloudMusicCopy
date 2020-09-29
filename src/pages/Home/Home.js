import React, { Component } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import {NavLink} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import Recommend from './Recommend';
import Search from './Search';
import Hotsong from './Hotsong';
import styled from "styled-components";
// import action from '../flux/action'
// import redux from '../redux/store'
export const HomeDiv = styled.div`
  width: 100%;
  height: 100%;
  .homeheader {
    z-index:-1;
    height: 2rem;
    background: #d43c33;
    position: relative;
    span {
      position: absolute;
      top: -0.5rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .homenav{
      height:1rem;
      display:flex;
      align-items:center;
      div{
          flex:1;
          text-align:center;
            a{
            text-decoration:none;
            color:black;
            &.active{
                color:red;
                border-bottom:.05rem solid red;
                padding-bottom:.15rem;
                margin-top:.15rem;
            }
        }
      }
  }
  main{
      width:100%;
      height:100%;
  }
`;
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2101554_nu3zgdo5z4q.js",
});
export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <HomeDiv>
        <header className='homeheader'>
          <MyIcon type="icon-wangyiyunyinle--copy" />
        </header>
        <nav className='homenav'>
            <div><NavLink to='/home/recommend' activeClassName='active'>推荐音乐</NavLink></div>
            <div><NavLink to='/home/hotsong' >热歌榜</NavLink></div>
            <div><NavLink to='/home/search' >搜索</NavLink></div>
        </nav>
        <main>
            <Switch>
                <Route path="/home/recommend" component={Recommend}></Route>
                <Route path="/home/search" component={Search}></Route>
                <Route path="/home/hotsong" component={Hotsong}></Route>
            </Switch>
        </main>
      </HomeDiv>
    );
  }
}
