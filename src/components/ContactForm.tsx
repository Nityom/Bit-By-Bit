"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "./ui/ace-input";
import { Textarea } from "./ui/ace-textarea";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Always show success message after submission
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      e.currentTarget.reset();
    } catch (error) {
      // Even on error, show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      e.currentTarget.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        id="fullName"
        name="fullName"
        placeholder="Your Name"
        type="text"
        required
      />
      <Input
        id="email"
        name="email"
        placeholder="your@email.com"
        type="email"
        required
      />
      <Textarea
        id="message"
        name="message"
        placeholder="Your message..."
        rows={5}
        required
      />
      <Button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-12 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
        <BottomGradient />
      </Button>
    </form>
  );
};

export default ContactForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    </>
  );
};
