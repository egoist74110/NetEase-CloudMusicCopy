import React, { Component } from "react";
import { createFromIconfontCN } from "@ant-design/icons";
import styled from "styled-components";
import qs from 'querystring';
export const SonplayDiv = styled.div`
  width: 100%;
  height: 100%;
  .Sonbg {
    z-index: -2;
  }
  .Sonbg2 {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: black;
    filter: blur(20px);
    opacity: 0.5;
  }
  header {
    z-index: 1;
    position: relative;
    span {
      position: absolute;
      top: -0.5rem;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
    img {
      width: 2rem;
      height: 3rem;
      position: absolute;
      left: 3rem;
    }
  }
  main {
    overflow: hidden;
    .record {
      width: 5.96rem;
      height: 5.96rem;
      margin: auto;
      margin-top: 1.8rem;
      overflow: hidden;
      background: url(//s3.music.126.net/mobile-new/img/disc.png?d3bdd10…=)
        no-repeat;
      background-size: contain;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: rotate 30s linear infinite;
      &.pause {
        animation-play-state: paused;
      }
      div {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          position: absolute;
          border-radius: 50%;
        }
        span {
          width: 1rem;
          height: 1rem;
          display: inline-block;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg==)
            0 0 no-repeat;
          background-size: contain;
          z-index: 9;
        }
      }
    }
    .songstitle {
      margin-bottom: 0.3rem;
      text-align:center;
      strong {
        color: #fff;
        font-size: 0.35rem;
      }
      b {
        font-size: 0.24rem;
        color: hsla(0, 0%, 100%, 0.6);
      }
    }
    .m-musicStreetWakeUp{
      border-radius:.2rem;
      border:.01rem solid hsla(0,0%,100%,.13);
      width:2.2rem;
      height:.6rem;
      margin:auto;
      margin-top:.5rem;
    }
    .lyric {
      width: 80%;
      margin: auto;
      margin-top: 0.5rem;
      text-align: center;
      z-index: 99;
      height: 1.8rem;
      overflow: hidden;
      ul {
        transition: all 0.7s;
        li {
          span {
            line-height: 0.6rem;
            color: rgba(255, 255, 255, 0.5);
            &.active {
              color: #fff;
            }
          }
        }
      }
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2101554_nu3zgdo5z4q.js",
});
class Sonplay extends Component {
  constructor() {
    super();
    this.state = {
      picUrl: "",
      lyric: "",
      url: "",
      songName: "",
      singerName: "",
      tiemarr: [],
      lrcarr: [],
      ararr: [],
      songsname: "",
      flag: true,
      i: 0,
      mt: 0,
    };
    this.getlyric.bind(this);
    this.getsongurl.bind(this);
    this.getdetail.bind(this);
  }
  componentDidMount() {
    let obj = qs.parse(this.props.location.search.slice(1));
    this.$http.all([this.getlyric(obj.id), this.getsongurl(obj.id), this.getdetail(obj.id)]).then(
      this.$http.spread((res1, res2, res3) => {
        this.setState(
          {
            lyric: res1.data.lrc.lyric,
            url: res2.data.data[0].url,
            picUrl: res3.data.songs[0].al.picUrl,
            songName: res3.data.songs[0].al.name,
            singerName: res3.data.songs[0].ar[0].name,
          },
          () => {
            let lyricarr = this.state.lyric.split(/\n/);
            let tiemarr = [];
            let lrcarr = [];
            let ararr = res3.data.songs[0].ar;
            lyricarr.forEach((item) => {
              if (item.split("]")[1]) {
                tiemarr.push(item.slice(1, 10));
                lrcarr.push(item.split("]")[1].trim());
              }
            });
            tiemarr = tiemarr.map((item) => {
              return item.split(":")[0] * 60 + parseFloat(item.split(":")[1]);
            });
            this.setState({
              tiemarr,
              lrcarr,
              ararr,
              songsname: res3.data.songs[0].name,
            });
          }
        );
      })
    );
  }
  getlyric(id) {
    return this.$http.get("/lyric?id="+id);
  }
  getsongurl(id) {
    return this.$http.get("/song/url?id="+id);
  }
  getdetail(id) {
    return this.$http.get("/song/detail?ids="+id);
  }
  play() {
    // console.log(this);
    if (this.audio.paused) {
      this.audio.play();
      this.setState({
        flag: false,
      });
    } else {
      this.audio.pause();
      this.setState({
        flag: true,
      });
    }
  }
  timeupdate() {
    let i =
      this.state.tiemarr.findIndex((item) => {
        return item > this.audio.currentTime;
      }) - 1;
    if (i === -1) {
      i = 0;
    }
    let Lheight = 0;
    [...this.$(".lyric ul li")].forEach((item, index) => {
      if (i > index) {
        Lheight += item.clientHeight;
      }
    });
    this.setState({
      i: i,
      mt: -Lheight + "px",
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.i === nextState.i && this.state.i !== 0 && this.state.flag) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    let { picUrl, url, flag, lrcarr, ararr, songsname, mt, i } = this.state;
    return (
      <SonplayDiv>
        <div
          className="Sonbg"
          style={{
            background: `url(${picUrl}) no-repeat center top`,
            filter: "blur(20px)",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        ></div>
        <div className="Sonbg2"></div>
        <header>
          <MyIcon type="icon-wangyiyunyinle--copy" />
          <img
            src="https://s3.music.126.net/mobile-new/img/needle.png?702cf6d95f29e2e594f53a3caab50e12="
            alt=""
          />
        </header>
        <main>
          <div className={flag ? "record pause" : "record"}>
            <div onClick={this.play.bind(this)}>
              <img src={picUrl} alt="" />
              {flag && <span></span>}
            </div>
          </div>
          <div className="songstitle">
            <strong>{songsname} - </strong>
            {ararr.map((item, index) => {
              return (
                <b key={item.id}>
                  {item.name}
                  {ararr.length === 0 ? undefined : "/"}
                </b>
              );
            })}
          </div>
          <div className="lyric">
            <ul
              style={{
                marginTop: mt,
              }}
            >
              {lrcarr.map((item, index) => {
                return (
                  <li key={index}>
                    <span className={i === index ? "active" : ""}>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='m-musicStreetWakeUp'>
            <img src="//s3.music.126.net/mobile-new/img/musicStreet.png?22227b514ca899d2759a388ffbac109b" alt=""/>
          </div>
          <audio
            ref={(audio) => (this.audio = audio)}
            src={url}
            onTimeUpdate={this.timeupdate.bind(this)}
          ></audio>
        </main>
      </SonplayDiv>
    );
  }
}

export default Sonplay;
