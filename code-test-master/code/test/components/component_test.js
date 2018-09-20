import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount,shallow} from 'enzyme';
import MainComponent from '../../src/components/search-bar';
import SortComponent from '../../src/components/employee_sort';
import HeaderComponent from '../../src/components/employee_header';
import RootComponent from '../../src/components/app';
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
    const wrapper = mount(<HeaderComponent />);
    expect(HeaderComponent.prototype).to.not.be.null;
  });
})

describe('RootComponent',()=>{
  it('should create object', ()=>{
    const wrapper = mount(<RootComponent />);
    expect(RootComponent.prototype).to.not.be.null;
  });
})
