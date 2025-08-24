'use client';

import { useState } from 'react';
import Link from 'next/link';
import { jobs } from '@/lib/jobs';
import { Briefcase, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function JobList() {
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');

  const departments = ['All', ...Array.from(new Set(jobs.map((j) => j.department)))];

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (dept === 'All' || job.department === dept)
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search roles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:flex-1"
        />
        <select
          className="border rounded-md p-2 md:w-60"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        >
          {departments.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((job) => (
          <Card key={job.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 mb-4">{job.description}</p>
              <div className="text-sm text-gray-500 flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" /> {job.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/careers/${job.slug}`} className="text-primary font-semibold">
                View Role →
              </Link>
            </CardFooter>
          </Card>
        ))}
        {filtered.length === 0 && <p>No positions match your search.</p>}
      </div>
    </div>
  );
}
