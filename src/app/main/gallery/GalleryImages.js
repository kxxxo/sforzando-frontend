import React, { Component, useEffect, useState } from "react";
import Gallery from 'react-grid-gallery';


class GalleryImages extends Component{
	container = {
		show: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	render() {
		return (
			<div className="p-12">
				<Gallery images={this.props.data._embedded.items.filter(obj => obj.type === "file" && obj.media_type === "image").map(obj => {
					return {
						src: obj.file,
						thumbnail: obj.preview,
					};
				})} variants={this.item}/>
			</div>
		)
	}
}

export default GalleryImages;
