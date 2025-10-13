import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phoneNo) {
      return alert("Please fill the all given details");
    }

    setFormData({
      name: "",
      email: "",
      phoneNo: "",
      content: "",
    });
  };

 
  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 text-[#786f78] xl:px-50">
      <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-20">
        <h1 className="text-2xl text-[#39731d] font-semibold mb-2">
          Contact Us
        </h1>
        <p className="text-[#39731d]">mail@suniradesigns.com</p>
        <p className="text-gray-700">+91 99990 28876</p>
        <p className="text-gray-600">Mon-Sat | 10AM-6PM IST</p>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">India Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Studio:</p>
              <p>
                A266-267 Andheria Modh, Ambedkar Colony, Near Nature Bazaar
                (Dastkaar), Chhatarpur, New Delhi - 110074
              </p>
            </div>
            <div>
              <p className="font-medium">Registered Office:</p>
              <p>M1 Saket, New Delhi-110017</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-1">
            International Inquiries
          </h2>
          <p>
            <span className="hover:underline text-[#39731d] cursor-pointer">
              zara.amini@suniradesigns.com
            </span>
          </p>
          <p>+1 (646) 651 6904</p>
          <p className="text-gray-600">Mon-Fri | 09AM-05PM EST</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-1">USA Office</h2>
          <p>866 United Nations Plaza, Suite 408, New York, NY 10017</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 ">
        <div className="w-full bg-gray-100 p-6 flex-col gap-6 rounded-md shadow flex items-center justify-center">
          <input
            className="border-b border-black outline-none w-full md:w-[500px] p-2 bg-transparent"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="border-b border-black outline-none w-full md:w-[500px] p-2 bg-transparent"
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="border-b border-black outline-none w-full md:w-[500px] p-2 bg-transparent"
            type="tel"
            placeholder="Telephone"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <textarea
            className="border border-black outline-none w-full md:w-[500px] h-40 md:h-60 p-2 rounded-md"
            placeholder="Insert Text Here..."
            value={formData.content}
            name="content"
            onChange={handleChange}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 hover:text-[#39731d] "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
