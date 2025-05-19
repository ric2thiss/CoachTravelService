import React from 'react'

const Card = () => {
  return (
    <>
        <div className="container" style={{ marginBottom: '5rem' }}>
            <div className="row g-3"> 
                <div className="col-md-4">
                    <div className="card h-100 p-3">
                        <h5>My Bookings</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                MNL - USA #A21421A
                                <a href="my_bookings.php" className="btn btn-primary btn-sm">View</a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                CEB - HND #B54872B
                                <a href="my_bookings.php" className="btn btn-primary btn-sm">View</a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                DVO - DXB #C97318C
                                <a href="my_bookings.php" className="btn btn-primary btn-sm">View</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 p-3">
                        <h5>Serch Services</h5>
                        <div className='d-flex justify-content-between align-items-center my-3'>
                            <input type="text" className="form-control me-2" placeholder="Search services..." style={{ maxWidth: '70%' }} />
                            <a href="search.php" className="btn btn-primary px-3 btn-sm">Search</a>
                        </div>

                        <div className='p-2'>
                            <p>Search Result</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 p-3">
                        <h5>Profile</h5>
                        
                        <a href="profile.php" className="btn btn-secondary mt-3">Edit</a>
                    </div>
                </div>
            </div>
        </div>

    
    </>
  )
}

export default Card