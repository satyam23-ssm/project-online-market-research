import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-bg py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <div className="space-y-3 text-muted">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-primary mt-1" />
              <div>
                <p>+91 7366956411</p>
                <p>+91 9252178284</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-primary mt-1" />
              <div>
                <p>satyamchaubey@gmail.com</p>
                <p>lakshyam419@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-1" />
              <p>Solan, HP, India</p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="md:col-span-2">
          <div className="bg-card border border-gray-700 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-4">About insightmatrix</h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                insightmatrix is a forward-thinking online market research firm dedicated to transforming how brands understand their customers. We believe that high-quality, actionable insights shouldn't require months of waiting or astronomical budgets.
              </p>
              <p>
                Our team combines decades of experience in quantitative research, behavioral psychology, and data science. We work across industries—from fast-moving consumer goods to fintech startups—helping teams validate hypotheses, launch with confidence, and optimize based on real customer feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} insightmatrix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
