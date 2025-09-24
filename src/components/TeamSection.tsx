import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Play, Award } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Rahul Sharma",
      role: "Lead Engineer & Project Manager",
      expertise: "Railway Systems, IoT Architecture",
      education: "IIT Delhi - Electronics & Communication"
    },
    {
      name: "Priya Patel", 
      role: "Hardware Development Lead",
      expertise: "Sensor Technology, Embedded Systems",
      education: "IIT Bombay - Mechanical Engineering"
    },
    {
      name: "Amit Kumar",
      role: "Software Architect",
      expertise: "AI/ML, Backend Development",
      education: "IIT Madras - Computer Science"
    },
    {
      name: "Sneha Reddy",
      role: "Data Analytics Specialist", 
      expertise: "Signal Processing, Predictive Analytics",
      education: "IIT Kanpur - Electrical Engineering"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Smart India Hackathon 2024",
      description: "Finalist in Railway Innovation Category",
      status: "Winner"
    },
    {
      icon: Award,
      title: "Innovation Excellence Award",
      description: "Department of Science & Technology",
      status: "Recognition"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-primary/20">
            Our Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet the Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated team of engineers and researchers committed to revolutionizing
            railway infrastructure monitoring in India.
          </p>
        </div>

        {/* Team Photo & Video */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Team Photo */}
                <div className="relative">
                  <img 
                    src={teamPhoto} 
                    alt="ITMS Development Team"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">ITMS Development Team</h3>
                    <p className="text-white/90">Building the future of railway monitoring</p>
                  </div>
                </div>
                
                {/* Video Demo */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Prototype Demonstration
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Watch our team explain the ITMS technology, demonstrate the hardware prototype,
                    and showcase real-time monitoring capabilities.
                  </p>
                  
                  <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group cursor-pointer">
                    <div className="text-center text-primary-foreground">
                      <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8" />
                      </div>
                      <p className="font-semibold">Watch Demo Video</p>
                      <p className="text-sm opacity-90">15 min technical presentation</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="hero" className="flex-1">
                      <Play className="w-4 h-4" />
                      Play Video
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="hover-lift shadow-card border-0 text-center h-full">
              <CardHeader>
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <CardTitle className="text-lg text-primary">{member.name}</CardTitle>
                <CardDescription className="text-secondary font-semibold">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-primary">Expertise:</span>
                    <p className="text-muted-foreground">{member.expertise}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-primary">Education:</span>
                    <p className="text-muted-foreground">{member.education}</p>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements & Recognition */}
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-secondary/10 to-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-primary mb-4">
              Recognition & Achievements
            </CardTitle>
            <CardDescription className="text-lg">
              Our work has been recognized by leading institutions and competitions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-lg text-primary">{achievement.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                We are actively seeking partnerships with railway authorities, research institutions,
                and technology companies to deploy ITMS across India's railway network.
              </p>
              <Button variant="hero" size="lg">
                Partner With Us
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TeamSection;