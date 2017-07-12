import React, { Component } from 'react';

import Icon from './components/Icon';
import Upload from '../Upload';
import TitleCategory from '../TitleCategory';

import uploadIcon from '../../public/assets/img/icons/upload.png';

export default class Icons extends Component {
    renderListIcons = () => {
        return(
            this.props.listCategories.map(function(category){
                const items = category.items.map((item, f) => {
                    return(
                        <Icon
                            id={f}
                            key={f}
                            link={item}
                        />
                    );
                });

                return (
                    <li key={category.name} className="category">
                        <TitleCategory link={category.iconCat}>{category.name}</TitleCategory>
                        <ul className="items">{items}</ul>
                    </li>
                );
            })
        );
    }

    render () {
        return (
            <div className="nav-element">
                <h2 className="title-categories">Design Elements</h2>
                <ul className="categories">
                    <Upload
                        active='active'
                        link={uploadIcon}
                    />
                    {this.renderListIcons()}
                </ul>
            </div>
        );
    }
}