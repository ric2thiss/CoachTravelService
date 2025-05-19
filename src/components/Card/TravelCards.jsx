import React from 'react';

const TravelCards = () => {
  const destinations = [
    {
      title: 'Paris, France',
      description: 'Romantic getaway including flight and 3 nights hotel stay.',
      price: 'Only $499',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&h=200&q=80',
      alt: 'Paris'
    },
    {
      title: 'Tokyo, Japan',
      description: 'Modern meets tradition: Includes guided tours and hotel.',
      price: 'Only $699',
      image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=400&h=200&q=80',
      alt: 'Tokyo'
    },
    {
      title: 'Bali, Indonesia',
      description: 'Beachside resort with spa package. 5 nights all-inclusive.',
      price: 'Only $899',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&h=200&q=80',
      alt: 'Bali'
    }
  ];

  return (
    <div className="container">
      <div className="row g-4">
        {destinations.map((dest, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={dest.image} alt={dest.alt} className="img-fluid w-100" />
              <div className="card-body">
                <h5 className="card-title">{dest.title}</h5>
                <p className="card-text">{dest.description}</p>
                <span className="badge bg-warning">{dest.price}</span>
              </div>
              <div className="card-footer text-end">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCards;
