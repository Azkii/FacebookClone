import React from 'react'
import './widget.css';
function Widget() {
    return (
        <div className="widget">
        <iframe 
         src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=350&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
         width="350"
         height="600"
         scrolling="no"
         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
         title="widget-facebook"
        />
        </div>
    )
}

export default Widget
