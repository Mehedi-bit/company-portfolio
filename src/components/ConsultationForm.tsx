import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    message: "",
    fullName: "",
    company: "",
    workEmail: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#e6f3ff] to-[#f0f8ff] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 relative">
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              {/* Trust Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-blue-50 border border-blue-200 rounded-full px-3 py-1 flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-blue-700">VERIFIED & SECURED</span>
                </div>
              </div>

              {/* Form Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  Need a Consultation?
                </h2>
                <p className="text-gray-600 text-base">
                  Drop us a line! We are here to answer your questions 24/7.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Message Textarea */}
                <div className="relative">
                  <Textarea
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="min-h-[120px] border-gray-300 text-sm p-4 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md"
                  />
                  <div className="absolute top-4 right-4">
                    {/* <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    </div> */}
                  </div>
                </div>

                {/* File Upload */}
                {/* <div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-md">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>
                      Drag and drop or{" "}
                      <button type="button" className="text-blue-600 underline hover:no-underline font-medium">
                        browse
                      </button>{" "}
                      to upload your file(s)
                    </span>
                    <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center ml-2">
                      <span className="text-xs text-gray-600">?</span>
                    </div>
                  </div>
                </div> */}

                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="h-12 border-gray-300 text-sm px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md placeholder:text-gray-400"
                  />
                  <Input
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="h-12 border-gray-300 text-sm px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md placeholder:text-gray-400"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Work email"
                    value={formData.workEmail}
                    onChange={(e) => handleInputChange("workEmail", e.target.value)}
                    className="h-12 border-gray-300 text-sm px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-md placeholder:text-gray-400"
                  />
                  <div className="flex">
                    <div className="w-16 h-12 border border-gray-300 border-r-0 rounded-l-md flex items-center justify-center bg-gray-50">
                      <span className="text-sm">🇧🇩 +</span>
                    </div>
                    <Input
                      type="tel"
                      placeholder="+880 0000-000000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-12 border-gray-300 text-sm px-4 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-r-md placeholder:text-gray-400 flex-1 rounded-l-none"
                    />
                  </div>
                </div>

                {/* Send Button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-gray-50 font-semibold text-base rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="space-y-8">
            {/* Get in touch instantly */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                Get in touch instantly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <button className="text-base text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                    Call us
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <button className="text-base text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                    Email us
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-green-600">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <button className="text-base text-gray-700 hover:text-green-600 hover:underline transition-colors">
                    WhatsApp
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <button className="text-base text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                    Live chat
                  </button>
                </div>
              </div>
            </div>

            {/* For journalists */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-3">
                For journalists
              </h4>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <button className="text-base text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Get unique insights
                </button>
              </div>
            </div>

            {/* Join our team */}
            <div>
              <h4 className="text-base font-semibold text-gray-900 mb-3">
                Join our team
              </h4>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <button className="text-base text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  Upload your CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;