import { Target, Users, Award, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 italic">
                About
                <span className="block bg-[#99540f] bg-clip-text text-transparent">
                 Vivadhara
                </span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a passionate team of designers, developers, and digital strategists committed to delivering exceptional digital solutions that drive real business results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our founding, we've helped hundreds of businesses establish their online presence and achieve their digital goals through innovative design and cutting-edge technology.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mission Driven</h3>
              <p className="text-gray-600">
                Focused on delivering solutions that make a real impact on your business.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative</h3>
              <p className="text-gray-600">
                We work closely with you every step of the way to ensure success.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we create.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                We love what we do and it shows in our work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                500+
              </p>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                250+
              </p>
              <p className="text-gray-600 font-medium">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                50+
              </p>
              <p className="text-gray-600 font-medium">Team Members</p>
            </div>
            <div>
              <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                8+
              </p>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
