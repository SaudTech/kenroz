"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  coverLetter: string;
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
    job,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "Name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^[0-9()+\-\s]{7,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = "Cover letter is required";
    } else if (formData.coverLetter.trim().length < 10) {
      newErrors.coverLetter = "Cover letter must be at least 10 characters";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Job application submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coverLetter: "",
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
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-white">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Application submitted!
            </h3>
            <p className="text-gray-900 mb-6">
              We will review your profile and get back to you soon.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              Submit another response
            </Button>
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
      <Card className="border-0 shadow-2xl bg-background">
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                aria-invalid={!!errors.firstName}
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Input
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <Input
              name="phone"
              type="tel"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <Textarea
              name="coverLetter"
              placeholder="Cover letter"
              rows={5}
              value={formData.coverLetter}
              onChange={handleChange}
              aria-invalid={!!errors.coverLetter}
            />
            {errors.coverLetter && (
              <p className="text-sm text-red-600 mt-1">{errors.coverLetter}</p>
            )}
          </div>
          <div>
            <Input
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              aria-invalid={!!errors.resume}
            />
            {errors.resume && (
              <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
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
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
