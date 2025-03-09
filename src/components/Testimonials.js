import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Fantastic service! Our home looks brand new." - Jane D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>"Professional and timely. Highly recommend!" - Mark S.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;