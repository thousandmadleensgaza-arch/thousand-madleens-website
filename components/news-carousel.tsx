"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Globe,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    id: 1,
    title: "THE 1000 FLOTILLA INITIATIVE TO BREAK THE SIEGE",
    image:
      "https://mapim.org.my/wp-content/uploads/2025/06/THE-1000-FLOTILLA-INITIATIVE-TO-BREAK-THE-SIEGE-1200x480.png",
    description:
      "A comprehensive look at the ambitious campaign to organize 1000 ships from around the world in solidarity with Gaza, breaking the blockade through peaceful maritime resistance.",
    source: "MAPIM",
    sourceIcon: MapPin,
    badge: "Breaking News",
    badgeColor: "bg-green-600",
    borderColor: "border-green-200",
    buttonColor: "border-green-600 text-green-600 hover:bg-green-50",
    link: "https://mapim.org.my/2025/06/13/the-1000-flotilla-initiative-to-break-the-siege/",
  },
  {
    id: 2,
    title:
      "A Thousand Madleens: New Civilian Fleet Readies to Defy Israeli Blockade",
    image:
      "https://qudsnen.co/wp-content/uploads/2025/06/IMG_5537-780x432.jpeg",
    description:
      "International civil society prepares an unprecedented maritime flotilla as civilians worldwide unite to challenge the blockade of Gaza through coordinated peaceful action.",
    source: "Quds News",
    sourceIcon: Globe,
    badge: "Featured",
    badgeColor: "bg-green-600",
    borderColor: "border-green-200",
    buttonColor: "border-green-600 text-green-600 hover:bg-green-50",
    link: "https://qudsnen.co/a-thousand-madleens-new-civilian-fleet-readies-to-defy-israeli-blockade/",
  },
  {
    id: 3,
    title: "Swindon Fete to Fund Aid Volunteer's Gaza Flotilla Journey",
    image:
      "https://unsplash.com/photos/D9lCSvUcErk/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzU1MzUxMDk5fA&force=true&w=640",
    description:
      "A summer fete by Swindon Palestine Solidarity aims to raise funds for volunteer Liaquth Ali's participation in the 'A Thousand Madleens to Gaza' flotilla, featuring family-friendly activities and cultural events.",
    source: "Local Community",
    sourceIcon: Users,
    badge: "Community",
    badgeColor: "bg-blue-600",
    borderColor: "border-blue-200",
    buttonColor: "border-blue-600 text-blue-600 hover:bg-blue-50",
    link: "#",
  },
  {
    id: 4,
    title: "Flotilla for Palestine: Support Center for Gaza Opens in Nice",
    image:
      "https://www.nice-premium.com/wp-content/uploads/2025/08/image-57-1068x601.jpg",
    description:
      "Thousand Madleens Nice opens its doors as a support center following the return of the Madleen crew and Soumoud caravan, establishing a base for raising awareness about the Gaza flotilla movement.",
    source: "Nice Premium",
    sourceIcon: MapPin,
    badge: "Local News",
    badgeColor: "bg-purple-600",
    borderColor: "border-purple-200",
    buttonColor: "border-purple-600 text-purple-600 hover:bg-purple-50",
    link: "#",
  },
  {
    id: 5,
    title:
      "'Thousand Ship Flotilla' Announced to Challenge Israel's Gaza Blockade",
    image:
      "https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2025/06/GettyImages-2218796600.jpg?fit=920%2C613&ssl=1",
    description:
      "Malaysian civil society coalition led by MAPIM announces the largest maritime mobilization of its kind, aiming to send vessels from across the globe carrying humanitarian aid to Gaza in defiance of Israel's naval embargo.",
    source: "Middle East Monitor",
    sourceIcon: Globe,
    badge: "Major Announcement",
    badgeColor: "bg-red-600",
    borderColor: "border-red-200",
    buttonColor: "border-red-600 text-red-600 hover:bg-red-50",
    link: "#",
  },
];

export default function NewsCarousel() {
  const [currentSet, setCurrentSet] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Split articles into sets of 2 (2 rows, 1 column)
  const articlesPerSet = 2;
  const totalSets = Math.ceil(newsArticles.length / articlesPerSet);

  const getCurrentArticles = () => {
    const start = currentSet * articlesPerSet;
    return newsArticles.slice(start, start + articlesPerSet);
  };

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
    setProgress(0);
  };

  const previousSet = () => {
    setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
    setProgress(0);
  };

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSet();
          return 0;
        }
        return prev + 100 / (20 * 10); // 20 seconds, update every 100ms
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentSet, isPaused, totalSets]);

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Latest News
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Stay updated with the latest developments in our mission to Gaza
            </p>

            {/* Controls and Timer */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-3 order-2 sm:order-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={previousSet}
                  disabled={totalSets <= 1}
                  className="border-green-600 text-green-600 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed px-2 sm:px-3"
                >
                  <ChevronLeft className="h-4 w-4 sm:mr-1" />
                  <span className="hidden sm:inline">Previous</span>
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSet}
                  disabled={totalSets <= 1}
                  className="border-green-600 text-green-600 hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed px-2 sm:px-3"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-4 w-4 sm:ml-1" />
                </Button>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 order-1 sm:order-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <div className="w-24 sm:w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-600 rounded-full"
                    style={{ width: `${progress}%` }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-500 min-w-[60px] sm:min-w-[80px]">
                  {currentSet + 1} of {totalSets}
                </span>
              </div>
            </div>

            {/* Pause/Resume Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPaused(!isPaused)}
              className="text-gray-600 hover:text-green-600 hover:bg-green-50"
            >
              {isPaused ? "Resume Auto-Switch" : "Pause Auto-Switch"}
            </Button>
          </div>

          {/* News Grid */}
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSet}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 gap-4 md:gap-6 max-w-4xl mx-auto"
              >
                {getCurrentArticles().map((article, index) => {
                  const SourceIcon = article.sourceIcon;
                  const isExternal = article.link.startsWith("http");

                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Card
                        className={`overflow-hidden h-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] ${article.borderColor}`}
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-48 sm:h-40 sm:w-64 lg:w-80 overflow-hidden flex-shrink-0">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge
                                className={`${article.badgeColor} text-white text-xs`}
                              >
                                {article.badge}
                              </Badge>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>

                          <CardContent className="p-4 sm:p-6 flex-1">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                              {article.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                              {article.description}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <SourceIcon className="h-4 w-4" />
                                <span>{article.source}</span>
                              </div>

                              {isExternal ? (
                                <Link href={article.link} target="_blank">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className={`${article.buttonColor} bg-transparent transition-all duration-300 hover:shadow-md`}
                                  >
                                    Read More
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              ) : (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className={`${article.buttonColor} bg-transparent transition-all duration-300 hover:shadow-md`}
                                >
                                  Read More
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-green-100 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-green-200 rounded-full opacity-30 animate-pulse delay-1000" />
          </div>

          {/* Bottom indicator dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSet(index);
                  setProgress(0);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? "bg-green-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
