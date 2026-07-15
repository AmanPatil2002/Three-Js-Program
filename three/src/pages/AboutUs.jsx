
import { Award, Users, ThumbsUp, Clock } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Award, label: 'Years of Excellence', value: '10+' },
    { icon: Users, label: 'Happy Customers', value: '50K+' },
    { icon: ThumbsUp, label: 'Satisfaction Rate', value: '98%' },
    { icon: Clock, label: 'Fast Delivery', value: '30min' },
  ];
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">ChillDrinks</span>
          </h1>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            We're on a mission to revolutionize the way you experience cold beverages.
          </p>
        </div>
        {/* Story and Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Our Story</h2>
            <p className="text-blue-100/70 leading-relaxed">
              Founded in 2015, ChillDrinks started with a simple idea: to create the most 
              refreshing and innovative cold drinks that bring people together. What began 
              as a small local shop has grown into a beloved destination for beverage enthusiasts.
            </p>
            <p className="text-blue-100/70 leading-relaxed">
              We believe that every sip should be an experience. That's why we source the 
              finest ingredients and use cutting-edge techniques to craft drinks that delight 
              and inspire.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-blue-100/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>        
      </div>
    </div>
  );
};

export default AboutUs;