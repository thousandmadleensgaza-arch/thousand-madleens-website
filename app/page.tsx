'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import InteractiveMap from '@/components/interactive-map';
import NewsCarousel from '@/components/news-carousel';
import {
  Ship,
  Heart,
  Users,
  Megaphone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  ExternalLink,
  Anchor,
  Globe,
  HandHeart,
  MessageSquare,
  AlertTriangle,
  Clipboard,
} from 'lucide-react';
import Link from 'next/link';
import { RiTiktokLine, RiTelegram2Line } from 'react-icons/ri';
import { toast } from 'sonner';
import content from '../content.json';

export default function MadleensGazaLanding() {
  const [activeRole, setActiveRole] = useState('sailors');
  const campaignMessage = content.site.campaignMessage;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="w-full max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/navbar_logo_no_bg.png"
              alt="1000 Madleens to Gaza Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <a
              href="#mission"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Mission
            </a>
            <a
              href="#goals"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Goals
            </a>
            <a
              href="#get-involved"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              Get Involved
            </a>
            <a
              href="#news"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              News
            </a>
            <a
              href="#faq"
              className="text-gray-700 font-bold hover:text-green-600 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <Link target="_blank" href="https://linktr.ee/thousand.madleens">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-3 py-2 whitespace-nowrap">
                <span className="hidden sm:inline">Join the Movement</span>
                <span className="sm:hidden">Join</span>
              </Button>
            </Link>
            <Link
              target="_blank"
              href="https://chuffed.org/project/138012-a-thousand-madleens-to-gaza"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm px-3 py-2 whitespace-nowrap">
                <span className="sm:inline">Donate</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Combined Hero/Mission Section */}
      <section
        id="mission"
        className="relative min-h-screen bg-black text-white"
      >
        {/* Banner Image Background */}
        <div className="absolute inset-0">
          <img
            src="thousand-madleens-banner.jpg"
            alt="Sailboat with Palestinian flag sailing on the Mediterranean Sea - 1000 Madleens to Gaza campaign"
            className="w-full h-full object-cover object-top opacity-40"
          />
          <div className="absolute inset-0 "></div>
        </div>

        <div className="relative z-10">
          {/* Hero Content */}
          <div className="container mx-auto px-4 pt-48 pb-16">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
                1000 Madleens to Gaza
              </h1>
              <div className="inline-block bg-black px-6 py-3 mb-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                  Breaking the Blockage
                </h2>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl drop-shadow-lg mb-8">
                1000 Ships. One Mission. Free Gaza.
              </p>
              <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                A global maritime flotilla campaign to break the blockade of
                Gaza through peaceful solidarity. Inspired by resilience, driven
                by hope, united in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  target="_blank"
                  href="https://chuffed.org/project/138012-a-thousand-madleens-to-gaza"
                >
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
                  >
                    <HandHeart className="mr-2 h-5 w-5" />
                    Support the Mission
                  </Button>
                </Link>
                <Link
                  target="_blank"
                  href={'https://linktr.ee/thousand.madleens'}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    Join Community
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mission Cards at Bottom - Leaking out of section */}
          <div className="container mx-auto px-4 pb-0 pt-12">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-200">
                  A tribute to the resilience and patience of the people of
                  Gaza, and a collective movement to stand alongside them.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 transform translate-y-8">
                <Card className="bg-black border-green-600 border-2 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400 text-xl">
                      <Heart className="mr-2 h-6 w-6" />
                      Tribute to Resilience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      The "Madleen" represents the unwavering spirit of the
                      Palestinians who refuse to accept injustice. Our campaign
                      honors the courage of all who have sailed these waters
                      before us, carrying hope across the Mediterranean.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black border-green-600 border-2 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400 text-xl">
                      <Globe className="mr-2 h-6 w-6" />
                      Global Solidarity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200">
                      From every corner of the world, we unite in peaceful
                      resistance. 1000 ships from many nations will converge to
                      break the Israeli genocidal blockade through the power of
                      international civil society.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals & Organization */}
      <section id="goals" className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-green-600 mb-6">
                Goals & Organization
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our mission is organized around clear objectives and coordinated
                international action.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Ship className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Maritime Flotilla
                </h3>
                <p className="text-gray-700">
                  Coordinate 1000 ships from multiple nations to converge and
                  sail together toward Gaza, creating an unprecedented peaceful
                  maritime demonstration.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Anchor className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Break the Blockade
                </h3>
                <p className="text-gray-700">
                  Challenge the illegal blockade through peaceful resistance,
                  bringing international attention to the humanitarian crisis
                  and demanding open borders.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Users className="h-16 w-16 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-green-600 mb-4">
                  Global Unity
                </h3>
                <p className="text-gray-700">
                  Build an international coalition of civil society
                  organizations, activists, and supporters committed to justice
                  and human rights.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flotilla Map - Fixed Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Global Departure Points
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Ships from around the world will depart from these locations to
                join the historic flotilla to Gaza.
              </p>
            </div>

            <InteractiveMap />

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className=" p-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Join the Global Fleet
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Is your country organizing ships for the flotilla? Contact us
                  to add your departure location to our global map and
                  coordinate with the international fleet.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://thousandmadleensinternational.gogocarto.fr/map#/carte/@46.32,-0.68,6z?cat=all"
                    target="_blank"
                  >
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Ship className="mr-2 h-4 w-4" />
                      Register Departure Point
                    </Button>
                  </Link>
                  <Link
                    href="https://thousandmadleensinternational.gogocarto.fr/map#/carte/@46.32,-0.68,6z?cat=all"
                    target="_blank"
                  >
                    <Button className="bg-green-600 hover:bg-green-700">
                      <MapPin className="mr-2 h-4 w-4" />
                      View All Locations
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Voice/Advocacy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Raise Your Voice
              </h2>
              <p className="text-lg text-gray-700">
                Contact your elected representatives and those in power to
                support our peaceful mission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Megaphone className="mr-2 h-5 w-5 text-green-600" />
                    Contact Representatives
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Find and contact your local representatives with our
                    advocacy toolkit.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Find My Representatives
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Download Advocacy Kit
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-green-600" />
                    Letter Templates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Pre-written letters to government officials and
                    international bodies.
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Download Letters
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    Customize Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="get-involved" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                How You Can Contribute
              </h2>
              <p className="text-lg text-gray-700">
                Different roles for different skills - everyone has a part to
                play in this historic mission.
              </p>
            </div>

            <Tabs
              value={activeRole}
              onValueChange={setActiveRole}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="sailors">Sailors</TabsTrigger>
                <TabsTrigger value="navigators">Navigators</TabsTrigger>
                <TabsTrigger value="officials">Officials</TabsTrigger>
                <TabsTrigger value="citizens">Citizens</TabsTrigger>
              </TabsList>

              <TabsContent value="sailors" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Ship className="mr-2 h-5 w-5" />
                      Sailors & Crew
                    </CardTitle>
                    <CardDescription>
                      Experienced maritime professionals and volunteers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Maritime experience preferred</li>
                          <li>• Valid passport and documentation</li>
                          <li>• Commitment to peaceful resistance</li>
                          <li>• Physical fitness for sea voyage</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Ship operations and maintenance</li>
                          <li>• Safety protocols and procedures</li>
                          <li>• Coordination with flotilla</li>
                          <li>• Media and documentation support</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="https://cryptpad.fr/form/#/2/form/view/7m7vHUcI3SSjvTUM5Jckhlgta5egIyZIGbYIZN1cbgo/"
                      target="_blank"
                    >
                      <Button className="mt-6 bg-green-600 hover:bg-green-700">
                        Apply as Sailor
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="navigators" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Anchor className="mr-2 h-5 w-5" />
                      Navigators & Technical
                    </CardTitle>
                    <CardDescription>
                      Navigation, communications, and technical specialists
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Navigation or technical certification</li>
                          <li>• GPS and communication systems experience</li>
                          <li>• International waters knowledge</li>
                          <li>• Emergency response training</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Route planning and coordination</li>
                          <li>• Inter-ship communications</li>
                          <li>• Weather monitoring and safety</li>
                          <li>• Technical equipment maintenance</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="https://cryptpad.fr/form/#/2/form/view/7m7vHUcI3SSjvTUM5Jckhlgta5egIyZIGbYIZN1cbgo/"
                      target="_blank"
                    >
                      <Button className="mt-6 bg-green-600 hover:bg-green-700">
                        Apply as Navigator
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="officials" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-black">
                      <Users className="mr-2 h-5 w-5" />
                      Officials & Coordinators
                    </CardTitle>
                    <CardDescription>
                      Legal, diplomatic, and organizational leadership
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Legal or diplomatic background</li>
                          <li>• International law knowledge</li>
                          <li>• Multi-language capabilities</li>
                          <li>• Crisis management experience</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Legal compliance and documentation</li>
                          <li>• Government and media relations</li>
                          <li>• International coordination</li>
                          <li>• Strategic planning and oversight</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      href="https://cryptpad.fr/form/#/2/form/view/7m7vHUcI3SSjvTUM5Jckhlgta5egIyZIGbYIZN1cbgo/"
                      target="_blank"
                    >
                      <Button className="mt-6 bg-black hover:bg-gray-800 text-white">
                        Apply as Official
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="citizens" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Heart className="mr-2 h-5 w-5" />
                      Citizens & Supporters
                    </CardTitle>
                    <CardDescription>
                      Ground support, advocacy, and community organizing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">How to Help:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Fundraising and donations</li>
                          <li>• Social media advocacy</li>
                          <li>• Local event organization</li>
                          <li>• Community outreach</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Impact Areas:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Public awareness campaigns</li>
                          <li>• Political pressure and lobbying</li>
                          <li>• Solidarity events and demonstrations</li>
                          <li>• Educational workshops</li>
                        </ul>
                      </div>
                    </div>
                    <Link href="https://t.me/+zSh_jAhFQZ1iNTNk" target="_blank">
                      <Button className="mt-6 bg-green-600 hover:bg-green-700">
                        Join as Supporter
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Common questions about the 1000 Madleens to Gaza campaign.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What is the 1000 Madleens to Gaza campaign?
                </AccordionTrigger>
                <AccordionContent>
                  The 1000 Madleens to Gaza is a global civil society campaign
                  aiming to organize a massive maritime flotilla of 1000 ships
                  from many nations worldwide. The campaign seeks to break the
                  blockade of Gaza through peaceful, coordinated international
                  action, inspired by the recent voyage of the vessel "Madleen."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How will the flotilla be organized?
                </AccordionTrigger>
                <AccordionContent>
                  Ships from participating nations will converge at a designated
                  meeting point near Palestine before jointly sailing toward
                  Gaza. The operation will be coordinated through international
                  civil society organizations, with careful attention to
                  maritime law, safety protocols, and peaceful resistance
                  principles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Is this a peaceful mission?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely. The 1000 Madleens to Gaza campaign is
                  committed to peaceful resistance and non-violent action. All
                  participants must agree to strict non-violence protocols, and
                  the mission operates within the framework of international law
                  and civil disobedience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How can I participate if I'm not a sailor?
                </AccordionTrigger>
                <AccordionContent>
                  There are many ways to support the campaign: financial
                  donations, organizing local support groups, advocacy with
                  elected representatives, social media campaigns, fundraising
                  events, and spreading awareness in your community. Every form
                  of support contributes to the mission's success.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What are the legal implications?
                </AccordionTrigger>
                <AccordionContent>
                  The campaign operates within international maritime law and
                  the principles of civil disobedience. Participants are
                  informed of potential legal risks, and the campaign works with
                  legal experts to ensure compliance with international law
                  while challenging what we consider to be an illegal blockade.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  When will the flotilla sail?
                </AccordionTrigger>
                <AccordionContent>
                  The timeline depends on successful coordination of ships,
                  crews, and international support. Updates on timing will be
                  provided through our official channels as planning progresses.
                  Safety and thorough preparation are prioritized over speed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <NewsCarousel />

      {/* Social Media Section - Moved to Bottom */}
      <section className="py-8 sm:py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
              Follow Our Journey
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-8">
              Stay updated with the latest news, ship registrations, and
              campaign progress across all our social platforms.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mb-3 sm:mb-4">
              <motion.a
                href="https://tiktok.com/@thousandmadleentogaza"
                target="_blank"
                className="flex flex-col items-center p-2 sm:p-4 lg:p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <RiTiktokLine className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-black-400 mb-1 sm:mb-2 lg:mb-3" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  TikTok
                </span>
                <span className="text-xs text-gray-400 hidden sm:block">
                  Short Videos
                </span>
              </motion.a>

              <motion.a
                href="https://x.com/1kMadleentoGaza"
                className="flex flex-col items-center p-2 sm:p-4 lg:p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                target="_blank"
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Twitter className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-blue-400 mb-1 sm:mb-2 lg:mb-3" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  Twitter
                </span>
                <span className="text-xs text-gray-400 hidden sm:block">
                  Live Updates
                </span>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/thousandmadleenstogaza/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                className="flex flex-col items-center p-2 sm:p-4 lg:p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Instagram className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-pink-400 mb-1 sm:mb-2 lg:mb-3" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  Instagram
                </span>
                <span className="text-xs text-gray-400 hidden sm:block">
                  Behind Scenes
                </span>
              </motion.a>

              <motion.a
                href="https://t.me/+zSh_jAhFQZ1iNTNk"
                target="_blank"
                className="flex flex-col items-center p-2 sm:p-4 lg:p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <RiTelegram2Line className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-blue-400 mb-1 sm:mb-2 lg:mb-3" />
                <span className="font-semibold text-xs sm:text-sm lg:text-base">
                  Telegram
                </span>
                <span className="text-xs text-gray-400 hidden sm:block">
                  Community
                </span>
              </motion.a>
            </div>

            <div className="bg-gray-800 p-3 sm:p-4 lg:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
                Share Our Mission
              </h3>
              <div className="bg-gray-700 p-2 sm:p-3 lg:p-4 mb-2 sm:mb-4">
                <p
                  className="text-xs sm:text-sm text-gray-300 italic"
                  id="campaign-message"
                >
                  "{campaignMessage}"
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm px-3 py-2"
                  onClick={async () => {
                    await navigator.clipboard.writeText(campaignMessage);
                    toast.success('Message copied to clipboard!');
                  }}
                >
                  <Clipboard className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Copy Message</span>
                  <span className="sm:hidden">Copy</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm px-3 py-2"
                  onClick={() => {
                    const subject = encodeURIComponent(
                      'Join the 1000 Madleens to Gaza Campaign'
                    );
                    const body = encodeURIComponent(
                      `${campaignMessage}\n\nLearn more and get involved: ${window.location.href}`
                    );
                    window.open(`mailto:?subject=${subject}&body=${body}`);
                    toast.info('Email client opened');
                  }}
                >
                  <Mail className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Share via Email</span>
                  <span className="sm:hidden">Email</span>
                </Button>
                <Link
                  href="https://drive.google.com/drive/folders/1PlywKwfu7Ad4JZKzGdLuvtF8Rk3M-riu"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent text-xs sm:text-sm px-3 py-2"
                  >
                    <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Download Graphics</span>
                    <span className="sm:hidden">Graphics</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Important Disclaimer
              </h2>
            </div>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  Legal and Safety Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <strong>Peaceful Mission:</strong> The 1000 Madleens to Gaza
                  campaign is committed to peaceful, non-violent resistance. All
                  participants must agree to strict non-violence protocols.
                </p>
                <p>
                  <strong>Legal Risks:</strong> Participants should be aware
                  that this mission may involve legal risks, including potential
                  detention or legal proceedings. We recommend consulting with
                  legal counsel before participating.
                </p>
                <p>
                  <strong>Safety First:</strong> Maritime operations carry
                  inherent risks. All vessels must meet safety standards, and
                  participants must have appropriate maritime experience or
                  training.
                </p>
                <p>
                  <strong>International Law:</strong> This campaign operates
                  within the framework of international maritime law and the
                  principles of civil disobedience in challenging what we
                  consider to be violations of international law.
                </p>
                <p>
                  <strong>Independent Participation:</strong> Participation in
                  this campaign is voluntary and at your own risk. The campaign
                  organizers cannot be held responsible for individual decisions
                  or consequences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="navbar_logo_no_bg.png"
                  alt="1000 Madleens to Gaza Logo"
                  className="h-24 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Breaking the blockade through peaceful solidarity and
                international cooperation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#mission"
                    className="hover:text-green-400 transition-colors"
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a
                    href="#goals"
                    className="hover:text-green-400 transition-colors"
                  >
                    Goals
                  </a>
                </li>
                <li>
                  <a
                    href="#get-involved"
                    className="hover:text-green-400 transition-colors"
                  >
                    Get Involved
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-green-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://chuffed.org/project/138012-a-thousand-madleens-to-gaza"
                    target="_blank"
                    className="hover:text-green-400 transition-colors"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/thousand.madleens"
                    target="_blank"
                    className="hover:text-green-400 transition-colors"
                  >
                    Join Movement
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/+zSh_jAhFQZ1iNTNk"
                    target="_blank"
                    className="hover:text-green-400 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1PlywKwfu7Ad4JZKzGdLuvtF8Rk3M-riu"
                    target="_blank"
                    className="hover:text-green-400 transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/thousandmadleenstogaza/?utm_source=ig_web_button_share_sheet"
                  target="_blank"
                  className="border border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent rounded px-2 py-2 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://x.com/1kMadleentoGaza"
                  target="_blank"
                  className="border border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent rounded px-2 py-2 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://tiktok.com/@thousandmadleentogaza"
                  target="_blank"
                  className="border border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent rounded px-2 py-2 transition-colors"
                >
                  <RiTiktokLine className="h-4 w-4" />
                </a>
                <a
                  href="https://t.me/+zSh_jAhFQZ1iNTNk"
                  target="_blank"
                  className="border border-gray-600 text-gray-400 hover:text-white hover:border-green-400 bg-transparent rounded px-2 py-2 transition-colors"
                >
                  <RiTelegram2Line className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} 1000 Madleens to Gaza Campaign. All
              rights reserved. |
              <a
                href="#"
                className="hover:text-green-400 transition-colors ml-1"
              >
                Privacy Policy
              </a>{' '}
              |
              <a
                href="#"
                className="hover:text-green-400 transition-colors ml-1"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
