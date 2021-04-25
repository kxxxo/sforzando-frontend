import React, { Component, useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from "axios";
import HttpConfig from "../../config/HttpConfig";

class GalleryHeader extends Component{
	constructor(props) {
		super(props);
	};

	handleReset () {
		if (this.props.onReset) {
			this.props.onReset();
		}
	};
	render() {
		return (

			<div>
				{
					this.props.data.path !== "/" &&
						<div>
							<Button onClick={() => {this.handleReset()}} >
								<Icon>arrow_back</Icon>
								<Typography variant={"h5"}>{this.props.data.name}</Typography>
							</Button>
						</div>
				}

			</div>
		)
	}
}

export default GalleryHeader;
