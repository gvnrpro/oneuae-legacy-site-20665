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
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const tiers = [
    { key: "gold", en: "Gold Partner (AED 100,000)" },
    { key: "silver", en: "Silver Partner (AED 75,000)" },
    { key: "bronze", en: "Bronze Partner (AED 50,000)" },
    { key: "redCarpet", en: "Red-Carpet Partner (AED 25,000)" },
    { key: "custom", en: "Custom Package" },
  ];

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
      const formData = new URLSearchParams();
      formData.append("form-name", "partnership");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value || "");
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: t('forms.inquirySubmitted'),
          description: t('forms.inquirySuccess'),
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: t('forms.error'),
        description: t('forms.errorInquiry'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-card p-12 rounded-lg border border-border text-center ${isRTL ? 'rtl' : 'ltr'}`}>
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
          {t('forms.inquirySubmitted')}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t('forms.inquiryReview')}
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          {t('forms.submitAnotherInquiry')}
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        name="partnership"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <input type="hidden" name="form-name" value="partnership" />
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className={`font-serif text-2xl font-semibold text-primary mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t('forms.companyInfo')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.companyName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.yourCompanyName')} {...field} className={isRTL ? 'text-right' : ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.companyWebsite')}</FormLabel>
                  <FormControl>
                    <Input placeholder="https://www.example.com" {...field} className={isRTL ? 'text-right' : ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className={`font-serif text-2xl font-semibold text-primary mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t('forms.contactInfo')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="contactName"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.contactPerson')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.fullName')} {...field} className={isRTL ? 'text-right' : ''} />
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
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.emailAddress')} *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="contact@company.com" {...field} className={isRTL ? 'text-right' : ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.phoneNumber')} *</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} className={isRTL ? 'text-right' : ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className={`font-serif text-2xl font-semibold text-primary mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t('forms.partnershipDetails')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="tier"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.preferredTier')} *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={isRTL ? 'text-right' : ''}>
                        <SelectValue placeholder={t('forms.selectTier')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tiers.map((tier) => (
                        <SelectItem key={tier.key} value={tier.en}>
                          {t(`forms.tiers.${tier.key}`)}
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
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.additionalInfo')} *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('forms.additionalInfoPlaceholder')}
                      className={`min-h-32 ${isRTL ? 'text-right' : ''}`}
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
            className={`bg-primary hover:bg-primary/90 text-white font-sans text-lg px-12 py-6 font-medium ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className={`h-5 w-5 animate-spin ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t('forms.preparing')}
              </>
            ) : (
              t('forms.submitInquiry')
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PartnershipForm;
