import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Video, Ruler, TrendingUp, Wrench, FileDown, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live monitoring with instant alerts and comprehensive data visualization",
      color: "text-blue-600"
    },
    {
      icon: Video,
      title: "Synchronized Video Recording", 
      description: "Rear-window video capture synchronized with sensor data for complete analysis",
      color: "text-purple-600"
    },
    {
      icon: Ruler,
      title: "Track Geometry Visualization",
      description: "Precise measurement of gauge, twist, alignment with visual representations",
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      title: "Rail Wear & Condition Monitoring",
      description: "Predictive maintenance insights and wear pattern analysis",
      color: "text-orange-600"
    },
    {
      icon: Wrench,
      title: "Modular & Scalable",
      description: "Flexible deployment options for different railway network requirements",
      color: "text-red-600"
    }
  ];

  const outputs = [
    { name: "CSV Data Export", format: "CSV", size: "2.5MB" },
    { name: "XML Reports", format: "XML", size: "1.8MB" },
    { name: "Video Snapshots", format: "MP4", size: "15MB" },
    { name: "Analysis Charts", format: "PDF", size: "850KB" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-primary/20">
            Software Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software suite for real-time monitoring, data analysis,
            and predictive maintenance of railway infrastructure.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-to-br from-accent/30 to-background">
            <CardContent className="p-0">
              <div className="relative group">
                <img 
                  src={dashboardMockup} 
                  alt="ITMS Dashboard Interface"
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-300"></div>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Play className="w-6 h-6" />
                  View Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift shadow-card border-0 group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-accent/50 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sample Outputs */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Data Outputs & Reports</CardTitle>
              <CardDescription className="text-lg">
                Multiple export formats for comprehensive analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {outputs.map((output, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileDown className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="font-semibold">{output.name}</h4>
                        <p className="text-sm text-muted-foreground">{output.format} Format</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {output.size}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" className="w-full mt-6">
                <FileDown className="w-4 h-4" />
                Download Sample Reports
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Real-time Capabilities</CardTitle>
              <CardDescription className="text-secondary-foreground/80 text-lg">
                Live monitoring and instant response system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Data Processing Rate</span>
                  <span className="text-2xl font-bold">1000 Hz</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Alert Response Time</span>
                  <span className="text-2xl font-bold">&lt; 500ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Video Frame Rate</span>
                  <span className="text-2xl font-bold">60 FPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Measurement Accuracy</span>
                  <span className="text-2xl font-bold">±0.5mm</span>
                </div>
                
                <div className="pt-4 border-t border-secondary-foreground/20">
                  <p className="text-sm opacity-90">
                    Continuous monitoring with zero downtime and automatic failover systems
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;