import React from "react";
import "./frames.css";

class CalandarMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      calandarMap: [],
    };
  }

  render() {
    return (
      <div className="calandar_container">
        <iframe
          title="calandar"
          id="calandar"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&title=web%20test&showTitle=1&src=Z2ZrY2dtcTVtaXM4Y3RucWRwb2EydTc5MXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4uY2hyaXN0aWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aHQzamxmYWFjNWxmZDYyNjN1bGZoNHRxbDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23795548&color=%234285F4&color=%23B39DDB"
          style={{ border: "solid 1px rgb(0, 0, 0)" }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>

        {/* <div class="mapouter" style={{position:"relative", textAlign:"right", height:"1080px", width:"1080px"}}> */}
        {/* <div class="gmap_canvas" style={{overflow:"hidden", background:"none !important",}}> */}
        <iframe
          className="gmap_canvas"
          title="map"
          width="1080"
          // height="1080"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <a href="https://123movies-to.org"></a>
        <br />
        <a href="https://www.embedgooglemap.net"></a>
        {/* </div> */}
        {/* </div>  */}
      </div>
    );
  }
}

export default CalandarMap;
