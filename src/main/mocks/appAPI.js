// import blackCircle from '../../public/assets/img/svg/add-button-inside-black-circle.svg';

module.exports = {
    getMenuItems: function() {
        const menuItems = [
            {item: 'Useful link', url: 'http://www.google.com'},
            {item: 'An other useful website', url: 'http://www.yahoo.com'}
        ];
        return menuItems;
    },
    getIcons: function() {
        const icons = [
            {
                'name': 'All',
                'iconCat': require('../../public/assets/img/icons/all.png'),
                'items': [
                    require('../../public/assets/img/svg/add-button-inside-black-circle.svg'),
                    require('../../public/assets/img/svg/apple-black-logo.svg'),
                    require('../../public/assets/img/svg/apple-black-silhouette-with-a-leaf.svg'),
                    require('../../public/assets/img/svg/arrow-down-on-black-circular-background.svg'),
                    require('../../public/assets/img/svg/black-back-closed-envelope-shape.svg'),
                    require('../../public/assets/img/svg/check-mark-white-on-black-circular-background.svg'),
                    require('../../public/assets/img/svg/favourites-filled-star-symbol.svg'),
                    require('../../public/assets/img/svg/idea-and-creativity-symbol-of-a-lightbulb.svg'),
                    require('../../public/assets/img/svg/mobileme-logo-of-black-cloud.svg')
                ]
            },
            {
                'name': 'Shapes',
                'iconCat': require('../../public/assets/img/icons/categorie.png'),
                'items': [
                    require('../../public/assets/img/svg/question-mark-on-a-circular-black-background.svg'),
                    require('../../public/assets/img/svg/tree-silhouette.svg'),
                    require('../../public/assets/img/svg/t-shirt-black-silhouette.svg'),
                    require('../../public/assets/img/svg/twitter-black-shape.svg'),
                    require('../../public/assets/img/svg/twitter-logo-on-black-background.svg'),
                    require('../../public/assets/img/svg/twitter-logo-on-black-background.svg')
                ]
            }
        ];
        return icons;
    },
    getBackgrounds: function() {
        const backgrounds = [
            {
                'name': 'All',
                'iconCat': require('../../public/assets/img/icons/all.png'),
                'items': [
                    require('../../public/assets/img/bg/orange.png'),
                    require('../../public/assets/img/bg/bleu.png')
                ]
            },
            {
                'name': 'Gradients',
                'iconCat': require('../../public/assets/img/icons/categorie-bg.png'),
                'items': [
                    require('../../public/assets/img/bg/bleu.png'),
                    require('../../public/assets/img/bg/orange.png'),
                    require('../../public/assets/img/bg/bleu.png'),
                    require('../../public/assets/img/bg/orange.png'),
                  ]
            }
        ];
        return backgrounds;
    },
    getSocialsMedia: function() {
        const socialsMedia = [
            {url: require('../../public/assets/img/icons/facebook.png'), text: 'Facebook'},
            {url: require('../../public/assets/img/icons/twitter.png'), text: 'Twitter'},
            {url: require('../../public/assets/img/icons/google.png'), text: 'Google'},
            {url: require('../../public/assets/img/icons/pinterest.png'), text: 'Pinterest'}
        ];
        return socialsMedia;
    },
};