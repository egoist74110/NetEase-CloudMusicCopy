import React, { Component } from 'react'
import Songlist from '../../components/Songlist'
import BScroll from 'better-scroll'
import styled from "styled-components";
const Hotlist = styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
`
export default class Hotsong extends Component {
    constructor(){
        super();
        this.state={
            privileges:[],
            hotsong:'hotsong',
            pullUp:true,
            end:50,
        }
    }
    componentDidMount(){
        this.$http.get('/top/list?idx=1').then(res=>{
            this.setState({
                privileges:res.data.playlist.tracks
            },()=>{
                let bs = new BScroll('.hotlist',{
                    probeType:2
                })
                bs.on("scroll",()=>{
                    if(bs.y<bs.maxScrollY-60){
                        this.setState({
                            pullUp:false
                        })
                    }
                })
                bs.on("scrollEnd",()=>{
                    if(!this.state.pullUp){
                        this.setState({
                            end:this.state.end+50
                        },()=>{
                            bs.refresh();
                            this.setState({
                                pullUp:true
                            })
                        })
                    }
                })
            })
        })
    }
    render() {
        let {privileges,hotsong,pullUp,end} = this.state;
        return (
            <Hotlist className='hotlist'>
                <Songlist songlist={privileges} hotsong={hotsong} pullUp={pullUp} end={end}></Songlist>
            </Hotlist>
        )
    }
}
