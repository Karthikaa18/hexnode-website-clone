import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <div className="footer-container">
                <div className="footer-section">
                    <h1>hexnode</h1>
                    <span>powered by <strong>mitsogo</strong></span>
                    <ul>
                        <li>Hexnode UEM</li>
                        <li>Hexnode Kiosk Lockdown</li>
                        <li>Hexnode Secure Browser</li>
                        <li>Hexnode Digital Signage</li>
                        <li>Hexnode Do</li>
                    </ul>
                    <ul>
                        <li><b>Capabilities</b></li>
                        <li>Device Management</li>
                        <li>Kiosk Lockdown</li>
                        <li>Compliance & Security</li>
                        <li>Supported Platforms</li>
                        <li>Enterprise Integrations</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Product</h4>
                    <ul>
                        <li>All Features</li>
                        <li>Pricing</li>
                        <li>Customers</li>
                        <li>Customer Stories</li>
                        <li>Resources</li>
                        <li>Webinar</li>
                        <li>Help</li>
                        <li>Academy</li>
                        <li>Forums</li>
                        <li>Developers</li>
                        <li>Marketplace</li>
                        <li>Free Trial</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Sales & Support</h4>
                    <ul>
                        <li>US: +1-833-HEXNODE (439-6633) Toll-free</li>
                        <li>UK: +44-8003-689920 Toll-free</li>
                        <li>AU: +61-1800-165-939 Toll-free</li>
                        <li>NZ: +64-9-8842599 Direct</li>
                        <li>CH: +41-44-798-2244 Direct</li>
                        <li>International: +1-415-636-7555</li>
                        <li>Fax: +1-415-646-4151</li>
                        <li>Support: support@hexnode.com</li>
                        <li>Partnership: partners@hexnode.com</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Security</li>
                        <li>GDPR Compliance</li>
                        <li>Contact Us</li>
                        <li>Sitemap</li>
                        <li>Blog</li>
                        <li>News</li>
                        <li>Events</li>
                        <li>Careers</li>
                        <li>Legal</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Talk to Sales/Support</li>
                        <li>Schedule a Demo</li>
                        <li>Watch a Demo</li>
                        <li>Get a Quote</li>
                        <li>Raise a Ticket</li>
                        <li>Hexnode Partner Programs</li>
                        <li>Reseller Partnership</li>
                        <li>OEM Partnership</li>
                        <li>Distribution Program</li>
                        <li>ISV Partnership</li>
                        <li>MSP Partnership</li>
                    </ul>
                </div>

                <div className="footer-section right-section">
                    <div className="event-promo">
                        <img src="https://static.hexnode.com/v2/assets/img/footer/hexcon24-promo.svg" alt="HexCon24" />
                        <p>Hexnode's annual user conference, HexCon is coming back this year, bigger, better, and in-person!</p>
                        <a href="#register">REGISTER NOW</a>
                    </div>
                    <div className="social-media">
                        <h4>Social</h4>
                        <ul>
                            <li><a href="https://www.facebook.com/Hexnode/" class="fa fa-facebook"></a></li>
                            <li><a href="https://www.linkedin.com/company/hexnode" class="fa fa-linkedin"></a></li>
                            <li><a href="https://www.youtube.com/c/Hexnode" class="fa fa-youtube"></a></li>
                            <li><a href="https://x.com/thehexnode" class="fa fa-twitter"></a></li>
                        </ul>
                    </div>
                    <div className="login">
                        <h4>Existing Users</h4>
                        <button className="login-btn">Login</button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className='footer-bottom-locations'>
                
                    <div className="locations"> 
                    <h4>Locations</h4>           
                        <ul>
                            <li>San Francisco (HQ)</li>
                            <li>Atlanta</li>
                            <li>London</li>
                            <li>Dubai</li>
                            <li>Kochi</li>
                            <li>Chennai</li>
                            <li>Bangalore</li>
                        </ul>
                    </div>
                    <div className='bsi'>
                        <img src="https://static.hexnode.com/v2/assets/img/footer/bsi-logo.svg" alt="BSILogo" />
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className='footer-copyright-terms'>
                        <ul>
                            <li>Terms of Use - Privacy - Cookies</li>
                        </ul>
                    </div>
                    <div className='footer-copyright-mitsogo'>
                        <p>© 2024 Mitsogo Inc. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
