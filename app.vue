<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <!-- Navigation -->
    <header class="fixed w-full bg-gray-900 bg-opacity-90 shadow z-50">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-2xl font-bold text-green-400">GreenMine Labs</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="hover:text-green-400 transition">Services</a>
          <a href="#about" class="hover:text-green-400 transition">About</a>
          <a href="#impact" class="hover:text-green-400 transition">Impact</a>
          <a href="#contact" class="hover:text-green-400 transition">Contact</a>
        </div>
        <div class="md:hidden">
          <button @click="mobileMenu = !mobileMenu" class="text-white focus:outline-none">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path v-if="!mobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>
      <!-- Mobile menu -->
      <div v-if="mobileMenu" class="md:hidden bg-gray-800 py-2">
        <div class="container mx-auto px-6 flex flex-col space-y-2">
          <a @click="mobileMenu = false" href="#services" class="py-2 hover:text-green-400 transition">Services</a>
          <a @click="mobileMenu = false" href="#about" class="py-2 hover:text-green-400 transition">About</a>
          <a @click="mobileMenu = false" href="#impact" class="py-2 hover:text-green-400 transition">Impact</a>
          <a @click="mobileMenu = false" href="#contact" class="py-2 hover:text-green-400 transition">Contact</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 md:pt-40 md:pb-28">
      <div class="container mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          <span class="text-green-400">Sustainable</span> Blockchain Infrastructure
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Building the future of decentralized systems with eco-friendly mining solutions and blockchain education.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#services" class="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition">
            Our Services
          </a>
          <a href="#contact" class="bg-transparent hover:bg-gray-700 border border-green-400 text-green-400 font-bold py-3 px-8 rounded-lg transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-6 bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span class="text-green-400">Services</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Service 1 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-green-400 rounded-full mb-6">
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Cloud Mining Solutions</h3>
            <p class="text-gray-400">Lease hash power from our energy-efficient mining infrastructure without the hassle of hardware management.</p>
          </div>
          <!-- Service 2 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-green-400 rounded-full mb-6">
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Blockchain Node Hosting</h3>
            <p class="text-gray-400">Provide infrastructure and support for secure, reliable blockchain nodes and decentralized networks.</p>
          </div>
          <!-- Service 3 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-green-400 rounded-full mb-6">
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Crypto Education</h3>
            <p class="text-gray-400">Workshops, training programs, and consultancy on blockchain technology for individuals and businesses.</p>
          </div>
          <!-- Service 4 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
            <div class="flex items-center justify-center w-12 h-12 bg-green-400 rounded-full mb-6">
              <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Green Mining Solutions</h3>
            <p class="text-gray-400">Sustainable crypto mining operations using renewable energy to minimize environmental impact.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6 bg-gray-900">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
              About <span class="text-green-400">GreenMine Labs</span>
            </h2>
            <p class="text-gray-300 mb-4">
              GreenMine Labs is a blockchain infrastructure & digital asset solutions provider focused on sustainable mining practices and blockchain education. We're building the future of decentralized systems while prioritizing energy efficiency and environmental responsibility.
            </p>
            <p class="text-gray-300 mb-6">
              Our team combines blockchain expertise with a commitment to renewable energy, creating mining solutions that balance profitability with eco-awareness. We're not just a mining operation - we're a full-service provider helping others enter and thrive in the blockchain ecosystem.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-green-400 text-2xl font-bold">100%</div>
                <div class="text-sm text-gray-400">Green Energy Usage</div>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-green-400 text-2xl font-bold">24/7</div>
                <div class="text-sm text-gray-400">Technical Support</div>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-green-400 text-2xl font-bold">99.9%</div>
                <div class="text-sm text-gray-400">Uptime Guarantee</div>
              </div>
              <div class="bg-gray-800 p-4 rounded">
                <div class="text-green-400 text-2xl font-bold">5+</div>
                <div class="text-sm text-gray-400">Blockchain Networks</div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2">
            <img src="https://placehold.co/800x500/1f2937/4ade80?text=Mining+Rig" alt="Cryptocurrency mining rig" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section id="impact" class="py-20 px-6 bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span class="text-green-400">Impact</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Impact 1 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <span class="bg-green-400 text-gray-900 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">1</span>
              Employment Generation
            </h3>
            <p class="text-gray-400">
              Creating jobs for technicians, educators, sales professionals, and blockchain developers through our operations and training programs.
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Local hiring for machine setup & maintenance</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Training interns in blockchain technology</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Administrative & support roles creation</span>
              </li>
            </ul>
          </div>
          <!-- Impact 2 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <span class="bg-green-400 text-gray-900 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">2</span>
              Skill Development
            </h3>
            <p class="text-gray-400">
              Bridging the knowledge gap through education and training programs focused on blockchain technology.
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Workshops and webinars on blockchain fundamentals</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Technical training for mining rig setup</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Collaborative programs with educational institutions</span>
              </li>
            </ul>
          </div>
          <!-- Impact 3 -->
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <span class="bg-green-400 text-gray-900 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">3</span>
              Environmental Sustainability
            </h3>
            <p class="text-gray-400">
              Leading the way in green mining practices to minimize the environmental footprint of blockchain operations.
            </p>
            <ul class="mt-4 space-y-2">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Renewable energy powered mining operations</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Energy-efficient hardware optimization</span>
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-gray-300">Carbon footprint reduction initiatives</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 bg-gray-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-grid-white/[0.2]" style="background-size: 40px 40px; background-image: linear-gradient(to right, gray 1px, transparent 1px), linear-gradient(to bottom, gray 1px, transparent 1px);"></div>
      </div>
      <div class="container mx-auto relative z-10">
        <div class="bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-2xl shadow-xl border border-gray-700">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to join the future of <span class="text-green-400">blockchain infrastructure</span>?</h2>
            <p class="text-gray-300 text-lg mb-8">
              Partner with GreenMine Labs for sustainable mining solutions, professional blockchain services, and comprehensive training programs.
            </p>
            <a href="#contact" class="inline-block bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-800">
      <div class="container mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
          Get in <span class="text-green-400">Touch</span>
        </h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-400 p-2 rounded-lg mr-4">
                  <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-1">Phone</h4>
                  <p class="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-400 p-2 rounded-lg mr-4">
                  <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-1">Email</h4>
                  <p class="text-gray-300">info@greenminelabs.com</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 bg-green-400 p-2 rounded-lg mr-4">
                  <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold mb-1">Location</h4>
                  <p class="text-gray-300">123 Blockchain Street, Tech Hub</p>
                  <p class="text-gray-300">Innovation City, 10001</p>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-xl font-bold mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="#" class="bg-gray-700 hover:bg-gray-600 p-2 rounded-full transition">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400">
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input type="email" id="email" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400">
                </div>
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" rows="5" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
              </div>
              <button type="submit" class="bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 py-12 px-6">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="md:col-span-1">
            <div class="text-2xl font-bold text-green-400 mb-4">GreenMine Labs</div>
            <p class="text-gray-400 mb-6">
              Building the future of blockchain infrastructure with sustainable mining solutions.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-green-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-green-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-green-400">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="#services" class="text-gray-400 hover:text-green-400">Services</a></li>
              <li><a href="#about" class="text-gray-400 hover:text-green-400">About Us</a></li>
              <li><a href="#impact" class="text-gray-400 hover:text-green-400">Our Impact</a></li>
              <li><a href="#contact" class="text-gray-400 hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Services</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-green-400">Cloud Mining</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400">Node Hosting</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400">Blockchain Education</a></li>
              <li><a href="#" class="text-gray-400 hover:text-green-400">Green Mining</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p class="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <form class="flex">
              <input type="email" placeholder="Your Email" class="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-green-400 flex-grow">
              <button type="submit" class="bg-green-500 hover:bg-green-400 text-gray-900 font-bold px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p class="text-gray-400">© 2025 GreenMine Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenu = ref(false);
</script>

<style>
/* Add any global styles here */
html {
  scroll-behavior: smooth;
}
</style>
