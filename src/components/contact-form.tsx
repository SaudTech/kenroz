"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ContactForm({
  title = "Get in Touch",
  description = "Fill out the form below and we'll get back to you as soon as possible.",
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const searchParams = useSearchParams();
  const [displayTitle, setDisplayTitle] = useState(title);
  const [displayDescription, setDisplayDescription] = useState(description);

  useEffect(() => {
    if (searchParams.get("p")?.toLowerCase() === "hire") {
      setDisplayTitle("Hire Us for Your Project");
      console.log("Is hire")
      setDisplayDescription(
        "Looking to bring us on board? Tell us about your project and let's start building something amazing together."
      );
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);

    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#df2a33]/20 to-[#9B2730]/20 rounded-full flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-[#9B2730]" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#9B2730] to-[#df2a33] bg-clip-text text-transparent">
            {displayTitle}
          </CardTitle>
          {displayDescription && (
            <CardDescription className="text-lg text-gray-600 max-w-md mx-auto">
              {displayDescription}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <User className="w-4 h-4 text-[#9B2730]" />
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="h-12 border-2 border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20 transition-all duration-200"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#9B2730]" />
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="h-12 border-2 border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20 transition-all duration-200"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9B2730]" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                className="h-12 border-2 border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20 transition-all duration-200"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#9B2730]" />
                Message (Optional)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about how we can help you..."
                className="border-2 border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20 transition-all"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#df2a33] to-[#9B2730] hover:from-[#9B2730] hover:to-[#df2a33] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Let&apos;s Start the Conversation
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
