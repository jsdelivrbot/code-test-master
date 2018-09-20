import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount,shallow} from 'enzyme';
import MainComponent from '../../src/components/search-bar';
import SortComponent from '../../src/components/employee_sort';
import HeaderComponent from '../../src/components/employee_header';
import EmployeeCard from '../../src/components/employee_card';
import EmployeeList from '../../src/container/employee-list';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('MainComponent',()=>{
  it('should create object', ()=>{
    const wrapper = mount(<MainComponent />);
    expect(MainComponent.prototype).to.not.be.null;
  });
})

describe('SortComponent',()=>{
  it('should create object', ()=>{
    const wrapper = mount(<SortComponent />);
    expect(SortComponent.prototype).to.not.be.null;
  });
})

describe('HeaderComponent',()=>{
  it('should create object', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(HeaderComponent.prototype).to.not.be.null;
  });
})

describe('HeaderComponent',()=>{
  it('render without any errors', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(shallow(<HeaderComponent {...props} />).length).equal(1);
  });
})

describe('HeaderComponent',()=>{
  it('render without any errors', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(shallow(<HeaderComponent {...props} />).length).equal(1);
  });
})

describe('EmployeeCard',()=>{
  it('render without any errors', ()=>{
    const props = {employee : {age: 31, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hai_ninh_nguyen/128.jpg",
bio: "Molestiae excepturi maiores. Culpa beatae aut ipsum pariatur sint sint suscipit aspernatur occaecati. Ad id et quaerat delectus est debitis dolores sit. Ad alias voluptas dolore culpa ea. Enim laudantium iure est eos.",
dateJoined: "2018-01-17T16:55:10.580Z",
firstName: "Samantha",
id: "e3eef2f8-51c3-468e-ace1-e9ab31c89107",
jobTitle: "Lead Web Executive",
lastName: "Koss"}};
    const wrapper = mount(<EmployeeCard {...props} />);
    expect(shallow(<EmployeeCard {...props} />).length).equal(1);
  });
})

describe('EmployeeCard',()=>{
  it('render without any errors', ()=>{
    const props = {employee : {age: 31, avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hai_ninh_nguyen/128.jpg",
bio: "Molestiae excepturi maiores. Culpa beatae aut ipsum pariatur sint sint suscipit aspernatur occaecati. Ad id et quaerat delectus est debitis dolores sit. Ad alias voluptas dolore culpa ea. Enim laudantium iure est eos.",
dateJoined: "2018-01-17T16:55:10.580Z",
firstName: "Samantha",
id: "e3eef2f8-51c3-468e-ace1-e9ab31c89107",
jobTitle: "Lead Web Executive",
lastName: "Koss"}};
    const wrapper = mount(<EmployeeCard {...props} />);
    expect(EmployeeCard.prototype).to.not.be.null;
  });
})
