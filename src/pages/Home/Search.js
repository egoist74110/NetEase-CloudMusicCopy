import React, { Component } from "react";
import styled from "styled-components";
import { createFromIconfontCN } from "@ant-design/icons";
import Songlist from "../../components/Songlist";
const SearchDiv = styled.div`
  width: 100%;
  height: 100%;
  header {
    height: 1rem;
    text-align: center;
    position: relative;
    line-height: 1rem;
    border-top: 0.01rem solid #f6f7f8;
    border-bottom: 0.01rem solid #f6f7f8;
    input {
      width: 90%;
      height: 50%;
      text-indent: 0.5rem;
      border: 0.03rem solid #eee;
      border-radius: 0.3rem;
      background: #ebecec;
      padding-right:.4rem;
      &::-webkit-input-placeholder {
        color: #c9c9c9;
        font-size: 0.21rem;
      }
    }
    .navsearch {
      position: absolute;
      left: 0.5rem;
      top: 0.35rem;
    }
    .shanchu{
      font-size:.24rem;
      right:.5rem;
      top:.4rem;
      position: absolute;
    }
  }
  nav {
    h3 {
      font-size: 0.18rem;
      font-weight: 100;
      margin-left: 0.3rem;
      margin-top: 0.15rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 85%;
      margin: auto;
      li {
        border: 0.03rem solid #eaebee;
        border-radius: 0.3rem;
        margin: 0.1rem 0.1rem;
        padding: 0 0.15rem;
        span {
          font-size: 0.24rem;
        }
      }
    }
  }
  main{
    .tips {
    text-align: center;
    margin-top: 0.2rem;
    }
    .recordlist{
        li{
            width:90%;
            height:.8rem;
            line-height:.8rem;
            border-bottom:.01rem solid #F4F5F6;
            text-indent:.5rem;
            margin:auto;
            position: relative;
            width:300px;    
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            padding-right:.8rem;
            span{
                font-size:.24rem;
            }
            .time{
                position:absolute;
                left:-.5rem;
                top:.3rem;
                font-size:.3rem;
            }
            .del{
                position:absolute;
                right:0;
                top:.2rem;
                font-size:.5rem;
            }
        }
    }
  }
`;
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2101554_n9vwxj5krm.js",
});
export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchotlist: [],
      searchkey: "",
      Searching: true,
      searlist: [],
      searchend: false,
      searchstring: "Search",
      recordslist: JSON.parse(localStorage.getItem("records")) || [],
    };
  }
  componentDidMount() {
    this.$http.get("/search/hot").then((res) => {
      this.setState({
        searchotlist: res.data.result.hots,
      });
    });
  }
  seacrhinput(e) {
    this.setState(
      {
        searchkey: e.target.value,
      },
      () => {
        if (this.state.searchkey === "") {
          this.setState({
            Searching: true,
            searchend: false,
          });
        } else {
          this.setState({
            Searching: false,
          });
        }
      }
    );
  }
  search() {
    if (this.state.searchkey === "") return;
    this.$http.get("/search?keywords=" + this.state.searchkey).then((res) => {
      if (res.data.code === 200) {
        this.setState({
          searlist: res.data.result.songs,
          searchend: true,
        });
      }
    });
    let { recordslist } = this.state;
    recordslist.unshift(this.state.searchkey);
    this.setState({
      recordslist,
    });
    localStorage.setItem("records", JSON.stringify(recordslist));
  }
  searchend() {
    this.setState({
      searchend: false,
    });
  }
  searchkeydown(e) {
    if (e.keyCode === 13) {
      this.search();
    }
  }
  hotsearch(first) {
    this.setState(
      {
        searchkey: first,
        Searching: false,
      },
      () => {
        this.search();
      }
    );
  }
  recordDel(i,e){
    e.stopPropagation();
    let recordslist = JSON.parse(localStorage.getItem("records"));
    recordslist.splice(i,1);
    localStorage.setItem("records", JSON.stringify(recordslist));
    this.setState({
        recordslist
    })
  }
  inputdel(){
      this.setState({
        searchkey:''
      })
  }
  render() {
    let {
      searchotlist,
      searchkey,
      Searching,
      searchend,
      searlist,
      searchstring,
      recordslist,
    } = this.state;
    return (
      <SearchDiv>
        <header>
          <input
            type="text"
            placeholder="搜索歌曲、歌手、专辑"
            value={searchkey}
            onChange={this.seacrhinput.bind(this)}
            onFocus={this.searchend.bind(this)}
            onKeyDown={this.searchkeydown.bind(this)}
          />
          <MyIcon
            className='navsearch'
            type="icon-sousuosearch82"
            onClick={this.search.bind(this)}
          ></MyIcon>
          <MyIcon type='icon-shanchu' className='shanchu' onClick={this.inputdel.bind(this)}></MyIcon>
        </header>
        {Searching && (
          <nav>
            <h3>热门搜索</h3>
            <ul>
              {searchotlist.map((item, index) => {
                return (
                  <li
                    key={item.first}
                    onClick={this.hotsearch.bind(this, item.first)}
                  >
                    <span>{item.first}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
        <main>
        {Searching && recordslist.length>0 && (
            <ul className='recordlist'>
                {
                    recordslist.map((item,index)=>{
                        return (
                            <li key={index} onClick={this.hotsearch.bind(this, item)}>
                                <MyIcon type='icon-shijian' className='time'></MyIcon>
                                <span>{item}</span>
                                <MyIcon type='icon-error' className='del' onClick={this.recordDel.bind(this,index)}></MyIcon>
                            </li>
                        )
                    })
                }
            </ul>
        )}
        {searchend &&
          (searlist === undefined ? (
            <p className="tips">暂无搜索结果</p>
          ) : (
            <Songlist songlist={searlist} search={searchstring}></Songlist>
          ))}
        </main>
      </SearchDiv>
    );
  }
}
