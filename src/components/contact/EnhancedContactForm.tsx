"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import LocationSwitcher from "./LocationSwitcher";
import { cn } from "@/lib/utils";
import { ButtonLink } from "../Navbar";
import SectionHeading from "../typography/SectionHeading";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
  context?: string;
}

interface FormErrors {
  [key: string]: string;
}

interface EnhancedContactFormProps {
  className?: string;
  showContactInfo?: boolean;
  context?: string;
}

export default function EnhancedContactForm({
  className = "",
  showContactInfo = true,
  context,
}: EnhancedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
    context,
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
        context,
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({ submit: "Failed to send message. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={cn("w-full max-w-2xl mx-auto h-full bg-red-400", className)}
      >
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-white">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-900 mb-6">
              Thank you for contacting us. We&apos;ll get back to you within 24
              hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("w-full mx-auto h-full", className)} id="contact">
      <div
        className={cn(
          "grid grid-cols-2 gap-8 max-w-7xl mx-auto h-full",
          !showContactInfo && "grid-cols-1"
        )}
      >
        {/* Contact Form */}
        <Card className="border-0 w-full mx-auto shadow-2xl bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <SectionHeading blackText="Send us" primaryText="a message" />
          </CardHeader>

          <CardContent className="space-y-6">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {context && (
                <input type="hidden" name="context" value={context} />
              )}

              {/* Full Name Field */}
              <div className="space-y-2">
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`h-12 border-2 transition-all duration-200 ${
                    errors.fullName
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email and Company Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`h-12 border-2 transition-all duration-200 ${
                      errors.email
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Tell us your company name"
                    className={`h-12 border-2 transition-all duration-200 ${
                      errors.company
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    }`}
                  />
                  {errors.company && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project or requirements..."
                  rows={5}
                  className={`border-2 transition-all h-[123px] duration-200 resize-none ${
                    errors.message
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-gray-200 focus:border-primary focus:ring-primary/20"
                  }`}
                />
                {errors.message && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {errors.submit}
                  </p>
                </div>
              )}
            </form>
          </CardContent>

          {/* Submit Button - Bottom Right */}
          <div className="px-6 pb-6 flex justify-end">
            <ButtonLink disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Send Message
                  <Send className="w-5 h-5" />
                </div>
              )}
            </ButtonLink>
          </div>
        </Card>

        {/* Contact Information */}
        {showContactInfo && (
          <div className="bg-gradient-to-br from-secondary to-primary rounded-xl p-8 text-white">
            <LocationSwitcher
              title="Our Offices"
              description="Choose your region to get in touch"
            />
          </div>
        )}
      </div>
    </div>
  );
}
