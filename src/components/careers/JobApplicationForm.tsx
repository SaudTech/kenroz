"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import CountryCodeSelection from "@/components/ui/CountryCodeSelection";
import SectionHeading from "@/components/typography/SectionHeading";

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  linkedin?: string;
  description: string;
  resume: File | null;
  job?: string;
}

interface FormErrors {
  [key: string]: string;
}

interface JobApplicationFormProps {
  className?: string;
  job?: string;
}

export default function JobApplicationForm({
  className = "",
  job,
}: JobApplicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "", // Will be set automatically by CountryCodeSelection component
    phone: "",
    linkedin: "",
    description: "",
    resume: null,
    job,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
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

    // LinkedIn URL validation (optional field)
    if (formData.linkedin && formData.linkedin.trim()) {
      const linkedinRegex = /^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\/(in|pub|company)\/[\w-_.%]+\/?$/i;
      if (!linkedinRegex.test(formData.linkedin.trim())) {
        newErrors.linkedin = "Please enter a valid LinkedIn URL";
      }
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else if (formData.resume) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF or Word documents are allowed";
      } else if (formData.resume.size > 5 * 1024 * 1024) {
        newErrors.resume = "File size must be less than 5MB";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({ ...prev, resume: file || null }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: "" }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Job application submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "", // Will be automatically set by CountryCodeSelection component
        phone: "",
        linkedin: "",
        description: "",
        resume: null,
        job,
      });
      setErrors({});
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Failed to submit application. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn("w-full max-w-2xl mx-auto", className)}>
        <Card className="border-0 shadow-2xl bg-card">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Application submitted!
            </h3>
            <p className="text-card-foreground mb-6">
              We will review your profile and get back to you soon.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full max-w-2xl mx-auto", className)}
    >
      <Card className="border-0 shadow-2xl bg-card">
        <CardContent className="space-y-6">
          <SectionHeading 
            blackTextClassName="text-card-foreground" 
            blackText="Apply for" 
            primaryText="this position" 
          />
          <div className="space-y-2">
            <Input
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
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
          {/* Email and Phone on the same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
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
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
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
              {errors.countryCode && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.countryCode}
                </p>
              )}
            </div>
          </div>

          {/* LinkedIn URL */}
          <div className="space-y-2">
            <Input
              name="linkedin"
              type="url"
              placeholder="LinkedIn profile URL (optional)"
              value={formData.linkedin}
              onChange={handleChange}
              className={`h-12 border-2 transition-all duration-200 text-card-foreground placeholder:text-card-foreground ${
                errors.linkedin
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.linkedin && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.linkedin}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Textarea
              name="description"
              placeholder="Description (e.g., how soon can you join, similar work experience, etc.)"
              rows={10}
              value={formData.description}
              onChange={handleChange}
              className={`border-2 transition-all duration-200 resize-none text-card-foreground placeholder:text-card-foreground ${
                errors.description
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.description && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.description}
              </p>
            )}
          </div>
          
          <div className="space-y-2">
            <Input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`h-12 border-2 transition-all duration-200 text-card-foreground ${
                errors.resume
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                  : "border-gray-200 focus:border-primary focus:ring-primary/20"
              }`}
            />
            {errors.resume && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.resume}
              </p>
            )}
            {formData.resume && (
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
                <Upload className="w-4 h-4" /> {formData.resume.name}
              </p>
            )}
          </div>
          {errors.submit && (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="w-4 h-4" /> {errors.submit}
            </p>
          )}
          <div className="pt-2">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Send Application"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
