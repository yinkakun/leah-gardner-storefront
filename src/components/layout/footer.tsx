import { INavLink } from '@/types';
import Container from '@/components/layout/container';
import NavLinks from '@/components/common/nav-links';
import Marquee from 'react-fast-marquee';

import VisaLogo from '@/images/visa.svg';
import PaypalLogo from '@/images/paypal.svg';
import ApplePayLogo from '@/images/applepay.svg';
import GooglePayLogo from '@/images/googlepay.svg';
import MastercardLogo from '@/images/mastercard.svg';

const PAYMENT_LOGOS = [
  {
    logo: VisaLogo,
    name: 'Visa',
  },
  {
    logo: PaypalLogo,
    name: 'Paypal',
  },
  {
    logo: ApplePayLogo,
    name: 'Apple Pay',
  },
  {
    logo: GooglePayLogo,
    name: 'Google Pay',
  },
  {
    logo: MastercardLogo,
    name: 'Mastercard',
  },
];

const SOCIALS: INavLink[] = [
  {
    label: 'Twitter',
    url: 'https://www.twitter.com',
    type: 'external',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com',
    type: 'external',
  },
  {
    label: 'Pinterest',
    url: 'https://www.pinterest.com',
    type: 'external',
  },
];

const HELP_LINKS: INavLink[] = [
  {
    label: 'Shipping & Returns',
    url: '/',
  },
  {
    label: 'Privacy Policy',
    url: '/',
  },
  {
    label: 'Contact',
    url: '/',
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-orange-300 bg-orange-100 bg-opacity-80 backdrop-blur-xl">
      <div className=" text-gray-600">
        <Container>
          <div className="flex w-full flex-wrap justify-between gap-10 py-6 xl:flex-nowrap">
            <NavLinks heading="Socials" links={SOCIALS} />
            <NavLinks heading="Help" links={HELP_LINKS} />

            <Marquee
              gradient={false}
              speed={70}
              pauseOnHover
              className="max-w-sm"
            >
              <div className="flex items-center gap-6">
                {PAYMENT_LOGOS.map(({ logo: Logo, name }) => {
                  return (
                    <div
                      className="w-12 grayscale duration-100 ease-linear hover:grayscale-0"
                      key={name}
                    >
                      <Logo />
                    </div>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </Container>

        <div className="w-full py-6 opacity-70">
          <Container>
            <div className="flex w-full flex-wrap items-center justify-center gap-5 text-center text-[10px] uppercase text-gray-600 md:justify-between">
              <span>&copy; Leah Gardner | {new Date().getFullYear()}</span>
              <span className="duration-300 hover:text-orange-500">
                <span> Design & Dev: Yinka.</span>
                <span>
                  This project is open source, you can checkout the repo{' '}
                  <a
                    className="text-orange-500"
                    target={'_blank'}
                    href="https://github.com/yinkakun/leah-gardner-storefront/"
                    rel="noreferrer"
                  >
                    here.
                  </a>
                </span>
              </span>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
