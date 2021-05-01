import React, { Component, useEffect, useState } from "react";
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from "axios";
import HttpConfig from "../../config/HttpConfig";
import GalleryHeader from "./GalleryHeader";
import GalleryFolders from "./GalleryFolders";
import GalleryImages from "./GalleryImages";

function GalleryPage() {
	const [data, setData] = useState(null);

	const openDir = ()=>{
		axios.get(`${HttpConfig.getGalleryUrl}?path=${dir}`,{
		}).then(res => {
			setData(res.data);
		});
	};

	let dir = "/";
	useEffect(() => {
		openDir();
	}, []);

	if (!data) {
		return null;
	}


	const galleryDirReset = () => {
		dir = "/";
		openDir();
	}
	const galleryDirChange = (newDir) => {
		dir = newDir;
		openDir();
	}

	return (
		<div className="p-16">
			<GalleryHeader onReset={galleryDirReset} data={data.info} />
			<GalleryFolders onChange={galleryDirChange} data={data.folders} />
			<GalleryImages data={data.items} />
		</div>
	)
}

export default GalleryPage;
