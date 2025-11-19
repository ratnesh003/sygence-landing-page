"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const COOKIE_KEY = "sygence_cookie_consent";

const defaultConsent = {
  essential: true,
  functional: false,
  analytics: false,
  marketing: false,
};

export default function CookiesDialog() {
  const [consent, setConsent] = useState(defaultConsent);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) {
      setConsent(JSON.parse(stored));
    }
  }, []);

  const saveConsent = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(consent));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="underline">
          Cookie settings
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Manage cookie preferences</DialogTitle>
          <DialogDescription className="text-black">
            Choose which cookies you want to allow. Essential cookies are always
            enabled.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          {/* Essential */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Essential cookies</Label>
              <p className="text-sm">
                Required for login, security & basic platform functionality.
              </p>
            </div>
            <Switch checked disabled/>
          </div>

          {/* Functional */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Functional cookies</Label>
              <p className="text-sm">
                Remember preferences and improve user experience.
              </p>
            </div>
            <Switch
              checked={consent.functional}
              onCheckedChange={(val) =>
                setConsent({ ...consent, functional: val })
              }
            />
          </div>

          {/* Analytics */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Analytics cookies</Label>
              <p className="text-sm">
                Help us analyze platform usage and performance.
              </p>
            </div>
            <Switch
              checked={consent.analytics}
              onCheckedChange={(val) =>
                setConsent({ ...consent, analytics: val })
              }
            />
          </div>

          {/* Marketing */}
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Marketing cookies</Label>
              <p className="text-sm">
                Used for ads, retargeting, and campaign optimization.
              </p>
            </div>
            <Switch
              checked={consent.marketing}
              onCheckedChange={(val) =>
                setConsent({ ...consent, marketing: val })
              }
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button onClick={saveConsent}>Save settings</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
