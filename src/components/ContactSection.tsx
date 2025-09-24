import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Github, ExternalLink, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Collaborate with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform railway monitoring? Let's discuss partnerships, 
            implementation, and building the future of Indian Railways together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
              <CardDescription className="text-lg">
                We'd love to hear from railway authorities, tech partners, and investors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Full Name</label>
                  <Input placeholder="Your name" className="border-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Organization</label>
                  <Input placeholder="Company/Institution" className="border-primary/20" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="border-primary/20" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Phone</label>
                  <Input placeholder="+91 XXXXX XXXXX" className="border-primary/20" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Subject</label>
                <Input placeholder="Partnership inquiry, Technical discussion, etc." className="border-primary/20" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Message</label>
                <Textarea 
                  placeholder="Tell us about your requirements, questions, or collaboration ideas..."
                  className="min-h-[120px] border-primary/20"
                />
              </div>
              
              <Button variant="hero" className="w-full" size="lg">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information & Resources */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Email</h4>
                    <p className="text-muted-foreground">contact@itms-india.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Phone</h4>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Location</h4>
                    <p className="text-muted-foreground">New Delhi, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Downloadable Resources */}
            <Card className="shadow-card border-0 bg-gradient-to-br from-accent/50 to-background">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Resources & Downloads</CardTitle>
                <CardDescription>
                  Get detailed information about ITMS technology
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-4">
                    <Download className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <h4 className="font-semibold">Technical Brochure</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive system overview (PDF)</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-4">
                    <Github className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <h4 className="font-semibold">GitHub Repository</h4>
                      <p className="text-sm text-muted-foreground">Open source components</p>
                    </div>
                  </div>
                </Button>
                
                <Button variant="outline" className="w-full justify-start h-auto p-4">
                  <div className="flex items-center gap-4">
                    <ExternalLink className="w-6 h-6 text-primary" />
                    <div className="text-left">
                      <h4 className="font-semibold">Research Papers</h4>
                      <p className="text-sm text-muted-foreground">Published studies and findings</p>
                    </div>
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="shadow-elegant border-0 bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Build the Future of Railways</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Join us in revolutionizing railway safety and efficiency across India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-primary-foreground/90">
                    ITMS represents a significant step towards self-reliant railway infrastructure.
                    Partner with us to deploy this technology nationwide and ensure safer,
                    more efficient rail transport for millions of Indians.
                  </p>
                  
                  <div className="flex gap-3">
                    <Button variant="glass" className="flex-1">
                      Schedule Demo
                    </Button>
                    <Button variant="outline" className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                      Request Proposal
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;