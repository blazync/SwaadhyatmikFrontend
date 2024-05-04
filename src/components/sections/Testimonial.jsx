import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";

const TestimonialSection = () => {
  return (
    <div className="testimonial wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="section-header text-center">
          <p>Testimonial</p>
          <h2>Our Client Say!</h2>
        </div>
        <Carousel className="testimonials-carousel">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-1.jpg" alt="Image" />
                </div>
                <div className="testimonial-text">
                  <p>
                  Aryan is a really understanding, humble and diligent yoga guru. He took time to understand the root problems of my dad’s health issues and adjusted his schedule according to my dad’s timing requirement...                  </p>
                  <h3>VIKRANT GUPTA</h3>
                  <h4>⭐⭐⭐⭐⭐</h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-2.jpg" alt="Image" />
                </div>
                <div className="testimonial-text">
                  <p>
                  I feel full relax after taking meditational massage. The atmosphere of centre is positive vibes.
                  </p>
                  <h3>RAUSHAN KUMAR SINGH</h3>
                  <h4>⭐⭐⭐⭐⭐</h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-3.jpg" alt="Image" />
                </div>
                <div className="testimonial-text">
                  <p>
                  I joined their session for one week, I can't explain in words what I felt in one week, but in that time I got a lot of mental peace, that too in just one week session and at very low fees.
                  </p>
                  <h3>Rohit Keshri</h3>
                  <h4>⭐⭐⭐⭐⭐</h4>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-4.jpg" alt="Image" />
                </div>
                <div className="testimonial-text">
                  <p>
                    Lorem ipsum dolor sit amet consec adipis elit. Etiam accums
                    lacus eget velit tincid, quis suscip justo dictum.
                  </p>
                  <h3>Customer Name</h3>
                  <h4>Profession</h4>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;
