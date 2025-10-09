"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import LocationSwitcher from "./LocationSwitcher";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  interest: string;
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

const projectOptions = [
  { value: "dynamics-365", label: "Microsoft Dynamics 365" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "web", label: "Web application" },
  { value: "mobile", label: "Mobile application" },
  { value: "digital-marketing", label: "Digital marketing" },
  { value: "outsourcing", label: "Dedicated team" },
];

const budgetOptions = [
  { value: "under-25k", label: "Under $25k" },
  { value: "25-50k", label: "$25k – $50k" },
  { value: "50-100k", label: "$50k – $100k" },
  { value: "100-250k", label: "$100k – $250k" },
  { value: "250k-plus", label: "$250k+" },
];

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

  const initialFormState = useMemo(
    () => ({
      fullName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      interest,
      context,
      contactType,
    }),
    [context, contactType, interest]
  );

  const [formData, setFormData] = useState<FormData>(initialFormState);

  useEffect(() => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setErrors({});
  }, [initialFormState]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = "Select a project type";
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Select a budget band";
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
      const res = await fetch("/api/contact-us-form-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          interest: formData.interest,
          contactType: formData.contactType,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData(initialFormState);
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

  if (isSubmitted) {
    return (
      <div className={cn("w-full max-w-2xl mx-auto", className)}>
        <Card className="border border-border/40 bg-card shadow-lg">
          <CardContent className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-card-foreground mb-2">
              Thanks for reaching out!
            </h3>
            <p className="text-card-foreground/80 mb-6">
              We&apos;ll reply within one business day to book your consult.
            </p>
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn("grid md:grid-cols-[minmax(0,1fr)_320px] gap-6", className)}>
      <form
        className="rounded-2xl border border-border/60 bg-card/90 backdrop-blur-sm p-6 shadow-sm"
        onSubmit={handleSubmit}
        id="lead-form"
      >
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="fullName" className="text-sm font-medium text-card-foreground">
              Full name
            </label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={(event) => {
                const { value } = event.target;
                setFormData((prev) => ({ ...prev, fullName: value }));
                if (errors.fullName) {
                  setErrors((prev) => ({ ...prev, fullName: "" }));
                }
              }}
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && (
              <p className="text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" aria-hidden />
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-card-foreground">
              Work email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(event) => {
                const { value } = event.target;
                setFormData((prev) => ({ ...prev, email: value }));
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: "" }));
                }
              }}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <p className="text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" aria-hidden />
                {errors.email}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="company" className="text-sm font-medium text-card-foreground">
              Company
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Kenroz Pvt. Ltd."
              value={formData.company}
              onChange={(event) => {
                const { value } = event.target;
                setFormData((prev) => ({ ...prev, company: value }));
                if (errors.company) {
                  setErrors((prev) => ({ ...prev, company: "" }));
                }
              }}
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company && (
              <p className="text-sm text-red-400 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" aria-hidden />
                {errors.company}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <span className="text-sm font-medium text-card-foreground">Project type</span>
              <Select
                value={formData.projectType}
                onValueChange={(value) => {
                  setFormData((prev) => ({ ...prev, projectType: value }));
                  if (errors.projectType) {
                    setErrors((prev) => ({ ...prev, projectType: "" }));
                  }
                }}
              >
                <SelectTrigger aria-invalid={Boolean(errors.projectType)}>
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  {projectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" aria-hidden />
                  {errors.projectType}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <span className="text-sm font-medium text-card-foreground">Budget band (USD)</span>
              <Select
                value={formData.budget}
                onValueChange={(value) => {
                  setFormData((prev) => ({ ...prev, budget: value }));
                  if (errors.budget) {
                    setErrors((prev) => ({ ...prev, budget: "" }));
                  }
                }}
              >
                <SelectTrigger aria-invalid={Boolean(errors.budget)}>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {budgetOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.budget && (
                <p className="text-sm text-red-400 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" aria-hidden />
                  {errors.budget}
                </p>
              )}
            </div>
          </div>

          {errors.submit && (
            <div className="flex items-center gap-2 rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
              <AlertCircle className="h-4 w-4" aria-hidden />
              {errors.submit}
            </div>
          )}

          <Button type="submit" className="mt-2" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </form>

      {showContactInfo && (
        <div className="space-y-4 rounded-2xl border border-border/50 bg-card/40 p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Prefer to schedule directly?
            </p>
            <Button asChild variant="outline" className="mt-3 w-full">
              <a
                href="https://calendly.com/kenroz/20min"
                target="_blank"
                rel="noreferrer"
              >
                Book a 20-min consult
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/80 p-4 text-card-foreground/80">
            <p className="text-sm font-medium text-card-foreground">What happens next?</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Discovery call with a practice lead.</li>
              <li>• Follow-up email recapping goals and SLAs.</li>
              <li>• Proposal within 3–5 business days.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/80 p-4">
            <p className="text-sm font-medium text-card-foreground">Response time</p>
            <p className="mt-1 text-sm text-card-foreground/70">
              We respond within one business day via email or WhatsApp.
            </p>
          </div>

          <LocationSwitcher title="Our Offices" description="Choose your region" />
        </div>
      )}
    </div>
  );
}
