"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type FlipCardProps = {
  icon: ReactNode;
  title: string;
  description: string | ReactNode;
  className?: string;
};

export default function FlipCard({
  icon,
  title,
  description,
  className = "",
}: FlipCardProps) {
  return (
    <Card className="w-[220px] h-[300px] p-2 relative overflow-hidden shadow-lg bg-white dark:bg-gray-800">
      <CardContent className="p-1 flex justify-center items-center flex-col gap-2 h-full">
        {icon}
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          {title}
        </h2>
      </CardContent>
    </Card>
  );
}
