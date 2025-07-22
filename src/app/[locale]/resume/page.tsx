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
    <div className="min-h-screen bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto p-6 sm:p-8 lg:p-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-900 mb-8 leading-tight">
              {DATA.name}
            </h1>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-sans-body">
                Results-driven Technical Marketer & Growth Leader with extensive B2B tech
                experience, specializing in Account-Based Marketing (ABM), demand
                generation, and intent marketing. Expert at driving growth through strategic
                planning, data-driven decisions, and close collaboration with partners, sales
                teams, and management to align marketing strategies with sales drives and
                enhance go-to-market effectiveness. Skilled in event marketing and leveraging
                digital channels to maximize impact.
              </p>
            </div>
          </div>
          
          {/* Profile Card with Dropdown */}
          <div className="lg:ml-8 w-full lg:w-auto">
            <Card className="w-full lg:w-80 border border-gray-300 shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
                    <AvatarFallback className="text-lg font-mono">{DATA.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-semibold text-base truncate">{DATA.name}</h3>
                    <p className="text-sm text-gray-600 truncate font-sans-body">teglgaard@asger.me</p>
                    <p className="text-xs text-gray-500 mt-1 font-sans-body">Based in Denmark</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left Column - Experience */}
          <div className="lg:col-span-2 space-y-12">
            {/* Relevant Section */}
            <section className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <h2 className="text-lg font-mono font-bold text-gray-900 tracking-wide uppercase">Relevant to B2B SaaS Growth</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-sm mb-3">Cross-Functional Collaboration</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
                    Extensive experience building B2B SaaS products from startups to enterprise, working closely with product, engineering, and sales teams to drive growth.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-sm mb-3">Strategic Marketing Execution</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
                    Expert in creating and executing unified marketing strategies that span multiple regions. Proficient in driving demand generation and revenue growth through innovative digital channels.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-sm mb-3">Startup Mindset in Enterprise Settings</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
                    Skilled at infusing large organizations with startup agility, innovation, and experimentation culture. Experienced in implementing lean methodologies within established teams.
                  </p>
                </div>
                <div>
                  <h3 className="font-mono font-bold text-gray-900 text-sm mb-3">Proven SaaS Growth Leadership</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
                    Demonstrated success in scaling B2B SaaS companies, with expertise in ABM strategies, boosting go-to-market effectiveness and driving significant revenue growth.
                  </p>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <h2 className="text-xl font-mono font-bold text-gray-900 tracking-wide uppercase">Experience</h2>
              </div>
              
              <div className="space-y-10">
                {DATA.work.map((job, index) => (
                  <div key={index} className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-14 h-14 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-base font-mono font-bold text-gray-700">
                            {job.company.charAt(0)}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.badges?.map((badge, badgeIndex) => (
                            <Badge key={badgeIndex} variant="secondary" className="text-xs px-3 py-1 bg-blue-100 text-blue-800 border-0 font-sans-body font-medium">
                              {badge}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="font-mono font-bold text-gray-900 text-xl mb-2">{job.company}</h3>
                        <p className="text-base text-gray-700 mb-3 font-sans-body font-semibold">{job.title}</p>
                        <p className="text-sm text-gray-500 mb-4 font-sans-body">
                          {job.start} - {job.end} • {job.location}
                        </p>

                        {job.description && (
                          <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
                            {job.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Achievements Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h2 className="text-xl font-mono font-bold text-gray-900 tracking-wide uppercase">Achievements</h2>
              </div>

              <div className="space-y-6">
                {DATA.achievements.map((achievement, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-mono font-bold text-gray-900 mb-4 text-sm">
                      {achievement.category}:
                    </h3>
                    <ul className="space-y-3">
                      {achievement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700 leading-relaxed font-sans-body">
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
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <h2 className="text-xl font-mono font-bold text-gray-900 tracking-wide uppercase">Education</h2>
              </div>

              <div className="space-y-6">
                {DATA.education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-mono font-bold text-gray-900 text-base mb-2">{edu.degree}</h3>
                    <p className="text-sm text-gray-600 font-sans-body mb-1">{edu.start} - {edu.end}</p>
                    <p className="text-sm text-gray-700 font-sans-body">{edu.school}</p>
                    <p className="text-sm text-gray-500 font-sans-body">{DATA.location}</p>
                  </div>
                ))}

                {DATA.certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-mono font-bold text-gray-900 text-base mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600 font-sans-body mb-1">{cert.year}</p>
                    <p className="text-sm text-gray-700 font-sans-body">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 font-sans-body">{cert.location}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Additional Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <h2 className="text-xl font-mono font-bold text-gray-900 tracking-wide uppercase">Additional</h2>
              </div>

              <div className="grid gap-6">
                {DATA.additional.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="font-mono font-bold text-gray-900 mb-3 text-sm flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      {item.category}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed font-sans-body">
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
