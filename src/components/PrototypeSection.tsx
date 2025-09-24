import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, Zap, Shield, Settings, Download, ExternalLink } from "lucide-react";
import sensorHardware from "@/assets/sensor-hardware.jpg";

const PrototypeSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "Modular Design",
      description: "Scalable sensor modules for different track sections"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data acquisition and analysis"
    },
    {
      icon: Shield,
      title: "Railway Standards",
      description: "Compliant with Indian Railway specifications"
    },
    {
      icon: Settings,
      title: "Indigenous Build",
      description: "100% Made in India technology"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Hardware + Software Integration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            ITMS Prototype Showcase
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our indigenous contactless track monitoring system combines cutting-edge hardware
            sensors with advanced software analytics for comprehensive railway safety.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hardware Showcase */}
          <div className="space-y-8">
            <Card className="hover-lift shadow-card border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Hardware Components</CardTitle>
                <CardDescription className="text-lg">
                  Advanced sensor modules for precise track monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-6">
                  <img 
                    src={sensorHardware} 
                    alt="ITMS Sensor Hardware Module"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-accent/50">
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-6">
            <Card className="shadow-card border-0 bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold opacity-90">Sensors</h4>
                    <p className="opacity-80">LIDAR, Accelerometer, Laser</p>
                  </div>
                  <div>
                    <h4 className="font-semibold opacity-90">Processing</h4>
                    <p className="opacity-80">Edge Computing Unit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold opacity-90">Connectivity</h4>
                    <p className="opacity-80">4G/5G, WiFi, LoRa</p>
                  </div>
                  <div>
                    <h4 className="font-semibold opacity-90">Power</h4>
                    <p className="opacity-80">Solar + Battery Backup</p>
                  </div>
                  <div>
                    <h4 className="font-semibold opacity-90">Operating Range</h4>
                    <p className="opacity-80">-40°C to +70°C</p>
                  </div>
                  <div>
                    <h4 className="font-semibold opacity-90">Accuracy</h4>
                    <p className="opacity-80">±0.5mm precision</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Key Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>70% cost reduction vs foreign systems</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Zero dependency on imports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Customizable for Indian conditions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Easy maintenance & local support</span>
                  </li>
                </ul>
                
                <div className="flex gap-3 mt-6">
                  <Button variant="tech" size="sm">
                    <Download className="w-4 h-4" />
                    Spec Sheet
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    3D Model
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;