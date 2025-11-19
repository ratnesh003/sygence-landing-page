"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const COOKIE_KEY = "sygence_cookie_consent";

const defaultConsent = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      setShow(true);
    }
  }, []);

  const saveConsent = (consentObj: any) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consentObj));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-background border-t shadow-lg p-4 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          We use cookies to enhance your experience, analyze usage, and improve
          our services. You can choose which cookies to allow.
        </p>

        <div className="flex gap-2">
          <Button variant="outline" onClick={() => saveConsent(defaultConsent)}>
            Accept essentials
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              saveConsent({
                essential: true,
                functional: false,
                analytics: false,
                marketing: false,
              })
            }
          >
            Reject all
          </Button>

          <Button
            variant={"default"}
            className="bg-accent-foreground text-primary hover:bg-accent-foreground/90"
            onClick={() =>
              saveConsent({
                essential: true,
                functional: true,
                analytics: true,
                marketing: true,
              })
            }
          >
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
