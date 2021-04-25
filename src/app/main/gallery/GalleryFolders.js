import React, { Component, useEffect, useState } from "react";
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from "axios";
import HttpConfig from "../../config/HttpConfig";
import Button from "@material-ui/core/Button";
import CompetitionCard from "../components/HomeCompetitions/CompetitionCard";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

class GalleryFolders extends Component{
	constructor(props) {
		super(props);
	}
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
	handleChange (path) {
		if (this.props.onChange) {
			this.props.onChange(path);
		}
	};
	render() {
		return (
			<motion.div className="flex flex-wrap" variants={this.container} initial="hidden" animate="show">
				{this.props.data._embedded.items.map(obj => {
					if(obj.type === "dir")
						return (
							<motion.div variants={this.item} className="widget flex w-full sm:w-1/3 md:w-1/5 lg:w-1/6 p-6" key={obj.md5}>
								<Card style={{ width:'100%' }}>
									<CardActionArea>
										<CardContent onClick={() => {this.handleChange(obj.path)}}>
											<Icon style={{verticalAlign:"-5px"}}>folder</Icon>
											&nbsp;
											<span>
												{obj.name}
											</span>
										</CardContent>
									</CardActionArea>
								</Card>
							</motion.div>
						)
				})}
			</motion.div>

		)
	}
}

export default GalleryFolders;
