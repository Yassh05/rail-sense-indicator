import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Database, Cpu, Wifi, BarChart3, ArrowRight } from "lucide-react";

const DemoSection = () => {
  const dataFlow = [
    {
      step: "1",
      icon: Database,
      title: "Sensor Data Collection",
      description: "LIDAR, accelerometer, and laser sensors capture track geometry data"
    },
    {
      step: "2", 
      icon: Cpu,
      title: "Edge Processing",
      description: "Real-time data analysis and filtering at the sensor unit"
    },
    {
      step: "3",
      icon: Wifi,
      title: "Data Transmission",
      description: "Secure wireless transmission to central monitoring system"
    },
    {
      step: "4",
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Visualization, alerts, and comprehensive reporting"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Live Demo & Simulation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            See ITMS in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our real-time monitoring system through interactive demonstrations
            and detailed data flow visualizations.
          </p>
        </div>

        {/* Interactive Demo Card */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-6">
                    <div className="w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <Play className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Interactive Demo</h3>
                    <p className="text-white/90 max-w-lg mx-auto">
                      Watch our live simulation showing real-time track monitoring data,
                      synchronized video feeds, and instant alert systems.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button variant="glass" size="lg" className="group">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Start Demo
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                      View Simulation
                    </Button>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/80 text-sm">Live System Active</span>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/20 rounded-lg p-2 backdrop-blur-md">
                  <span className="text-white text-sm font-mono">FPS: 60 | Latency: &lt;5ms</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Flow Diagram */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Automated Data Flow Process
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataFlow.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover-lift shadow-card border-0 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
                
                {/* Arrow Connector */}
                {index < dataFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-accent/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Sample Reports & Documentation</CardTitle>
            <CardDescription className="text-lg">
              Download comprehensive analysis reports and technical documentation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <Button variant="outline" className="h-auto p-6 flex flex-col gap-3">
                <Download className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <h4 className="font-semibold">Sample Data Report</h4>
                  <p className="text-sm text-muted-foreground">Real track analysis (PDF)</p>
                </div>
              </Button>
              
              <Button variant="outline" className="h-auto p-6 flex flex-col gap-3">
                <Database className="w-8 h-8 text-primary" />
                <div className="text-center">
                  <h4 className="font-semibold">Technical Specifications</h4>
                  <p className="text-sm text-muted-foreground">Detailed system specs</p>
                </div>
              </Button>
              
              <Button variant="hero" className="h-auto p-6 flex flex-col gap-3">
                <Play className="w-8 h-8" />
                <div className="text-center">
                  <h4 className="font-semibold">Video Demonstration</h4>
                  <p className="text-sm opacity-90">Full system walkthrough</p>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DemoSection;