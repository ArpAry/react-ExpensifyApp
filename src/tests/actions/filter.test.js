import moment from "moment";
import {sortByStartDate,sortByEndDate,setTextFilter, sortByDate,sortByAmount} from '../../actions/filter';

test('Should generate set start action date object ',()=>{
    const action=sortByStartDate(moment(0));
    expect(action).toEqual({
        type: "SORT_BY_START_DATE",
        startDate:moment(0)
    });
})

test('Should generate set end date action object ',()=>{
    const action=sortByEndDate(moment(0));
    expect(action).toEqual({
        type: "SORT_BY_END_DATE", 
        endDate:moment(0)
    })
})

test('should generate set text action Object',()=>{
    const text="hello my name is Andrew";
    const action=setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER", text
        
    })
})

test('should generate set text filter object with dafult',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER", text:""
    })
})

test('should generate sort by date ,sort by Amount ',()=>{
    expect(sortByDate()).toEqual({type: "SORT_BY_DATE" });

})

test('should generate sort by date ,sort by Amount ',()=>{
    expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });

})