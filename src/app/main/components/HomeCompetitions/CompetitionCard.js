import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import React, { Component } from "react";

class CompetitionCard extends Component{
	constructor(props) {
		super(props);
	}
	rawText() {
		return { __html: this.props.text };
	}
	render() {
		return (
			<Card style={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						style={{ height: 140 }}
						image={this.props.image}
						title={this.props.title}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{this.props.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							<span dangerouslySetInnerHTML={this.rawText()} />
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}

export default CompetitionCard;
