import { useState } from "react";

import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

import { isValidEmail } from "@/utils/check-email";

function ContactForm() {
  const t = useTranslations("Contact");

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState({
    email: false,
    required: false
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      if (!serviceID || !templateID) {
        throw new Error("Service ID or Template ID is undefined.");
      }

      const res = await emailjs.send(serviceID, templateID, input, options);

      if (res.status === 200) {
        toast.success(t("form.success_message"));
        setInput({
          name: "",
          email: "",
          message: ""
        });
      }
    } catch (error: any) {
      toast.error(error?.text || error || t("form.error_message"));
    }
  };

  return (
    <div className="">
      <p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">
        {t("contact_with_me")}
      </p>
      <div className="max-w-3xl rounded-lg border border-gray-300 border-t-violet-200 p-3 shadow-lg dark:border-[#464c6a] lg:p-5">
        <p className="text-sm">{t("description")}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="name">
              {t("form.name")}:{" "}
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3] dark:border-[#353a52] dark:bg-[#10172d]"
              name="name"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="email">
              {t("form.email")}:{" "}
            </label>
            <input
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3] dark:border-[#353a52] dark:bg-[#10172d]"
              name="email"
              type="email"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-red-400">{t("form.invalid_email")}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base" htmlFor="message">
              {t("form.message")}:{" "}
            </label>
            <textarea
              name="message"
              className="w-full rounded-md border border-gray-300 px-3 py-2 outline-0 ring-0 transition-all duration-300 focus:border-[#16f2b3] dark:border-[#353a52] dark:bg-[#10172d]"
              maxLength={500}
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-sm text-red-400">
                {t("form.required_email_and_message")}
              </p>
            )}
            <button
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:text-white hover:no-underline md:px-12 md:py-3 md:text-sm md:font-semibold"
              onClick={handleSendMail}
            >
              <span>{t("send_message")}</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
