import React from 'react'
import './MediaCard.scss'

function MediaCard(props) {
    const { logoSrc, picSrc, medName, medId } = props;
    return (
        <div className="crd-media">
            <div className="crd-media-box">
                <div className="crd-media-logo">
                    <img
                        src={logoSrc}
                        alt=""
                        width="50px"
                        className='crd-media-logo-img'
                    />
                </div>
                <div >
                    <h1 className='crd-media-name'>{medName}</h1>
                    <span className='crd-media-id'>{medId}</span>
                </div>

                <div style={{ float: 'right' }}>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                </div>
                <div className='crd-media-desc'>
                    <span >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className="pink-text">Read More</span></span>
                </div>
            </div>
            <div className="image-container">
                <img src={picSrc} alt="Noimage" className="img-fluid crd-main-img" />
                <i class="fas fa-heart heart-icon"></i>
            </div>
            <div>
                <p className='lke-cmt-shr'>
                    <i class="fas fa-heart media-icon"></i> 9.8k
                    <i class="fas fa-comment media-icon" style={{ marginLeft: '60px' }} ></i> 8.6k
                    <i class="fas fa-share media-icon" style={{ marginLeft: '60px' }}></i> 7.2k
                </p>
            </div>
        </div>
    )
}

export default MediaCard