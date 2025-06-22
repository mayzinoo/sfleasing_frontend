//component
//css
import "./styles/servicefeatures.css";

import Service1 from "../../../assets/images/service1.jpg";
import Service2 from "../../../assets/images/service2.jpg";
import Service3 from "../../../assets/images/service3.jpg";
import Service4 from "../../../assets/images/service4.jpg";

const ServiceFeatures = (props) => {
  return (
    <div className="service-features-section container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 service-features-text">
          <div className="row service-features-desc-text">
            <h4>Welcome to </h4>
            <div className="triangle-down"></div>
            <p>
              Since its establishment in Oct 1993 as a building maintenance
              specialist, SuccessForever has evolved and built a credible
              reputation as a Professional, Reliable and Committed service
              provider.
            </p>
            <p>
              Fueled by the drive for perfection, SuccessForever has grown into
              a group of companies over the years, establishing our presence
              across different industries and growing our operation capabilities
              at an admirable rate.
            </p>
            <p>
              Besides providing maintenance services, SuccessForever also
              provides other aviation ancillary services, such as, aircraft
              logistics support, catering, wheelchair handling services and
              aircraft interior cleaning services.
            </p>
          </div>
          <div className="row service-features-desc-list">
            <div className="col-6">
              <p>Running Costs</p>
              <ul>
                <li>18″ 5-Spoke Light-Alloy Wheels</li>
                <li>4-Wheel Disc Brakes</li>
                <li>ABS brakes</li>
                <li>AM/FM radio: SiriusXM</li>
                <li>Adaptive suspension</li>
              </ul>
            </div>
            <div className="col-6">
              <p>Performance</p>
              <ul>
                <li>Auto tilt-away steering wheel</li>
                <li>Auto-dimming Rear-View mirror</li>
                <li>Auto-dimming door mirrors</li>
                <li>Auto-leveling suspension</li>
                <li>Automatic temperature control</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 service-features-images">
          <div className="row service-features-images-row-1">
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service1} alt=""></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service2} alt=""></img>
            </div>
          </div>
          <div className="row service-features-images-row-2">
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service3} alt=""></img>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 service-features-image">
              <img src={Service4} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
