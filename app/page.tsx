"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Smartphone,
  Search,
  FileText,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-serif text-primary">
                DIGITAL FORENSIC EXPERT
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#services"
                className="text-black hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-black hover:text-primary transition-colors"
              >
                Process
              </a>
              <a
                href="#about"
                className="text-black hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-black hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button className="bg-accent hover:bg-accent/90">
                Get Consultation
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black hover:text-primary transition-colors"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-sm border-t">
            <div className="flex flex-col items-center gap-4 py-6">
              <a
                href="#services"
                className="text-black hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="text-black hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#about"
                className="text-black hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-black hover:text-primary transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
              <Button
                className="bg-accent hover:bg-accent/90 w-40"
                onClick={() => setMenuOpen(false)}
              >
                Get Consultation
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-card/30 to-background">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/server-farm-engineering-team-looks-data-analysis-graph.jpg')",
          }}
        />

        {/* Overlay (semi-transparent) */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Certified Digital Forensics Experts
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-serif  mb-6 leading-tight text-white">
            Mobile Evidence Recovery
            <span className="block text-accent">You Can Trust</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional digital forensics services specializing in evidence
            recovery from mobile device applications. Trusted by law
            enforcement, legal professionals, and corporate security teams
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Start Investigation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-white hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
              Comprehensive Forensic Services
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Advanced techniques and cutting-edge technology for complete
              mobile device analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-serif">
                  Mobile App Analysis
                </CardTitle>
                <CardDescription className="text-accent">
                  Deep forensic analysis of mobile applications including
                  deleted data recovery, chat histories, and metadata
                  extraction.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    WhatsApp, Telegram, Signal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Social media platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Banking and financial apps
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-serif">Data Recovery</CardTitle>
                <CardDescription className="text-accent">
                  Advanced recovery of deleted files, messages, photos, and
                  application data from damaged or corrupted devices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Deleted message recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Photo and video restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Database reconstruction
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="font-serif">
                  Legal Documentation
                </CardTitle>
                <CardDescription className="text-accent">
                  Court-admissible reports and expert testimony services with
                  complete chain of custody documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-black">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Expert witness testimony
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Detailed forensic reports
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    Chain of custody protocols
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              A systematic approach ensuring evidence integrity and legal
              compliance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold font-serif text-primary mb-2">
                Secure Intake
              </h3>
              <p className="text-accent">
                Device collection with proper chain of custody documentation
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold font-serif text-primary mb-2">
                Forensic Imaging
              </h3>
              <p className="text-accent">
                Bit-by-bit copying to preserve original evidence integrity
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold font-serif text-primary mb-2">
                Deep Analysis
              </h3>
              <p className="text-accent">
                Advanced tools and techniques for comprehensive data extraction
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">
                  4
                </span>
              </div>
              <h3 className="text-xl font-semibold font-serif text-primary mb-2">
                Report Delivery
              </h3>
              <p className="text-accent">
                Detailed findings with court-admissible documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold font-serif text-accent mb-2">
                500+
              </div>
              <div className="text-black">Cases Solved</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-serif text-accent mb-2">
                98%
              </div>
              <div className="text-black">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-serif text-accent mb-2">
                24/7
              </div>
              <div className="text-black">Emergency Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-serif text-accent mb-2">
                15+
              </div>
              <div className="text-black">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            About DIGITAL FORENSIC EXPERT
          </h2>
          <p className="text-lg text-accent max-w-3xl mx-auto mb-8 leading-relaxed">
            With over 15 years of experience, ForensicTech Solutions has been a
            trusted partner for law enforcement, legal professionals, and
            corporate security teams worldwide. Our certified experts specialize
            in recovering, analyzing, and documenting critical digital evidence
            while maintaining the highest standards of integrity and compliance.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-background border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Certified Experts
              </h3>
              <p className="text-black text-sm">
                Our team holds industry-recognized certifications ensuring
                reliable and admissible forensic results.
              </p>
            </div>
            <div className="p-6 bg-background border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Global Reach
              </h3>
              <p className="text-black text-sm">
                Serving clients across continents with multilingual support and
                international expertise.
              </p>
            </div>
            <div className="p-6 bg-background border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-primary mb-2">
                Trusted By Professionals
              </h3>
              <p className="text-black text-sm">
                Recommended by legal professionals, investigators, and corporate
                security teams worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto mb-12 leading-relaxed">
            Reach out to our certified forensic experts for a confidential
            consultation. We’re here 24/7 to assist you with urgent and
            scheduled cases.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Details */}
            <div className="p-6 bg-card border rounded-lg shadow-sm text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Get in Touch
              </h3>
              <ul className="space-y-3 text-black text-sm">
                <li>
                  <strong>Phone:</strong> +256 784 398036
                </li>
                <li>
                  <strong>Email:</strong> byabasasaijamathias@gmail.com
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="p-6 bg-card border rounded-lg shadow-sm text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Send a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-accent outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-accent outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-lg text-black focus:ring-2 focus:ring-accent outline-none"
                />
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
            Need Expert Digital Forensics?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact our certified forensics experts for a confidential
            consultation about your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90"
            >
              <Clock className="mr-2 h-5 w-5" />
              Emergency Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Schedule Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-accent" />
                <span className="text-lg font-bold font-serif text-primary">
                  DIGITAL FORENSIC EXPERT
                </span>
              </div>
              <p className="text-black text-sm">
                Professional digital forensics services with certified expertise
                and legal compliance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-black">
                <li>Mobile App Analysis</li>
                <li>Data Recovery</li>
                <li>Expert Testimony</li>
                <li>Legal Documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-black">
                <li>About Us</li>
                <li>Certifications</li>
                <li>Case Studies</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-black">
                <li>24/7 Emergency Line</li>
                <li>consultation@forensictech.com</li>
                <li>Secure Evidence Portal</li>
                <li>Expert Witness Services</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground bg-accent">
            <p className="pb-5">
              &copy; 2025 DIGITAL FORENSIC EXPERT. All rights reserved. Licensed
              digital forensics professionals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
