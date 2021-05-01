import React, { Component, useEffect, useState } from "react";
import Gallery from 'react-grid-gallery';
import HttpConfig from "../../config/HttpConfig";


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
				<Gallery images={this.props.data.map(obj => {
					return {
						src: HttpConfig.domain + obj.url,
						thumbnail: HttpConfig.domain + obj.preview_url,
					};
				})} variants={this.item}/>
			</div>
		)
	}
}

export default GalleryImages;
