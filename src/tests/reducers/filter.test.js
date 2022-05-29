import filterReducer from "../../reducers/filter";
import moment from "moment";

test('should setup default filtervalues  ',()=>{
    const action=filterReducer(undefined,{type:"@@INIT"});
    expect(action).toEqual({
        text:"",
        sortby:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    });
});


test("should short by amount ",()=>{
    const action =filterReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(action.sortby).toBe('amount');
    
})

test('should sort by Date ',()=>{
    const currentstate={
        text:"",
        sortby:"date",
        startDate:undefined,
        endDate:undefined,
    }
    const action={type:"SORT_BY_DATE"};
    const state=filterReducer(currentstate,action);
    expect(state.sortby).toBe('date');
})

test('short by text ',()=>{
    const text="this is my filter";

    const action ={
        type:"SET_TEXT_FILTER",
        text
    };
    const state=filterReducer(action,text);
    expect(state.text).toBe(text);

})

test('sort by start date ',()=>{
    const startdate=moment();
    const action={
        type:"SORT_BY_START_DATE",
        startDate:startdate
    }
    const state=filterReducer(undefined,action);
    expect(state.startDate).toBe(startdate);
})

test('sort by end Date ',()=>{
    const enddate=moment();
    const action={
        type:"SORT_BY_END_DATE",
        endDate:enddate
    }
    const state=filterReducer(undefined,action);
    expect(state.endDate).toBe(enddate);
})