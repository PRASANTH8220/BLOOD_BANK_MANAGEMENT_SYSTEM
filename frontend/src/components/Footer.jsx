import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import BrandMark from "./visuals/BrandMark";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Mission", path: "/about#mission" },
    { name: "Success Stories", path: "/about" },
    { name: "News & Updates", path: "/contact" },
  ];

  const donorResources = [
    { name: "Become a Donor", path: "/signup?role=donor" },
    { name: "Eligibility Criteria", path: "/about" },
    { name: "Donation Process", path: "/about" },
    { name: "Donor Login", path: "/login?role=donor" },
  ];

  const hospitalResources = [
    { name: "Register a Hospital", path: "/signup?role=hospital" },
    { name: "Register a Blood Lab", path: "/signup?role=blood-lab" },
    { name: "Facility Login", path: "/login?role=hospital" },
    { name: "Emergency Protocol", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Twitter, name: "Twitter", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
  ];

  return (
    <footer className="bg-ink text-linen">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 flex items-center gap-3">
              <BrandMark size={40} />
              <div>
                <h2 className="font-display text-xl text-linen">LifeLine</h2>
                <p className="text-sm text-linen/60">Life Saver Network</p>
              </div>
            </Link>
            <p className="mb-6 leading-relaxed text-linen/70">
              Connecting compassionate donors with those in need through
              dependable blood bank technology. Together, we save lives.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-oxblood"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg text-linen">
              <div className="h-4 w-1 rounded-full bg-oxblood"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-linen/70 transition-colors duration-200 hover:text-linen"
                  >
                    <div className="h-1 w-1 rounded-full bg-oxblood opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Donors */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg text-linen">
              <div className="h-4 w-1 rounded-full bg-oxblood"></div>
              For Donors
            </h3>
            <ul className="space-y-3">
              {donorResources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-linen/70 transition-colors duration-200 hover:text-linen"
                  >
                    <div className="h-1 w-1 rounded-full bg-oxblood opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Hospitals & Labs */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-lg text-linen">
              <div className="h-4 w-1 rounded-full bg-oxblood"></div>
              For Hospitals &amp; Labs
            </h3>
            <ul className="space-y-3">
              {hospitalResources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-linen/70 transition-colors duration-200 hover:text-linen"
                  >
                    <div className="h-1 w-1 rounded-full bg-oxblood opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-linen/70">
                <Phone className="h-4 w-4 text-oxblood" />
                <span>Emergency Hotline: 1-800-BLOOD-NOW</span>
              </div>
              <div className="flex items-center gap-3 text-linen/70">
                <Mail className="h-4 w-4 text-oxblood" />
                <span>help@lifeline.org</span>
              </div>
              <div className="flex items-center gap-3 text-linen/70">
                <MapPin className="h-4 w-4 text-oxblood" />
                <span>Nationwide Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-linen/50">
              © {currentYear} LifeLine. All rights reserved. Saving lives
              through technology.
            </div>
            <div className="flex items-center gap-6 text-sm text-linen/50">
              <Link to="/contact" className="transition-colors duration-200 hover:text-linen">
                Privacy Policy
              </Link>
              <Link to="/contact" className="transition-colors duration-200 hover:text-linen">
                Terms of Service
              </Link>
              <Link to="/contact" className="transition-colors duration-200 hover:text-linen">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Donate Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/signup?role=donor"
          className="flex items-center gap-2 rounded-full bg-oxblood px-6 py-4 font-semibold text-linen shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-oxblood-dark"
        >
          <Heart className="h-5 w-5" />
          <span>Donate Now</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
