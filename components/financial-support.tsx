"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ship, Users, ExternalLink, HandHeart } from "lucide-react";
import Link from "next/link";

export default function FinancialSupportWidget() {
  return (
    <section id="support" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Support the Mission
            </h2>
            <p className="text-lg text-gray-700">
              Your financial support helps fund ships, supplies, and
              coordination efforts for this historic flotilla.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">
                  Direct Donations
                </CardTitle>
                <CardDescription>
                  Support the flotilla organization directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link
                  target="_blank"
                  href="https://chuffed.org/project/138012-a-thousand-madleens-to-gaza"
                >
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <HandHeart className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  PayPal Donation
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Bank Transfer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Sponsor a Ship</CardTitle>
                <CardDescription>
                  Help fund an entire vessel for the flotilla
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-red-50">
                  <p className="text-2xl font-bold text-red-700">$50,000</p>
                  <p className="text-sm text-gray-600">Average cost per ship</p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Ship className="mr-2 h-4 w-4" />
                  Sponsor a Ship
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-red-600 text-red-600 bg-transparent"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Group Sponsorship
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
