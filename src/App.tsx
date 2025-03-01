import React, { useState } from 'react';
import { Users, Building2, Award, BookOpen, UserCircle, MessageSquare, LayoutGrid, Mail, Star, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans">
      {/* Header/Navigation */}
      <header className="bg-gray-100 fixed top-0 left-0 right-0 z-20 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3">
              <img src="https://i.imgur.com/bxaKISg.png" alt="Noruwa Edokpolo Consult Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-blue-600 font-bold text-lg sm:text-xl">Noruwa Edokpolo Consult</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Training • Consulting • Facilitating • Coaching</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="text-gray-700 hover:text-blue-600">About Us</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-blue-600">Services</a></li>
              <li><a href="#resources" className="text-gray-700 hover:text-blue-600">Resources</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-2">
            <div className="max-w-6xl mx-auto px-4">
              <ul className="space-y-3 py-2">
                <li><a href="#about" className="block text-gray-700 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
                <li><a href="#services" className="block text-gray-700 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                <li><a href="#resources" className="block text-gray-700 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Resources</a></li>
                <li><a href="#contact" className="block text-gray-700 hover:text-blue-600 py-1" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center pt-16" style={{ backgroundImage: "url('https://i.imgur.com/RiulqPx.jpeg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 h-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 py-16 md:py-24 pt-24 md:pt-32">
          {/* Left side - Hero text */}
          <div className="text-white max-w-xl mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Transform Your</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mb-2">Potential</h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Into Excellence</h2>
            <p className="text-base md:text-lg mb-8">
              Expert guidance for individuals and organizations seeking to achieve extraordinary results through strategic development and growth.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center justify-center">
                Get Started <span className="ml-2">→</span>
              </a>
              <a href="#about" className="bg-gray-700 bg-opacity-50 hover:bg-opacity-70 text-white px-8 py-3 rounded-full flex items-center justify-center">Learn More</a>
            </div>
          </div>
          
          {/* Right side - Service icons */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full lg:w-auto">
            {/* Training */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-8 rounded-lg hover:bg-opacity-20 transition-all">
              <div className="flex flex-col items-center">
                <BookOpen className="text-blue-400 h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-4" />
                <p className="text-white text-base sm:text-xl font-medium">Training</p>
              </div>
            </div>
            
            {/* Coaching */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-8 rounded-lg hover:bg-opacity-20 transition-all">
              <div className="flex flex-col items-center">
                <UserCircle className="text-blue-400 h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-4" />
                <p className="text-white text-base sm:text-xl font-medium">Coaching</p>
              </div>
            </div>
            
            {/* Consulting */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-8 rounded-lg hover:bg-opacity-20 transition-all">
              <div className="flex flex-col items-center">
                <Users className="text-blue-400 h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-4" />
                <p className="text-white text-base sm:text-xl font-medium">Consulting</p>
              </div>
            </div>
            
            {/* Facilitating */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 sm:p-8 rounded-lg hover:bg-opacity-20 transition-all">
              <div className="flex flex-col items-center">
                <MessageSquare className="text-blue-400 h-8 w-8 sm:h-12 sm:w-12 mb-2 sm:mb-4" />
                <p className="text-white text-base sm:text-xl font-medium">Facilitating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">About Us</h2>
          <p className="mb-6">
            At noruwaedokpolo.com.ng, we are dedicated to transforming potential into excellence. With years of experience in leadership and management consulting, we provide comprehensive solutions that empower individuals and organizations to achieve their highest aspirations.
          </p>
          <p>
            Our approach combines proven methodologies with innovative strategies, ensuring sustainable growth and development for our clients across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Our Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Training */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <BookOpen className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Training</h3>
              <p className="text-sm mb-4">
                With our professional training services, you can embark on a transformative journey to develop business acumen, leadership abilities, strategic management expertise, and essential soft skills, empowering you to unlock higher potential and inspire excellence in yourself and others.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>

            {/* Mentorship */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <Users className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Mentorship</h3>
              <p className="text-sm mb-4">
                Our transformative mentorship program empowers men to discover their purpose, develop leadership competencies, and deploy their unique capabilities through our Men of Valour initiative.
              </p>
              <a href="https://selar.com/0000r4" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>

            {/* Coaching */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <UserCircle className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Coaching</h3>
              <p className="text-sm mb-4">
                Our comprehensive coaching services transform your personal and professional journey through expert guidance, strategic business mentorship, and holistic life coaching.
              </p>
              <a href="https://selar.com/073n74" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>

            {/* Facilitation */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">
                <MessageSquare className="text-blue-600 h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Facilitation</h3>
              <p className="text-sm mb-4">
                Our expert facilitation services transform group dynamics into productive outcomes through specialized approaches including meeting facilitation, issue resolution, strategic planning sessions, and interactive workshops.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center justify-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
              </div>
              <p className="text-gray-700 italic mb-6">
                "Good Package. Experience to be shared in Teaching Hospitals nationwide."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">BM</span>
                </div>
                <div>
                  <h4 className="font-bold">Board Member</h4>
                  <p className="text-sm text-gray-600">Clearline International Ltd at the end of their 3-day Board/Management strategy retreat session in Dec 2013</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
              </div>
              <p className="text-gray-700 italic mb-6">
                "Dear Mr Noruwa, Thanks for the session today; it was indeed well-executed and met all our expectations. This feedback also resonated with my colleagues during our one-on-one interactions and over dinner. The approach was well thought through and methodological. Major highlights were the DISC session and the several role plays. Thanks for allowing the team to express themselves, as this broke the ice in the room. I am pretty optimistic that all the deliberations, ‘Nos’ and ‘Whatever” highlighted, will be taken back and addressed with the seriousness they deserve. Thanks again for your support, and looking forward to future collaborations with your organisation. With greetings"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">SA</span>
                </div>
                <div>
                  <h4 className="font-bold">Samson Ajayi</h4>
                  <p className="text-sm text-gray-600">PT-BE/SNG (PT-BE/SNG) BOSCH NIGERIA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
                <Star className="text-yellow-400 h-5 w-5" />
              </div>
              <p className="text-gray-700 italic mb-6">
                "The Mind+ Facilitation Company Limited has done a very good job. Mr. Noruwa Edokpolo is very confident and unassuming. He is a thoroughbred that knows what he is doing. I would definitely like CIL to have more outings with his company."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">CL</span>
                </div>
                <div>
                  <h4 className="font-bold">Clearline International Limited</h4>
                  <p className="text-sm text-gray-600">CLI Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations We Have Worked For */}
      <section id="organizations" className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Organizations We Have Worked For</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Organization Logos */}
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/OV5w0ZO.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/bCB1pL0.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/ZUBwHRe.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/kaoe4gu.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/yodqP4l.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/yj7PJUT.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/RZm4Nd4.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/56CZquy.jpeg" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/qYFnlNA.jpeg" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24 sm:h-32">
              <img src="https://i.imgur.com/gH9WHgN.png" alt="Organization Logo" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Leadership Insights */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Leadership Insights</h3>
              <p className="mb-4 text-sm">
                Access our collection of articles, case studies, and research papers on leadership and management best practices.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                Learn More <span className="ml-1">→</span>
              </a>
            </div>

            {/* Development Tools */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Development Tools</h3>
              <p className="mb-4 text-sm">
                Download practical tools and templates to support your professional development journey.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                Access Tools <span className="ml-1">→</span>
              </a>
            </div>

            {/* Word in Season */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Word in Season</h3>
              <p className="mb-4 text-sm">
                Inspiring words to power your day with motivation, wisdom, and spiritual guidance for personal and professional growth.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                Get Inspired <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Who We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Individuals */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-blue-600 h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Individuals</h3>
              <p className="text-sm">
                Professional development and personal growth coaching for individuals.
              </p>
            </div>

            {/* Businesses */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="text-blue-600 h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Businesses</h3>
              <p className="text-sm">
                Strategic consulting and training for businesses of all sizes.
              </p>
            </div>

            {/* Organizations */}
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <Award className="text-blue-600 h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4">Organizations</h3>
              <p className="text-sm">
                Comprehensive solutions for private and public organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Transform Your Potential?</h2>
          <p className="mb-8">Contact us today to begin your journey towards excellence.</p>
          <a href="#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full inline-block">
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-2">
                <img src="https://i.imgur.com/bxaKISg.png" alt="Noruwa Edokpolo Consult Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold">noruwaedokpolo.com.ng</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering individuals and organizations to reach their full potential.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-400 mb-2">
              Email: info@noruwaedokpolo.com.ng
            </p>
            <p className="text-sm text-gray-400">
              Phone: +234 803 682 1993
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/noruwa/" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="https://www.facebook.com/share/19npTfM35n/?mibextid=wwXIfr" className="text-gray-400 hover:text-white">Facebook</a><br>
							<a href="https://www.instagram.com/noruwaedokpolo/?hl=en" className="text-gray-400 hover:text-white">Instagram</a>
							<a href="https://www.youtube.com/@RoTaWiN" className="text-gray-400 hover:text-white">Youtube</a>
							<a href="https://selar.com/m/noruwa-joseph-edokpolo1" className="text-gray-400 hover:text-white">Ecommerce</a>
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500 text-center">
          © 2025 noruwaedokpolo.com.ng. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
