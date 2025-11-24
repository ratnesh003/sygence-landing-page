"use client";

import * as React from "react";

import axios from "axios";
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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";

import Border from "@/components/Border";

import { formInfo } from "../_constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters.")
    .max(36, "Name cannot exceed 36 characters."),
  email: z.email("Enter a valid email."),
  portfolio: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message cannot exceed 1000 characters."),
  cv: z
    .instanceof(File)
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed.",
    })
    .optional()
    .nullable(),
});

const CareersForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      portfolio: "",
      interest: "",
      message: "",
      cv: null, // File must start as null
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();

    // Add all text fields
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "cv") {
        formData.append(key, value as string);
      }
    });

    // Add file if present
    if (data.cv instanceof File) {
      formData.append("cv", data.cv);
    }

    // Add form type
    formData.append("formType", "careers");

    await toast.promise(
      axios.post("/api/send-form", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),

      {
        loading: "Submitting your application...",
        success: "Application submitted successfully!",
        error: "Failed to submit application. Please try again.",
      }
    );

    form.reset();
  }


  return (
    <Border className="bg-accent-foreground text-primary">
      <div className="flex flex-col xl:flex-row gap-20 item-start justify-center">
        <div className="w-full xl:max-w-1/2">
          <h1 className="font-medium text-5xl tracking-tight mb-6">
            {formInfo.title}
          </h1>
          <p className="tracking-wide">{formInfo.description}</p>
        </div>
        <div className="xl:w-1/2">
          <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* NAME */}
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>
                        Name <span className="text-red-500">*</span>
                      </FieldLabel>
                      <Input
                        {...field}
                        placeholder=""
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

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
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              {/* LINKEDIN / PORTFOLIO */}
              <Controller
                name="portfolio"
                control={form.control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Linkedin / Portfolio</FieldLabel>
                    <Input
                      {...field}
                      placeholder=""
                      autoComplete="off"
                    />
                  </Field>
                )}
              />

              {/* AREA OF INTEREST */}
              <Controller
                name="interest"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Area of Interest<span className="text-red-500">*</span>
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form-rhf-select-language"
                        aria-invalid={fieldState.invalid}
                        className="min-w-[120px]"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="auto">Auto</SelectItem>
                        {/* <SelectSeparator /> */}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* MESSAGE */}
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>
                      Message / Introduction
                      <span className="text-red-500">*</span>
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        placeholder="Provide a short overview of your background and why you'd like to work with Sygence"
                        rows={6}
                        className="min-h-24 resize-none"
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/1000 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* CV / RESUME UPLOAD */}
              <Controller
                name="cv"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Upload CV / Resume</FieldLabel>
                    <Input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => field.onChange(e.target.files?.[0])}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Field orientation="vertical">
                <Button type="submit" form="form-rhf-demo" className="w-full">
                  Submit
                </Button>
                <FieldDescription>
                  By clicking “Submit Application”, I consent to Sygence storing
                  and processing my data as described in the <Link href={"/privacy-policy"}>Privacy Policy</Link> .
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </Border>
  );
};

export default CareersForm;
