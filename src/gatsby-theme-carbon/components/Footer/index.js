import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
    <p>
      The <code>last buildTime</code> : {buildTime}
    </p>
    <p>
       <strong>IBM Expert Labs - Managed Services</strong>
    </p>
    <p>
      Any issues with this webpage, Please contact : mohit.arora@in.ibm.com ( Need to update with generic email-id)
    </p>
    <p>
      <a href="https://www.ibm.com/products/expertlabs">
        IBM Expert Labs
      </a>
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/products/expertlabs/cloud-integration', linkText: 'IBM Cloud Integration Expert Labs' },
    { href: 'https://www.ibm.com/products/expertlabs/trustworthy-ai', linkText: 'Trustworthy AI' },
    { href: 'https://www.ibm.com/products/expertlabs/technical-account-management', linkText: 'Technical account management' },
  ],
  secondCol: [
    { href: 'https://www.ibm.com/products/expertlabs/managed-services', linkText: 'Managed Services' },
    { href: '/cp4d-managed/IEL-About-us', linkText: 'About Us' },
    { href: 'https://www.ibm.com/in-en/products/cloud-pak-for-data', linkText: 'IBM Cloud Pak for Data' },
    { href: 'https://www.ibm.com/it-infrastructure/us-en/resources/campaignmail/mail/Data-and-AI-Expert-Labs/', linkText: 'Contact an Expert' },
  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
