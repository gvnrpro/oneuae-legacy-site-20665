import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

const categories = [
  "National Visionary Leader",
  "National Entrepreneur",
  "National Humanitarian",
  "National Innovator",
  "National Cultural Ambassador",
  "National Environmental Champion",
  "National Youth Leader",
  "National Sports Excellence",
];

const formSchema = z.object({
  nomineeName: z.string().trim().min(2, "Nominee name must be at least 2 characters").max(100, "Name too long"),
  nomineeEmail: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  nomineePhone: z.string().trim().min(8, "Phone number too short").max(20, "Phone number too long"),
  category: z.string().min(1, "Please select a category"),
  organization: z.string().trim().max(150, "Organization name too long").optional(),
  nominatorName: z.string().trim().min(2, "Your name must be at least 2 characters").max(100, "Name too long"),
  nominatorEmail: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  nominatorPhone: z.string().trim().min(8, "Phone number too short").max(20, "Phone number too long"),
  relationship: z.string().trim().min(2, "Relationship must be at least 2 characters").max(100, "Relationship too long"),
  achievements: z.string().trim().min(50, "Please provide at least 50 characters describing achievements").max(2000, "Description too long"),
  impact: z.string().trim().min(50, "Please provide at least 50 characters describing impact").max(2000, "Description too long"),
});

type FormValues = z.infer<typeof formSchema>;

const NominationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomineeName: "",
      nomineeEmail: "",
      nomineePhone: "",
      category: "",
      organization: "",
      nominatorName: "",
      nominatorEmail: "",
      nominatorPhone: "",
      relationship: "",
      achievements: "",
      impact: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Encode form data for Netlify
      const formData = new URLSearchParams();
      formData.append("form-name", "nomination");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || "");
      });

      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Nomination Submitted",
          description: "Thank you! Your nomination has been received successfully.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit nomination. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card p-12 rounded-lg border border-border text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          Nomination Submitted
        </h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your nomination. We will review it and contact you if additional information is needed.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Nomination
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        name="nomination"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Hidden field for Netlify form name */}
        <input type="hidden" name="form-name" value="nomination" />
        {/* Honeypot field for spam prevention */}
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Nominee Information
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="nomineeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Nominee's full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="nomineeEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="nominee@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nomineePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Award Category *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Organization (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Company or institution" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Your Information
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="nominatorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Your Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="nominatorEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Your Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nominatorPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Your Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="relationship"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Relationship to Nominee *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Colleague, Manager, Friend" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Nomination Details
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="achievements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Key Achievements *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the nominee's most significant achievements (minimum 50 characters)"
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="impact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Impact on UAE *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe how the nominee has positively impacted the UAE and its communities (minimum 50 characters)"
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white font-sans text-lg px-12 py-6 font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Preparing...
              </>
            ) : (
              "Submit Nomination"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NominationForm;
