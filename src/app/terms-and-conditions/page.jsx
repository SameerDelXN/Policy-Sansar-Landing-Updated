import React from "react";
import terms from "../../../public/coverimg/terms.png"
import termsss from "../../../public/coverimg/cover3.png"
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:gap-10 xxs:gap-5 p-5">
   <div className="w-full h-56 bg-black p-6 relative ">
                 <Image src={termsss} layout="fill" objectFit="cover" alt="about-us"  />
                 <div className="absolute inset-0 bg-black opacity-40"></div>
                 <div className="absolute inset-0 flex items-center pl-16 text-white ">
                   <h1 className="text-2xl font-bold">Terms and Conditions</h1>
         
                 </div>
               </div>
      
      <div className="flex flex-col items-start  text-base bg-white shadow-md border border-gray-200 rounded-3xl lg:p-8 xxs:p-6 text-gray-700 space-y-4 leading-relaxed">
      <div className="lg:px-4 lg:py-6 xxs:px-1 xxs:py-1 ">
  <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">1. Description of Services</h1>
  <p className="text-justify leading-relaxed text-gray-700 ">
    In the Site, Policy SansarLife provides users with access to information primarily about Financial and Insurance products and services, 
    including but not restricted to General Insurance, Life Insurance products, and related services (including but not limited to renewals) 
    (the "Service"). You are responsible for obtaining access to the Site, and that access may involve third-party fees (such as Internet 
    service provider or airtime charges). In addition, you must provide and are responsible for all equipment necessary to access the Site.
  </p>
  <p className="text-justify leading-relaxed text-gray-700 mt-4 g:text-md">
    By making use of this site, and furnishing your personal/contact details, you hereby agree that you are interested in availing and 
    purchasing the Service(s) that you have selected. You hereby agree that Policy SansarLife may contact you either electronically or through 
    phone, to understand your interest in the selected products and Service(s) (like renewals, reminders, etc.) and to fulfill your demand.
  </p>
  <p className="text-justify leading-relaxed text-gray-700 mt-4">
    You also agree that Policy SansarLife reserves the right to make your details available to its affiliates and partners, and you may be 
    contacted by the affiliates and partners for information and for sales through email, telephone, and/or SMS. You agree to receive 
    promotional materials and/or special offers from Policy SansarLife through email or SMS.
  </p>
</div>

