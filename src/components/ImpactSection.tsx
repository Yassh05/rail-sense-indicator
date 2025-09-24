import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingDown, TrendingUp, Zap, Shield, Wrench } from "lucide-react";

const ImpactSection = () => {
  const comparison = [
    {
      category: "Initial Cost",
      foreign: "₹15-20 Crores",
      indigenous: "₹4-6 Crores", 
      savings: "70% Reduction",
      icon: TrendingDown,
      color: "text-green-600"
    },
    {
      category: "Annual Maintenance",
      foreign: "₹2-3 Crores",
      indigenous: "₹50-80 Lakhs",
      savings: "65% Reduction", 
      icon: TrendingDown,
      color: "text-green-600"
    },
    {
      category: "Deployment Time",
      foreign: "12-18 Months",
      indigenous: "3-6 Months",
      savings: "60% Faster",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      category: "Customization",
      foreign: "Limited",
      indigenous: "Fully Customizable",
      savings: "100% Flexible",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Preventive maintenance reduces derailment risk by 85%",
      metric: "85% Risk Reduction"
    },
    {
      icon: TrendingDown,
      title: "Cost Efficiency", 
      description: "Significant reduction in maintenance and operational costs",
      metric: "₹10+ Crores Saved"
    },
    {
      icon: Zap,
      title: "Self-Reliance",
      description: "Zero dependency on foreign technology and support",
      metric: "100% Indigenous"
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description: "Local technical support and readily available spare parts",
      metric: "24/7 Support"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-lg px-4 py-2 border-secondary/30">
            Impact & Benefits
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Transforming Indian Railways
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our indigenous solution delivers superior performance while significantly 
            reducing costs and dependency on foreign technology.
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            Foreign Systems vs Indigenous ITMS
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {comparison.map((item, index) => (
              <Card key={index} className="shadow-card border-0 hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary">{item.category}</CardTitle>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Foreign Systems</span>
                      <span className="font-bold text-red-600">{item.foreign}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-600">Indigenous ITMS</span>
                      <span className="font-bold text-green-600">{item.indigenous}</span>
                    </div>
                    
                    <div className="text-center">
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        {item.savings}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-card border-0 hover-lift group">
              <CardHeader>
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {benefit.description}
                </CardDescription>
                <Badge variant="secondary" className="text-sm font-semibold">
                  {benefit.metric}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Summary */}
        <Card className="shadow-elegant border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-primary mb-4">
              Economic Impact Summary
            </CardTitle>
            <CardDescription className="text-lg">
              Projected benefits for Indian Railways over 5 years
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">₹500+</div>
                <div className="text-lg text-muted-foreground">Crores Saved</div>
                <div className="text-sm text-muted-foreground">in procurement & maintenance</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-lg text-muted-foreground">Self-Reliance</div>
                <div className="text-sm text-muted-foreground">reduced foreign dependency</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50,000+</div>
                <div className="text-lg text-muted-foreground">KM Coverage</div>
                <div className="text-sm text-muted-foreground">of railway tracks monitored</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-accent/30 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-semibold text-primary">Make in India Initiative</h4>
              </div>
              <p className="text-muted-foreground">
                ITMS directly contributes to the Make in India vision by developing cutting-edge 
                railway technology domestically, creating jobs, and establishing India as a 
                global leader in railway innovation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImpactSection;