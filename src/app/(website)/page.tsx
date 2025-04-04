"use client"; 
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Description } from '@radix-ui/react-dialog'
import { 
  CheckCircle, 
  MenuIcon, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Mail, 
  Github, 
  Twitter, 
  Instagram, 
  ChevronDown, 
  Lightbulb, 
  Settings, 
  Shield,
  Clock,
  HeartHandshake,
  BarChart 
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner';


export default function Home() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  
  const plans = [
    {
      name: 'Free Plan',
      description: 'Perfect for getting started',
      price: '$0',
      features: [
        'Boost engagement with target responses',
        'Automate comment replies to enhance audience interaction',
        'Turn followers into customers with targeted messaging'
      ],
      cta: 'Get started'
    },
    {
      name: 'Smart AI Plan',
      description: 'Advanced features for power users',
      price: '$35',
      features: [
        'All features from Free Plan',
        'AI-powered response generation',
        'Advance analytics and insights',
        'Priority customer Support',
        'Customer Branding offers'
      ],
      cta: 'Upgrade Now'
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
      title: "Smart Response Automation",
      description: "Let AI handle your Instagram comments and DMs with personalized, contextual responses that sound like you wrote them yourself."
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      title: "Audience Engagement",
      description: "Automatically engage with followers based on their behavior and interests, creating meaningful connections that drive loyalty."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Growth Analytics",
      description: "Track your Instagram growth with comprehensive analytics that show how automation is improving your engagement and conversion rates."
    }
  ];

  const testimonials = [
    {
      name: "Aastha shah",
      position: "Fashion Influencer",
      image: "/aashtha.jpg",
      text: "Murph AI has completely transformed how I manage my Instagram. I've seen a 40% increase in engagement and save hours every day. The personalized responses make my followers feel truly connected."
    },
    {
      name: "Varun",
      position: "E-commerce Business Owner",
      image: "/varun.jpg",
      text: "As a small business owner, I couldn't keep up with all the Instagram comments and DMs. Murph AI handles it all perfectly, and our conversion rate from Instagram has doubled in just two months!"
    },
    {
      name: "Kiran Sharma",
      position: "Fitness Coach",
      image: "/masoom.jpg",
      text: "The automation is so natural that my community can't tell when it's me or Murph AI responding. I've been able to focus on creating better content while growing my audience faster than ever."
    }
  ];

  const faqs = [
    {
      question: "How does Murph AI work with my Instagram account?",
      answer: "Murph AI connects securely to your Instagram account through our authorized integration. Once connected, it learns your communication style and begins responding to comments and DMs based on your preferences and the AI training you provide."
    },
    {
      question: "Will responses sound like they're coming from me?",
      answer: "Absolutely! Murph AI analyzes your previous responses and communication style to create replies that match your tone and personality. You can also train the AI with specific examples of how you'd like it to respond in different situations."
    },
    {
      question: "Is there a limit to how many messages Murph AI can handle?",
      answer: "Our free plan includes up to 100 automated responses per month. The Smart AI Plan provides unlimited responses, perfect for growing accounts with high engagement rates."
    },
    {
      question: "Is my Instagram account data secure with Murph AI?",
      answer: "Yes, we take security extremely seriously. We use industry-standard encryption and never store your Instagram password. Our system accesses only the data needed to provide the service and complies with all Instagram platform policies."
    },
    {
      question: "Can I customize when and how Murph AI responds?",
      answer: "Definitely! You can set specific hours of operation, create custom response templates for different types of messages, and even set priority messages that should be forwarded to you directly instead of receiving an automated response."
    }
  ];

  const differentiators = [
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-500" />,
      title: "Human-Like Intelligence",
      description: "Our advanced AI doesn't just use templates—it understands context, sentiment, and even humor to create responses that feel genuinely personal."
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: "Highly Customizable",
      description: "Fine-tune exactly how and when the AI responds with easy-to-use controls that let you be as hands-on or hands-off as you want."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-500" />,
      title: "Instagram-Compliant",
      description: "Built from the ground up to work within Instagram's terms of service, so you never have to worry about account restrictions or bans."
    }
  ];

  const guideSteps = [
    {
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      title: "Connect Your Account",
      description: "Link your Instagram account securely with just a few clicks. No password sharing required."
    },
    {
      icon: <Settings className="h-10 w-10 text-blue-500" />,
      title: "Train Your AI",
      description: "Provide examples of your typical responses or use our templates to quickly set up your AI's communication style."
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-blue-500" />,
      title: "Engage Automatically",
      description: "Let Murph AI handle comments and DMs while you focus on creating content and growing your brand."
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-500" />,
      title: "Track & Optimize",
      description: "Monitor performance with detailed analytics and refine your automation strategy for even better results."
    }
  ];

  return (
    <main>
      <section className='relative bg-gradient-to-b from-slate-900 via-blue-900 to-bg'>
        {/* All your existing section content */}

        <div className="
        absolute 
        inset-0 
        bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] 
        bg-[size:4rem_4rem] 
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70% transparent_110%)]" />

        <div className='relative'>
          {/* All your existing content */}

          <div className='container px-4 py-8'>
            {/* InfoBar */}
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <div className="flex items-center gap-[2px] sm:gap-1">
                <img
                  src="/MURPH.AI.png"
                  alt="Logo"
                  className="w-12 sm:w-14 md:w-16 lg:w-20 h-auto"
                />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                  URPH
                </span>
              </div>

              {/* Navigation */}
              <nav className='hidden space-x-6 text-sm text-blue-200 md:block'>
                <Link href="#features">Features</Link>
                <Link href="#how-it-works">How It Works</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#testimonials">Testimonials</Link>
                <Link href="#about">About</Link>
                <Link href="#faq">FAQ</Link>
              </nav>

              {/* Login button */}
              <Button className='bg-white text-primary text-blue-800' >
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            {/* Hero content */}
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className='text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                Murph AI – Automate, Engage, Grow
              </h1>

              <p className='text-blue-200 mt-6 text-lg'>
                Revolutionize the way you connect with your audience on Instagram. Murph AI automates responses, boosts engagement, and turns interactions into valuable business opportunities. Say goodbye to missed messages and hello to seamless automation that saves time and drives growth.
              </p>

              {/* CTA buttons */}
              <div className='mt-8 flex justify-center gap-4'>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Get Started
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-400 hover:bg-blue-900/50"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative h-40 md:h-80 w-full mt-10">
              <Image
                src="/ig-creators.png"
                alt="Community member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Makes Us Different
            </h2>
            <p className="max-w-[800px] text-slate-600 mb-8">
              Unlike other automation tools, Murph AI creates a genuinely personal experience that builds real connections with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {differentiators.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <img 
              src="/api/placeholder/800/400" 
              alt="Murph AI interface demonstration" 
              className="rounded-xl shadow-lg w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Powerful Features for Instagram Growth
            </h2>
            <p className="max-w-[800px] text-slate-600">
              Our AI-powered tools help you save time, engage effectively, and grow your Instagram presence without constant monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center text-center">
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Explore All Features
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Guide Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-r ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              How It Works: Easy Guide
            </h2>
            <p className="max-w-[800px] text-slate-600 mb-8">
              Getting started with Murph AI is simple. Follow these steps to automate your Instagram engagement and save hours every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {guideSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center p-6">
                {/* Step number bubble */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="mt-4 text-center gap-4 flex flex-col items-center">
                  {step.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                
                {/* Connector line (except for last item) */}
                {index < guideSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-4xl w-full">
              <img 
                src="/api/placeholder/1200/600" 
                alt="Murph AI dashboard demonstration" 
                className="w-full h-auto"
              />
            </div>
            <Button size="lg" className="mt-8 bg-blue-600 text-white hover:bg-blue-700">
              Start Automating Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-16 md:py-24  text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              What Our Users Say
            </h2>
            <p className="max-w-[800px] text-slate-300">
              Businesses and creators are saving time and growing faster with Murph AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              className="border-blue-400 text-white hover:bg-blue-800"
            >
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* card section */}
      <section id="pricing" className='container w-full py-12 md:py-24 lg:py-32 bg-background'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm-text-5xl'>
              Choose your Plan
            </h2>
            <p className='max-w-[900x] text-muted-foreground'>
              Select the perfect plan to boost your Instagram engagement.
            </p>
          </div>

          <div className='grid gird-cols-1 gap-6 mt-8 md:grid-cols-2 md-gap-8'>
            {plans.map((plan, index) => (
              <Card key={index} className='flex flex-col justify-between hover:shadow-lg transition-shadow duration-300'>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>

                  <div className='text-4xl font-bold'>
                    {plan.price}
                    <span className='text-lg font-normal text-muted-foreground'>
                      /month
                    </span>
                  </div>

                  <ul className='space-y-3'>
                    {plan.features.map((feature, i) => (
                      <li key={i} className='flex items-center'>
                        <CheckCircle className='mr-2 h-4 w-4 text-primary' />
                        <span className='text-sm text-muted-foreground'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                </CardContent>

                <CardFooter>
                  <Button className='w-full'>{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter  sm:text-4xl md:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[800px] ">
              Got questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex w-full justify-between items-center text-left"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-blue-500 transition-transform duration-200 ${
                      activeQuestion === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                <div 
                  className={`mt-2 text-slate-600 overflow-hidden transition-all duration-300 ${
                    activeQuestion === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="pb-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              About Murph AI
            </h2>
            <p className="max-w-[800px] text-slate-600 mb-8">
              We're building the future of Instagram engagement with innovative AI technology.
            </p>
          </div>

          <div className=" rounded-xl p-5 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img 
                src="/shivam-profile.png" 
                alt="Shivam" 
                className=" mt-12 w-48 h-48 rounded-full object-cover"
              />
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Developer's Note</h3>
                <p className=" mb-4">
                  Hi, I'm Shivam, a 3rd year BTech student and the developer behind Murph AI. I created this tool because I saw how challenging it was for creators and businesses to maintain meaningful engagement on Instagram while focusing on creating great content.
                </p>
                <p className="">
                  My goal with Murph AI is to help you build genuine connections with your audience through the power of AI, giving you back the time to focus on what you do best. I'm constantly improving the platform based on user feedback, so please share your thoughts and suggestions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-1 mb-4">
                <img
                  src="/MURPH.AI.png"
                  alt="Logo"
                  className="w-12 h-auto"
                />
                <span className="text-2xl font-semibold text-white">URPH</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Revolutionize your Instagram engagement with AI-powered automation that feels personal and drives growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-slate-300 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-slate-300 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/licensing" className="text-slate-300 hover:text-white transition-colors">Licensing</Link></li>
                <li><Link href="/cookies" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-3">
                <p className="text-slate-300 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@murph.ai
                </p>
                <Button variant="outline" className="border-blue-400 hover:bg-blue-900/50">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Murph AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}