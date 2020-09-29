import Mydispatch from './dispatcher'
const action={
    jian(){
        Mydispatch.dispatch({
            type:'jian'
        })
    },
    jia(){
        Mydispatch.dispatch({
            type:'jia'
        })
    }
}
export default action;