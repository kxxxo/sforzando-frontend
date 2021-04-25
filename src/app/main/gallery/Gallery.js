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

	let openDir = ()=>{
		axios.get(HttpConfig.yandex_disk_get_directory + "&path=" + dir,{
			headers: {'Authorization': 'OAuth '+HttpConfig.yandex_oauth_key},
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


	let galleryDirReset = () => {
		dir = "/";
		openDir();
	}
	let galleryDirChange = (new_dir) => {
		dir = new_dir;
		openDir();
	}

	return (
		<div className="p-16">

			<GalleryHeader onReset={galleryDirReset} data={data} />
			<GalleryFolders onChange={galleryDirChange} data={data} />
			<GalleryImages data={data} />
		</div>
	)
}

export default GalleryPage;
