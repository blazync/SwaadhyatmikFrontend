import * as React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {motion} from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const BlogSection = () => {
  // Define an array of blog items
  const blogItems = [
    {
      imgSrc: "img/blog-1.jpg",
      title: "Lorem ipsum dolor",
      category: "Body Fitness",
      date: "01-Jan-2045",
      comments: 5,
      description:
        "Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor",
    },
    {
      imgSrc: "img/blog-2.jpg",
      title: "Dolor sit amet",
      category: "Yoga Techniques",
      date: "15-Feb-2045",
      comments: 8,
      description:
        "Dolor sit amet, consectetur adipiscing elit. Integer posuere felis a felis imperdiet faucibus. Maecenas tempor purus id tellus vestibulum elementum.",
    },
    {
      imgSrc: "img/blog-3.jpg",
      title: "Consectetur adipiscing elit",
      category: "Healthy Lifestyle",
      date: "27-Mar-2045",
      comments: 3,
      description:
        "Consectetur adipiscing elit. Fusce aliquet felis vel mi convallis, ut mattis nisl facilisis. Nullam euismod, enim sit amet vestibulum pulvinar, lectus odio tincidunt dui, nec eleifend turpis dolor id odio.",
    },
    {
      imgSrc: "img/blog-4.jpg",
      title: "Phasellus nec pretium",
      category: "Mindfulness",
      date: "10-Apr-2045",
      comments: 12,
      description:
        "Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.",
    },
    {
      imgSrc: "img/blog-5.jpg",
      title: "Curabitur facilisis ornare",
      category: "Meditation",
      date: "22-May-2045",
      comments: 6,
      description:
        "Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.",
    },
    {
      imgSrc: "img/blog-6.jpg",
      title: "Aliquam metus tortor",
      category: "Healthy Diet",
      date: "05-Jun-2045",
      comments: 10,
      description:
        "Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Donec eu feugiat ligula, ut lacinia urna.",
    },
  ];

  return (
    <div className="blog mt-5">
      <div className="container">
        <div
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>From Blog</p>
          <h2>Latest Yoga Articles</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full  blog-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <CarouselContent>
       {blogItems.map((item, index) => (
         <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3  shodow-md"
              >
       
                <div className="p-1 h-full">
                  
                  <Card className="flex flex-col h-full shadow-md">
                    <CardContent className="flex flex-col items-start justify-start p-6">
                      <img
                        src={item.imgSrc}
                        alt="Blog"
                        className="w-full h-40 object-cover mb-4"
                      />
                      <h2 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h2>
                      <div className="blog-meta mb-4">
                        <p>
                          <i className="far fa-list-alt"></i>
                          {item.category} {item.date}
                        </p>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <a href="#" className="btn flex items-center">
                        Read More <i className="fa fa-angle-right ml-2"></i>
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default BlogSection;
