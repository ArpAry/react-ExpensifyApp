import React from 'react';
import Header  from '../../js-component/ExpensifyHeader';
import toJson from 'enzyme-to-json';
import { shallow } from "enzyme";


// Enzyme.configure({
//     adapter: new Adapter()
//   });
//configure({adapter: new Adapter()});
test('should render header correctly',()=>{
    const wrapper =shallow(<Header/>);
      expect(toJson(wrapper)).toMatchSnapshot();
}); 