"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle } from "lucide-react";
import LocationSwitcher from "./LocationSwitcher";
import { cn } from "@/lib/utils";
import CountryCodeSelection from "../ui/CountryCodeSelection";
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
  interest?: string;
}

export default function EnhancedContactForm({
  className = "",
  showContactInfo = true,
  context,
  contactType = "General Contact",
  interest = "General Contact",
}: EnhancedContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
    interest,
    message: "",
    context,
    contactType,
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      context,
      contactType,
      interest,
    }));
  }, [context, contactType, interest]);

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
    console.log("Test")
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: "" }));

    try {
      const res = await fetch("/api/contact-us-form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          countryCode: formData.countryCode,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
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
        interest,
        message: "",
        context,
        contactType,
      });
      setErrors({});
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
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

  const handleCountryCodeChange = useCallback(
    (countryCode: string) => {
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
    },
    [errors.countryCode]
  );

  if (isSubmitted) {
    return (
      <div className={cn("w-full max-w-2xl mx-auto", className)}>
        <Card className="border-0 shadow-2xl bg-card">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Message submitted!
            </h3>
            <p className="text-card-foreground mb-6">
              We will get back to you.
            </p>
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
          {/* <CardHeader>
            <SectionHeading
              blackTextClassName="text-card-foreground"
              blackText="Send us"
              primaryText="a message"
            />
          </CardHeader> */}

          <CardContent className="space-y-6">
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {context && (
                <input type="hidden" name="context" value={context} />
              )}
              <input type="hidden" name="interest" value={formData.interest} />

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
                          ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                          : ""
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
          <div className="px-6 pb-6 ">
            <div className="pt-2">
              <Button type="submit" form="contact-form" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </Button>
            </div>
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
