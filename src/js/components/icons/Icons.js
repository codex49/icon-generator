import React, { Component } from 'react';

import Icon from './Icon';
import IconUpload from './IconUpload';
import TitleCategori from './TitleCategori';

export default class Icons extends Component {
    componentDidMount () {
        $('.items .icon-svg').each(function(){
            var $img = $(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            $.get(imgURL, function(data) {
                var $svg = $(data).find('svg');
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }

                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass);
                }
                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });
    }

    render (){
        return (
            <div className="nav-element">
                <h2 className="title-catagories">Design Elements</h2>
                <ul className="catagories">
                    <IconUpload active='active' link="img/icons/upload.png">Upload</IconUpload>
                    {
                        this.props.listCategories.map(function(catagorie, i){
                            var items = catagorie.items.map(function(item, f){
                                return(
                                    <Icon
                                        id={catagorie.name+f}
                                        key={f}
                                        link={item}/>
                                );
                            }.bind(this));
                            return (
                                <li key={i} className="catagorie">
                                    <TitleCategori link={catagorie.iconCat}>{catagorie.name}</TitleCategori>
                                    <ul className="items">{items}</ul>
                                </li>
                            );
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }
}