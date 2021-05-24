import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from 'app/fuse-layouts/shared-components/Navigation';
import clsx from 'clsx';
import React, { memo } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faVk } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
	}
}));
function NavbarLayout4(props) {
	const classes = useStyles(props);

	return (
		<div className={clsx('w-full shadow-md', classes.root, props.className)}>
			<div className={clsx('flex flex-auto items-center w-full h-full container px-16 lg:px-24')}>
				<FuseScrollbars className="flex h-full items-center">
					<Navigation className="w-full" layout="horizontal" dense />
				</FuseScrollbars>
				<div className="social-media">
					<a href="https://vk.com/sforzandofond" >
						<FontAwesomeIcon icon={faVk} size="2x"/>
					</a>
					<a href="https://instagram.com/sforzando_fond?igshid=51y4h7011in">
						<FontAwesomeIcon icon={faInstagram} size="2x"/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default memo(NavbarLayout4);
