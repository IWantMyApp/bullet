
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	TouchableOpacity 	} 	from 'react-native';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		actions 				from '../../actions/search';
import 		style 					from '../../styles/search';

export default connect (

	state => ({
		search 	: state.search ,
		theme 	: state.theme
	})

) ( class SearchIcon extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.on = this.on.bind ( this );
	}

	on () {

		this.props.dispatch ( actions.on ( ! this.props.search.on ));
	}

	render () {

		const theme = this.props.theme;

		return (

			<TouchableOpacity 
				onPress = { this.on 				}
				style 	= { style ( theme ).icon 	}
			>

				<Ionicons
					name 	= { 'ios-search-outline' 									}
					size 	= { 24 														}
					color 	= { this.props.search.on ? theme.disabled : theme.secondary }
				/>
				
			</TouchableOpacity>
		);
	}
});