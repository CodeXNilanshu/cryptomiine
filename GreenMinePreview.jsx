import React, { useState } from 'react';

const GreenMinePreview = () => {
  const [activeTab, setActiveTab] = useState('desktop');

  // Simulated color scheme for visual reference
  const colors = {
    primary: '#36F1CD',
    primaryHover: '#4AFF9F',
    background: '#111827',
    cardBg: 'rgba(31, 41, 55, 0.7)',
    textLight: '#F3F4F6',
    textMuted: '#9CA3AF',
    borderColor: '#2D3748'
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col w-full h-full bg-gray-100 p-4 rounded-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">GreenMine Labs - Enhanced Website Preview</h2>
        <p className="text-gray-600">Modern dark theme with vibrant green accents</p>
        
        <div className="flex justify-center mt-4 space-x-4">
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'desktop' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => switchTab('desktop')}
          >
            Desktop
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => switchTab('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${activeTab === 'colors' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => switchTab('colors')}
          >
            Color Scheme
          </button>
        </div>
      </div>

      {activeTab === 'desktop' && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{maxHeight: '600px'}}>
          <div style={{backgroundColor: colors.background}} className="p-4">
            {/* Header */}
            <div className="flex justify-between items-center p-4" style={{backgroundColor: 'rgba(10, 15, 29, 0.8)'}}>
              <div style={{color: colors.primary}} className="text-xl font-bold">GreenMine Labs</div>
              <div className="flex space-x-6">
                <div style={{color: colors.textLight}}>Services</div>
                <div style={{color: colors.textLight}}>About</div>
                <div style={{color: colors.textLight}}>Impact</div>
                <div style={{color: colors.textLight}}>Contact</div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="text-center py-16 px-4 relative" style={{background: 'linear-gradient(135deg, #111827, #0A0F1D)'}}>
              <h1 className="text-4xl font-bold mb-4" style={{color: colors.textLight}}>
                <span style={{color: colors.primary}}>Sustainable</span> Blockchain Infrastructure
              </h1>
              <p style={{color: colors.textMuted}} className="mb-6 max-w-lg mx-auto">
                Building the future of decentralized systems with eco-friendly mining solutions and blockchain education.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 rounded-lg font-medium" style={{background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover})`, color: colors.background}}>
                  Explore Our Services
                </button>
                <button className="px-6 py-3 rounded-lg font-medium" style={{border: `2px solid ${colors.primary}`, color: colors.primary}}>
                  Get in Touch
                </button>
              </div>
              
              {/* Floating crypto icons */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4" style={{color: colors.primary, opacity: 0.2}}>₿</div>
                <div className="absolute bottom-1/4 right-1/4" style={{color: colors.primary, opacity: 0.2}}>Ξ</div>
              </div>
            </div>

            {/* Services Section */}
            <div className="py-16 px-4">
              <h2 className="text-3xl font-bold text-center mb-2" style={{color: colors.textLight}}>
                Our <span style={{color: colors.primary}}>Services</span>
              </h2>
              <p className="text-center mb-12" style={{color: colors.textMuted}}>
                Comprehensive blockchain solutions powered by renewable energy
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Service Card 1 */}
                <div className="p-6 rounded-lg" style={{backgroundColor: colors.cardBg, border: `1px solid ${colors.borderColor}`}}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4" style={{backgroundColor: colors.primary}}>
                    <span style={{color: colors.background}}>🖥️</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{color: colors.textLight}}>Cloud Mining Solutions</h3>
                  <p style={{color: colors.textMuted}}>Lease hash power from our energy-efficient mining infrastructure without the hassle of hardware management.</p>
                </div>
                
                {/* Service Card 2 */}
                <div className="p-6 rounded-lg" style={{backgroundColor: colors.cardBg, border: `1px solid ${colors.borderColor}`}}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4" style={{backgroundColor: colors.primary}}>
                    <span style={{color: colors.background}}>🌐</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{color: colors.textLight}}>Blockchain Node Hosting</h3>
                  <p style={{color: colors.textMuted}}>Provide infrastructure and support for secure, reliable blockchain nodes and decentralized networks.</p>
                </div>
              </div>
            </div>
            
            {/* About Section Glimpse */}
            <div className="py-12 px-4" style={{background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.7), rgba(10, 15, 29, 0.7))'}}>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{color: colors.textLight}}>
                    About <span style={{color: colors.primary}}>GreenMine Labs</span>
                  </h2>
                  <p style={{color: colors.textMuted}} className="mb-4">
                    Pioneering sustainable blockchain infrastructure for a greener crypto future.
                  </p>
                </div>
                <div className="bg-gray-800 h-64 rounded-lg relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 opacity-30 rounded-lg" style={{borderColor: colors.primary}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mobile' && (
        <div className="mx-auto bg-white rounded-lg shadow-lg overflow-hidden" style={{width: '375px', maxHeight: '600px'}}>
          <div style={{backgroundColor: colors.background}} className="p-4">
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-4" style={{backgroundColor: 'rgba(10, 15, 29, 0.8)'}}>
              <div style={{color: colors.primary}} className="text-lg font-bold">GreenMine Labs</div>
              <div style={{color: colors.textLight}}>☰</div>
            </div>

            {/* Mobile Hero */}
            <div className="text-center py-12 px-4" style={{background: 'linear-gradient(135deg, #111827, #0A0F1D)'}}>
              <h1 className="text-3xl font-bold mb-4" style={{color: colors.textLight}}>
                <span style={{color: colors.primary}}>Sustainable</span> Blockchain
              </h1>
              <p style={{color: colors.textMuted}} className="mb-6">
                Building the future of decentralized systems with eco-friendly mining.
              </p>
              <button className="w-full mb-3 px-6 py-3 rounded-lg font-medium" style={{background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover})`, color: colors.background}}>
                Explore Services
              </button>
              <button className="w-full px-6 py-3 rounded-lg font-medium" style={{border: `2px solid ${colors.primary}`, color: colors.primary}}>
                Contact Us
              </button>
            </div>

            {/* Mobile Services */}
            <div className="py-12 px-4">
              <h2 className="text-2xl font-bold text-center mb-2" style={{color: colors.textLight}}>
                Our <span style={{color: colors.primary}}>Services</span>
              </h2>
              <p className="text-center mb-8" style={{color: colors.textMuted, fontSize: '0.9rem'}}>
                Blockchain solutions powered by renewable energy
              </p>
              
              {/* Mobile Service Card */}
              <div className="mb-6 p-6 rounded-lg" style={{backgroundColor: colors.cardBg, border: `1px solid ${colors.borderColor}`}}>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4" style={{backgroundColor: colors.primary}}>
                  <span style={{color: colors.background}}>🖥️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: colors.textLight}}>Cloud Mining Solutions</h3>
                <p style={{color: colors.textMuted, fontSize: '0.9rem'}}>Lease hash power from our energy-efficient mining infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'colors' && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Color Palette</h3>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4" style={{backgroundColor: colors.primary}}></div>
                <div>
                  <div className="font-semibold">Primary Color</div>
                  <div className="text-gray-600">{colors.primary}</div>
                </div>
              </div>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4" style={{backgroundColor: colors.primaryHover}}></div>
                <div>
                  <div className="font-semibold">Primary Hover</div>
                  <div className="text-gray-600">{colors.primaryHover}</div>
                </div>
              </div>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4" style={{backgroundColor: colors.background}}></div>
                <div>
                  <div className="font-semibold">Background</div>
                  <div className="text-gray-600">{colors.background}</div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Text Colors</h3>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center" style={{backgroundColor: colors.background}}>
                  <div style={{color: colors.textLight}}>Aa</div>
                </div>
                <div>
                  <div className="font-semibold">Text Light</div>
                  <div className="text-gray-600">{colors.textLight}</div>
                </div>
              </div>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4 flex items-center justify-center" style={{backgroundColor: colors.background}}>
                  <div style={{color: colors.textMuted}}>Aa</div>
                </div>
                <div>
                  <div className="font-semibold">Text Muted</div>
                  <div className="text-gray-600">{colors.textMuted}</div>
                </div>
              </div>
              
              <div className="mb-4 flex items-center">
                <div className="w-16 h-16 rounded-lg mr-4" style={{backgroundColor: colors.cardBg}}></div>
                <div>
                  <div className="font-semibold">Card Background</div>
                  <div className="text-gray-600">{colors.cardBg}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Design Elements</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg flex flex-col items-center" style={{backgroundColor: colors.cardBg, border: `1px solid ${colors.borderColor}`}}>
                <div className="text-lg font-semibold mb-2" style={{color: colors.textLight}}>Card Style</div>
                <div style={{color: colors.textMuted}}>With glow effect on hover</div>
              </div>
              
              <button className="p-4 rounded-lg font-medium" style={{background: `linear-gradient(90deg, ${colors.primary}, ${colors.primaryHover})`, color: colors.background}}>
                Primary Button
              </button>
              
              <button className="p-4 rounded-lg font-medium" style={{border: `2px solid ${colors.primary}`, color: colors.primary, backgroundColor: 'transparent'}}>
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">This enhanced design uses a dark theme with vibrant teal accents, creating a modern tech aesthetic perfect for a blockchain company.</p>
      </div>
    </div>
  );
};

export default GreenMinePreview;
