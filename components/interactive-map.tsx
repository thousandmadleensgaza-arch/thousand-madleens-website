'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation, Ship, Globe } from 'lucide-react';
import Link from 'next/link';
import content from '../content.json';

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const locations = content.map.locations;

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="text-center mb-4 sm:mb-8">
        <motion.div
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-green-100 px-4 py-2 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Globe className="h-5 w-5 text-green-600" />
          <span className="text-sm font-medium text-gray-700">
            Global Departure Points
          </span>
        </motion.div>
      </div>

      {/* Location Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mb-4 sm:mb-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className={`border-${
                location.color === 'black' ? 'gray' : location.color
              }-200 ${
                selectedLocation === location.id ? 'ring-2 ring-blue-500' : ''
              } cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              onClick={() =>
                setSelectedLocation(
                  selectedLocation === location.id ? null : location.id
                )
              }
            >
              <CardHeader className="pb-1 sm:pb-2 lg:pb-3 px-2 sm:px-4 lg:px-6 pt-2 sm:pt-4 lg:pt-6">
                <CardTitle
                  className={`flex items-center text-${
                    location.color === 'black' ? 'gray-800' : location.color
                  }-700 text-sm sm:text-base lg:text-lg`}
                >
                  <div
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-${
                      location.color === 'black' ? 'gray-800' : location.color
                    }-600 rounded-full mr-1.5 sm:mr-2 lg:mr-3`}
                  ></div>
                  <span className="truncate">{location.country}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 sm:px-4 lg:px-6 pb-2 sm:pb-4 lg:pb-6">
                <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-xs sm:text-sm">
                      Status:
                    </span>
                    <Badge
                      variant="secondary"
                      className={`${location.statusColor} text-xs px-1.5 py-0.5`}
                    >
                      {location.status}
                    </Badge>
                  </div>

                  {selectedLocation === location.id && (
                    <motion.div
                      className="mt-2 sm:mt-3 lg:mt-4 pt-2 sm:pt-3 border-t border-gray-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="space-y-0.5 sm:space-y-1 lg:space-y-2 text-xs text-gray-600">
                        <p>• Maritime authorities</p>
                        <p>• Safety & training</p>
                        <p>• Legal compliance</p>
                        <p>• Media support</p>
                      </div>
                      <Link href={location.joinLink} target="_blank">
                        <Button
                          size="sm"
                          className={`w-full mt-1.5 sm:mt-2 lg:mt-3 text-xs lg:text-sm bg-${
                            location.color === 'black'
                              ? 'gray-800'
                              : location.color
                          }-600 hover:bg-${
                            location.color === 'black'
                              ? 'gray-700'
                              : location.color
                          }-700 text-white py-1.5 sm:py-2`}
                        >
                          <Ship className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          Join Fleet
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Summary Statistics */}
      <div className="space-y-2 sm:space-y-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 h-full">
              <CardContent className="p-3 sm:p-4 lg:p-6 text-center flex flex-col justify-between h-full">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-700 mb-1 sm:mb-2">
                  {locations.reduce((sum, loc) => sum + loc.ships, 0)}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                  Ships Registered
                </div>
                <div className="text-xs text-gray-500">
                  Goal: 1000 ships (
                  {Math.round(
                    (locations.reduce((sum, loc) => sum + loc.ships, 0) /
                      1000) *
                      100
                  )}
                  % complete)
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 h-full">
              <CardContent className="p-3 sm:p-4 lg:p-6 text-center flex flex-col justify-between h-full">
                <div className="text-xl sm:text-2xl lg:text-4xl font-bold text-green-700 mb-1 sm:mb-2">
                  {locations.length}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mb-1">
                  Countries Participating
                </div>
                <div className="text-xs text-gray-500">Across 3 continents</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-3 sm:p-4 lg:p-6 text-center">
              <Link
                href="https://cryptpad.fr/form/#/2/form/view/7m7vHUcI3SSjvTUM5Jckhlgta5egIyZIGbYIZN1cbgo/"
                target="_blank"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm py-2 sm:py-3">
                  <Navigation className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  Register Your Ship
                </Button>
              </Link>
              <div className="text-xs text-gray-500 mt-2">
                Add your departure location
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
