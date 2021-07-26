$( document ).ready( function() {

    var entries = [ 
        
        { label: 'HTML', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
        { label: 'CSS', url: 'http://www.flashforum.de/', target: '_top' },
        { label: 'jQuery', url: 'http://www.jqueryscript.net/', target: '_top' },
        { label: 'Javascript', url: 'http://forum.jswelt.de/', target: '_top' },
        { label: 'Bootstrap', url: 'https://jsfiddle.net/user/NiklasKnaack/fiddles/', target: '_top' },
        { label: 'Sass', url: 'http://codepen.io/', target: '_top' },
        { label: 'Angular.js', url: 'http://threejs.org/', target: '_top' },
        { label: 'Vue.js', url: 'http://webglstudio.org/', target: '_top' },
        { label: 'Java', url: 'http://jscompress.com/', target: '_top' },
        { label: 'C++', url: 'https://tinypng.com/', target: '_top' },
        { label: 'React', url: 'http://caniuse.com/', target: '_top' },
        { label: 'Git', url: 'https://goo.gl/', target: '_top' },
        { label: 'Mongo db', url: 'http://www.opinionatedgeek.com/DotNet/Tools/HTMLEncode/Encode.aspx', target: '_top' },
        { label: 'Node.js', url: 'https://twitter.com/niklaswebdev', target: '_top' },
        { label: 'Quickbooks', url: 'http://nkunited.deviantart.com/', target: '_top' },
        { label: 'Tally', url: 'http://gulpjs.com/', target: '_top' },
        { label: 'Xero', url: 'https://www.browsersync.io/', target: '_top' },
        { label: 'GitHub', url: 'https://github.com/', target: '_top' },
        { label: 'Excel', url: 'https://www.shadertoy.com/', target: '_top' },
        { label: 'Word', url: 'http://gamua.com/starling/', target: '_top' },
        { label: 'Docker', url: 'http://jsperf.com/', target: '_top' },
        { label: 'AWS', url: 'http://foundation.zurb.com/', target: '_top' },
        { label: 'MySql', url: 'http://createjs.com/', target: '_top' },
        { label: 'Google Workspace', url: 'http://julian.com/research/velocity/', target: '_top' },
        { label: 'Premire Pro', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
        { label: 'Photoshop', url: 'https://jquery.com/', target: '_top' },
        { label: 'Illustrator', url: 'http://www.jqueryrain.com/', target: '_top' },
        { label: 'Linux', url: 'http://jquery-plugins.net/', target: '_top' },

    ];

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#0000',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $( '#tag-cloud' ).svg3DTagCloud( settings );

} );


