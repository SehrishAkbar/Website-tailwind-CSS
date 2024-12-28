import React from 'react';

const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10" style={{ backgroundImage: "url('/about-us.png')" }}>
      <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Welcome to My Perfume Shop</h2>
        <p>Your ultimate destination for experiencing luxury fragrances without the hefty price tag. Founded by two passionate entrepreneurs, our journey began with a simple yet profound mission: to democratize the world of designer scents, making them accessible to everyone.</p>
      </div>
    </section>
  );
};

export default About;
