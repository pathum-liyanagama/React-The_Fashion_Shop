import React from 'react';
import './preview-item.styles.scss';

const PreviewItem = ({ id, name, imageUrl, price }) => (
    <div className="preview-item">
        <div className="preview-item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="preview-item__details">
            <p className="name">{name}</p>
            <p className="price">${price}</p>
        </div>
    </div>
)

export default PreviewItem;