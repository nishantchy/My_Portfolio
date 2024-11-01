"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { TextArea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconLoader2,
} from "@tabler/icons-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const contactFormSchema = z.object({
  firstname: z
    .string()
    .min(2, "Please Enter Your First Name")
    .max(50, "Nah! it can't be this long."),
  lastname: z
    .string()
    .min(2, "Please Enter Your Last Name")
    .max(50, "Nah! it can't be this long"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: `${data.firstname} ${data.lastname}`,
        from_email: data.email,
        message: data.message,
      };

      const response = await emailjs.send(
        "service_l3y0ji9",
        "template_vhbz6x4",
        templateParams,
        "yD9epBzqbWG-3_J5F"
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      <Toaster position="top-center" />
      <BackgroundGradient className="max-w-2xl w-full mx-auto rounded-3xl p-4 md:p-8 shadow-input bg-slate-950">
        <h2 className="font-bold text-3xl text-gray-300 text-center">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-gray-300 text-paragraphSm md:text-paragraph text-center">
          Send me a Message
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="Your First Name"
                {...register("firstname")}
              />
              {errors.firstname && (
                <span className="text-red-500 text-sm">
                  {errors.firstname.message}
                </span>
              )}
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Your Last Name"
                {...register("lastname")}
              />
              {errors.lastname && (
                <span className="text-red-500 text-sm">
                  {errors.lastname.message}
                </span>
              )}
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="youremail@gmail.com"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              placeholder="Your Message"
              {...register("message")}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative text-paragraphSm md:text-paragraph group/btn flex items-center justify-center bg-purple-800 w-full text-gray-300 rounded-3xl py-3 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && <IconLoader2 className="w-4 h-4 mr-2 animate-spin" />}
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[3px] w-full" />
          <div className="flex space-x-4">
            <Link
              href="https://github.com/nishantchy"
              target="_blank"
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-3xl h-10 shadow-input bg-gray-50 dark:bg-gray-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <IconBrandGithub className="h-6 w-6 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-paragraphSm md:text-paragraph">
                GitHub
              </span>
              <BottomGradient />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nishant-chaudhary-5209a51b3/"
              target="_blank"
              className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-3xl h-10 shadow-input bg-gray-50 dark:bg-[#0077B5] dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <IconBrandLinkedin className="h-6 w-6 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-paragraphSm md:text-paragraph">
                Linked In
              </span>
              <BottomGradient />
            </Link>
          </div>
        </form>
      </BackgroundGradient>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
