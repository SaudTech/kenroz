"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { jobs } from "@/lib/jobs";
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Job = {
  slug: string;
  title: string;
  description: string;
  department: string;
  location: string;
  postedAt?: string; // ISO date optional
};

export default function JobList() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState<string>("All");
  const [location, setLocation] = useState<string>("All");
  const [sort, setSort] = useState<"new" | "az">("new");

  const departments = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.department))).sort()],
    []
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.location))).sort()],
    []
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = (jobs as Job[])
      .filter((job) =>
        q
          ? [job.title, job.description, job.department, job.location]
              .filter(Boolean)
              .some((v) => v.toLowerCase().includes(q))
          : true
      )
      .filter((job) => (dept === "All" ? true : job.department === dept))
      .filter((job) => (location === "All" ? true : job.location === location))
      .sort((a, b) => {
        if (sort === "az") return a.title.localeCompare(b.title);
        // "new": newest first by postedAt, fallback to A–Z
        const ad = a.postedAt ? Date.parse(a.postedAt) : 0;
        const bd = b.postedAt ? Date.parse(b.postedAt) : 0;
        if (ad !== bd) return bd - ad;
        return a.title.localeCompare(b.title);
      });

    return list;
  }, [search, dept, location, sort]);

  const total = jobs.length;
  const count = filtered.length;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Controls */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative flex-1">
            <Input
              placeholder="Search roles, teams, or keywords…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full"
              aria-label="Search roles"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-[180px]" aria-label="Filter by department">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent className="max-h-[260px]">
              {departments.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px]" aria-label="Filter by location">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="max-h-[260px]">
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>
                  {loc}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-3">
          <Select value={sort} onValueChange={(v: "new" | "az") => setSort(v)}>
            <SelectTrigger className="w-[160px]" aria-label="Sort roles">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Newest first</SelectItem>
              <SelectItem value="az">A–Z</SelectItem>
            </SelectContent>
          </Select>

          {(dept !== "All" || location !== "All" || search) && (
            <Button
              variant="ghost"
              onClick={() => {
                setDept("All");
                setLocation("All");
                setSearch("");
                setSort("new");
              }}
            >
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Status */}
      <div className="mt-3 text-sm text-slate-600">
        Showing <span className="font-medium">{count}</span> of{" "}
        <span className="font-medium">{total}</span> positions
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map((job) => {
          const isNew =
            job.postedAt && Date.now() - Date.parse(job.postedAt) < 1000 * 60 * 60 * 24 * 14; // 14 days

          return (
            <Card
              key={job.slug}
              className="group relative flex flex-col border-slate-200 bg-card shadow-sm transition hover:shadow-[0_0_26px_0_var(--primary),0_0_14px_0_rgba(0,0,0,0.08)]"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl font-semibold leading-snug text-card-foreground">
                    <Link
                      href={`/careers/${job.slug}`}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {job.title}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {isNew && (
                      <Badge className="gap-1" variant="default">
                        <Sparkles className="h-3.5 w-3.5" /> New
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <p className="line-clamp-3 text-card-foreground">{job.description}</p>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-card-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    {job.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  {job.postedAt && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {new Date(job.postedAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <Link
                  href={`/careers/${job.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  More details <ArrowRight className="h-4 w-4" />
                </Link>
                {/* <Link
                  href={`mailto:career@kenroz.com?subject=Application: ${encodeURIComponent(job.title)}`}
                  className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Apply
                </Link> */}
              </CardFooter>

              {/* Clickable overlay for accessibility without breaking buttons */}
              <Link href={`/careers/${job.slug}`} className="absolute inset-0" aria-label={`Open ${job.title}`}>
                <span className="sr-only">{job.title}</span>
              </Link>
            </Card>
          );
        })}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <Building2 className="mx-auto h-8 w-8 text-slate-400" />
            <p className="mt-3 font-semibold">No positions match your search</p>
            <p className="mt-1 text-sm text-slate-600">
              Try different keywords, or{" "}
              <Link href="mailto:career@kenroz.com" className="text-primary underline">
                email us
              </Link>{" "}
              with your resume.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}