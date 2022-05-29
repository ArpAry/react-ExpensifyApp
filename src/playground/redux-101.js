import {createStore } from 'redux';
//
//  Action Generators
//
const Incrementcount=({incrementby = 1}={}) =>({
    type:'INCREMENT',
  //  incrementby:incrementby
     incrementby
});
const Reset=()=>({type:'RESET'});
const Setcount=({count})=>({type:'SETCOUNT',count});
const Decrementcount =({decrementby=1}={})=>({type:'DECREMENT',decrementby});
//
//REducrs Properties
//
//1 Reducere are pure function
//2 Never change state or function values directly 
const countreducer=(state={count:0},action)=>
{
   //  console.log(count);
    if(action.type==='INCREMENT')
    {const incrementby= typeof action.incrementby==='number' ?action.incrementby:1;
        return{ count:state.count+incrementby }
    }
    else if(action.type==='DECREMENT')
    {const decrementby=typeof action.decrementby ==='number' ?action.decrementby:1;
        return{count:state.count-decrementby}
    }
    else if(action.type==='RESET')
    {
        return{count:0}
    }
    else if(action.type==='SETCOUNT')
    {
        return{count:action.count};
    }
    else
    return  state;
};
const store=createStore(countreducer);
//console.log(store.getState());
const unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(Incrementcount());
store.dispatch(Incrementcount({incrementby:6}));
  //  unsubscribe();
store.dispatch(Reset());

  // store.dispatch({
//     type:'RESET'
// });
store.dispatch(Decrementcount({decrementby:10}));
store.dispatch(Decrementcount({}));

store.dispatch(Setcount({count:101}));
//console.log(store.getState());mak
// console.log("123");
 