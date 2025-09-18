import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - Lexington Capital',
  description: 'Lexington Capital LLC Privacy Policy - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Lexington Capital LLC Privacy Policy</strong>
              </p>
              
              <p className="text-gray-600 mb-6">
                This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.lexcapusa.com (the &ldquo;Site&rdquo;).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">PERSONAL INFORMATION WE COLLECT</h2>
              
              <p className="text-gray-600 mb-4">
                When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &ldquo;Device Information.&rdquo;
              </p>

              <p className="text-gray-600 mb-4">
                We collect Device Information using the following technologies:
              </p>

              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">
                  <strong>&ldquo;Cookies&rdquo;</strong> are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.allaboutcookies.org</a>.
                </li>
                <li className="mb-2">
                  <strong>&ldquo;Log files&rdquo;</strong> track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                </li>
                <li className="mb-2">
                  <strong>&ldquo;Web beacons,&rdquo; &ldquo;tags,&rdquo; and &ldquo;pixels&rdquo;</strong> are electronic files used to record information about how you browse the Site.
                </li>
              </ul>

              <p className="text-gray-600 mb-6">
                Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as &ldquo;Order Information.&rdquo;
              </p>

              <p className="text-gray-600 mb-6">
                When we talk about &ldquo;Personal Information&rdquo; in this Privacy Policy, we are talking both about Device Information and Order Information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
              
              <p className="text-gray-600 mb-4">
                We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
              </p>

              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">Communicate with you;</li>
                <li className="mb-2">Screen our orders for potential risk or fraud; and</li>
                <li className="mb-2">When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
              </ul>

              <p className="text-gray-600 mb-6">
                We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">SHARING YOUR PERSONAL INFORMATION</h2>
              
              <p className="text-gray-600 mb-4">
                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store–you can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.shopify.com/legal/privacy</a>. We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
              </p>

              <p className="text-gray-600 mb-6">
                Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">BEHAVIOURAL ADVERTISING</h2>
              
              <p className="text-gray-600 mb-4">
                As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative&apos;s (&ldquo;NAI&rdquo;) educational page at <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.
                
              </p>

              <p className="text-gray-600 mb-4">You can opt out of targeted advertising by:</p>

              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li className="mb-2">
                  <strong>FACEBOOK</strong> – <a href="https://www.facebook.com/settings/?tab=ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.facebook.com/settings/?tab=ads</a>
                </li>
                <li className="mb-2">
                  <strong>GOOGLE</strong> – <a href="https://www.google.com/settings/ads/anonymous" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads/anonymous</a>
                </li>
                <li className="mb-2">
                  <strong>BING</strong> – <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>
                </li>
              </ul>

              <p className="text-gray-600 mb-6">
                Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance&apos;s opt-out portal at: <a href="http://optout.aboutads.info/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://optout.aboutads.info/</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DO NOT TRACK</h2>
              
              <p className="text-gray-600 mb-6">
                Please note that we do not alter our Site&apos;s data collection and use practices when we see a Do Not Track signal from your browser.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">DATA RETENTION</h2>
              
              <p className="text-gray-600 mb-6">
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">MINORS</h2>
              
              <p className="text-gray-600 mb-6">
                The Site is not intended for individuals under the age of 18.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CHANGES</h2>
              
              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">CONTACT US</h2>
              
              <p className="text-gray-600 mb-6">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:info@lexcapusa.com" className="text-blue-600 hover:underline">info@lexcapusa.com</a> or by mail using the details provided below:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  6394 Austin St, Apt 2G<br />
                  Rego Park, NY, 11374<br />
                  United States
                </p>
              </div>

              <p className="text-gray-600 mt-8 text-sm">
                Copyright © 2025 Lexington Capital
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
