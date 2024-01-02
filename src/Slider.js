import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';
import R1 from './figs/r1.jpg'
import R2 from './figs/r2.jpg'
import R3 from './figs/r3.jpg'

class Slider extends Component{
    render()
    {
       
        return(
            <div style={{width:'1500px', height:'1500', display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={R1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Picture</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={R2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second Picture</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={R3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third Picture</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
            </div>
        )
    }
}
export default Slider;
