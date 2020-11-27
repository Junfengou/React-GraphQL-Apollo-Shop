import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './styles/Title';
import ItemStyle from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

class Item extends Component {
static propTypes = {
    item: PropTypes.object.isRequired
};

    render() {
        const { item } = this.props;
        return (
            <ItemStyle>
                <title>
                    {item.title}
                </title>
            </ItemStyle>
        );
    }
}

export default Item;