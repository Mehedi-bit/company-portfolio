import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">BrainLab Solutions</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              We deliver top-notch software solutions that drive business growth and digital transformation for companies worldwide.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Our Team</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Press & Media</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Custom Software Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Mobile App Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Cloud Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">DevOps & Infrastructure</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors text-sm">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  Ghorashal<br />
                  District: Narsingdi<br />
                  Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-slate-300 hover:text-white transition-colors text-sm">
                  +880 961-1234567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:contact@brainlab.com" className="text-slate-300 hover:text-white transition-colors text-sm">
                  contact@brainlab.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2026 BrainLab Solutions. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;