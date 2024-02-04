import React from 'react';
import HomeLayout from './layout/homeLayout';
import appData from '../../package.json';
function PrivacyPolicy(props) {
    return <HomeLayout {...props}>
        <section className="section-ml tool mt-5">
            <div class="container">
                <div>
                    <h3>Privacy Policy And Terms Of Service</h3>
                    <p>
                        This legal notice pertains to web site “www.{appData.liveUrl}” hereinafter
                        referred to as "{appData.name}" or “this Web site” or "this site".
                    </p>
                </div>
                <div>
                    <h4>Welcome</h4>
                    <p>
                        This site is owned by {appData.name}, hereinafter
                        referred to as "{appData.name}". {appData.name} would like to
                        safeguard the information you provide to us about yourself. This Privacy
                        Policy is designed to tell you about our practices regarding
                        collection, use, and disclosure of information that you may provide via
                        this site. Please be sure to read this entire Privacy Policy before
                        using, or submitting information, to this site. Use of this site
                        constitutes your consent to our Privacy Policy.
                    </p>
                    <h4>Intellectual copyright</h4>
                    <p>
                        All information displayed, transmitted or carried on&nbsp;
                        <a target="_blank" rel="noreferrer" href={`https://${appData.liveUrl}`}>www.{appData.liveUrl} </a>
                        is protected by copyright and other intellectual property laws. You may
                        not, under any circumstances, modify, publish, distribute, repost,
                        perform, display or in any way commercially exploit any of the content
                        on this web site.
                    </p>
                    <h4>Your Consent</h4>
                    <p>
                        By using this site, you
                        agree with the terms of this Privacy Policy. Whenever you submit
                        information via this site, you consent to the collection, use, and
                        disclosure of that information in accordance with this Privacy Policy.
                    </p>
                    <h4>Active Information Collection</h4>
                    <p>
                        Like many Web sites, this site actively collects information from its
                        visitors by permitting you to communicate directly with us via e-mail
                        and feedback forms. Some of the information that you submit may be
                        personally identifiable information (that is, information that can be
                        uniquely identified with you – such as your full name, address, e-mail
                        address, phone number, and so on). Some areas of this site may require
                        you to submit information in order for you to benefit from the specified
                        features (such as newsletter subscriptions, order processing,
                        submitting a resume). You will be informed at each information
                        collection point what information is required and what information is
                        optional.
                    </p>
                    <h4>Passive Information Collection</h4>
                    <p>
                        As you navigate through a Web site, certain information can be passively collected (that
                        is, gathered without you actively providing the information) using
                        various technologies and means, such as navigational data collection.This
                        site may use Internet Protocol (IP) addresses. An IP Address is a
                        number assigned to your computer by your Internet service provider so
                        you can access the Internet and is generally considered to be
                        non-personally identifiable information, because in most cases an IP
                        address is dynamic (changing each time you connect to the Internet),
                        rather than static (unique to a particular user's computer). We may use
                        your IP address to diagnose problems with our server, report aggregate
                        information, determine the fastest route for your computer to use in
                        connecting to our site, as well as to administer and improve the site.
                    </p>
                    <h4>Use and Disclosure of Information</h4>
                    <p>
                        Except as otherwise stated, we may use your information to improve the content
                        of our site, to customize the site to your preferences, to communicate
                        information to you (if you have requested it), for our marketing and
                        research purposes (could be on users demographics, interests and
                        behaviour), and for providing you with the latest information for direct
                        marketing purposes where we think you may be interested in the products
                        and services of some of our affiliates or third parties.If you
                        provide personally identifiable information to this site, we may combine
                        such information with other actively collected information unless we
                        specify otherwise at the point of collection. We will take reasonable
                        measures to prevent personally identifiable information from being
                        combined with passively collected information, unless you consent
                        otherwise. {appData.name} may disclose your personally
                        identifiable information to other {appData.name} affiliates that
                        agree to treat it in accordance with this Privacy Policy. In addition,
                        we may disclose your personally identifiable information to third
                        parties, located in India and/or any other country, but only(i)
                        to contractors we use to support our business (e.g., fulfillment
                        services, technical support, delivery services, and financial
                        institutions), in which case we will require such third parties to agree
                        to treat it in accordance with this Privacy Policy;(ii) in
                        connection with the sale, assignment, or other transfer of the business
                        of this site to which the information relates, in which case we will
                        require any such buyer to agree to treat it in accordance with this
                        Privacy Policy; or(iii) where required by applicable laws, court
                        orders, or government regulations. In addition, we will make full use of
                        all information acquired through this site that is not in personally
                        identifiable form.
                    </p>
                    <h4>Links from Other Web Sites</h4>
                    <p>
                        Web sites that have links on our site may collect personally identifiable
                        information about you. The data protection practices of those Web sites
                        linked to {appData.name} are not covered by this policy statement.
                        You are advised to check the data protection policies of these third
                        party Web sites yourself before using those sites.
                    </p>
                    <h4>Security</h4>
                    <p>
                        We take reasonable steps to protect your personally identifiable
                        information as you transmit your information from your computer to our
                        site and to protect such information from loss, misuse, and unauthorized
                        access, disclosure, alteration, or destruction. However, no data
                        transmissions over the internet can be guaranteed to be 100% secure. As a
                        result, while we strive to protect your personal information, we cannot
                        ensure or warranty the security of any information you transmit to us
                        via the internet, and you do so at your own risk. Once we have received
                        your transmission, we will use our best efforts to ensure its security
                        on our systems.
                    </p>
                    <h4>Disclaimer</h4>
                    <p>
                        The materials on this Web site
                        may contain inaccuracies and typographical errors. {appData.name}
                        does not warrant the accuracy or completeness of the data or materials
                        or the reliability of any advice, opinion, statement or other
                        information displayed or distributed through this Web site. You
                        acknowledge that any reliance on any such opinion, advice, statement,
                        memorandum, or information shall be at your sole risk. {appData.name} reserves the right, in its sole discretion, to correct any
                        error or omission in any portion of the site. {appData.name} may
                        make any other changes to the site, the materials and the products,
                        programs, services or prices described in this Web site at any time
                        without notice.The {appData.name} Web site, the information
                        and materials on this Web site, and the software made available on this
                        Web site, are provided "As Is" without any representation or warranty,
                        express or implied, of any kind, including, but not limited to,
                        warranties of merchantability, non-infringement, or fitness for any
                        particular purpose, some jurisdictions do not allow for the exclusion of
                        implied warranties, so the above exclusions may not apply to you.
                    </p>
                    <h4>Other Terms</h4>
                    <p>
                        1. Credit Card orders will commence on receiving the authorization from
                        the credit card company. Paypal / CCAvenue orders will commence after
                        receiving the confirmation from the respective payment gateways.2.
                        All the graphic designs like logo, stationery etc. and websites created
                        by {appData.name} for its clients will be sent to the respective
                        clients only through e-mail or FTP upload.3. Orders once placed cannot be terminated or transferred.
                        <h4>How to Contact Us?</h4>If
                        you have any questions, comments, or concerns about this Privacy Policy
                        or the information practices of this site, please use the "contact us"
                        link on this Web site.
                    </p>
                    <h4>Changes to This Privacy Policy</h4>
                    <p>
                        If this Privacy Policy changes, the revised policy will be posted on this
                        site. Please check back periodically, and especially before you provide
                        any personally identifiable information.
                    </p>
                </div>
            </div>
        </section>
    </HomeLayout>
}
export default PrivacyPolicy;