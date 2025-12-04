import * as React from "react";
import axios from "axios";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// -------------------------------
// ✨ FORM SCHEMA
// -------------------------------
const formSchema = z.object({
  name: z
    .string()
    .min(1, "First Name is required.")
    .max(36, "First Name cannot exceed 36 characters."),
  surname: z
    .string()
    .min(1, "Last Name is required.")
    .max(36, "Last Name cannot exceed 36 characters."),
  email: z.email("Enter a valid email."),
  number: z
    .string()
    .min(7, "Phone number must be valid.")
    .max(15, "Phone number is too long."),
  company: z.string().optional(),
  message: z.string().min(10, "Inquiry must be at least 10 characters."),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree before submitting.",
  }),
});

const RequestDemo = ({ trigger }: { trigger: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      number: "",
      company: "",
      message: "",
      consent: false,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();

    // Append all dynamic fields (convert values to strings because FormData accepts string | Blob)
    Object.entries(data).forEach(([key, value]) => {
      // Convert any value (including boolean consent) to a string before appending
      formData.append(key, String(value));
    });

    // Add form type
    formData.append("formType", "contact");

    // Send mail using axios + toast.promise
    await toast.promise(
      axios.post("/api/send-form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),

      {
        loading: "Sending your inquiry...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      }
    );

    form.reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} size={"lg"} className="text-black">
          {trigger}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>{trigger}</DialogTitle>
          <DialogDescription className="text-black">
            We’re here to help you with your inquiries.
          </DialogDescription>
        </DialogHeader>

        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      First Name <span className="text-red-500">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      placeholder=""
                      className="placeholder:text-foreground/80"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Last Name */}
              <Controller
                name="surname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Last Name <span className="text-red-500">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      placeholder=""
                      className="placeholder:text-foreground/80"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* EMAIL */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Email <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder=""
                    className="placeholder:text-foreground/80"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* PHONE NUMBER (matches the screenshot) */}
            <Controller
              name="number"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Phone Number <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder=""
                    className="placeholder:text-foreground/80"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* COMPANY NAME */}
            <Controller
              name="company"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Company Name</FieldLabel>
                  <Input
                    {...field}
                    placeholder=""
                    className="placeholder:text-foreground/80"
                  />
                </Field>
              )}
            />

            {/* INQUIRY / MESSAGE */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>
                    Inquiry <span className="text-red-500">*</span>
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      placeholder="Enter inquiry details"
                      rows={6}
                      className="min-h-24 resize-none placeholder:text-foreground/80"
                    />
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* CONSENT CHECKBOX */}
            <Controller
              name="consent"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  {/* Row: Checkbox + Label */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      name={field.name}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />

                    <FieldLabel className="font-normal leading-snug">
                      I agree to receive communications from Sygence about
                      product news, industry insights and upcoming events. I
                      understand that I can unsubscribe at any time.
                    </FieldLabel>
                  </div>

                  {/* Error BELOW label (full width) */}
                  {fieldState.invalid && (
                    <div className="mt-1">
                      <FieldError errors={[fieldState.error]} />
                    </div>
                  )}
                </Field>
              )}
            />

            {/* SUBMIT BUTTON */}
            <DialogFooter>
              <Field>
                <Button
                  type="submit"
                  form="contact-form"
                  className="w-full bg-accent-foreground text-primary hover:bg-accent-foreground/90"
                >
                  Submit
                </Button>

                <FieldDescription className="text-foreground/80 tracking-tight font-medium mt-2">
                  By clicking “Submit”, I consent to Sygence storing and
                  processing my data as described in the{" "}
                  <Link href="/privacy-policy" className="">
                    <span className="text-accent-foreground hover:text-accent-foreground/80 underline">
                      Privacy Policy
                    </span>
                  </Link>
                  .
                </FieldDescription>
              </Field>
            </DialogFooter>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDemo;
