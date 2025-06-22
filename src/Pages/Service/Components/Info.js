import "@fortawesome/fontawesome-free";
//component
import InfoColumn from "./InfoColumn";
//css
const Info = (props) => {
  return (
    <div className="info-section container">
      <div className="info-row row">
        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Contact Information"
        >
          <p>SF LEASING PTE. LTD.</p>
          <p>
            <span className="info-card-icons">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>
              TOA PAYOH INDUSTRIAL PARK, 7 TOA PAYOH INDUSTRIAL PARK, Postal
              319059, #01-1259
            </span>
          </p>
          <hr />
          <p>
            <span className="info-card-icons">
              <i className="fas fa-phone"></i>
            </span>
            <span>+65-6752-2212</span>
            <span className="info-grey"> Central Office</span>
          </p>
          <hr />
          <p>
            <span className="info-card-icons">
              <i className="fas fa-paper-plane"></i>
            </span>
            <span>
              <a href="/">admin@razorsolutions·com·sg</a>
            </span>
          </p>
        </InfoColumn>
        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Opening Hours"
        >
          <div>
            <ul className="info-list">
              <li>
                <span>Monday</span>
                08:00 - 19:00
              </li>
              <hr />
              <li>
                <span>Tuesday</span>
                08:00 - 19:00
              </li>
              <hr />
              <li>
                <span>Wednesday</span>
                08:00 - 19:00
              </li>
              <hr />
              <li>
                <span>Thursday</span>
                08:00 - 19:00
              </li>
              <hr />
              <li>
                <span>Friday</span>
                08:00 - 19:00
              </li>
            </ul>
          </div>
        </InfoColumn>
        <InfoColumn
          columnClass="info-column col-lg-4 col-md-4 col-sm-12"
          className="info-card"
          title="Shortly About Us"
        >
          <p className="info-grey">
            Most consumers would agree that having your own car provides
            unbeatable convenience, flexibility and freedom. But the typical car
            purchase experience is a tedious process full of paperwork and
            frustrations.
          </p>
        </InfoColumn>
      </div>
    </div>
  );
};

export default Info;
