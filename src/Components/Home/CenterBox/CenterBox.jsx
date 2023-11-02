import React from 'react';
import './CenterBox.scss';
import SearchBar from '../../SearchBar/SearchBar';

function CenterBox() {

    return (
        <div className="col-md-6 center-box" >
            <div className='center-first-box'>
                <div className='center-area'>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <p className='filter-bar'><i class="fas fa-filter"></i> Filter</p>
                    </div>
                </div>
            </div>
            <div className='center-second-box' >
                <div className="scrollable-content" >
                    <div className='scr-data'>
                        <img src="/images/MediaData.png" alt="Noimage" className='img-fluid scr-img' />
                    </div>
                    <div className='scr-data'>
                        <img src="/images/MediaData.png" alt="Noimage" className='img-fluid scr-img' />
                    </div>
                    <div className='scr-data-spec'>
                        <div className="card-container">
                            <div className="card">
                                <img src="/images/center-d1.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d2.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d3.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d4.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d1.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d2.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d3.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <img src="/images/center-d4.png" alt="CardImage" className='img-fluid last-img-sec' />
                                <p className='center-dtext'>Modern Wall Decor Framed Painting</p>
                                <div className='center-ltext'>
                                    <p style={{ marginLeft: '30px', fontSize: '20px', fontWeight: 'bold' }}>$199.99</p>
                                    <p style={{ marginLeft: '70px' }}>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                        <i className="fas fa-star" style={{ color: 'gold' }}></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterBox