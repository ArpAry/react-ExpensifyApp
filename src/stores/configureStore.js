import {createStore,combineReducers,Middleware, applyMiddleware, compose} from 'redux';
import expensifyReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';
import thunk from 'redux-thunk';
//
//Store Creation and Combine Reducer
//

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
export default ()=>{
    const store = createStore(
        combineReducers({
          expense: expensifyReducer,
          filters: filterReducer,
        }),
        //due to the below statement we loose functionality from developer tool we will use it using making const
      composeEnhancer (applyMiddleware(thunk))
     //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
      return store;

};
