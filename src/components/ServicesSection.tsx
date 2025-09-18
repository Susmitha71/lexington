'use client';

import { motion } from 'framer-motion';
import { Building2, CreditCard, LineChart, DollarSign, Home, Wallet } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'SBA',
      description: 'An SBA loan is a small-business loan that can help cover startup costs, working capital needs, expansions, real estate purchases, and more. This type of financing is issued by a private lender and backed by the federal government.',
      color: 'blue',
      features: []
    },
    {
      icon: CreditCard,
      title: 'Merchant Cash Advance',
      description: 'A Merchant Cash Advance (MCA) gives businesses fast access to working capital based on future credit card or other receivables so they can meet their business needs. This type of funding is an alternative form of financing that provides capital in a lump sum.',
      color: 'green',
      features: []
    },
    {
      icon: LineChart,
      title: 'Lines of Credit',
      description: 'A business line of credit lets a business borrow a certain amount of money and will only charge interest on the amount of money borrowed (just like a credit card).',
      color: 'purple',
      features: []
    },
    {
      icon: DollarSign,
      title: 'Term Loans',
      description: 'A business term loan is a lump sum of money you borrow from a lender, then pay back in intervals – with interest – over a certain period of time. Daily, monthly, or weekly repayments available.',
      color: 'orange',
      features: []
    },
    {
      icon: Home,
      title: 'Commercial Real Estate',
      description: 'Financing the acquisition, renovation, and/or refinance of investment properties on a national scale.',
      color: 'red',
      features: []
    },
    {
      icon: Wallet,
      title: 'Business Credit Cards',
      description: 'A business credit card is typically tailored for anyone that owns a business. No office or employees are required.',
      color: 'indigo',
      features: []
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            OUR SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 font-medium"
          >
            What We Offer
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 h-full">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}
                >
                  <service.icon className="w-8 h-8" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed mb-6"
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-2 h-2 rounded-full ${getColorClasses(service.color).split(' ')[0]}`} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ServicesSection;
