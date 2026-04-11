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
import { Cloud, Globe, HelpCircle, Heart, Lightbulb, Lock, Search, Share2, Sparkles, Upload, Zap, FileUp, Users } from 'lucide-react';

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
            { name: "Study Notes", id: "upload-notes" },
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
          features={[
            { id: "upload", title: "Lightning Fast Upload", descriptions: ["Upload multiple notes instantly with our optimized uploader", "Support for PDF, images, and text documents"], imageSrc: "http://img.b2bpic.net/free-photo/business-woman-analyzing-data-using-computer-while-spending-time-office-beautiful-young-grinning-professional-woman-office-graphs-charts_657921-370.jpg" },
            { id: "organize", title: "Smart Organization", descriptions: ["Automatically categorize notes with intelligent tagging", "Create custom folders and collections for easy access"], imageSrc: "http://img.b2bpic.net/free-photo/yellow-blue-green-stickers-with-lettering-i-love-youn-pinned-white-wooden-floor_1304-2842.jpg" },
            { id: "sync", title: "Seamless Sync", descriptions: ["Access your notes across all your devices in real-time", "Changes sync automatically to the cloud"], imageSrc: "http://img.b2bpic.net/free-photo/admin-secures-high-tech-workspace_482257-95710.jpg" },
            { id: "share", title: "Secure Sharing", descriptions: ["Share notes with granular permission controls", "Invite others to collaborate on your notes"], imageSrc: "http://img.b2bpic.net/free-vector/steal-data-cyber-attack-concept_23-2148534822.jpg" },
            { id: "security", title: "Enterprise Security", descriptions: ["End-to-end encryption for all your notes", "GDPR compliant with automatic backups"], imageSrc: "http://img.b2bpic.net/free-vector/security-system-technologies_24877-53387.jpg" }
          ]}
        />
      </div>

      <div id="upload-notes" data-section="upload-notes">
        <FeatureCardTwentySeven
          title="Upload Your Study Notes"
          description="Contribute to our community library by uploading your study materials. Earn passive income or share knowledge for free!"
          tag="Study Material Exchange"
          tagIcon={FileUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="blur-reveal"
          features={[
             {
               id: "sell-notes",               title: "Upload and Earn",               descriptions: ["Upload your class notes, summaries, and lecture slides.", "Earn 70% revenue share on every sale to other students."],
               imageSrc: "http://img.b2bpic.net/free-photo/beautiful-men-women-working-toghether-wearing-casual-clothe_1139-988.jpg"
             },
             {
               id: "community",               title: "Free Access",               descriptions: ["Share your knowledge for free to help your peers succeed.", "Build your reputation as a top contributor in the community."],
               imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-office-table_1150-13645.jpg"
             },
             {
               id: "tools",               title: "Expert Tools",               descriptions: ["Use our advanced formatting tools for your documents.", "Monitor your performance with detailed analytics dashboard."],
               imageSrc: "http://img.b2bpic.net/free-photo/high-angle-business-people-working-together_23-2148818579.jpg"
             }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Built for Productivity"
          description="NoteHub was created to solve the problem of scattered notes. Our platform brings everything together in one place, helping you focus on what matters most."
          tag="Our Story"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imagePosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164848.jpg?_wi=1"
          mediaAnimation="slide-up"
          bulletPoints={[
            { title: "Intuitive Interface", description: "Upload and organize notes in seconds.", icon: Zap },
            { title: "Reliable Storage", description: "Redundant backups and encryption.", icon: Lock },
            { title: "Always Available", description: "Access your notes anytime, anywhere.", icon: Globe },
            { title: "Community Driven", description: "Built with feedback from our users.", icon: Users }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Users Worldwide"
          description="See how NoteHub has transformed the note-taking experience."
          tag="User Testimonials"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            { id: "1", name: "Sarah Chen", role: "Graduate Student", testimonial: "NoteHub has been a game-changer for my research.", imageSrc: "http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg" },
            { id: "2", name: "Michael Rodriguez", role: "Project Manager", testimonial: "Collaboration features are excellent.", imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-sitting-couch-smiling_23-2148095699.jpg" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about NoteHub."
          tag="Help Center"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          animationType="smooth"
          faqs={[
            { id: "1", title: "What file formats?", content: "PDF, Word, images, text files." },
            { id: "2", title: "Is it secure?", content: "End-to-end encryption and GDPR compliant." },
            { id: "3", title: "Sell notes?", content: "Upload and set your price; we handle the rest." }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Start Your Free 14-Day Trial Today—No Credit Card Required."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          animationType="reveal-blur"
          buttons={[{ text: "Get Started", href: "#" }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="NoteHub"
          copyrightText="© 2025 NoteHub. All rights reserved."
          imageSrc="http://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg"
          columns={[
            { title: "Product", items: [{ label: "Features", href: "#features" }, { label: "Upload", href: "#upload-notes" }] },
            { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Contact", href: "#contact" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
