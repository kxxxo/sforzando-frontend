import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CompilationCard from "../components/CompilationCard";
import React from "react";
import Container from "@material-ui/core/Container";

function ListPage() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<Container fixed>
				<CompilationCard title="asd" image="image" content="asdas" id="1"/>
				<CompilationCard />
			</Container>
		</div>
	);
}

export default ListPage;
