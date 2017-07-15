import React from 'react';

import Background from './components/Background';
import BackgroundUpload from './components/BackgroundUpload';
import CustomGradient from './components/CustomGradient';
import TitleCategory from '../TitleCategory';

import uploadIcon from '../../public/assets/img/icons/upload.png';

const renderBackground = category => {
    const items = category.items.map( (item, f) => {
        const background = [];

        if(category.name === 'Gradients' && f === 0) {
            background.push( <CustomGradient /> );
        }
        background.push(<Background key={f} link={item}/>);
        return background;
    });
    return (
        <li key={category.name} className="category">
            <TitleCategory link={category.iconCat}>{category.name}</TitleCategory>
            <ul className="items">{items}</ul>
        </li>
    );
};

const renderListCategory = props => props.listCategories.map(renderBackground);

const Backgrounds = props => (
    <div className="nav-element backgrounds">
        <h2 className="title-categories">Backgrounds</h2>
        <ul className="categories">
            <BackgroundUpload
                active='active'
                link={uploadIcon}
            />
            {renderListCategory(props)}
        </ul>
    </div>
);

export default Backgrounds;