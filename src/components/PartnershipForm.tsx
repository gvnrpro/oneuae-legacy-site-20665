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
import { Loader2 } from "lucide-react";

const tiers = [
  "Gold Partner (AED 100,000)",
  "Silver Partner (AED 75,000)",
  "Bronze Partner (AED 50,000)",
  "Red-Carpet Partner (AED 25,000)",
  "Custom Package",
];

const formSchema = z.object({
  companyName: z.string().trim().min(2, "Company name must be at least 2 characters").max(150, "Company name too long"),
  contactName: z.string().trim().min(2, "Contact name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(8, "Phone number too short").max(20, "Phone number too long"),
  tier: z.string().min(1, "Please select a partnership tier"),
  website: z.string().trim().url("Invalid website URL").max(255, "URL too long").optional().or(z.literal("")),
  message: z.string().trim().min(20, "Please provide at least 20 characters").max(1000, "Message too long"),
});

type FormValues = z.infer<typeof formSchema>;

const PartnershipForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      tier: "",
      website: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const subject = encodeURIComponent(`OneUAE Awards Partnership Inquiry - ${data.companyName}`);
      const body = encodeURIComponent(`
PARTNERSHIP INQUIRY
==================

COMPANY INFORMATION:
Company Name: ${data.companyName}
Website: ${data.website || 'N/A'}

CONTACT INFORMATION:
Name: ${data.contactName}
Email: ${data.email}
Phone: ${data.phone}

PARTNERSHIP DETAILS:
Preferred Tier: ${data.tier}

MESSAGE:
${data.message}

Submitted: ${new Date().toLocaleString()}
      `);

      window.location.href = `mailto:info@oneuaeawards.ae?subject=${subject}&body=${body}`;

      toast({
        title: "Inquiry Prepared",
        description: "Your email client will open with the partnership inquiry. Please review and send.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to prepare inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Company Information
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Company Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Company Website</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Contact Information
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Contact Person *</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans">Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contact@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
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
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="font-serif text-2xl font-semibold text-primary mb-6">
            Partnership Details
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="tier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Preferred Partnership Tier *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a tier" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tiers.map((tier) => (
                        <SelectItem key={tier} value={tier}>
                          {tier}
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
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-sans">Additional Information *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your company and why you'd like to partner with OneUAE Awards (minimum 20 characters)"
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
              "Submit Inquiry"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PartnershipForm;
