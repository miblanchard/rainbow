import React, { PropTypes, Component } from 'react';
import RayFlat from './rayFlat';
import RayCurved from './rayCurved';

class RainbowFlat extends Component {
  constructor() {
    super();
    this.state = {
      rays: [
        { mainColor: 'red', gradient: 'white' },
        { mainColor: 'orange', gradient: 'white' },
        { mainColor: 'yellow', gradient: 'white' },
        { mainColor: 'green', gradient: 'white' },
        { mainColor: 'blue', gradient: 'white' },
        { mainColor: 'indigo', gradient: 'white' },
        { mainColor: 'violet', gradient: 'white' },
      ],
    };
    this.clickRay = this.clickRay.bind(this);
  }

  clickRay(i) {
    const oldRaysOrder = this.state.rays;
    const rays = oldRaysOrder.slice(i).concat(oldRaysOrder.slice(0, i));
    this.setState({ rays });
  }

  render() {
    const raysArray = this.state.rays.map((ray, i, array) => {
      if (this.props.flatRainbow) {
        return (
          <RayFlat
            clickRay={this.clickRay}
            mainColor={ray.mainColor}
            gradient={ray.gradient}
            key={i}
            index={i}
          />
        );
      }
      return (
        <RayCurved
          clickRay={this.clickRay}
          mainColor={ray.mainColor}
          gradient={ray.gradient}
          key={i}
          index={array.length - i}
        />
      );
    });

    if (this.props.flatRainbow) {
      return (
        <figure>
          {raysArray}
          <figcaption>Flat Rainbow: Clickable</figcaption>
        </figure>
      );
    }
    return (
      <div>
        <svg id="svgelem" height="500" width="100%" xmlns="http://www.w3.org/2000/svg">
          {raysArray}
        </svg>
        <div>
          <p>Curved Rainbow: Also Clickable!</p>
        </div>
      </div>
    );
  }

}

RainbowFlat.propTypes = {
  flatRainbow: PropTypes.bool,
};

export default RainbowFlat;
