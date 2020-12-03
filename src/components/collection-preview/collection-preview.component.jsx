import React from 'react';
import './collection-preview.styles.scss'
import PreviewItem from '../collection-preview-item/preview-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection">
            <h1 className="collection__title">{title.toUpperCase()}</h1>
            <div className="collection__items">
                {items.filter((itm, index) => index < 4)
                    .map((item) => <PreviewItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPreview;