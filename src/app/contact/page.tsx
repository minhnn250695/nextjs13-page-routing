'use client';
import { useState } from 'react';
import Script from 'next/script';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', website: '', message: '' });
  };
  return (
    <>
      <section id="content-wrap" className="site-page">
        <div className="row">
          <div className="col-twelve">
            <section>
              <div className="content-media">
                <div id="map-wrap">
                  <div id="map-container"></div>
                  <div id="map-zoom-in"></div>
                  <div id="map-zoom-out"></div>
                </div>
              </div>

              <div className="primary-content">
                <h1 className="entry-title add-bottom">
                  Get In Touch With Us.
                </h1>

                <p className="lead">
                  Lorem ipsum Deserunt est dolore Ut Excepteur nulla occaecat
                  magna occaecat Excepteur nisi esse veniam dolor consectetur
                  minim qui nisi esse deserunt commodo ea enim ullamco non
                  voluptate consectetur minim aliquip Ut incididunt amet ut
                  cupidatat.
                </p>

                <p>
                  Duis ex ad cupidatat tempor Excepteur cillum cupidatat fugiat
                  nostrud cupidatat dolor sunt sint sit nisi est eu exercitation
                  incididunt adipisicing veniam velit id fugiat enim mollit amet
                  anim veniam dolor dolor irure velit commodo cillum sit nulla
                  ullamco magna amet magna cupidatat qui labore cillum sit in
                  tempor veniam consequat non laborum adipisicing aliqua ea nisi
                  sint ut quis proident ullamco ut dolore culpa occaecat ut
                  laboris in sit minim cupidatat ut dolor voluptate enim veniam
                  consequat occaecat fugiat in adipisicing in amet Ut nulla nisi
                  non ut enim aliqua laborum mollit quis nostrud sed sed.
                </p>

                <div className="row">
                  <div className="col-six tab-full">
                    <h4>Where to Find Us</h4>

                    <p>
                      1600 Amphitheatre Parkway
                      <br />
                      Mountain View, CA
                      <br />
                      94043 US
                    </p>
                  </div>

                  <div className="col-six tab-full">
                    <h4>Contact Info</h4>
                    <p>
                      someone@abstractwebsite.com
                      <br />
                      info@abstractwebsite.com
                      <br />
                      Phone: (+63) 555 1212
                    </p>
                  </div>
                </div>
                <form name="cForm" id="cForm" method="post" onSubmit={handleSubmit}>
                  <fieldset>
                    <div className="form-field">
                      <input
                        name="name"
                        type="text"
                        id="cName"
                        className="full-width"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="email"
                        type="email"
                        id="cEmail"
                        className="full-width"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-field">
                      <input
                        name="website"
                        type="url"
                        id="cWebsite"
                        className="full-width"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="message form-field">
                      <textarea
                        name="message"
                        id="cMessage"
                        className="full-width"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="submit button-primary full-width-on-mobile"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>
      
      {/* Google Maps Script */}
      <Script
        src="https://maps.googleapis.com/maps/api/js?v=3.13&sensor=false"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize Google Maps
          if (typeof window !== 'undefined' && (window as any).google) {
            const mapOptions = {
              zoom: 14,
              center: new (window as any).google.maps.LatLng(-37.817331, 144.955633),
              mapTypeId: (window as any).google.maps.MapTypeId.ROADMAP,
              scrollwheel: false,
              draggable: false,
              mapTypeControl: false
            };

            const mapElement = document.getElementById('map-container');
            if (mapElement) {
              const map = new (window as any).google.maps.Map(mapElement, mapOptions);
              const marker = new (window as any).google.maps.Marker({
                position: new (window as any).google.maps.LatLng(-37.817331, 144.955633),
                map: map,
                title: "We are here"
              });
            }
          }
        }}
      />
    </>
  );
}
