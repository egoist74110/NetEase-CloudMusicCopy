import React, { Component } from "react";
import styled from "styled-components";
import Songlist from '../../components/Songlist'
export const RecommendDiv = styled.div`
  width: 100%;
  height: 100%;
  .m-homeremd {
    width: 100%;
    height: 100%;
    margin-top: 0.2rem;
    h2 {
      font-size: 0.34rem;
      font-weight: 100;
      border-left: 0.08rem solid #d33a31;
      padding-left: 0.1rem;
      margin-bottom:.3rem;
    }
    .songSheet{
        display:flex;
        flex-wrap: wrap;
        margin-bottom:1rem;
        li{
            margin:.2rem .05rem;
            .remd_img{
                width:2.4rem;
                span{
                    margin-top:.05rem;
                    font-size:.24rem;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                }
            }
        }
    }
  }
`;
export default class Recommend extends Component {
  componentDidMount() {
    this.$http.all([
        this.$http.get("/personalized?limit=6"),
        this.$http.get('/personalized/newsong'),
    ]).then(this.$http.spread((res1,res2)=>{
        this.setState({
            recommendlist: res1.data.result,
            songlist: res2.data.result,
        });
    }))
  }
  constructor() {
    super();
    this.state = {
        recommendlist: [],
        songlist:[],
        recommend:'recommend'
    };
  }
  render() {
    let { recommendlist,songlist,recommend } = this.state;
    return (
      <RecommendDiv>
        <div className="m-homeremd">
          <h2>推荐歌单</h2>
          <ul className='songSheet'>
            {recommendlist.map((item, index) => {
              return (
                <li key={item.id}>
                  <div className="remd_img">
                    <img src={item.picUrl} alt="" />
                    <span>{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <h2>最新音乐</h2>
          <Songlist songlist={songlist} recommend={recommend}></Songlist>
        </div>
      </RecommendDiv>
    );
  }
}
