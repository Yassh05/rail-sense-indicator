import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Database, Wifi, Code, Brain, Monitor, Zap, Camera } from "lucide-react";

const TechStackSection = () => {
  const hardware = [
    {
      icon: Zap,
      name: "LIDAR Sensors",
      description: "High-precision laser scanning for track geometry",
      specs: "±0.5mm accuracy, 100Hz sampling"
    },
    {
      icon: Cpu,
      name: "Accelerometers",
      description: "Multi-axis vibration and motion detection",
      specs: "16-bit resolution, 1000Hz sampling"
    },
    {
      icon: Camera,
      name: "Laser Measurement",
      description: "Contactless rail profile measurement",
      specs: "Sub-millimeter precision, real-time processing"
    },
    {
      icon: Wifi,
      name: "Edge Computing Unit",
      description: "On-site data processing and analysis",
      specs: "ARM Cortex A78, 8GB RAM, 5G connectivity"
    }
  ];

  const software = [
    {
      icon: Code,
      name: "Python Backend",
      description: "Core data processing and analytics engine",
      tech: "FastAPI, NumPy, Pandas, SciPy"
    },
    {
      icon: Database,
      name: "Database Systems",
      description: "High-performance data storage and retrieval", 
      tech: "PostgreSQL, InfluxDB, Redis"
    },
    {
      icon: Brain,
      name: "AI/ML Modules",
      description: "Predictive analytics and anomaly detection",
      tech: "TensorFlow, PyTorch, Scikit-learn"
    },
    {
      icon: Monitor,
      name: "Dashboard Interface",
      description: "Real-time visualization and monitoring",
      tech: "React, D3.js, WebGL, WebRTC"
    }
  ];

  const architecture = [
    { layer: "Sensor Layer", description: "Hardware sensors and data acquisition", color: "bg-blue-500" },
    { layer: "Edge Processing", description: "Real-time data filtering and analysis", color: "bg-green-500" },
    { layer: "Communication", description: "Secure data transmission protocols", color: "bg-purple-500" },
    { layer: "Cloud Analytics", description: "Advanced ML processing and storage", color: "bg-orange-500" },
    { layer: "User Interface", description: "Dashboard and mobile applications", color: "bg-red-500" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Technology Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ITMS combines advanced hardware sensors with sophisticated software algorithms
            to deliver unparalleled railway track monitoring capabilities.
          </p>
        </div>

        {/* Hardware Components */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Hardware Components
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardware.map((item, index) => (
              <Card key={index} className="hover-lift shadow-card border-0 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  <Badge variant="outline" className="text-xs">
                    {item.specs}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Software Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Software Stack
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {software.map((item, index) => (
              <Card key={index} className="hover-lift shadow-card border-0 h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-secondary rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg text-primary">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="text-xs text-muted-foreground">
                    {item.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Architecture */}
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-accent/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-primary mb-4">
              System Architecture
            </CardTitle>
            <CardDescription className="text-lg">
              Layered architecture ensuring scalability, reliability, and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {architecture.map((layer, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-lg bg-white shadow-sm">
                  <div className={`w-12 h-12 ${layer.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-primary">{layer.layer}</h4>
                    <p className="text-muted-foreground">{layer.description}</p>
                  </div>
                  {index < architecture.length - 1 && (
                    <div className="w-px h-8 bg-gradient-primary"></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Key Technical Specifications</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Data Processing:</span>
                  <p className="text-muted-foreground">Real-time, &lt;100ms latency</p>
                </div>
                <div>
                  <span className="font-semibold">Storage:</span>
                  <p className="text-muted-foreground">1TB+ daily capacity</p>
                </div>
                <div>
                  <span className="font-semibold">Connectivity:</span>
                  <p className="text-muted-foreground">4G/5G, WiFi, LoRa backup</p>
                </div>
                <div>
                  <span className="font-semibold">Reliability:</span>
                  <p className="text-muted-foreground">99.9% uptime guarantee</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TechStackSection;