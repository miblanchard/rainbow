#Rainbow 

This was a fun challenge to build a rainbow in React!

###Approach 
I decided to make 2 different rainbows (flat and curved).  I know the most recognizeable rainbow is the full semi-circle we always love seeing, but I also wanted to make a flag-like rainbow.
I decided to make a single Rainbow container component that could be instantiated with or without the flatRainbow flag to switch between a curved and flat rainbow!
I chose to define my App and both curved and flat ray componets as Stateless Functional Components.

###Features
You can enjoy the beautiful visible light spectrum in the normal order as if you were seeing a rainbow after a rain storm, or through a prism.  You can also click on any ray of the rainbow and the whole rainbow will adjust to make that element the top one (maintaining the ROYGBIV order of course!)

### Setup

- [ ] Run `npm install` to install all the dependencies.
- [ ] Run `npm start` to start the Webpack Development Server, and navigate to `http://localhost:9090`. 

### Testing

- [ ] Run `npm test` to see the tests I have written for my components.

###Pending
I ran out of time while I was working on giving the rainbow a true shimmer/gradient background animation.  I started trying to implement this in the rays, and was planning on using the mainColor and gradient that each ray receives via props as the 2 colors between which each ray would animate.  I designed my state to hold both colors and passed them down to the rays as props.
I found a neat sparkle effect, but it was only available jQuery, and I did not have enough time to re-write the funcitonality.
