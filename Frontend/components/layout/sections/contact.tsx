"use client";
import { Building2, Clock, Mail, Phone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="container py-20 sm:py-28">
      <div className="max-w-3xl mx-auto bg-muted/60 dark:bg-card rounded-2xl shadow-xl px-6 sm:px-10 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary">
          Contact Information
        </h2>

        <div className="flex flex-col gap-8">
          {/* Find Us */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Find Us</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>📍 St Shiromani N Maharaja Path, Divya Nagar, Wanwadi, Pune 411040</li>
                <li>📍 Bhagwan Tatyasaheb Kawade Rd, Ghorpadi, Pune 411036</li>
                <li>📍 Office no 23, BRAMHA ESTATE, Kondhwa, Pune 411040</li>
              </ul>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground">+1 (619) 123-4567</p>
            </div>
          </div>

          {/* Mail Us */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Mail Us</h4>
              <p className="text-sm text-muted-foreground">leomirandadev@gmail.com</p>
            </div>
          </div>

          {/* Visit Us */}
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Visit Us</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday</p>
              <p className="text-sm text-muted-foreground">8AM - 4PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
