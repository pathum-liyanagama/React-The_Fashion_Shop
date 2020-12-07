import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button.component';
import { addItem } from '../../redux/cart/cart.actions';
import './preview-item.styles.scss';

const PreviewItem = ({item, addItem}) => {
    const { name, imageUrl, price } = item;
    return(
    <div className="preview-item">
        <div className="preview-item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className="preview-item__details">
            <p className="name">{name}</p>
            <p className="price">${price}</p>
        </div>
        <Button onClick={() => addItem(item)} inverted={true}>ADD TO CART</Button>
    </div>
)}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(PreviewItem);