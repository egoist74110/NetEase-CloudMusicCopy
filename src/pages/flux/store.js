const store={
    conent:0,
    getconent(){
        return this.conent
    },
    jian(){
        this.conent--
        console.log(this.conent);
    },
    jia(){
        this.conent++
        console.log(this.conent);
    }
}
export default store;