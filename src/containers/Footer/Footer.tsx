import React from 'react';
import Link from 'next/link';
import { AppShellFooter } from '@mantine/core';

import classes from './Footer.module.scss';

// Footer columns
const footerColumns = [
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' }
    ]
  },
  {
    title: 'Products',
    links: [
      { label: 'YouTube Studio', href: '#' },
      { label: 'YouTube TV', href: '#' },
      { label: 'YouTube Music', href: '#' },
      { label: 'YouTube Kids', href: '#' },
      { label: 'Creator Academy', href: '#' }
    ]
  },
  {
    title: 'For Business',
    links: [
      { label: 'Advertise', href: '#' },
      { label: 'YouTube Shorts Fund', href: '#' },
      { label: 'Copyright', href: '#' },
      { label: 'Brand Resources', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Policy & Safety', href: '#' },
      { label: 'How YouTube Works', href: '#' },
      { label: 'Settings', href: '#' }
    ]
  }
];

const Footer: React.FC = () => {
  return (
    <AppShellFooter className={classes.footer}>
      <div className={classes.container}>
        {/* Footer Links Section */}
        <div className={classes.linksWrapper}>
          {footerColumns.map((column, index) => (
            <div key={index} className={classes.column}>
              <h3 className={classes.columnTitle}>{column.title}</h3>
              <ul className={classes.linksList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className={classes.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className={classes.bottom}>
          <div className={classes.bottomContent}>
            <p className={classes.copyright}>© {new Date().getFullYear()} YouTube Clone. All rights reserved.</p>
            <div className={classes.bottomLinks}>
              <Link href="#" className={classes.bottomLink}>
                Privacy
              </Link>
              <span className={classes.separator}>•</span>
              <Link href="#" className={classes.bottomLink}>
                Terms
              </Link>
              <span className={classes.separator}>•</span>
              <Link href="#" className={classes.bottomLink}>
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppShellFooter>
  );
};

export default Footer;
