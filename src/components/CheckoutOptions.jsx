import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import React from "react";
import { FaCreditCard, FaPlus } from "react-icons/fa";

const CheckoutOptions = () => {
  return (
    <div className="flex flex-col space-y-2 w-full  mt-2 ">
      <Accordion variant="splitted">
        <AccordionItem key="1" aria-label="acc 1" title="Contact Information">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-lg border"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded-lg border"
            />
          </div>
        </AccordionItem>

        <AccordionItem key="2" aria-label="acc 2" title="Delivery Options">
          <div className="flex flex-col">
            <select className="p-2 rounded-lg border">
              <option>Standard</option>
              <option>Express</option>
            </select>
          </div>
        </AccordionItem>

        <AccordionItem key="3" aria-label="acc 3" title="Shipping Address">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Country"
              className="p-2 rounded-lg border"
            />
            <input
              type="text"
              placeholder="State"
              className="p-2 rounded-lg border"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="p-2 rounded-lg border"
            />
            <input
              type="text"
              placeholder="Street adress"
              className="p-2 rounded-lg border"
            />
          </div>
        </AccordionItem>

        <AccordionItem key="4" aria-label="acc 4" title="Payment Method">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex space-x-2 ">
                <input type="radio" />
                <Image src="/master.png" width={50} height={50} className="" />
              </div>

              <div className="flex flex-col justify-between">
                <p>Pay with Mastercard</p>
                <small className="text-xs">
                  Default card | Expire: 04/2027
                </small>
                <input
                  type="text"
                  placeholder="CVV/CVC"
                  className="p-2 rounded-lg border"
                />
              </div>

              <p className="cursor-pointer hidden md:block lg:block">
                <span className="cursor-pointer hover:text-link">Edit</span> |{" "}
                <span className="cursor-pointer hover:text-link">Remove</span>
              </p>
            </div>

            <div className="flex">
              <div className="flex space-x-2">
                <input type="radio" />
                <Image src="/paypal.png" width={50} height={50} />
              </div>

              <p>Pay with Paypal</p>
            </div>

            <div className="flex p-4 cursor-pointer rounded-lg shadow-lg bg-secondary items-center space-x-2">
              <div className="flex space-x-2">
                <FaPlus />
                <FaCreditCard />
              </div>

              <p>Add a new debit or credit card</p>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CheckoutOptions;