<div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
  <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">2. License and Site Access</h1>
  <p className=" text-justify leading-relaxed text-gray-700">
    Policy SansarLife grants you a limited license to access and make personal use of the Site and the Service. This license does not include any 
    downloading or copying of any kind of information for the benefit of another individual, vendor, or any other third party; caching, 
    unauthorized hypertext links to the Site, and the framing of any Content available through the Site; uploading, posting, or transmitting 
    any content that you do not have a right to make available (such as the intellectual property of another party); uploading, posting, or 
    transmitting any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, 
    or limit the functionality of any computer software or hardware or telecommunications equipment; any action that imposes or may impose 
    (in Policy SansarLife's sole discretion) an unreasonable or disproportionately large load on Policy SansarLife's infrastructure; or any use of 
    data mining, robots, or similar data gathering and extraction tools. You may not bypass any measures used by Policy SansarLife to prevent 
    or restrict access to the Site. Any unauthorized use by you shall terminate the permission or license granted to you by Policy SansarLife. 
    By using the Site, you agree not to:
  </p>
  <ul className="list-disc list-inside mt-4 text-gray-700 text-lg leading-relaxed">
    <li>Use this Site or its contents for any commercial purpose.</li>
    <li>Make any speculative, false, or fraudulent transaction or any transaction in anticipation of demand.</li>
    <li>
      Access, monitor, or copy any content or information of this Site using any robot, spider, scraper, or other automated means, 
      or any manual process for any purpose without our express written permission.
    </li>
    <li>
      Violate the restrictions in any robot exclusion headers on this Site or bypass or circumvent other measures employed to 
      prevent or limit access to this Site.
    </li>
    <li>
      Take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure.
    </li>
    <li>
      Deep-link to any portion of this Site (including, without limitation, the purchase path for any service) for any purpose 
      without our express written permission.
    </li>
    <li>
      "Frame," "mirror," or otherwise incorporate any part of this Site into any other website without our prior written authorization.
    </li>
  </ul>
</div>

      <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
      <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">3. Eligibility</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          The Service is not available to minors under the age of 18 or to any
          users suspended or removed from the system by Policy SansarLife for any
          reason. Users may not have more than one active account. Additionally,
          users are prohibited from selling, trading, or otherwise transferring
          their accounts to another party. If you do not qualify, you may not
          use the Service or the Site.
        </p>{" "}
      </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">4. Your Account</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          In consideration of your use of the Site, you represent that you are
          of legal age to form a binding contract and are not a person barred
          from receiving services under the laws of India or other applicable
          jurisdiction and will only use the Site to make legitimate purchases
          for you or for another person for whom you are legally authorized to
          act (and will inform such other persons about the ToU and/or Privacy
          Policy) that apply to the purchase you have made on their behalf
          (including all rules and restrictions applicable thereto). You also
          agree to provide true, accurate, current and complete information
          about yourself as prompted by the Site. If you provide any information
          that is untrue, inaccurate, not current or incomplete (or becomes
          untrue, inaccurate, not current or incomplete), or Policy SansarLife has
          reasonable grounds to suspect that such information is untrue,
          inaccurate, not current or incomplete, Policy SansarLife has the right to
          suspend or terminate your account and refuse any and all current or
          future use of the Site (or any portion thereof). If you use the Site,
          you are responsible for maintaining the confidentiality of your
          account and password, and for restricting access to your computer. You
          agree to accept responsibility for all activities that occur under
          your account or password. Because of this, we strongly recommend that
          you exit from your account at the end of each session. You agree to
          notify Policy SansarLife immediately of any unauthorized use of your
          account or any other breach of security. Policy SansarLife reserves the
          right to refuse service, terminate accounts, or remove or edit content
          in its sole discretion. Notwithstanding the above, we retain the right
          at our sole discretion to deny access to anyone to the Site and the
          Services we offer, at any time and for any reason, including, but not
          limited to, for violation of the ToU or Privacy Policy. Additional
          terms and conditions will apply to your purchase of Services that you
          select. Please read these additional terms and conditions carefully.
          You agree to abide by the terms and conditions of purchase imposed by
          any service provider with whom you elect to deal, including, but not
          limited to, payment of all amounts when due and compliance with the
          service provider's rules and restrictions regarding use of products,
          and/or Services. You agree that any violation of any such service
          provider's rules and restrictions may result in cancellation of your
          purchase(s), in your being denied access to the applicable service(s),
          in your forfeiting any monies paid for such Services, and/or in our
          debiting your account for any costs we incur as a result of such
          violation.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="text-2xl font-semibold">5. Submitted Content</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          Policy SansarLife does not claim ownership of any materials you make
          available through the Site. At Policy SansarLife's sole discretion, such
          materials may be included in the Service in whole or in part or in a
          modified form. With respect to such materials you submit or make
          available for inclusion on the Site, you grant Policy SansarLife a
          perpetual, irrevocable, non-terminable, worldwide, royalty-free and
          non-exclusive license to use, copy, distribute, publicly display,
          modify, create derivative works, and sublicense such materials or any
          part of such materials (as well as use the name that you submit in
          connection with such submitted content). You hereby represent, warrant
          and covenant that any materials you provide do not include anything
          (including, but not limited to, text, images, music or video) to which
          you do not have the full right to grant the license specified in this
          Section 4. We take no responsibility and assume no liability for any
          submitted content posted or submitted by you. We have no obligation to
          post your comments; we reserve the right in our absolute discretion to
          determine which comments are published on the Site. If you do not
          agree to these terms and conditions, please do not provide us with any
          submitted content. You agree that you are fully responsible for the
          content you submit.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Any unlawful, threatening, libelous, defamatory, obscene,
            pornographic, or other material or content that would violate rights
            of publicity and/or privacy or that would violate any law;
          </li>
          <li>
            Any commercial material or content (including, but not limited to,
            solicitation of funds, advertising, or marketing of any goods or
            services);
          </li>
          <li>
            Any material or content that infringes, misappropriates, or violates
            any copyright, trademark, patent right, or other proprietary right
            of any third party.
          </li>
        </ul>
        <p className="text-justify leading-relaxed text-gray-700">
          You shall be solely liable for any damages resulting from any
          violation of the foregoing restrictions, or any other harm resulting
          from your posting of content to this Site.
        </p>
       </div>
       <div className="lg:px-6 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">
          6. Disclaimer of Liability and Warranty
        </h1>
        <p className="text-justify leading-relaxed text-gray-700">
          The Content, Products, and Services Published on this site may include
          inaccuracies or errors, Including Pricing errors. We do not guarantee
          the accuracy of , and disclaim all liability for any errors or other
          inaccuracies relating to the information and description of the
          content, products, and services we expressly reserves the right to
          correct any pricing errors on the site and/or on pending reservations
          made under an incorrect price. Policy SansarLife makes no representation
          about the suitability of the information, Software, products, and
          services contained on this site for any purpose, and the inclusion or
          offering of any products or services on this site does not constitute
          any endorsement or recommendation of such products or services. All
          such information, software, products, and services are provided "AS
          IS" without warranty of any kind. Policy SansarLife disclaims all
          warranties and conditions that this site, its services or any email
          sent from Policy SansarLife, its affiliates, and/or their respective or
          associated service providers are free of viruses or other harmful
          components. Policy SansarLife hereby disclaims all warranties and
          conditions with regard to this information, software, products, and
          services, including all implied warranties and conditions of
          merchantability, fitness for a particular purpose, title, and no
          infringement. The service providers providing services on this site
          are independent affiliates and Policy SansarLife are not liable for the
          acts, errors, omissions, representations, warranties, breaches or
          negligence of any such service providers or for any personal injuries,
          death, property damage, or other damages or expenses resulting
          therefore. Policy SansarLife and its affiliates have no liability and will
          make no refund in the event of any delay, cancellation, strike, force
          majeure or other causes beyond their direct control, and they have no
          responsibility for any additional expense omissions delays or acts of
          any government or authority. In no event shall Policy SansarLife and/or
          its affiliates be liable for any direct, indirect, punitive,
          incidental, special, or consequential damages arising out of, or in
          any way connected with, your access to, display of or use of this site
          or with the delay or inability to access, display or use this site
          (including, but not limited to, your reliance upon opinions appearing
          on this site; any computer viruses, information, software, linked
          sites, products, and services obtained through this site; or otherwise
          arising out of the access to, display of or use of this site) whether
          based on a theory of negligence, contract, tort, strict liability, or
          otherwise, and even if Policy SansarLife and/or its affiliates their
          respective service providers have been advised of the possibility of
          such damages.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">
          7. Cancellation & Refund/ChargeBack Terms and Conditions
        </h1>
        <p className="text-justify leading-relaxed text-gray-700">
          (a) Free look period Cancellation and Refund
        </p>
        <p className="text-justify leading-relaxed text-gray-700">
          As per the IRDAI rules and regulations, you have the right to cancel
          your insurance policy within 15 (fifteen) days from the date of
          (online) receipt of insurance policy (referred to as “Free look
          period”) and refund of your premium amount shall be processed as per
          the applicable process and procedures followed by the insurer. This
          Free look facility can be availed only for Life and Health insurance
          policies, subject to certain other terms and conditions specified by
          IRDAI. We encourage all our customers to read the insurance policy
          document carefully and avail the free look facility in case the terms
          and conditions of the insurance policy document don’t match your
          insurance requirements. Further, you understand that once you place a
          cancellation request within the Free look period, the policy gets
          cancelled and entire premium is refunded to you subject to deduction
          of:
        </p>
        <ul className="list-disc pl-5">
          <li>Charges pertaining to medical tests conducted</li>
          <li>Administrative and service cost like stamp duty, etc.</li>
          <li>Charges for mortality for the period the policy was in force</li>
        </ul>
        <p className="text-justify leading-relaxed text-gray-700">
          Please note such deduction is at the sole discretion of the insurer.
          All payments with respect to refunds as stated under this paragraph 1
          shall be the sole responsibility of the insurer per the rules and
          regulations laid down by the IRDAI. You understand that Policy SansarLife
          has tied up with RBI authorized payment gateways to allow you to make
          online payments towards your insurance premium amount and is only
          acting as a mere facilitator and providing its assistance to its
          customers for speedy refunds.
        </p>
        <p className="text-justify leading-relaxed text-gray-700">(b) Chargebacks</p>
        <p className="text-justify leading-relaxed text-gray-700">
          You (cardholder) may dispute a transaction carried out through our
          Website and file a Chargeback with your issuing bank for the reversal
          of that transaction. Chargeback allows transactions to be reversed by
          you under specified circumstances such as:
        </p>
        <ul className="list-disc pl-5">
          <li>
            Alleged forgery of the card number / bank account or other details
          </li>
          <li>
            Any charge/debit made on a card that has been listed as a hot listed
            card or otherwise listed on the card association (Visa, MasterCard,
            etc.) warning bulletins
          </li>
          <li>Duplicate processing of the transaction</li>
          <li>
            For other reasons as per applicable rules and guidelines issued by
            RBI, card Associations, your card/payment instrument issuing bank,
            etc.
          </li>
        </ul>
        <p className="text-justify leading-relaxed text-gray-700">
          However, we reserve the right to reject a Chargeback, including but
          not limited to, under the following circumstances:
        </p>
        <ul className="list-disc pl-5">
          <li>
            In the event your medical tests or underwriting is in process with
            your chosen insurer, not exceeding a period of 3 months from the
            date of your insurance policy application
          </li>
          <li>
            In the event there is any delay caused on the part of the insurer in
            conducting medical tests or during the process of medical
            underwriting or issuance of insurance policy or any service provided
            by the insurer in connection with the insurance policy issuance, not
            exceeding a period of 3 months from the date of your insurance
            policy application
          </li>
          <li>
            In case your insurance policy application is rejected by the
            insurer, post your medical test
          </li>
        </ul>
        <p className="text-justify leading-relaxed text-gray-700">
          Our Company shall not be liable to you, in any form or manner
          whatsoever, for any claims, disputes, or proceedings which may arise
          in connection with Chargebacks initiated by you in the circumstances
          as specified under (a), (b), and (c) herein above.
        </p>
       </div>
    <div className="lg:px-6 lg:py-6 xxs:px-2 xxs:py-3 ">
    <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">
          8. Additional Terms and Conditions of proposal form (applicable for
          health insurance products only)
        </h1>
        <p className="text-justify leading-relaxed text-gray-700">
  (i) You hereby declare, on your behalf and on behalf of all persons proposed to be insured, that the statements, answers and/or particulars given by you are true and complete in all respects to the best of your knowledge and that you are authorized to propose on behalf of these other persons.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (ii) You understand that the information provided by you will form the basis of the insurance policy, is subject to the Board approved underwriting policy of the insurer and that the policy will come into force only after full payment of the premium chargeable.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (iii) You further declare that you will notify in writing any change occurring in the occupation or general health of the life to be insured/proposer after the proposal has been submitted but before communication of the risk acceptance by the insurance company.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (iv) You declare that you consent to the insurance company seeking medical information from any doctor or hospital who/which at any time has attended on the person to be insured/proposer or from any past or present employer concerning anything which affects the physical or mental health of the person to be insured/proposer and seeking information from any insurer to whom an application for insurance on the person to be insured/proposer has been made for the purpose of underwriting the proposal and/or claim settlement.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (v) You authorize the Policy SansarLife/insurance Broking company to share information pertaining to your proposal including the medical records of the insured/proposer for the sole purpose of underwriting the proposal and/or claims settlement and with any Governmental and/or Regulatory authority.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (vi) You consent to and authorize any of the insurance company’s authorized representatives not being direct employees of the company to seek medical information required for the purpose of policy issuance or claim settlement under this policy from any hospital/medical practitioner that you or any person proposed to be insured/insured has attended or may attend in future concerning any disease or illness or injury.
</p>
<p className="text-justify leading-relaxed text-gray-700">
  (vii) You understand and agree that (Section 41 of Insurance Act):
</p>
<ul className="list-disc pl-5">
  <li>No person shall allow or offer to allow, either directly or indirectly, as an inducement to any person to take out or renew or continue an insurance in respect of any kind of risk relating to lives or property in India, any rebate of the whole or part of the commission payable or any rebate of the premium shown on the policy, nor shall any person taking out or renewing or continuing a Policy accept any rebate, except such rebate as may be allowed in accordance with the published prospectuses or tables of the insurers.</li>
  <li>Any person making default in complying with the provision of this section shall be liable for a penalty which may extend to ten lakh rupees.</li>
</ul>
    </div>

       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">
          9. Customer Due Deligence requirements(CDD)
        </h1>
        <p className="text-justify leading-relaxed text-gray-700">
          You agree and acknowledge that for undertaking any financial
          transaction through the website, Our Company may undertake
          client/customer due diligence measuresers and seek mandatory
          information required for KYC purpose which as a customer you are
          obliged to give, while facilitating your request of insurance
          requirements with the insurance company(ies), in accordance with
          applicable PMLA laws and rules. Where required, you hereby consent to
          and authorize Our Company to obtain your credit information through
          authorized entities. Our Company may obtain sufficient information to
          establish, to its satisfaction or the insurance company, the identity
          of each new customer, and the purpose of the intended nature of
          insurance relationship between you and the insurance company(ies). You
          agree and understand that you shall ensure that any payment towards
          insurance premium is remitted only through your bank account or from a
          joint bank account in which you are a joint holder. In the event,
          payment towards insurance premium is remitted through a bank account
          opened in the name of a third party(i.e. not being in your name), you
          agree and acknowledge that Our Company can undertake enhanced due
          diligence measures(including any documentation), to satisfy itself
          relating to customer due diligence requirements. You further agree and
          acknowledge that, in line with the requirements and obligations under
          the PMLA Act and rules, all refunds shall be processed by the
          insurance company(ies) through us to the bank account which was used
          to remit payment of insurance premium. You agree and acknowledge that
          for undertaking any financial transaction through the website, Our
          Company may undertake client/customer due diligence measuresers and
          seek mandatory information required for KYC purpose which as a
          customer you are obliged to give, while facilitating your request of
          insurance requirements with the insurance company(ies), in accordance
          with applicable PMLA laws and rules. Where required, you hereby
          consent to and authorize Our Company to obtain your credit information
          through authorized entities. Our Company may obtain sufficient
          information to establish, to its satisfaction or the insurance
          company, the identity of each new customer, and the purpose of the
          intended nature of insurance relationship between you and the
          insurance company(ies). You agree and understand that you shall ensure
          that any payment towards insurance premium is remitted only through
          your bank account or from a joint bank account in which you are a
          joint holder. In the event, payment towards insurance premium is
          remitted through a bank account opened in the name of a third
          party(i.e. not being in your name), you agree and acknowledge that Our
          Company can undertake enhanced due diligence measures(including any
          documentation), to satisfy itself relating to customer due diligence
          requirements. You further agree and acknowledge that, in line with the
          requirements and obligations under the PMLA Act and rules, all refunds
          shall be processed by the insurance company(ies) through us to the
          bank account which was used to remit payment of insurance premium.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">10. License Disclaimer</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          Nothing on any Policy SansarLife website shall be construed as conferring
          any license under any of Policy SansarLife's or any third party's
          intellectual property rights, whether by estoppel, implication, or
          otherwise.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">11. Local Laws</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          Policy SansarLife controls and operates this Website from its headquarters
          in Mumbai, India and makes no representation that the materials on the
          website are appropriate or available for use in other locations. If
          you use this Website from other locations, you are responsible for
          compliance with applicable local laws including but not limited to the
          export and import regulations of other countries. Unless otherwise
          explicitly stated, all marketing or promotional materials found on
          this Website are solely directed to individuals, companies or other
          entities located in India and comply with the laws prevailing for the
          time being in force in India. Disputes if any shall be subject to the
          exclusive jurisdiction of Courts at Mumbai.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">12. Limitation of Liability</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          You expressly understand and agree that Policy SansarLife and its
          subsidiaries, affiliates, officers, employees, agents, partners and
          licensors shall not be liable to you for any direct, indirect,
          incidental, special, consequential or exemplary damages, including,
          but not limited to, damages for loss of profits, goodwill, use, data
          or other intangible losses (even if Policy SansarLife has been advised of
          the possibility of such damages), resulting from use of the site,
          content or any related services. If, despite the limitation above,
          Policy SansarLife or its Affiliates are found liable for any loss or
          damage which arises out of or in any way connected with any of the
          occurrences described above, then the liability of Policy SansarLife
          and/or Its Affiliates will in no event exceed, in the aggregate, the
          greater of (a) the service fees you paid to Policy SansarLife in
          connection with such transaction(s) on this Site, or (b) Rupees One
          Hundred only (INR 100) The limitation of liability reflects the
          allocation of risk between the parties. The limitations specified in
          this section will survive and apply even if any limited remedy
          specified in these terms is found to have failed of its essential
          purpose. The limitations of liability provided in these terms inure to
          the benefit of Policy SansarLife, Its affiliates, and/or their respective
          service providers.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">13. Indemnity</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          You agree to indemnify and hold Policy SansarLife (and its officers,
          directors, agents, subsidiaries, joint ventures, and employees)
          harmless from any and against any claims, causes of action, demands,
          recoveries, losses, damages, fines, penalties or other costs or
          expenses of any kind or nature, including reasonable attorneys' fees,
          or arising out of or related to your breach of this ToU, your
          violation of any law or the rights of a third party, or your use of
          the Site.
        </p>
       </div>
       <div className="lg:px-4 lg:py-6 xxs:px-2 xxs:py-3 ">
       <h1 className="lg:text-2xl font-semibold mb-4 xxs:text-lg">14. Electronic Communication</h1>
        <p className="text-justify leading-relaxed text-gray-700">
          When you use the Site or send emails to Policy SansarLife, you are
          communicating with Policy SansarLife electronically. You consent to
          receive communications from Policy SansarLife electronically. Riskfree
          Life may communicate with you by email or by posting notices on the
          Site or by phone or usually available means of communication. You
          agree that all agreements, notices, disclosures and other
          communications that we provide to you electronically satisfy any legal
          requirement that such communications be in writing.
        </p>
       </div>
      </div>
    </div>
  );
};

export default page;
