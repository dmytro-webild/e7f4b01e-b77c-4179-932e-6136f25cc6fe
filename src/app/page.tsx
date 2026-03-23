"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Cloud, Globe, HelpCircle, Heart, Lightbulb, Lock, Search, Share2, Sparkles, Upload, Users, Zap, CreditCard, FileUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="large"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="NoteHub"
          navItems={[
            { name: "Features", id: "features" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "#hero" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Your Notes, Organized and Accessible"
          description="Upload, organize, and access your notes from anywhere. A simple, intuitive platform designed for students, professionals, and anyone who wants to keep their notes organized and secure."
          background={{ variant: "plain" }}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg", alt: "User 1" },
            { src: "http://img.b2bpic.net/free-photo/blond-business-woman-sitting-couch-smiling_23-2148095699.jpg", alt: "User 2" },
            { src: "http://img.b2bpic.net/free-photo/smiley-front-view-business-man_23-2148763836.jpg", alt: "User 3" }
          ]}
          avatarText="Join 10,000+ users"
          buttons={[
            { text: "Start Uploading", href: "#features" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          marqueeItems={[
            { type: "text-icon", text: "Instant Upload", icon: Upload },
            { type: "text-icon", text: "Cloud Storage", icon: Cloud },
            { type: "text-icon", text: "Easy Search", icon: Search },
            { type: "text-icon", text: "Secure Sharing", icon: Share2 }
          ]}
          marqueeSpeed={30}
          showMarqueeCard={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySeven
          title="Powerful Features Built for Your Workflow"
          description="Everything you need to manage your notes efficiently. Upload, organize, search, and collaborate seamlessly."
          tag="Why Choose NoteHub"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="bento-grid"
          features={[
            {
              id: "upload",              title: "Lightning Fast Upload",              descriptions: [
                "Upload multiple notes instantly with our optimized uploader",                "Support for PDF, images, and text documents"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/computers-data-center-running-server-rigs-diagnostic-tests_482257-118495.jpg?_wi=1",              imageAlt: "notes organization app interface design"
            },
            {
              id: "organize",              title: "Smart Organization",              descriptions: [
                "Automatically categorize notes with intelligent tagging",                "Create custom folders and collections for easy access"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/computers-data-center-running-server-rigs-diagnostic-tests_482257-118495.jpg?_wi=2",              imageAlt: "notes organization app interface design"
            },
            {
              id: "sync",              title: "Seamless Sync",              descriptions: [
                "Access your notes across all your devices in real-time",                "Changes sync automatically to the cloud"
              ],
              imageSrc: "http://img.b2bpic.net/free-vector/landing-page-with-smartphone-concept_23-2148340738.jpg",              imageAlt: "cloud sync data synchronization interface"
            },
            {
              id: "share",              title: "Secure Sharing",              descriptions: [
                "Share notes with granular permission controls",                "Invite others to collaborate on your notes"
              ],
              imageSrc: "http://img.b2bpic.net/free-photo/female-wedding-planner-working-with-couple_23-2150167183.jpg",              imageAlt: "document sharing collaboration interface design"
            },
            {
              id: "paid-upload",              title: "Upload and Sell Study Materials: Earn 70% Revenue Share on Every Sale",              descriptions: [
                "Share your expertise by uploading and selling study materials on our platform",                "Support both paid and free notes uploads. Earn passive income from your knowledge"
              ]
            },
            {
              id: "security",              title: "Enterprise Security",              descriptions: [
                "End-to-end encryption for all your notes",                "GDPR compliant with automatic backups"
              ]
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Built for Productivity"
          description="NoteHub was created to solve the problem of scattered notes across multiple platforms. We believe organizing your thoughts should be simple, fast, and secure. Our platform brings everything together in one place, helping you focus on what matters most."
          tag="Our Story"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164848.jpg?_wi=1"
          imageAlt="Productive workspace"
          mediaAnimation="slide-up"
          bulletPoints={[
            {
              title: "Intuitive Interface",              description: "Designed with users in mind. Upload and organize notes in seconds.",              icon: Zap
            },
            {
              title: "Reliable Storage",              description: "Your notes are safe with redundant backups and encryption.",              icon: Lock
            },
            {
              title: "Always Available",              description: "Access your notes anytime, anywhere from any device.",              icon: Globe
            },
            {
              title: "Community Driven",              description: "Built with feedback from thousands of users like you.",              icon: Users
            }
          ]}
          buttons={[
            { text: "Start 14-Day Free Trial", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Users Worldwide"
          description="See what people are saying about NoteHub and how it has transformed their note-taking experience."
          tag="User Testimonials"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",              name: "Sarah Chen",              role: "Graduate Student",              testimonial: "NoteHub has been a game-changer for my research. I can upload, organize, and access all my notes instantly. The search feature alone saves me hours every semester.",              imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg",              imageAlt: "Sarah Chen",              icon: Sparkles
            },
            {
              id: "2",              name: "Michael Rodriguez",              role: "Project Manager",              testimonial: "Our team uses NoteHub to share meeting notes and project documentation. The collaboration features and permission controls are exactly what we needed.",              imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-sitting-couch-smiling_23-2148095699.jpg",              imageAlt: "Michael Rodriguez",              icon: Sparkles
            },
            {
              id: "3",              name: "Emma Thompson",              role: "Freelance Writer",              testimonial: "As someone juggling multiple projects, NoteHub keeps everything organized. I love how I can instantly sync between my laptop and phone.",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-front-view-business-man_23-2148763836.jpg",              imageAlt: "Emma Thompson",              icon: Sparkles
            },
            {
              id: "4",              name: "David Kumar",              role: "Business Consultant",              testimonial: "The security and backup features give me peace of mind. I never worry about losing important notes, and the interface is so clean and intuitive.",              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1674.jpg",              imageAlt: "David Kumar",              icon: Sparkles
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about NoteHub. Can't find what you're looking for? Reach out to our support team."
          tag="Help Center"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            {
              id: "1",              title: "What file formats does NoteHub support?",              content: "NoteHub supports PDF, Microsoft Word documents, images (PNG, JPG), and text files. We're constantly adding support for more formats based on user requests."
            },
            {
              id: "2",              title: "Is my data secure?",              content: "Yes. All data is encrypted end-to-end and stored in secure cloud servers with redundant backups. We comply with GDPR and other international data protection regulations."
            },
            {
              id: "3",              title: "How much storage do I get?",              content: "Free accounts get 5GB of storage. Pro accounts include 100GB, and Enterprise plans offer unlimited storage. You can upgrade anytime."
            },
            {
              id: "4",              title: "Can I share notes with others?",              content: "Absolutely. You can share individual notes or entire collections with specific people and control their access level (view, comment, or edit)."
            },
            {
              id: "5",              title: "Is there an offline mode?",              content: "Yes, the NoteHub app allows you to download notes for offline access. Changes sync automatically when you reconnect to the internet."
            },
            {
              id: "6",              title: "How do I upload and sell my notes?",              content: "You can upload paid and free notes directly from your dashboard. Set your own price for paid notes, and we'll handle the payment processing. You receive 70% of the revenue from each sale."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Start Your Free 14-Day Trial Today—No Credit Card Required. Ready to organize your notes? Join thousands of users who trust NoteHub with their important information. Contact us via Easypaisa: 0324-6197923"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          animationType="reveal-blur"
          buttons={[
            { text: "Start 14-Day Free Trial", href: "#" },
            { text: "Contact Sales", href: "#" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164848.jpg?_wi=2"
          imageAlt="NoteHub workspace"
          logoText="NoteHub"
          copyrightText="© 2025 NoteHub. All rights reserved."
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#" },
                { label: "Security", href: "#" },
                { label: "Roadmap", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "GDPR", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
