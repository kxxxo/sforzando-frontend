import React, { Component, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

class GalleryHeader extends Component{
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
								<Typography variant="h5">{this.props.data.name}</Typography>
							</Button>
						</div>
				}
			</div>
		)
	}
}

export default GalleryHeader;
