import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import App from './../src/App';
import Rainbow from './../src/Components/rainbow';
import RayFlat from './../src/Components/rayFlat';
import RayCurved from './../src/Components/rayCurved';

describe('<App />', () => {
  it('renders 2 <Rainbow /> container component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Rainbow)).to.have.length(2);
  });
  it('should be a stateless functional component', () => {
    expect(App).to.be.a('function');
  });
});

describe('Rainbow(s)', () => {
  it('All items in flatRainbow are wrapped in a figure', () => {
    const flatWrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(flatWrapper.find('figure')).to.have.length(1);
  });
  it('Figure has a caption that reads "Flat Version of a Rainbow: Clickable"', () => {
    const flatWrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(flatWrapper.find('figcaption').text()).to.equal('Flat Rainbow: Clickable');
  });
  it('All items in curvedRainbow are wrapped in an SVG', () => {
    const flatWrapper = shallow(<Rainbow />);
    expect(flatWrapper.find('svg')).to.have.length(1);
  });
  it('Renders as many rays as elements in state.rays', () => {
    const flatWrapper = shallow(<Rainbow flatRainbow={true} />);
    expect(flatWrapper.find(RayFlat)).to.have.length(flatWrapper.state('rays').length);
    const curvedWrapper = shallow(<Rainbow />);
    expect(curvedWrapper.find(RayCurved)).to.have.length(curvedWrapper.state('rays').length);
  });
  it('should have proper data type for state.rays', () => {
    const flatWrapper = mount(<Rainbow flatRainbow={true} />);
    expect(flatWrapper.state('rays')).to.be.an('array');
    const curvedWrapper = mount(<Rainbow />);
    expect(curvedWrapper.state('rays')).to.be.an('array');
  });
  it('should setState and change state.rays order onClick', () => {
    const flatWrapper = mount(<Rainbow flatRainbow={true} />);
    flatWrapper.find('#ray1').simulate('click');
    expect(flatWrapper.state('rays')[0].mainColor).to.eql('orange');
    const curvedWrapper = mount(<Rainbow />);
    curvedWrapper.find('#ray1').simulate('click');
    expect(curvedWrapper.state('rays')[0].mainColor).to.eql('orange');
  });
});

describe('<RayFlat />', () => {
  const clickRay = sinon.spy()
  const mainColor = 'red';
  const wrapper = shallow(
    <RayFlat
      clickRay={clickRay}
      mainColor={mainColor}
      gradient={'white'}
    />);

  it('should be a stateless functional component', () => {
    expect(RayFlat).to.be.a('function');
  });
  it('should have className rayFlat', () => {
    expect(wrapper.find('.rayFlat')).to.have.length(1);
  });
  it('should set prop mainColor', () => {
    expect(wrapper.props().style.background).to.equal(mainColor);
  });
  it('should trigger clickRay when you click on it', () => {
    wrapper.find('div').simulate('click');
    expect(clickRay.calledOnce).to.be.true;
    wrapper.find('div').simulate('click');
    expect(clickRay.calledTwice).to.be.true;
  });
});

describe('<RayCurved />', () => {
  const clickRay = sinon.spy()
  const mainColor = 'red';
  const index = 7;
  const wrapper = shallow(
    <RayCurved
      clickRay={clickRay}
      mainColor={mainColor}
      gradient={'white'}
      index={index}
    />);

  it('should be a stateless functional component', () => {
    expect(RayFlat).to.be.a('function');
  });
  it('should have className rayCurved', () => {
    expect(wrapper.find('.rayCurved')).to.have.length(1);
  });
  it('should set prop mainColor', () => {
    expect(wrapper.props().fill).to.equal(mainColor);
  });
  it('should set size based on index', () => {
    expect(wrapper.props().r).to.equal(index * 70);
  });
  it('should trigger clickRay when you click on it', () => {
    wrapper.find('circle').simulate('click');
    expect(clickRay.calledOnce).to.be.true;
    wrapper.find('circle').simulate('click');
    expect(clickRay.calledTwice).to.be.true;
  });
});
