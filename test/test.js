import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from './../src/App';
import Rainbow from './../src/Components/rainbowFlat';
import RayFlat from './../src/Components/rayFlat';

describe('<App />', () => {
  it('renders 2 <Rainbow /> container component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Rainbow)).to.have.length(2);
  });
});

describe('<Rainbow flatRainbow={true}/>', () => {
  it('All items are wrapped in a figure', () => {
    const wrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(wrapper.find('figure')).to.have.length(1);
  });
  it('Figure has a caption that reads "Flat Version of a Rainbow: Clickable"', () => {
    const wrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(wrapper.find('figcaption').text()).to.equal('Flat Rainbow: Clickable');
  });
  it('Renders as many rays as elements in state.rays', () => {
    const wrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(wrapper.find(RayFlat)).to.have.length(wrapper.state('rays').length);
  });
  it('should have proper data types for state', () => {
    const wrapper = mount(<Rainbow flatRainbow={true} />);
    expect(wrapper.state('rays')).to.be.an('array');
  });
  it('should setState and change state.rays order onClick', () => {
    const wrapper = mount(<Rainbow flatRainbow={true} />);
    wrapper.find('#ray1').simulate('click');
    expect(wrapper.state('rays')[0].mainColor).to.eql('orange');
  });
});

describe('<RayFlat />', () => {
  const clickRay = sinon.spy()
  const wrapper = shallow(
    <RayFlat
      clickRay={clickRay}
      mainColor={'red'}
      gradient={'white'}
    />);

  it('should have className ray', () => {
    expect(wrapper.find('.ray')).to.have.length(1);
  });
  it('should set prop mainColor', () => {
    expect(wrapper.find({style: background}).text()).to.equal('red');
  });

});
