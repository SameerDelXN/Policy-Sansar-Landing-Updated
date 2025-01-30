import React from "react";
import terms from "../../../public/coverimg/terms.png"
import termscover from "../../../public/coverimg/banner.png"
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5 p-5">
       <div className="w-full h-56 bg-black p-8 relative ">
              <Image src={termscover} layout="fill" objectFit="cover" alt="about-us"  />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex items-center pl-16 text-white ">
                <h1 className="text-2xl font-bold">Privacy Policy</h1>
      
              </div>
            </div>
     
      <div className="flex flex-col items-start gap-10 lg:p-8 xxs:p-0">
      <div className="bg-gray-50 lg:p-6 rounded-lg shadow-md xxs:p-6 ">
  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    <strong>Policy Sansar Insurance Brokers</strong> may collect and store information about you when you visit our site, use our services, or view our online advertisements. The information which RFL Insurance Brokers collects and stores during normal use of the site is used to monitor the use of the site and to help further develop our products and services. We use this information to improve our web-based offerings. By registering yourself at RFL, you allow us to contact you via email, phone call, or SMS and offer you the services for the product you are looking for. Even if you have registered yourself under DND, DNC, or NCPR service, we are still allowed to give you a call for products or service-related purposes.
  </p>

  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    We may use personal information that is collected from you to provide requested products and services and for our internal business purposes, including but not limited to:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4 text-justify">
    <li>Responding to your requests for our unique products and services.</li>
    <li>To process your transactions and provide you with transaction and post-transaction-related services, providing, improving, and marketing our products and services, including site content and performance.</li>
    <li>Evaluating your use of the services.</li>
    <li>Providing advertising for products and services that might interest you.</li>
    <li>Responding to your requests for information.</li>
    <li>Communicating with you by email, postal mail or courier, or telephone about products or services that may interest you.</li>
    <li>Maintaining and managing your account with us.</li>
    <li>Keeping you updated on issues relevant to your business relationship with us.</li>
    <li>Monitoring your compliance with any terms and conditions associated with our products and services, including confirming your identity.</li>
    <li>Performing other functions as described to you at the time of collection or pursuant to your consent.</li>
  </ul>

  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    <strong>Third-party websites:</strong> Users may find content on our site that links to the sites and services of insurance companies, which may appear on our site for the online sale of insurance. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site. Additionally, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites that have a link to our site, is subject to that website’s own terms and policies.
  </p>

  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    <strong>With whom we share your information:</strong> We may share personal information with those who perform functions on our behalf. For example, service providers may process payments for our products and services or store and process data on our behalf. These service providers are granted access for the smooth functioning of RFL Insurance Brokers. Additionally, we may share personal information to defend against legal claims.
  </p>

  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    We at RFL try our best to keep your data secure. To ensure this, we take several security measures, including physical and electronic measures, to help safeguard personal information against loss, misuse, damage, or modification, as well as unauthorized access or disclosure. However, no system for transmitting or storing information electronically can be completely secure.
  </p>

  <p className="text-gray-700 text-base leading-relaxed mb-4 text-justify">
    This policy informs users of the ways in which RFL Insurance Brokers aims to protect your information. We may change or update this policy at any time. Any such changes shall be effective immediately when posted on this site.
  </p>

  <p className="text-gray-700 text-base leading-relaxed text-justify">
    <strong>Your acceptance of these terms:</strong> By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our site. Your continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.
  </p>
</div> </div>
    </div>
  );
};

export default page;
