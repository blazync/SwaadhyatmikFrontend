import React from 'react';

const YourPage = () => {
  const plans = [
    {
      title: 'Basic',
      price: 49,
      features: ['Personal Trainer', 'Special Class', 'Free Tutorials', 'Group Training']
    },
    {
      title: 'Standard',
      price: 99,
      features: ['Personal Trainer', 'Special Class', 'Free Tutorials', 'Group Training'],
      featured: true
    },
    {
      title: 'Premium',
      price: 149,
      features: ['Personal Trainer', 'Special Class', 'Free Tutorials', 'Group Training']
    }
  ];

  const PricingPlan = ({ plans }) => {
    return (
      <div className="price">
        <div className="container">
          <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
            <p>Yoga Package</p>
            <h2>Yoga Pricing Plan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="col-md-4 wow fadeInUp"
                data-wow-delay={`${index * 0.3}s`}
              >
                <div className={`price-item ${plan.featured ? 'featured-item' : ''}`}>
                  <div className="price-header">
                    {plan.featured && (
                      <div className="price-status">
                        <span>Popular</span>
                      </div>
                    )}
                    <div className="price-title">
                      <h2>{plan.title}</h2>
                    </div>
                    <div className="price-prices">
                      <h2><small>$</small>{plan.price}<span>/ mo</span></h2>
                    </div>
                  </div>
                  <div className="price-body">
                    <div className="price-description">
                      <ul>
                        {plan.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="price-footer">
                    <div className="price-action">
                      <a className="btn" href="#">Join Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <PricingPlan plans={plans} />
    </div>
  );
};

export default YourPage;
