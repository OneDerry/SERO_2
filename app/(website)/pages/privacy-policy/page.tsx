import { PaintSplash } from "@/shared/general/paint_splash";
import { PaintStrides } from "@/shared/general/paint_strides";

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative flex items-center justify-center bg-linear-to-t from-primary-semilight to-background px-6 py-16 md:py-20 mt-10 mb-56">
        {/* <PaintSplash position="top" color="primary-semi-light" /> */}
        <PaintStrides position="bottom" color="primary-semi-light" />
        <div className="text-center max-w-4xl space-y-3">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-sero-dark/70">Last updated: May 5, 2025</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4 text-sm leading-relaxed">
          <p>
            This Privacy Policy describes how Sero Beverage Co. (the
            &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) collects, uses, and discloses your personal
            information when you visit, use our services, or make a purchase
            from serosoda.com (the &quot;Site&quot;) or otherwise communicate
            with us regarding the Site (collectively, the &quot;Services&quot;).
            For purposes of this Privacy Policy, &quot;you&quot; and
            &quot;your&quot; means you as the user of the Services, whether you
            are a customer, website visitor, or another individual whose
            information we have collected pursuant to this Privacy Policy.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using and accessing
            any of the Services, you agree to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
            If you do not agree to this Privacy Policy, please do not use or
            access any of the Services.
          </p>
        </div>
      </section>

      {/* Changes + How We Collect */}
      <section className="bg-primary-semilight/30 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Changes to This Privacy Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time, including to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will post the revised Privacy Policy on
              the Site, update the &quot;Last updated&quot; date and take any
              other steps required by applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              How We Collect and Use Your Personal Information
            </h2>
            <p className="text-sm leading-relaxed">
              To provide the Services, we collect and have collected over the
              past 12 months personal information about you from a variety of
              sources, as set out below. The information that we collect and use
              varies depending on how you interact with us.
            </p>
            <p className="text-sm leading-relaxed">
              In addition to the specific uses set out below, we may use
              information we collect about you to communicate with you, provide
              or improve the Services, comply with any applicable legal
              obligations, enforce any applicable terms of service, and to
              protect or defend the Services, our rights, and the rights of our
              users or others.
            </p>
          </div>
        </div>
      </section>

      {/* What We Collect */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              What Personal Information We Collect
            </h2>
            <p className="text-sm leading-relaxed">
              The types of personal information we obtain about you depends on
              how you interact with our Site and use our Services. When we use
              the term &quot;personal information&quot;, we are referring to
              information that identifies, relates to, describes or can be
              associated with you. The following sections describe the
              categories and specific types of personal information we collect.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Information We Collect Directly from You
            </h2>
            <p className="text-sm leading-relaxed">
              Information that you directly submit to us through our Services
              may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Contact details including your name, address, phone number, and
                email.
              </li>
              <li>
                Order information including your name, billing address, shipping
                address, payment confirmation, email address, and phone number.
              </li>
              <li>
                Account information including your username, password, security
                questions and other information used for account security
                purposes.
              </li>
              <li>
                Customer support information including the information you
                choose to include in communications with us, for example, when
                sending a message through the Services.
              </li>
            </ul>
            <p className="text-sm leading-relaxed">
              Some features of the Services may require you to directly provide
              us with certain information about yourself. You may elect not to
              provide this information, but doing so may prevent you from using
              or accessing these features.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Information We Collect about Your Usage
            </h2>
            <p className="text-sm leading-relaxed">
              We may obtain information about you from third parties, including
              from vendors and service providers who may collect information on
              our behalf, such as:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Companies who support our Site and Services, such as Shopify.
              </li>
              <li>
                Our payment processors, who collect payment information (e.g.,
                bank account, credit or debit card information, billing address)
                to process your payment in order to fulfill your orders and
                provide you with products or services you have requested, in
                order to perform our contract with you.
              </li>
              <li>
                When you visit our Site, open or click on emails we send you, or
                interact with our Services or advertisements, we, or third
                parties we work with, may automatically collect certain
                information using online tracking technologies such as pixels,
                web beacons, software developer kits, third-party libraries, and
                cookies.
              </li>
            </ul>
            <p className="text-sm leading-relaxed">
              Any information we obtain from third parties will be treated in
              accordance with this Privacy Policy. Also see the section below,
              Third Party Websites and Links.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use Your Info */}
      <section className="bg-primary-semilight/30 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
            How We Use Your Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-2">
                Providing Products &amp; Services
              </h3>
              <p className="text-xs leading-relaxed">
                We use your personal information to provide you with the
                Services in order to perform our contract with you, including to
                process your payments, fulfill your orders, to send
                notifications to you related to your account, purchases,
                returns, exchanges or other transactions, to create, maintain
                and otherwise manage your account, to arrange for shipping,
                facilitate any returns and exchanges and other features and
                functionalities related to your account.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-2">
                Marketing &amp; Advertising
              </h3>
              <p className="text-xs leading-relaxed">
                We may use your personal information for marketing and
                promotional purposes, such as to send marketing, advertising and
                promotional communications by email, text message or postal
                mail, and to show you advertisements for products or services.
                This may include using your personal information to better
                tailor the Services and advertising on our Site and other
                websites.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-2">
                Security &amp; Fraud Prevention
              </h3>
              <p className="text-xs leading-relaxed">
                We use your personal information to detect, investigate or take
                action regarding possible fraudulent, illegal or malicious
                activity. If you choose to use the Services and register an
                account, you are responsible for keeping your account
                credentials safe. We highly recommend that you do not share your
                username, password, or other access details with anyone else. If
                you believe your account has been compromised, please contact us
                immediately.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-2">
                Communication &amp; Improvement
              </h3>
              <p className="text-xs leading-relaxed">
                We use your personal information to provide you with customer
                support and improve our Services. This is in our legitimate
                interests in order to be responsive to you, to provide effective
                services to you, and to maintain our business relationship with
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
            Cookies
          </h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Like many websites, we use Cookies on our Site. For specific
              information about the Cookies that we use related to powering our
              store with Shopify, see https://www.shopify.com/legal/cookies. We
              use Cookies to power and improve our Site and our Services
              (including to remember your actions and preferences), to run
              analytics and better understand user interaction with the Services
              (in our legitimate interests to administer, improve and optimize
              the Services). We may also permit third parties and services
              providers to use Cookies on our Site to better tailor the
              services, products and advertising on our Site and other websites.
            </p>
            <p>
              Most browsers automatically accept Cookies by default, but you can
              choose to set your browser to remove or reject Cookies through
              your browser controls. Please keep in mind that removing or
              blocking Cookies can negatively impact your user experience and
              may cause some of the Services, including certain features and
              general functionality, to work incorrectly or no longer be
              available. Additionally, blocking Cookies may not completely
              prevent how we share information with third parties such as our
              advertising partners.
            </p>
            <p>
              Our website also recognizes the Global Privacy Control (GPC)
              signal, which enables you to opt-out of certain uses or
              disclosures of your information. If you notify us of your
              preference through GPC, we will treat such signal as a valid
              request to opt out of sharing / targeted advertising for the
              associated browser or device, and, if we are able to associate the
              device sending the signal to a Shopify account, we will apply the
              opt out request to the account as well. To learn more about Global
              Privacy Control, you can visit https://globalprivacycontrol.org/.
              Other than the Global Privacy Control, we do not recognize other
              &quot;Do Not Track&quot; signals that may be sent from your web
              browser or device.
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="bg-primary-semilight/30 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
            How We Disclose Personal Information
          </h2>
          <p className="text-sm leading-relaxed">
            In certain circumstances, we may disclose your personal information
            to third parties for contract fulfillment purposes, legitimate
            purposes and other reasons subject to this Privacy Policy. Such
            circumstances may include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
            <li>
              With vendors or other third parties who perform services on our
              behalf (e.g., IT management, payment processing, data analytics,
              customer support, cloud storage, fulfillment and shipping).
            </li>
            <li>
              With business and marketing partners to provide services and
              advertise to you. Our business and marketing partners will use
              your information in accordance with their own privacy notices.
            </li>
            <li>
              When you direct, request us or otherwise consent to our disclosure
              of certain information to third parties, such as to ship you
              products or through your use of social media widgets or login
              integrations, with your consent.
            </li>
            <li>
              With our affiliates or otherwise within our corporate group, in
              our legitimate interests to run a successful business.
            </li>
            <li>
              In connection with a business transaction such as a merger or
              bankruptcy, to comply with any applicable legal obligations
              (including to respond to subpoenas, search warrants and similar
              requests), to enforce any applicable terms of service, and to
              protect or defend the Services, our rights, and the rights of our
              users or others.
            </li>
          </ul>

          <p className="text-sm leading-relaxed">
            We have in the past 12 months disclosed the following categories of
            personal information and sensitive personal information about users
            for the purposes set out above in &quot;How we Collect and Use your
            Personal Information&quot; and &quot;How we Disclose Personal
            Information&quot;:
          </p>

          <div className="overflow-hidden rounded-2xl border-[1.5px] border-foreground bg-white shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/20 bg-primary-semilight/50">
                  <th className="text-left p-3 font-bold">Category</th>
                  <th className="text-left p-3 font-bold">
                    Categories of Recipients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-3 text-xs">&mdash;</td>
                  <td className="p-3 text-xs">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm leading-relaxed">
            We do not use or disclose sensitive personal information without
            your consent or for the purposes of inferring characteristics about
            you.
          </p>
          <p className="text-sm leading-relaxed">
            We have &quot;sold&quot; and &quot;shared&quot; (as those terms are
            defined in applicable law) personal information over the preceding
            12 months for the purpose of engaging in advertising and marketing
            activities, as follows.
          </p>

          <div className="overflow-hidden rounded-2xl border-[1.5px] border-foreground bg-white shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/20 bg-primary-semilight/50">
                  <th className="text-left p-3 font-bold">
                    Category of Personal Information
                  </th>
                  <th className="text-left p-3 font-bold">
                    Categories of Recipients
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-foreground/10">
                  <td className="p-3 text-xs">&mdash;</td>
                  <td className="p-3 text-xs">&mdash;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Third Party + Children + Security */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Third Party Websites and Links
            </h2>
            <p className="text-sm leading-relaxed">
              Our Site may provide links to websites or other online platforms
              operated by third parties. If you follow links to sites not
              affiliated or controlled by us, you should review their privacy
              and security policies and other terms and conditions. We do not
              guarantee and are not responsible for the privacy or security of
              such sites, including the accuracy, completeness, or reliability
              of information found on these sites. Information you provide on
              public or semi-public venues, including information you share on
              third-party social networking platforms may also be viewable by
              other users of the Services and/or users of those third-party
              platforms without limitation as to its use by us or by a third
              party. Our inclusion of such links does not, by itself, imply any
              endorsement of the content on such platforms or of their owners or
              operators, except as disclosed on the Services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Children&apos;s Data
            </h2>
            <p className="text-sm leading-relaxed">
              The Services are not intended to be used by children, and we do
              not knowingly collect any personal information about children. If
              you are the parent or guardian of a child who has provided us with
              their personal information, you may contact us using the contact
              details set out below to request that it be deleted.
            </p>
            <p className="text-sm leading-relaxed">
              As of the Effective Date of this Privacy Policy, we do not have
              actual knowledge that we &quot;share&quot; or &quot;sell&quot; (as
              those terms are defined in applicable law) personal information of
              individuals under 16 years of age.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Security and Retention of Your Information
            </h2>
            <p className="text-sm leading-relaxed">
              Please be aware that no security measures are perfect or
              impenetrable, and we cannot guarantee &quot;perfect
              security.&quot; In addition, any information you send to us may
              not be secure while in transit. We recommend that you do not use
              insecure channels to communicate sensitive or confidential
              information to us.
            </p>
            <p className="text-sm leading-relaxed">
              How long we retain your personal information depends on different
              factors, such as whether we need the information to maintain your
              account, to provide the Services, comply with legal obligations,
              resolve disputes or enforce other applicable contracts and
              policies.
            </p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-primary-semilight/30 py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
            Your Rights
          </h2>
          <p className="text-sm leading-relaxed">
            Depending on where you live, you may have some or all of the rights
            listed below in relation to your personal information. However,
            these rights are not absolute, may apply only in certain
            circumstances and, in certain cases, we may decline your request as
            permitted by law.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Right to Access / Know</h3>
              <p className="text-xs leading-relaxed">
                You may have a right to request access to personal information
                that we hold about you, including details relating to the ways
                in which we use and share your information.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Right to Delete</h3>
              <p className="text-xs leading-relaxed">
                You may have a right to request that we delete personal
                information we maintain about you.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Right to Correct</h3>
              <p className="text-xs leading-relaxed">
                You may have a right to request that we correct inaccurate
                personal information we maintain about you.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Right of Portability</h3>
              <p className="text-xs leading-relaxed">
                You may have a right to receive a copy of the personal
                information we hold about you and to request that we transfer it
                to a third party, in certain circumstances and with certain
                exceptions.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">
                Restriction of Processing
              </h3>
              <p className="text-xs leading-relaxed">
                You may have the right to ask us to stop or restrict our
                processing of personal information.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Withdrawal of Consent</h3>
              <p className="text-xs leading-relaxed">
                Where we rely on consent to process your personal information,
                you may have the right to withdraw this consent.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">Appeal</h3>
              <p className="text-xs leading-relaxed">
                You may have a right to appeal our decision if we decline to
                process your request. You can do so by replying directly to our
                denial.
              </p>
            </div>
            <div className="rounded-2xl border-[1.5px] border-foreground bg-white p-5 shadow-[4px_4px_0_0_rgba(117,211,255,0.6)]">
              <h3 className="font-bold text-sm mb-1">
                Managing Communication Preferences
              </h3>
              <p className="text-xs leading-relaxed">
                We may send you promotional emails, and you may opt out of
                receiving these at any time by using the unsubscribe option
                displayed in our emails to you. If you opt out, we may still
                send you non-promotional emails, such as those about your
                account or orders that you have made.
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            You may exercise any of these rights where indicated on our Site or
            by contacting us using the contact details provided below.
          </p>
          <p className="text-sm leading-relaxed">
            We will not discriminate against you for exercising any of these
            rights. We may need to collect information from you to verify your
            identity, such as your email address or account information, before
            providing a substantive response to the request. In accordance with
            applicable laws, you may designate an authorized agent to make
            requests on your behalf to exercise your rights. Before accepting
            such a request from an agent, we will require that the agent provide
            proof you have authorized them to act on your behalf, and we may
            need you to verify your identity directly with us. We will respond
            to your request in a timely manner as required under applicable law.
          </p>
        </div>
      </section>

      {/* Complaints + International + Contact */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              Complaints
            </h2>
            <p className="text-sm leading-relaxed">
              If you have complaints about how we process your personal
              information, please contact us using the contact details provided
              below. If you are not satisfied with our response to your
              complaint, depending on where you live you may have the right to
              appeal our decision by contacting us using the contact details set
              out below, or lodge your complaint with your local data protection
              authority.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-sero-dark">
              International Users
            </h2>
            <p className="text-sm leading-relaxed">
              Please note that we may transfer, store and process your personal
              information outside the country you live in. Your personal
              information is also processed by staff and third party service
              providers and partners in these countries.
            </p>
            <p className="text-sm leading-relaxed">
              If we transfer your personal information out of Europe, we will
              rely on recognized transfer mechanisms like the European
              Commission&apos;s Standard Contractual Clauses, or any equivalent
              contracts issued by the relevant competent authority of the UK, as
              relevant, unless the data transfer is to a country that has been
              determined to provide an adequate level of protection.
            </p>
          </div>
        </div>
      </section>

      {/* Contact - styled as a standout CTA block */}
      <section className="relative bg-linear-to-b from-primary-semilight to-background py-16 px-6 mb-20">
        <PaintSplash position="top" color="primary-semi-light" />
        {/* <PaintStrides position="bottom" color="primary-semi-light" /> */}
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-sero-dark">
            Contact
          </h2>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto">
            Should you have any questions about our privacy practices or this
            Privacy Policy, or if you would like to exercise any of the rights
            available to you, please call or email us at sales@serobeverages.com
            or contact us at 700 - 1708 Dolphin Avenue, Kelowna, BC, V1Y 8A6,
            CA.
          </p>
        </div>
      </section>
    </main>
  );
}
