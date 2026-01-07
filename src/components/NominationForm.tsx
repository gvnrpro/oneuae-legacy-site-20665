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
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const categories = [
    { key: "visionary", en: "National Visionary Leader" },
    { key: "entrepreneur", en: "National Entrepreneur" },
    { key: "humanitarian", en: "National Humanitarian" },
    { key: "innovator", en: "National Innovator" },
    { key: "cultural", en: "National Cultural Ambassador" },
    { key: "environmental", en: "National Environmental Champion" },
    { key: "youth", en: "National Youth Leader" },
    { key: "sports", en: "National Sports Excellence" },
  ];

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
      const formData = new URLSearchParams();
      formData.append("form-name", "nomination");
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
          title: t('forms.nominationSubmitted'),
          description: t('forms.nominationSuccess'),
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: t('forms.error'),
        description: t('forms.errorSubmitting'),
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
          {t('forms.nominationSubmitted')}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t('forms.nominationReview')}
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          {t('forms.submitAnother')}
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
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <input type="hidden" name="form-name" value="nomination" />
        <p className="hidden">
          <label>
            Don't fill this out: <input name="bot-field" />
          </label>
        </p>
        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className={`font-serif text-2xl font-semibold text-primary mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t('forms.nomineeInfo')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="nomineeName"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.fullName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.nomineeFullName')} {...field} className={isRTL ? 'text-right' : ''} />
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
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.emailAddress')} *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="nominee@example.com" {...field} className={isRTL ? 'text-right' : ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nomineePhone"
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

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.awardCategory')} *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={isRTL ? 'text-right' : ''}>
                          <SelectValue placeholder={t('forms.selectCategory')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.key} value={category.en}>
                            {t(`forms.categories.${category.key}`)}
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
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.organizationOptional')}</FormLabel>
                    <FormControl>
                      <Input placeholder={t('forms.companyOrInstitution')} {...field} className={isRTL ? 'text-right' : ''} />
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
            {t('forms.yourInfo')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="nominatorName"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.yourFullName')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.yourName')} {...field} className={isRTL ? 'text-right' : ''} />
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
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.yourEmail')} *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@example.com" {...field} className={isRTL ? 'text-right' : ''} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nominatorPhone"
                render={({ field }) => (
                  <FormItem className={isRTL ? 'text-right' : ''}>
                    <FormLabel className="font-sans">{t('forms.yourPhone')} *</FormLabel>
                    <FormControl>
                      <Input placeholder="+971 XX XXX XXXX" {...field} className={isRTL ? 'text-right' : ''} />
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
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.relationship')} *</FormLabel>
                  <FormControl>
                    <Input placeholder={t('forms.relationshipPlaceholder')} {...field} className={isRTL ? 'text-right' : ''} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className={`font-serif text-2xl font-semibold text-primary mb-6 ${isRTL ? 'text-right' : ''}`}>
            {t('forms.nominationDetails')}
          </h3>
          
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="achievements"
              render={({ field }) => (
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.keyAchievements')} *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('forms.achievementsPlaceholder')}
                      className={`min-h-32 ${isRTL ? 'text-right' : ''}`}
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
                <FormItem className={isRTL ? 'text-right' : ''}>
                  <FormLabel className="font-sans">{t('forms.impactOnUAE')} *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t('forms.impactPlaceholder')}
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
              t('forms.submitNomination')
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default NominationForm;
