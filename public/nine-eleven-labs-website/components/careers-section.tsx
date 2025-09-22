"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

const openings = [
  {
    title: "Senior Full Stack Engineer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    salary: "$150k - $200k",
    description:
      "Join our core engineering team to build scalable enterprise solutions using React, Node.js, and cloud technologies.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "New York, NY / Remote",
    type: "Full-time",
    salary: "$130k - $180k",
    description:
      "Help us scale our infrastructure and improve deployment processes using Kubernetes, AWS, and modern DevOps practices.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Design beautiful and intuitive user experiences for our enterprise software products.",
  },
]

export function CareersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about building the future of enterprise
            technology
          </p>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {openings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-black">{job.title}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-white px-2 py-1 rounded">
                      {job.department}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                <Button className="bg-black text-white hover:bg-gray-800 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-black mb-4">Don't see the right role?</h3>
          <p className="text-gray-600 mb-6">
            We're always interested in hearing from talented people. Send us your resume and tell us about yourself.
          </p>
          <Button variant="outline" className="group bg-transparent">
            Send Us Your Resume
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
