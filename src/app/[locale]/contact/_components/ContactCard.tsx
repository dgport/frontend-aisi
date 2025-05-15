"use client";

import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import BackOverlay from "@/root/public/images/industrial-4899587_1920.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

const INITIAL_FORM_STATE: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const CONTACT_INFO: ContactInfo = {
  address: "St.Chabua Amirejibi #4, Batumi",
  phone: "+ (995) 557 442 212",
  email: "traveldaud@gmail.com",
};

const ContactCard: React.FC = () => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    if (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      formDataToSend.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      );
    } else {
      setResult(
        "Access key is not defined. Please check your environment variables."
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData(INITIAL_FORM_STATE);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 relative md:px-10">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={BackOverlay}
          alt="Background Overlay"
          fill
          priority
          className="object-cover object-bottom md:object-top opacity-30 mix-blend-multiply"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="w-full max-w-5xl flex flex-col h-full md:flex-row gap-6 px-4 z-10">
        {/* Info Card - Made semi-transparent with dark text */}
        <Card className="w-full md:w-1/3 border border-gray-300 shadow-lg bg-white/80 backdrop-blur-sm text-gray-800">
          <CardHeader>
            <CardTitle className="text-base md:text-xl font-bold text-center md:text-start">
              {t("contactInfo")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gray-800" />
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    {t("ourOffice")}
                  </h3>
                  <p className="text-sm text-gray-800">
                    <a
                      href="https://maps.app.goo.gl/RHHMAjJzBT8hhVAp8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-main"
                    >
                      {CONTACT_INFO.address}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-800" />
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">
                    {t("phone")}
                  </h3>
                  <p className="text-sm text-gray-800">
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:underline hover:text-main"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-800" />
                <div>
                  <h3 className="font-semibold text-sm md:text-base text-gray-900">
                    {t("email")}
                  </h3>
                  <p className="text-sm text-gray-800">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:underline hover:text-main"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-400">
              <h3 className="font-semibold text-base md:text-lg mb-4 text-center md:text-start text-gray-900">
                {t("followUs")}
              </h3>
              <div className="grid grid-cols-5 gap-y-4 items-center">
                <a
                  target="_blank"
                  href="https://snapchat.com/t/8hVjNvTK"
                  className="hover:text-main text-gray-800"
                  aria-label="Snapchat"
                >
                  {/* <Snapchat className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://youtube.com/@daud_travel?si=FIOhdNS_KLMb_8Me"
                  className="hover:text-main text-gray-800"
                  aria-label="Youtube"
                >
                  {/* <Youtube className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@daud_travel?_t=8qj9xNGY8dm&_r=1"
                  className="hover:text-main text-gray-800"
                  aria-label="TikTok"
                >
                  {/* <Tiktok className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/daud_travel?igsh=dWlxZnYybGJwb2Rx&utm_source=qr"
                  className="hover:text-main text-gray-800"
                  aria-label="Instagram"
                >
                  {/* <Instagram className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/mfSUtXxwN4HnpaQW/?mibextid=LQQJ4d1"
                  className="hover:text-main text-gray-800"
                  aria-label="Facebook"
                >
                  {/* <Facebook className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://t.me/daud_travel"
                  className="hover:text-main text-gray-800"
                  aria-label="Telegram"
                >
                  {/* <Telegram className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://wa.me/995557442212"
                  className="hover:text-main text-gray-800"
                  aria-label="WhatsApp"
                >
                  {/* <Whatsapp className="w-7 h-7" /> */}
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/daud_travel"
                  className="hover:text-main text-gray-800"
                  aria-label="X"
                >
                  {/* <X className="w-7 h-7" /> */}
                </a>
                <a
                  href="https://www.google.com/maps/place/Daud+Travel/@41.6443898,41.6346718,696m/data=!3m2!1e3!4b1!4m6!3m5!1s0x406787f6f7466e93:0x69bea43bb941487c!8m2!3d41.6443898!4d41.6346718!16s%2Fg%2F11s2jbmn0l?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Address"
                  className="hover:text-main text-gray-800"
                >
                  <MapPin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Card - Made semi-transparent with dark text for better contrast */}
        <Card className="w-full md:w-2/3 border-gray-300 shadow-lg min-h-[32rem] bg-white/80 backdrop-blur-sm text-gray-800">
          <CardHeader className="space-y-1">
            <CardTitle className="text-base md:text-2xl font-bold text-center md:text-start text-gray-900">
              {t("sendUsMessage")}
            </CardTitle>
            <CardDescription className="text-gray-700">
              {t("sendUsDescribe")}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-gray-800 font-medium"
                  >
                    {t("firstName")}
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="h-10 bg-white/90 border-gray-400 text-gray-900"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-gray-800 font-medium"
                  >
                    {t("lastName")}
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="h-10 bg-white/90 border-gray-400 text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-800 font-medium">
                  {t("email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 bg-white/90 border-gray-400 text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-800 font-medium">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="h-32 resize-none bg-white/90 border-gray-400 text-gray-900"
                />
              </div>
              {result && (
                <div
                  className={`text-sm font-medium ${
                    result.includes("Success")
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {result}
                </div>
              )}
              <CardFooter className="mt-auto">
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      {t("sending")}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {t("sendMessage")}
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </CardFooter>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactCard;
