import React, { Component } from "react";
import styled from "styled-components";
import { createFromIconfontCN } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
const SonglistUl = styled.ul`
  li {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.01rem solid #f6f6f7;
    position:relative;
    .song {
      margin: 0.18rem 0;
      width: 90%;
      .songtitle {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        strong {
          font-weight: 400;
        }
        span {
          color: #888888;
        }
        .SerialTop {
          font-size: 0.28rem;
          color: red;
        }
        .Serial {
          font-size: 0.28rem;
        }
      }
      .songauthor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          color: #888888;
          font-size: 0.21rem;
        }
      }
    }
    .anticon {
      width: 10%;
      font-size: 0.42rem;
    }
  }
  .pullup{
    width: 95%;
    margin:0.36rem auto;
    text-align:center;
    position: absolute;
    bottom: -60px;
  }
`;
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2101554_nu3zgdo5z4q.js",
});
class Songlist extends Component {
  playsong(id) {
    this.props.history.push("/sonplay?id=" + id);
  }
  render() {
    let { songlist, hotsong, recommend,end,pullUp,search } = this.props;
    if(songlist.length>0){
      
    }
    let a =true
    if(end>=songlist.length){
      a=false
    }
    songlist = songlist.length>50?songlist.slice(0,end):songlist;
    return (
      <SonglistUl>
        {songlist.map((item, index) => {
          return (
            <li key={item.id} onClick={this.playsong.bind(this, item.id)}>
              <div className="song">
                <div className="songtitle">
                  {hotsong === "hotsong" && (
                    <span className={index < 3 ? "SerialTop" : "Serial"}>
                      {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                      &nbsp;&nbsp;
                    </span>
                  )}
                  <strong>{item.name}</strong>
                  {hotsong === "hotsong" && item.alia.length > 0 && (
                    <span>({item.alia[0]})</span>
                  )}
                  {recommend === "recommend" && item.song.alias.length > 0 && (
                    <span>({item.song.alias[0]})</span>
                  )}
                </div>
                <div className="songauthor">
                  {recommend === "recommend" && (
                    <span>{item.song.artists[0].name}</span>
                  )}
                  {hotsong === "hotsong" &&
                    item.ar.map((ars, indexs) => {
                      return (
                        <span key={ars.id}>
                          {indexs === 0 && item.ar.length > 1
                            ? ars.name + " / "
                            : ars.name}
                        </span>
                      );
                    })}
                  {
                    search==='Search' && (
                    <span>{item.artists[0].name}</span>
                    )
                  }
                  <span>&nbsp;-&nbsp;</span>
                  {recommend === "recommend" && (
                    <span>{item.song.album.name}</span>
                  )}
                  {hotsong === "hotsong" && <span>{item.al.name}</span>}
                  {
                    search==='Search' && (
                    <span>{item.album.name}</span>
                    )
                  }
                </div>
              </div>
              <MyIcon type="icon-bofang"></MyIcon>
            </li>
          );
        })}
        {
          hotsong === "hotsong" && (
            a ? 
            <li><span className="pullup">{pullUp ? "加载更多" : "可以放了"}</span></li> 
            :
            <li><span className="pullup">没有更多了</span></li>
          )
        }
      </SonglistUl>
    );
  }
}

export default withRouter(Songlist);
// songlist.map((item,index)=>{
//     return (
//         <li>{item}</li>
//     )
//     })
