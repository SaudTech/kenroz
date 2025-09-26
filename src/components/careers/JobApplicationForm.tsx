"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, File, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import CountryCodeSelection from "../ui/CountryCodeSelection";

interface FormData {
  fullName: string;
  countryCode: string;
  phone: string;
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
    countryCode: "",
    phone: "",
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
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnlyLength = formData.phone.replace(/\D/g, "").length;
      if (digitsOnlyLength < 7 || digitsOnlyLength > 15) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    } else {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const submission = new FormData();
      submission.append("fullName", formData.fullName.trim());
      submission.append("phone", formData.phone.trim());
      submission.append("job", jobLabel);
      if (formData.resume) {
        submission.append("resume", formData.resume);
      }

      const res = await fetch("/api/job-application", {
        method: "POST",
        body: submission,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.error || "Failed to submit application. Please try again."
        );
      }

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        countryCode: "91",
        phone: "",
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

          <div className="space-y-2">
            <label
              htmlFor="resume"
              className="text-sm font-medium text-card-foreground"
            >
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
              )}
            >
              {formData.resume ? (
                <div className="flex items-center gap-2 text-primary">
                  <File className="w-6 h-6" />
                  <span className="text-sm font-medium">
                    {formData.resume.name}
                  </span>
                  <span className="text-xs text-primary">
                    ({formatFileSize(formData.resume.size)})
                  </span>
                </div>
              ) : (
                <>
                  <UploadCloud
                    className={cn(
                      "w-12 h-12 mb-3 transition-colors duration-200",
                      isDragging ? "text-primary" : "text-gray-400"
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm text-card-foreground/80 text-center",
                      isDragging && "text-primary"
                    )}
                  >
                    <span className="font-semibold text-primary">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-xs text-card-foreground/80 mt-1">
                    PDF, DOC, or DOCX (max. 5MB)
                  </p>
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
