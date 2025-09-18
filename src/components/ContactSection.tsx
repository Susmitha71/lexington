'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Building2, User, DollarSign } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    // Business Information
    businessLegalName: '',
    businessDBAName: '',
    streetAddress: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    website: '',
    mobile: '',
    email: '',
    legalEntity: '',
    businessLocation: '',
    federalTaxId: '',
    dateBusinessStarted: '',
    industry: '',
    isSeasonal: false,
    
    // Owner Information
    ownerName: '',
    ownerAddress: '',
    ownerCityStateZip: '',
    ownerPhone: '',
    ownerEmail: '',
    ownershipPercentage: '',
    dateOfBirth: '',
    ssn: '',
    creditScore: '',
    driversLicense: '',
    hasSecondOwner: false,
    
    // Second Owner Information (only shown if hasSecondOwner is true)
    secondOwnerName: '',
    secondOwnerAddress: '',
    secondOwnerCityStateZip: '',
    secondOwnerPhone: '',
    secondOwnerEmail: '',
    secondOwnerOwnershipPercentage: '',
    secondOwnerDateOfBirth: '',
    secondOwnerSsn: '',
    secondOwnerCreditScore: '',
    secondOwnerDriversLicense: '',
    
    // Representative Information
    representativeName: '',
    representativeTitle: '',
    representativeEmail: '',
    representativeContact: '',
    representativeTelFax: '',
    
    // Funding Information
    annualRevenue: '',
    hasJudgments: false,
    averageBankBalance: '',
    currentAdvanceBalance: '',
    fundingAmountRequested: '',
    useOfFunds: '',
    dailyPayment: '',
    currentAdvanceHeldWith: '',
    fundingDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        // Business Information
        businessLegalName: '',
        businessDBAName: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        website: '',
        mobile: '',
        email: '',
        legalEntity: '',
        businessLocation: '',
        federalTaxId: '',
        dateBusinessStarted: '',
        industry: '',
        isSeasonal: false,
        
        // Owner Information
        ownerName: '',
        ownerAddress: '',
        ownerCityStateZip: '',
        ownerPhone: '',
        ownerEmail: '',
        ownershipPercentage: '',
        dateOfBirth: '',
        ssn: '',
        creditScore: '',
        driversLicense: '',
        hasSecondOwner: false,
        
        // Second Owner Information
        secondOwnerName: '',
        secondOwnerAddress: '',
        secondOwnerCityStateZip: '',
        secondOwnerPhone: '',
        secondOwnerEmail: '',
        secondOwnerOwnershipPercentage: '',
        secondOwnerDateOfBirth: '',
        secondOwnerSsn: '',
        secondOwnerCreditScore: '',
        secondOwnerDriversLicense: '',
        
        // Representative Information
        representativeName: '',
        representativeTitle: '',
        representativeEmail: '',
        representativeContact: '',
        representativeTelFax: '',
        
        // Funding Information
        annualRevenue: '',
        hasJudgments: false,
        averageBankBalance: '',
        currentAdvanceBalance: '',
        fundingAmountRequested: '',
        useOfFunds: '',
        dailyPayment: '',
        currentAdvanceHeldWith: '',
        fundingDate: ''
      });
    }, 3000);
  };


  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Contact us today!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 font-medium"
          >
            NEED HELP? CALL, TEXT, OR HAVE US CALL YOU!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Business Funding Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Funding Application</h3>
              <p className="text-gray-600">Complete this form to apply for business funding</p>
            </div>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </motion.div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h4>
                <p className="text-gray-600">We'll review your application and contact you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* A. Business Information */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h4 className="text-lg font-bold text-gray-900">A. Business Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Legal Name *
                      </label>
                      <input
                        type="text"
                        name="businessLegalName"
                        value={formData.businessLegalName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter business legal name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Business DBA Name
                      </label>
                      <input
                        type="text"
                        name="businessDBAName"
                        value={formData.businessDBAName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter DBA name if applicable"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="streetAddress"
                        value={formData.streetAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter street address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter city"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter state"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter ZIP code"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="https://www.example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mobile Phone
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Legal Entity *
                      </label>
                      <select
                        name="legalEntity"
                        value={formData.legalEntity}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select legal entity</option>
                        <option value="Corp">Corporation</option>
                        <option value="LLC">LLC</option>
                        <option value="Sole Prop">Sole Proprietorship</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Business Location *
                      </label>
                      <select
                        name="businessLocation"
                        value={formData.businessLocation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select location type</option>
                        <option value="Store Front">Store Front</option>
                        <option value="Office">Office</option>
                        <option value="Home">Home</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Federal Tax ID *
                      </label>
                      <input
                        type="text"
                        name="federalTaxId"
                        value={formData.federalTaxId}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="XX-XXXXXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date Business Started *
                      </label>
                      <input
                        type="date"
                        name="dateBusinessStarted"
                        value={formData.dateBusinessStarted}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Industry *
                      </label>
                      <input
                        type="text"
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., Healthcare, Retail, Restaurant"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="isSeasonal"
                        checked={formData.isSeasonal}
                        onChange={(e) => setFormData({...formData, isSeasonal: e.target.checked})}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="text-sm font-semibold text-gray-700">
                        Is your business seasonal?
                      </label>
                    </div>
                  </div>
                </div>

                {/* Representative Information */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <User className="w-5 h-5 text-blue-600" />
                    <h4 className="text-lg font-bold text-gray-900">B. Representative Information</h4>
                  </div>
                  
                 
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Representative Name *
                      </label>
                      <input
                        type="text"
                        name="representativeName"
                        value={formData.representativeName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Anthony Ciancio"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="representativeTitle"
                        value={formData.representativeTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Funding Specialist"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="representativeEmail"
                        value={formData.representativeEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="anthonyc@fidelity-funding.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact *
                      </label>
                      <input
                        type="tel"
                        name="representativeContact"
                        value={formData.representativeContact}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="732-492-2273"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tel/Fax
                      </label>
                      <input
                        type="tel"
                        name="representativeTelFax"
                        value={formData.representativeTelFax}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="929-581-1881"
                      />
                    </div>
                  </div>
                </div>

                {/* Owner Information */}
                <div className="border-b border-gray-200 pb-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <User className="w-5 h-5 text-green-600" />
                    <h4 className="text-lg font-bold text-gray-900">C. Owner Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Owner Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter owner name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Owner Address *
                      </label>
                      <input
                        type="text"
                        name="ownerAddress"
                        value={formData.ownerAddress}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter owner address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        City, State, ZIP *
                      </label>
                      <input
                        type="text"
                        name="ownerCityStateZip"
                        value={formData.ownerCityStateZip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="City, State, ZIP"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Owner Phone *
                      </label>
                      <input
                        type="tel"
                        name="ownerPhone"
                        value={formData.ownerPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Owner Email *
                      </label>
                      <input
                        type="email"
                        name="ownerEmail"
                        value={formData.ownerEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter owner email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        % of Ownership *
                      </label>
                      <input
                        type="text"
                        name="ownershipPercentage"
                        value={formData.ownershipPercentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 100%"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth *
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        SSN (Last 4 digits) *
                      </label>
                      <input
                        type="text"
                        name="ssn"
                        value={formData.ssn}
                        onChange={handleInputChange}
                        required
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Credit Score
                      </label>
                      <input
                        type="number"
                        name="creditScore"
                        value={formData.creditScore}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., 650"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Driver's License #
                      </label>
                      <input
                        type="text"
                        name="driversLicense"
                        value={formData.driversLicense}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter driver's license number"
                      />
                    </div>
                  </div>
                  
                  {/* Second Owner Checkbox */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-2 mb-4">
                      <input
                        type="checkbox"
                        name="hasSecondOwner"
                        checked={formData.hasSecondOwner}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="text-sm font-semibold text-gray-700">
                        Is there a second owner? (Check if applicable)
                      </label>
                    </div>
                    
                    {/* Second Owner Fields - Only shown if checkbox is checked */}
                    {formData.hasSecondOwner && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="border-t border-gray-300 pt-4">
                          <h5 className="text-md font-bold text-gray-800 mb-4">Second Owner Information</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Second Owner Name *
                              </label>
                              <input
                                type="text"
                                name="secondOwnerName"
                                value={formData.secondOwnerName}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter second owner name"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Second Owner Address *
                              </label>
                              <input
                                type="text"
                                name="secondOwnerAddress"
                                value={formData.secondOwnerAddress}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter second owner address"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                City, State, ZIP *
                              </label>
                              <input
                                type="text"
                                name="secondOwnerCityStateZip"
                                value={formData.secondOwnerCityStateZip}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="City, State, ZIP"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Second Owner Phone *
                              </label>
                              <input
                                type="tel"
                                name="secondOwnerPhone"
                                value={formData.secondOwnerPhone}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="(555) 123-4567"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Second Owner Email *
                              </label>
                              <input
                                type="email"
                                name="secondOwnerEmail"
                                value={formData.secondOwnerEmail}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter second owner email"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                % of Ownership *
                              </label>
                              <input
                                type="text"
                                name="secondOwnerOwnershipPercentage"
                                value={formData.secondOwnerOwnershipPercentage}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="e.g., 25%"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Date of Birth *
                              </label>
                              <input
                                type="date"
                                name="secondOwnerDateOfBirth"
                                value={formData.secondOwnerDateOfBirth}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                SSN (Last 4 digits) *
                              </label>
                              <input
                                type="text"
                                name="secondOwnerSsn"
                                value={formData.secondOwnerSsn}
                                onChange={handleInputChange}
                                required={formData.hasSecondOwner}
                                maxLength={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="XXXX"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Credit Score
                              </label>
                              <input
                                type="number"
                                name="secondOwnerCreditScore"
                                value={formData.secondOwnerCreditScore}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="e.g., 650"
                              />
                            </div>
                            
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Driver's License #
                              </label>
                              <input
                                type="text"
                                name="secondOwnerDriversLicense"
                                value={formData.secondOwnerDriversLicense}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                placeholder="Enter driver's license number"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Funding Information */}
                <div className="pb-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <DollarSign className="w-5 h-5 text-purple-600" />
                    <h4 className="text-lg font-bold text-gray-900">D. Funding Information</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Annual Business Revenue *
                      </label>
                      <input
                        type="text"
                        name="annualRevenue"
                        value={formData.annualRevenue}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., $500,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Average Bank Balance *
                      </label>
                      <input
                        type="text"
                        name="averageBankBalance"
                        value={formData.averageBankBalance}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., $25,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Funding Amount Requested *
                      </label>
                      <input
                        type="text"
                        name="fundingAmountRequested"
                        value={formData.fundingAmountRequested}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., $100,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Use of Funds *
                      </label>
                      <select
                        name="useOfFunds"
                        value={formData.useOfFunds}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select use of funds</option>
                        <option value="Expansion">Expansion</option>
                        <option value="Working Capital">Working Capital</option>
                        <option value="Equipment">Equipment</option>
                        <option value="Inventory">Inventory</option>
                        <option value="Debt Consolidation">Debt Consolidation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Advance Balance
                      </label>
                      <input
                        type="text"
                        name="currentAdvanceBalance"
                        value={formData.currentAdvanceBalance}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., $50,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Daily Payment of Current Advance
                      </label>
                      <input
                        type="text"
                        name="dailyPayment"
                        value={formData.dailyPayment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="e.g., $500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Advance Held With
                      </label>
                      <input
                        type="text"
                        name="currentAdvanceHeldWith"
                        value={formData.currentAdvanceHeldWith}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Funding Date of Current Advance
                      </label>
                      <input
                        type="date"
                        name="fundingDate"
                        value={formData.fundingDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="hasJudgments"
                        checked={formData.hasJudgments}
                        onChange={(e) => setFormData({...formData, hasJudgments: e.target.checked})}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label className="text-sm font-semibold text-gray-700">
                        Any Open Judgments, Bankruptcy or Tax Liens?
                      </label>
                    </div>
                  </div>
                </div>

                {/* Authorization */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h5 className="text-md font-bold text-gray-900 mb-4">Authorization</h5>
                  <p className="text-sm text-gray-600 mb-4">
                    By signing this application, you authorize Lexington Capital to obtain credit and employment information, 
                    consumer reports, and other information about you from consumer reporting agencies and other sources. 
                    You also authorize us to contact you via email, phone, and/or text message regarding this application 
                    and future financing opportunities.
                  </p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm font-semibold text-gray-700">
                      I agree to the terms and authorize the above information *
                    </label>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
