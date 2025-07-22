"use client";

import React from "react";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  MoreHorizontal, 
  Edit, 
  Copy, 
  Share, 
  Heart, 
  Trash2,
  Trophy,
  GraduationCap,
  Plus
} from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-6">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {DATA.name}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
              Results-driven Technical Marketer & Growth Leader with extensive B2B tech
              experience, specializing in Account-Based Marketing (ABM), demand
              generation, and intent marketing. Expert at driving growth through strategic
              planning, data-driven decisions, and close collaboration with partners, sales
              teams, and management to align marketing strategies with sales drives and
              enhance go-to-market effectiveness. Skilled in event marketing and leveraging
              digital channels to maximize impact.
            </p>
          </div>
          
          {/* Profile Card with Dropdown */}
          <div className="lg:ml-8 w-full lg:w-auto">
            <Card className="w-full lg:w-64 border border-gray-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm truncate">{DATA.name}</h3>
                    <p className="text-xs text-gray-500 truncate">teglgaard@asger.me</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 flex-shrink-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Heart className="mr-2 h-4 w-4" />
                        Add to favorites
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">EXPERIENCE</h2>
              </div>
              
              <div className="space-y-6">
                {DATA.work.map((job, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border">
                        <span className="text-sm font-semibold text-gray-600">
                          {job.company.charAt(0)}
                        </span>
                      </div>
                      {index < DATA.work.length - 1 && (
                        <div className="w-px h-20 bg-gray-200 mt-3"></div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {job.badges?.map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} variant="secondary" className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 border-0">
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="font-semibold text-gray-900 text-base">{job.company}</h3>
                      <p className="text-sm text-gray-600 mb-1 font-medium">{job.title}</p>
                      <p className="text-xs text-gray-500 mb-3">
                        {job.start} - {job.end} • {job.location}
                      </p>

                      {job.description && (
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {job.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">ACHIEVEMENTS</h2>
              </div>

              <div className="space-y-6">
                {DATA.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                      {achievement.category}:
                    </h3>
                    <ul className="space-y-2">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">EDUCATION</h2>
              </div>

              <div className="space-y-4">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 mt-1">{edu.start} - {edu.end}</p>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                    <p className="text-sm text-gray-500">{DATA.location}</p>
                  </div>
                ))}

                {DATA.certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{cert.year}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.location}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Plus className="w-4 h-4 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 tracking-wide">ADDITIONAL</h2>
              </div>

              <div className="grid gap-4">
                {DATA.additional.map((item, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      {item.category}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
