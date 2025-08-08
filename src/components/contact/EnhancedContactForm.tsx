"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface EnhancedContactFormProps {
  title?: string;
  description?: string;
  className?: string;
  showContactInfo?: boolean;
}

export default function EnhancedContactForm({
  title = "Get in Touch",
  description = "Have questions? We'd love to hear from you. Send us a message and we'll response as soon as possible.",
  className = "",
  showContactInfo = true,
}: EnhancedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Name must be at least 2 characters";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Name must be at least 2 characters";
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
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "inquiry@kenroz.com",
      href: "mailto:inquiry@kenroz.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 12 345 6789",
      href: "tel:+971123456789",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, United Arab Emirates",
      href: "#",
    },
  ];

  if (isSubmitted) {
    return (
      <div className={`w-full max-w-2xl mx-auto ${className}`}>
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-white">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
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
    <div className={`w-full mx-auto ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="space-y-4">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#9B2730] to-[#df2a33] bg-clip-text text-transparent">
                Send us a message
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className={`h-12 border-2 transition-all duration-200 ${
                        errors.firstName
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className="h-12 border-2 border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20 transition-all duration-200"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Phone Row */}
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
                          : "border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20"
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
                          : "border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20"
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
                    className={`border-2 transition-all h-[123px] duration-200 ${
                      errors.message
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:border-[#df2a33] focus:ring-[#df2a33]/20"
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-full text-lg font-semibold bg-gradient-to-r from-[#df2a33] to-[#9B2730] hover:from-[#9B2730] hover:to-[#df2a33] text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
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
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        {showContactInfo && (
          <div className="space-y-6 lg:col-span-2">
            <h1 className="text-2xl mb-0 pb-0 font-bold text-white">{title}</h1>
            <p className="text-white text-sm">{description}</p>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border shadow-lg bg-white group hover:bg-gradient-to-r hover:from-[#9B2730] hover:to-[#df2a33] hover:text-white transition-colors duration-200  hover:border-white"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 rounded-lg">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#df2a33]/20 to-[#9B2730]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#9B2730] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-white text-sm">
                        {info.label}
                      </p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-600 group-hover:text-white  transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 group-hover:text-white text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
