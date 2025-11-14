import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_8mm8xne',
        'template_mwst4m4',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '1VPMDnphapu_S4k-C'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yassineboussabat21@gmail.com',
      link: 'mailto:yassineboussabat21@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+216 53 254 251',
      link: 'tel:+21653254251',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tunis, Tunisia',
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-center bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2 leading-relaxed">
            Get In Touch
          </h2>
          <p className="text-lg text-cyan-100 text-center mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div
                className={`transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group flex items-center gap-4 p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-blue-500/20 group-hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-slate-800 hover:to-slate-700 transition-all backdrop-blur-sm"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                        <info.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-cyan-200">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-cyan-300 font-medium hover:text-blue-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-cyan-300 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 ${
                isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/30 rounded-lg text-cyan-100 placeholder-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-400/30 rounded-lg">
                    <CheckCircle size={20} className="text-green-400" />
                    <p className="text-green-300 text-sm">
                      Message sent successfully!
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-400/30 rounded-lg">
                    <XCircle size={20} className="text-red-400" />
                    <p className="text-red-300 text-sm">
                      Failed to send at{' '}
                      <a href="mailto:yassineboussabat21@gmail.com" className="underline">
                        yassineboussabat21@gmail.com
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-blue-500/20 text-center">
            <p className="text-cyan-200">
              © 2025 Mohamed Yassine Boussabat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
