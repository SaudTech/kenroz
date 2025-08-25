"use client"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface OpenInformativeDialogProps {
  title: string
  description: string
  children: React.ReactNode
}

export function OpenInformativeDialog({
  title,
  description,
  children,
}: OpenInformativeDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-end">
          <AlertDialogCancel>Ok</AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}