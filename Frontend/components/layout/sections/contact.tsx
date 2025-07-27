"use client";
import { Building2, Clock, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto bg-muted/60 dark:bg-card rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 text-primary">Contact Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Find Us</h4>
              <p className="text-muted-foreground">742 Evergreen Terrace, Springfield, IL 62704</p>
              <p className="text-muted-foreground">742 Evergreen Terrace, Springfield, IL 62704</p>
              <p className="text-muted-foreground">742 Evergreen Terrace, Springfield, IL 62704</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Call Us</h4>
              <p className="text-muted-foreground">+1 (619) 123-4567</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Mail Us</h4>
              <p className="text-muted-foreground">leomirandadev@gmail.com</p>
            </div>
          </div>

          {/* Visiting Hours */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Visit Us</h4>
              <p className="text-muted-foreground">Monday - Friday</p>
              <p className="text-muted-foreground">8AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
