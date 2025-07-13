import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { mockData } from '../mockData';

const Home = () => {
  const { personal } = mockData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Main heading with animation */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                <span className="block text-foreground">Hello, I am</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                  {personal.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                {personal.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative digital solutions that make a difference. 
              I transform ideas into powerful, scalable applications using cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-secondary transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-12 w-12 text-blue-500" />,
                title: "Clean Code",
                description: "Writing maintainable, scalable, and efficient code that stands the test of time."
              },
              {
                icon: <Zap className="h-12 w-12 text-yellow-500" />,
                title: "Fast Performance",
                description: "Optimizing applications for speed and performance across all devices and platforms."
              },
              {
                icon: <Users className="h-12 w-12 text-green-500" />,
                title: "User-Focused",
                description: "Creating intuitive user experiences that delight and engage your audience."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 text-center space-y-4 border-2 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;