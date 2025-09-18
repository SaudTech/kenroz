"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, File, UploadCloud } from "lucide-react";
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
  const jobLabel = job ?? "General Application";
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "", // Will be set automatically by CountryCodeSelection component
    phone: "",
    linkedin: "",
    description: "",
    resume: null,
    job: jobLabel,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      job: jobLabel,
    }));
  }, [jobLabel]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

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

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    const dataTransfer = new DataTransfer();
    if (file) {
        dataTransfer.items.add(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.files = dataTransfer.files;
    }
    handleFileChange({
      target: fileInputRef.current,
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const submission = new FormData();
      submission.append("fullName", formData.fullName.trim());
      submission.append("email", formData.email.trim());
      submission.append("countryCode", formData.countryCode.trim());
      submission.append("phone", formData.phone.trim());
      submission.append("description", formData.description.trim());
      submission.append("job", jobLabel);
      if (formData.linkedin) {
        submission.append("linkedin", formData.linkedin.trim());
      }
      if (formData.resume) {
        submission.append("resume", formData.resume);
      }

      const res = await fetch("/api/job-application", {
        method: "POST",
        body: submission,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to submit application. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        countryCode: "", // Will be automatically set by CountryCodeSelection component
        phone: "",
        linkedin: "",
        description: "",
        resume: null,
        job: jobLabel,
      });
      setErrors({});
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again.";
      setErrors({ submit: errorMessage });
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
            <label htmlFor="resume" className="text-sm font-medium text-card-foreground">
              Upload Resume
            </label>
            <div 
              onClick={handleClick}
              onDragOver={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "flex flex-col items-center justify-center h-48 w-full p-4 border-2 rounded-lg text-gray-500 transition-all duration-200 cursor-pointer",
                isDragging && "border-primary bg-primary/10",
                errors.resume && "border-red-300",
                formData.resume && "border-primary bg-primary/10"
              )}>
              {formData.resume ? (
                <div className="flex items-center gap-2 text-primary">
                  <File className="w-6 h-6" />
                  <span className="text-sm font-medium">{formData.resume.name}</span>
                  <span className="text-xs text-primary">
                    ({formatFileSize(formData.resume.size)})
                  </span>
                </div>
              ) : (
                <>
                  <UploadCloud className={cn("w-12 h-12 mb-3 transition-colors duration-200", isDragging ? 'text-primary' : 'text-gray-400')} />
                  <p className={cn("text-sm text-card-foreground/80 text-center", isDragging && "text-primary")}>
                    <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-card-foreground/80 mt-1">PDF, DOC, or DOCX (max. 5MB)</p>
                </>
              )}
            </div>
            
            <input
              ref={fileInputRef}
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            {errors.resume && (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.resume}
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
