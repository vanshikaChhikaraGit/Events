import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-col justify-between">
          <div className="w-full mb-6 md:mb-0">
          <div className='flex items-center'>
          <h2 className="text-xl font-bold mb-4">Events</h2>
          </div>
            <p className="text-sm">
              Events is a platform that helps you discover and buy the best in events, travel, and food in your city. We strive to curate experiences that are worth your time and money, possibly something you have never tried before.
            </p>
            
          </div>
          <div className="w-full mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mt-4">For Event Organizers</h3>
            <p className="text-sm">
              Events is built by the same team that created Bacardi NH7 Weekender, and we sure know what goes into putting together a great experience. Our technology, marketing, and customer support can help you build a community of not just ticket buyers, but also fans.
            </p>
          </div>
          <div className="w-full ">
            <h3 className="text-lg font-semibold mt-4">Links</h3>
            <ul className="text-sm flex flex-wrap">
              <li className="m-2"><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">Work With Us</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">List With Us</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li className="m-2"><a href="#" className="hover:text-gray-400">FAQs</a></li>
            </ul>
          </div>
          <div className='text-center mt-4 font-bold text-xl'>
            Made With ❤️ By Vanshika Chhikara
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;