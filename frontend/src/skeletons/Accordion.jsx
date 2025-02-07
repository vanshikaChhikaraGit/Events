import React, { useState } from "react";

export const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open the first accordion

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle accordion
  };

  const accordionData = [
    {
      title: "Frequently Asked Questions",
      content: (
        <div className="cursor-pointer border-t-1 border-gray-600 pt-2">
          <p className="font-semibold">Is re-entry into the venue allowed?</p>
          <p className="mb-3">Re-entry not allowed. Once you exit, you wont be allowed inside again.</p>

          <p className="font-semibold">Is there a minimum age requirement for the event or is it family-friendly?</p>
          <p className="mb-3">
            Children of age 6 and above need to purchase a ticket to attend the event. Entry for children below 6 will be free.
          </p>

          <p className="font-semibold">Will food & alcohol be available at the venue?</p>
          <p>
            Yes, food & beverage stalls will be present at the venue. Alcohol will only be allowed to customers who are above the legal drinking age as per state laws.
          </p>
        </div>
      ),
    },
    {
      title: "Terms & Conditions",
      content: (
        <ul className="list-disc pl-5 space-y-2 cursor-pointer">
          <li>Please carry a valid ID proof along with you.</li>
          <li>No refunds on purchased tickets are possible, even in case of any rescheduling.</li>
          <li>Security procedures, including frisking, remain the right of the management.</li>
          <li>
            No dangerous or potentially hazardous objects including but not limited to weapons, knives, guns, fireworks, helmets, laser devices, bottles, or musical instruments will be allowed in the venue and may be ejected with or without the owner.
          </li>
          <li>
            The sponsors/performers/organizers are not responsible for any injury or damage occurring due to the event. Any claims regarding the same will be settled in courts in Mumbai.
          </li>
          <li>People in an inebriated state may not be allowed entry.</li>
          <li>Organizers hold the right to deny late entry to the event.</li>
          <li>Venue rules apply.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4 ">
      {accordionData.map((item, index) => (
        <div key={index} className="border-2 hover:cursor-pointer border-gray-800 rounded-lg shadow-md">
          <button
            className="w-full p-4 text-left flex justify-between items-center transition-colors"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-lg">{item.title}</span>
            <span className={`transition-transform transform ${openIndex === index ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
