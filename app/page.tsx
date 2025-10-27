"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
  Calendar,
  Building,
  Award,
  Users,
  Coffee,
  Zap,
  Heart,
  Rocket,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Briefcase,
  MessageCircle,
  Send,
  Loader2,
  Menu,
  X,
  MessageCircleHeart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast, Toaster } from "sonner"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Next.js", level: 85, color: "from-purple-700 to-blue-300" },
    { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
    { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
    { name: "Firebase", level: 85, color: "from-yellow-400 to-yellow-600" },
    { name: "AWS", level: 85, color: "from-orange-400 to-orange-600" },
  ]

  const projects = [
    {
      title: "Billiards Pro Shop",
      description: "Nền tảng bán dụng cụ billiards với quản trị real-time, thanh toán VietQR, upload ảnh Cloudinary và đồng bộ dữ liệu Firestore.",
      image: "/images/billiards.jpg",
      tech: ["Next.js", "TypeScript", "Firebase", "Tailwind", "Cloudinary", "Vercel"],
      stats: { products: "20+", orders: "10+/tháng", rating: 4.8 },
      demoUrl: "https://sonit-custom-billiards.vercel.app/",
    },
    {
      title: "Apple Store",
      description: "Full-stack e-commerce cho hệ sinh thái Apple: admin dashboard realtime, CRUD sản phẩm, bảo mật JWT, UI hiện đại với Radix UI.",
      image: "/images/apple.png",
      tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind", "Radix UI", "JWT"],
      stats: { SKUs: "80+", orders: "20+/tháng", rating: 4.9 },
      demoUrl: "https://hip-apple-store.vercel.app/",
    },
    {
      title: "HipWork",
      description: "Quản lý công việc đa nền tảng với Firebase Cloud Sync, làm việc offline và đồng bộ real-time. Kanban, Calendar, Analytics, ảnh xác minh hoàn thành.",
      image: "/images/hipwork.png",
      tech: ["Next.js", "TypeScript", "Firebase", "Tailwind", "shadcn/ui", "PWA"],
      stats: { tasks: "20+", uptime: "99.9%", rating: 4.8 },
      demoUrl: "https://hipwork.vercel.app/",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <Toaster position="top-right" richColors />
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Mouse Follower - Hidden on mobile */}
      <div
        className="hidden md:block fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`,
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Hip Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden font-semibold md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-20">
        <div className="container mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative mb-6 md:mb-8 group">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                <div className="absolute inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-2 rounded-full overflow-hidden group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-purple-500/50">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent px-4">
              <span className="block sm:inline">Xin chào! Tôi là </span><span className="text-slate-200 font-bold animate-pulse">Phạm Quang Dương</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse mt-1 md:mt-2">
                Fresher Developer
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-slate-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Full-stack Developer với <span className="text-slate-200 font-semibold">3 năm kinh nghiệm </span>
              tạo ra những sản phẩm công nghệ đột phá và trải nghiệm người dùng tuyệt vời
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
              {[
                { icon: Code, label: "Projects", value: "10+" },
                { icon: Users, label: "Clients", value: "10+" },
                { icon: Award, label: "Awards", value: "5+" },
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-1 md:mb-2 text-purple-400 group-hover:text-pink-400 transition-colors" />
                  <div className="text-lg md:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-8 md:mb-12 px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Tải CV
              </Button>
              <Link href="https://zalo.me/0346938659" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-400/70 to-pink-400/70 hover:from-purple-500/80 hover:to-pink-500/80 text-white border-0 shadow-xl hover:shadow-purple-400/20 hover:scale-105 transition-all duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Liên hệ ngay
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, color: "hover:text-gray-400", href: "https://github.com/duonghip16" },
                { icon: Linkedin, color: "hover:text-blue-400", href: "https://www.linkedin.com/in/duonghip16/" },
                { icon: MessageCircleHeart, color: "hover:text-green-400", href: "https://zalo.me/0346938659" },
                { icon: Mail, color: "hover:text-red-400", href: "mailto:duonghip1609@gmail.com" },
              ].map((social, index) => (
                <Link key={index} href={social.href} target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-white/60 ${social.color} hover:scale-125 transition-all duration-300 hover:bg-white/10`}
                  >
                    <social.icon className="w-6 h-6" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center items-center">
            <div className="w-1 h-3 bg-slate-300/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Về tôi
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-700 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Rocket className="w-6 h-6 mr-3 text-purple-400" />
                  Đam mê công nghệ
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Với hơn 3 năm kinh nghiệm trong ngành phát triển phần mềm, tôi đã tham gia xây dựng hàng chục ứng dụng
                  web và mobile phục vụ hàng trăm người dùng.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-blue-700 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-pink-400" />
                  Chuyên môn sâu
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Chuyên sâu về React, Next.js, Node.js và các công nghệ cloud hiện đại. Có kinh nghiệm dẫn dắt team và
                  mentoring cho các developer.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["React Expert", "Next.js Pro", "TypeScript", "Node.js", "AWS Certified", "Team Lead"].map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-purple-400/30 hover:scale-110 transition-transform duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-blue-700 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-white font-semibold">Địa điểm</div>
                      <Link href="https://maps.app.goo.gl/Y5di1psgAAKxS3Qz5" target="_blank" className="text-white/70 hover:text-purple-400 transition-colors cursor-pointer">
                        Quận 12, Hồ Chí Minh
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <Link href="mailto:duonghip1609@gmail.com" className="text-white/70 hover:text-pink-400 transition-colors cursor-pointer">
                        duonghip1609@gmail.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-white font-semibold">Điện thoại</div>
                      <Link href="tel:+84346938659" className="text-white/70 hover:text-yellow-400 transition-colors cursor-pointer">
                        +84 346 938 659
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircleHeart className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">Zalo</div>
                      <Link href="https://zalo.me/0346938659" target="_blank" className="text-white/70 hover:text-green-400 transition-colors cursor-pointer">
                        0346938659
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Briefcase className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">Trạng thái</div>
                      <div className="text-green-400 font-semibold">Sẵn sàng nhận dự án mới</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center border border-purple-400/30 hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl p-6 text-center border border-pink-400/30 hover:scale-105 transition-transform duration-300">
                  <Zap className="w-8 h-8 mx-auto mb-2 text-pink-400" />
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Kỹ năng chuyên môn
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-purple-400" />
                Technical Skills
              </h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: "Frontend",
                  skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
                  color: "from-blue-500 to-purple-500",
                },
                {
                  icon: Database,
                  title: "Backend",
                  skills: ["Node.js", "Express.js", "Firebase", "MongoDB"],
                  color: "from-green-500 to-teal-500",
                },
                {
                  icon: Globe,
                  title: "Cloud & DevOps",
                  skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: Palette,
                  title: "Design & Tools",
                  skills: ["Figma", "Trello", "Git", "Notion"],
                  color: "from-pink-500 to-purple-500",
                },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border-blue-700 hover:bg-white/15 transition-all duration-500 hover:scale-105 group"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:animate-pulse`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="w-full justify-center text-white/80 border-white/30 hover:bg-white/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Dự án nổi bật
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Những sản phẩm công nghệ tôi đã xây dựng và đóng góp, phục vụ hàng ngàn người dùng
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-md border-blue-700 overflow-hidden group hover:bg-white/15 transition-all duration-500 hover:scale-105"
              >
                <div className="h-48 relative overflow-hidden">
                  {project.image.startsWith('/') ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${project.image}`}></div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border-purple-400/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-lg p-2">
                        <div className="text-white font-bold text-sm">{value}</div>
                        <div className="text-white/60 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-blue/30 text-gray hover:bg-white/10 group"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Code
                    </Button>
                    {project.demoUrl ? (
                      <Link href={project.demoUrl} target="_blank" className="flex-1">
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 group"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                          Demo
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 group"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300 group">
              Xem thêm dự án
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Kinh nghiệm làm việc
            </h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - Hidden on mobile */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

              <div className="space-y-8 md:space-y-12">
                {[
                  {
                    title: "Full-stack Developer (Fresher / Personal Projects)",
                    company: "Freelance & Self-learning",
                    period: "2024 - Hiện tại",
                    icon: Rocket,
                    color: "from-purple-500 to-pink-500",
                    achievements: [
                      "Phát triển ứng dụng web hiện đại bằng Next.js, TypeScript, Firebase và Tailwind CSS",
                      "Thiết kế UI/UX trực quan, tối ưu responsive và hiệu năng hiển thị",
                      "Tích hợp Cloudinary, VietQR Payment, và Firestore Realtime Sync",
                      "Quản lý và deploy dự án lên Vercel, Firebase Hosting",
                      "Xây dựng, bảo trì và tối ưu mã nguồn theo mô hình component-based architecture",
                    ],
                  },
                  {
                    title: "Frontend Developer (Student Projects)",
                    company: "Trường Đại học – Dự án học tập",
                    period: "2022 - 2023",
                    icon: Code,
                    color: "from-blue-500 to-purple-500",
                    achievements: [
                      "Xây dựng website responsive bằng React, Next.js, TailwindCSS",
                      "Áp dụng Git workflow trong teamwork, phối hợp review code và version control",
                      "Thiết kế giao diện bằng Figma, tối ưu trải nghiệm người dùng (UX)",
                      "Thực hiện các bài tập lớn, mini project và mô phỏng quy trình phát triển phần mềm thực tế",
                    ],
                  },
                  {
                    title: "Sinh viên ngành Công nghệ thông tin – Công nghệ phần mềm",
                    company: "Trường Đại học Văn Lang",
                    period: "2021 - 2025",
                    icon: Building,
                    color: "from-green-500 to-blue-500",
                    achievements: [
                      "Nắm vững kiến thức nền tảng: OOP, Cấu trúc dữ liệu & Giải thuật, CSDL, Web Development",
                      "Làm quen với Node.js, Firebase, RESTful APIs, DevOps cơ bản",
                      "Tham gia nhiều đồ án nhóm, hướng tới xây dựng sản phẩm thực tế",
                      "Tích cực tự học và phát triển kỹ năng Full-stack qua các dự án cá nhân",
                    ],
                  },
                ].map((job, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div
                      className={`hidden md:block absolute left-6 w-4 h-4 bg-gradient-to-r ${job.color} rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform duration-300`}
                    ></div>

                    <Card className="md:ml-16 bg-white/10 backdrop-blur-md border-blue-700 hover:bg-white/15 transition-all duration-500 hover:scale-105 w-full">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 md:gap-4">
                            <div
                              className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${job.color} rounded-lg flex items-center justify-center group-hover:animate-pulse flex-shrink-0`}
                            >
                              <job.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <CardTitle className="text-white group-hover:text-purple-300 transition-colors text-base md:text-lg leading-tight">
                                {job.title}
                              </CardTitle>
                              <CardDescription className="text-white/70 font-semibold text-xs md:text-sm mt-1">
                                {job.company} • {job.period}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-white/80 text-sm md:text-base">
                              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="flex-1">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
              Liên hệ với tôi
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Sẵn sàng thảo luận về dự án mới hoặc cơ hội hợp tác. Hãy liên hệ với tôi!
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-700 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6 flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3 text-purple-400" />
                  Thông tin liên hệ
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: "Email", value: "duonghip1609@gmail.com", color: "text-red-400", href: "mailto:duonghip1609@gmail.com" },
                    { icon: Phone, label: "Điện thoại", value: "+84 346 938 659", color: "text-green-400", href: "tel:+84346938659" },
                    { icon: MessageCircleHeart, label: "Zalo", value: "0346938659", color: "text-blue-500", href: "https://zalo.me/0346938659" },
                    { icon: MapPin, label: "Địa điểm", value: "Quận 12, Hồ Chí Minh", color: "text-blue-400", href: "https://maps.app.goo.gl/hzoKMuhKKiadMQdi9" },
                    { icon: Calendar, label: "Thời gian", value: "24/7 Support", color: "text-yellow-400", href: "#" },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors`}
                      >
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/60 text-sm">{contact.label}</div>
                        {contact.href !== "#" ? (
                          <Link href={contact.href} target="_blank" className={`text-white font-semibold hover:${contact.color.replace('text-', 'text-')} transition-colors cursor-pointer break-words`}>
                            {contact.value}
                          </Link>
                        ) : (
                          <div className="text-white font-semibold break-words">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-blue-700">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-3 text-pink-400" />
                  Kết nối với tôi
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Github, color: "hover:bg-gray-600", label: "GitHub", href: "https://github.com/duonghip16" },
                    { icon: Linkedin, color: "hover:bg-blue-600", label: "LinkedIn", href: "https://www.linkedin.com/in/duonghip16/" },
                    { icon: MessageCircleHeart, color: "hover:bg-green-600", label: "Zalo", href: "https://zalo.me/0346938659" },
                    { icon: Mail, color: "hover:bg-red-600", label: "Email", href: "mailto:duonghip1609@gmail.com" },
                  ].map((social, index) => (
                    <Link key={index} href={social.href} target="_blank">
                      <Button
                        className={`w-full bg-white/10 hover:scale-105 transition-all duration-300 ${social.color} text-white border-0 text-sm`}
                      >
                        <social.icon className="w-4 h-4 mr-1.5" />
                        {social.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-blue-700 hover:bg-white/15 transition-all duration-500 order-1 lg:order-2">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-purple-400" />
                  Gửi tin nhắn
                </CardTitle>
                <CardDescription className="text-white/70">
                  Điền form bên dưới và tôi sẽ phản hồi trong vòng 24h
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form ref={formRef} onSubmit={async (e) => {
                  e.preventDefault()
                  setIsSubmitting(true)
                  
                  try {
                    await emailjs.sendForm(
                      'service_k6b7lbr',
                      'template_uk6usvm',
                      formRef.current!,
                      'tWBfVvZc0igJD9Tqh'
                    )
                    toast.success('✅ Tin nhắn của bạn đã được gửi thành công!')
                    formRef.current?.reset()
                  } catch (error) {
                    console.error('EmailJS Error:', error)
                    toast.error('⚠️ Có lỗi xảy ra. Vui lòng thử lại!')
                  } finally {
                    setIsSubmitting(false)
                  }
                }}>
                  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Tên *</label>
                      <Input
                        name="user_name"
                        required
                        placeholder="Nhập tên của bạn"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        name="user_email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Chủ đề *</label>
                    <Input
                      name="subject"
                      required
                      placeholder="Chủ đề tin nhắn"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Tin nhắn *</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                      rows={5}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-purple-400 transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                        Gửi tin nhắn
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-700 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div className="text-center md:text-left">
                <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  Hip Portfolio
                </div>
                <p className="text-white/60 text-sm">
                  Full-stack Developer
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                <div className="flex flex-col space-y-2">
                  {["About", "Skills", "Projects", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h4 className="text-white font-semibold mb-3">Contact</h4>
                <div className="space-y-2 text-sm">
                  <Link href="mailto:duonghip1609@gmail.com" className="block text-white/60 hover:text-white transition-colors">
                    duonghip1609@gmail.com
                  </Link>
                  <Link href="tel:+84346938659" className="block text-white/60 hover:text-white transition-colors">
                    +84 346 938 659
                  </Link>
                  <p className="text-white/60">Quận 12, Hồ Chí Minh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-6">
              {[
                { icon: Github, href: "https://github.com/duonghip16", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/duonghip16/", label: "LinkedIn" },
                { icon: MessageCircleHeart, href: "https://zalo.me/0346938659", label: "Zalo" },
                { icon: Mail, href: "mailto:duonghip1609@gmail.com", label: "Email" },
              ].map((social, index) => (
                <Link key={index} href={social.href} target="_blank" aria-label={social.label}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center pt-6 border-t border-white/10">
              <p className="text-white/40 text-sm">
                © 2025 Phạm Quang Dương. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
