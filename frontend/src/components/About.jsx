import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { User, MapPin, Mail } from 'lucide-react';
import { mockData } from '../mockData';

const About = () => {
  const { personal, skills } = mockData;

  const getSkillLevel = (level) => {
    switch (level) {
      case 'Expert': return 95;
      case 'Advanced': return 80;
      case 'Intermediate': return 65;
      default: return 50;
    }
  };

  const getSkillColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know more about my journey, skills, and passion for software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <User className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Personal Info</h2>
                </div>
                
                {/* Profile Image */}
                <div className="flex justify-center">
                  <Avatar className="w-24 h-24 ring-4 ring-primary/20 shadow-lg hover:ring-primary/40 transition-all duration-300 transform hover:scale-105">
                    <AvatarImage 
                      src={personal.profileImage} 
                      alt={personal.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                      {personal.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Mail className="h-5 w-5" />
                    <span>{personal.email}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">My Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {personal.bio}
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-foreground mb-3">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe in the power of technology to solve real-world problems. Every line of code I write 
                    is an opportunity to create something meaningful and impactful. I'm constantly learning new 
                    technologies and best practices to stay at the forefront of software development.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`${getSkillColor(skill.level)} text-white`}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      <Progress 
                        value={getSkillLevel(skill.level)} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Experience Highlights</h2>
                
                <div className="space-y-4">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">Full-Stack Development</h4>
                    <p className="text-sm text-muted-foreground">3+ years building end-to-end web applications</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">API Integration</h4>
                    <p className="text-sm text-muted-foreground">Extensive experience with RESTful and GraphQL APIs</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">Database Design</h4>
                    <p className="text-sm text-muted-foreground">MongoDB, PostgreSQL, and Redis implementation</p>
                  </div>
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-semibold text-foreground">Cloud Deployment</h4>
                    <p className="text-sm text-muted-foreground">AWS, Docker, and CI/CD pipeline management</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;