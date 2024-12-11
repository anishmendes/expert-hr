import { Element } from "react-scroll";
// import { links, logos } from "../constants/index.jsx";
// import { Marker } from "../components/Marker.jsx";
import Button from "../components/Button.jsx";

const Download = () => {
  return (
    <section>
  <Element name="contact" className="g7 border-s2/25 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16">
    <div className="flex items-center justify-normal mt-[50px] pt-[20px] pb-[20px]">
      <div className="mx-auto container">
        <div className="bg-none py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" animate__animated animate__fadeIn">
              <h2 className="text-3xl font-bold mb-4 text-p3">EXPERT HR OUTSOURCING</h2>
              <p className="text-p4 mb-4  pl-1">Kathmandu</p>
              <div className=" shadow-md rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8152529835517!2d85.31909031430198!3d27.698599982828823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a9598a1d2b%3A0xa9c8b8e7d2e046d8!2sAntarikshya%20School!5e0!3m2!1sen!2snp!4v1683102678190!5m2!1sen!2snp"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg transform hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
            </div>
            <div className="g9 shadow-hard rounded-lg p-6 animate__animated animate__fadeIn animate__delay-1s">
              <h2 className="text-p3 font-semibold mb-4 pb-6">Send Us a Message</h2>
              
              <div className="mb-2">
                <label htmlFor="name" className="block text-p3 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full g1 border border-gray-300 rounded-md py-2 px-3 text-p3 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 hover:border-blue-500"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="phone" className="block text-p3 font-semibold mb-2">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full g1 border border-gray-300 rounded-md py-2 px-3 text-p3 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 hover:border-blue-500"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="email" className="block text-p3 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full g1 border border-gray-300 rounded-md py-2 px-3 text-p3 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 hover:border-blue-500"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="message" className="block text-p3 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="6"
                  className="w-full g1 border border-gray-300 rounded-md py-2 px-3 text-p3 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 hover:border-blue-500"
                ></textarea>
              </div>

             <div className="mb-6"> 
             <label for="service" className="block text-p3 font-semibold mb-2">Services</label>
<select
  id="service"
  name="service"
  className="w-full g1 border border-gray-300 rounded-md py-2 px-3 text-g1 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition duration-300 "
>
 

  <option value="" className="bg-blue-500"></option>
  <option value="mortgage" className="bg-blue-500">Mortgage Brokerage</option>
  <option value="accounting" className="bg-blue-500">Accounting and Bookkeeping</option>
  <option value="admin-support" className="bg-blue-500">Administrative Support</option>
  <option value="digital-marketing" className="bg-blue-500">Digital Marketing</option>
  <option value="web-development" className="bg-blue-500">Web Development and Maintenance</option>
  <option value="it-support" className="bg-blue-500">IT Support and Marketing Assistance</option>
 
</select>
</div>


              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-[60px] transform transition duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </div>
          </div>

          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-[100px] pb-[50px] flex justify-center space-x-6 animate__animated animate__fadeIn animate__delay-2s">
            <div className="flex items-center text-gray-600">
              <svg
                className="w-8 h-8 mr-2 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-2xl font-semibold  text-p3">experthroutsourcing@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-600">
              <svg
                className="w-8 h-8 mr-2 text-cyan-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-2xl font-semibold text-p3">+977-1-4780000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Element>
</section>

  );
};
export default Download;
