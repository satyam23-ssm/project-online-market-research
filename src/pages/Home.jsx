import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Users, Search, MessageSquare, CheckCircle2 } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Home = () => {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Data that moves <span className="text-primary">decisions</span>
            </h1>
            <p className="text-lg text-muted max-w-lg">
              We run fast, reliable online market research so your team can launch with confidence—survey panels, product tests, and sentiment at scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="px-6 py-3 bg-primary text-primary-contrast font-semibold rounded-lg hover:bg-green-400 transition-colors">
                Get a proposal
              </a>
              <a href="#results" className="px-6 py-3 bg-chip border border-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                View case studies
              </a>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {['Trusted by 120+ brands', 'Global reach in 35 countries', 'ISO/IEC 27001 aligned'].map((item, i) => (
                <li key={i} className="bg-chip border border-gray-700 rounded-lg p-3 text-sm text-muted flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-gray-700 rounded-2xl p-6 shadow-2xl grid gap-6 relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl pointer-events-none" />
            <div className="flex justify-between items-end border-b border-gray-700 pb-4">
              <span className="text-muted text-sm">Response rate</span>
              <span className="text-2xl font-bold text-primary">72%</span>
            </div>
            <div className="flex justify-between items-end border-b border-gray-700 pb-4">
              <span className="text-muted text-sm">Time to insight</span>
              <span className="text-2xl font-bold text-white">48 hrs</span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-muted text-sm">Panel size</span>
              <span className="text-2xl font-bold text-white">250k+</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Consumer surveys', desc: 'Targeted questionnaires to validate demand, pricing, and positioning.', icon: <MessageSquare className="text-primary mb-4" size={32} /> },
              { title: 'Panel recruitment', desc: 'Screened audiences across demographics with quality checks.', icon: <Users className="text-primary mb-4" size={32} /> },
              { title: 'Product testing', desc: 'Remote and in-field tests with structured feedback loops.', icon: <Search className="text-primary mb-4" size={32} /> },
              { title: 'Sentiment analysis', desc: 'Voice-of-customer data to inform messaging and creative.', icon: <BarChart2 className="text-primary mb-4" size={32} /> },
            ].map((service, i) => (
              <motion.article 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-card border border-gray-700 rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted text-sm">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-alt border-y border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Methodology</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Design', desc: 'Define objectives, hypotheses, sampling, and instruments.' },
              { step: '02', title: 'Field', desc: 'Deploy surveys, recruit panels, monitor quality metrics.' },
              { step: '03', title: 'Analyze', desc: 'Clean data, segment cohorts, quantify insights and drivers.' },
              { step: '04', title: 'Deliver', desc: 'Actionable report, dashboards, and decision-ready recommendations.' },
            ].map((item, i) => (
              <div key={i} className="bg-chip border border-gray-700 rounded-xl p-6 relative overflow-hidden group">
                <span className="absolute top-2 right-4 text-4xl font-bold text-gray-800 group-hover:text-primary/20 transition-colors">{item.step}</span>
                <h4 className="text-lg font-bold mb-2 relative z-10">{item.title}</h4>
                <p className="text-muted text-sm relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Industries we serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['FMCG', 'FinTech', 'Healthcare', 'EdTech', 'SaaS', 'Automotive'].map((ind, i) => (
              <span key={i} className="px-6 py-2 bg-chip border border-gray-700 rounded-full text-muted hover:text-primary hover:border-primary/50 transition-all cursor-default">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-alt border-y border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Results that matter</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { val: '+28%', txt: 'Conversion lift after messaging optimization' },
              { val: '3x', txt: 'Faster go-to-market informed by rapid surveys' },
              { val: '92%', txt: 'Customer satisfaction with research deliverables' },
            ].map((stat, i) => (
              <div key={i} className="bg-chip border border-gray-700 rounded-xl p-8 text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.val}</div>
                <p className="text-muted">{stat.txt}</p>
              </div>
            ))}
          </div>
          <blockquote className="bg-card border-l-4 border-primary p-8 rounded-r-xl max-w-3xl mx-auto">
            <p className="text-xl text-gray-200 italic mb-4">
              “Their insights reshaped our product launch. Clear, fast, and spot-on.”
            </p>
            <cite className="text-muted not-italic font-semibold block">— VP Marketing, D2C Brand</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-chip text-center border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready for decision-grade insights?</h2>
          <p className="text-muted mb-8 text-lg">Tell us your goals, and we’ll outline a research plan within 24 hours.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-contrast font-bold rounded-lg hover:bg-green-400 transition-colors">
            Request a proposal <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
