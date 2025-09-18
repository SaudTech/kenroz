"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
} from "@/components/ui/select";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import LocationSwitcher from "./LocationSwitcher";
import { cn } from "@/lib/utils";
// import { ButtonLink } from "../Navbar";
import SectionHeading from "../typography/SectionHeading";
import CountryCodeSelection from "../ui/CountryCodeSelection";

const serviceOptions = [
  "Microsoft Dynamics 365",
  "Cloud Solutions",
  "Web Application Development",
  "Mobile Application Development",
  "Digital Marketing",
  "Outsourcing",
];

const productOptions = [
  "People Sphere",
  "Pay Stream",
  "Tax Nova",
  "Insura Core",
  "Learnify",
];

// Contact type is provided via props based on the page context

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  interest: string;
  message: string;
  context?: string;
  contactType?: string;
}

interface FormErrors {
  [key: string]: string;
}

interface EnhancedContactFormProps {
  className?: string;
  showContactInfo?: boolean;
  context?: string;
  contactType?: string;
}

export default function EnhancedContactForm({
  className = "",
  showContactInfo = true,
  context,
  contactType = "General Contact",
}: EnhancedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
    interest: "",
    message: "",
    context,
    contactType,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      context,
      contactType,
    }));
  }, [context, contactType]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnlyLength = formData.phone.replace(/\D/g, "").length;
      if (digitsOnlyLength < 7 || digitsOnlyLength > 15) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Country code validation
    if (!formData.countryCode.trim()) {
      newErrors.countryCode = "Country code is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Interest validation
    if (!formData.interest.trim()) {
      newErrors.interest = "Please select a service or product";
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
    setErrors((prev) => ({ ...prev, submit: "" }));

    try {
      const res = await fetch("/contact-us-form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          countryCode: formData.countryCode,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          context: formData.context,
          contactType: formData.contactType,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "",
        phone: "",
        interest: "",
        message: "",
        context,
        contactType,
      });
      setErrors({});
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message. Please try again.";
      setErrors({ submit: errorMessage });
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

  const handleInterestChange = (value: string) => {
    console.log("Interest changed to:", value); // Debug log
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }));
    if (errors.interest) {
      setErrors((prev) => ({
        ...prev,
        interest: "",
      }));
    }
  };

  const handleCountryCodeChange = useCallback((countryCode: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode,
    }));
    if (errors.countryCode) {
      setErrors((prev) => ({
        ...prev,
        countryCode: "",
      }));
    }
  }, [errors.countryCode]);


  if (isSubmitted) {
    return (
      <div
        className={cn("w-full max-w-2xl mx-auto h-full", className)}
      >
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 to-background">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
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
              className="border-primary text-primary hover:bg-primary/10"
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
        <Card className="border-0 w-full mx-auto shadow-2xl bg-card">
          <CardHeader>
            <SectionHeading
              blackTextClassName="text-card-foreground"
              blackText="Send us"
              primaryText="a message"
            />
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
                  className={`h-12 border-2 transition-all duration-200 text-card-foreground placeholder:text-card-foreground ${
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
                    className={`h-12 border-2 transition-all duration-200 text-card-foreground placeholder:text-card-foreground ${
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
                  <div className="flex items-center gap-2">
                     <CountryCodeSelection
                       value={formData.countryCode}
                       defaultCountry="+91"
                       onChange={handleCountryCodeChange}
                       error={!!errors.countryCode}
                     />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      removeLeftBorderRadius={true}
                      className={`h-12 border-2 border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-200 text-card-foreground placeholder:text-card-foreground ${
                        errors.phone
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" :""
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Service/Product Dropdown */}
              <div className="space-y-2">
                <Select
                  value={formData.interest}
                  onValueChange={handleInterestChange}
                >
                  <SelectTrigger
                    className={`h-14 w-full border-2 transition-all duration-200 text-left text-card-foreground placeholder:text-card-foreground ${
                      errors.interest
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    }`}
                  >
                    {/* <SelectValue placeholder="Select a service or product" className="text-card-foreground" /> */}
                    <span
                      className={cn(
                        !formData.interest && "text-card-foreground"
                      )}
                    >
                      {formData.interest || "Select a service or product"}
                    </span>
                  </SelectTrigger>
                  <SelectContent className="bg-white text-black max-h-[200px] scroll-y-scroll">
                    <SelectGroup>
                      <SelectLabel>Services</SelectLabel>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel>Products</SelectLabel>
                      {productOptions.map((product) => (
                        <SelectItem key={product} value={product}>
                          {product}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.interest && (
                  <p className="text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.interest}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Additional Information (e.g., project details, timeline)"
                  rows={5}
                  className={`border-2 transition-all h-[123px] duration-200 resize-none text-card-foreground placeholder:text-card-foreground ${
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
            <Button type="submit" form="contact-form" disabled={isSubmitting}>
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
