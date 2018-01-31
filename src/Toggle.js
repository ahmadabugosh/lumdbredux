import React, {Component} from 'react';
import {connect} from 'react-redux';

class Toggle extends Component {

	render()

	{

		return (
<div>
			{this.props.messageVisibility &&
				<p>You are seeing this if it worked</p>
			}
<button>Toggle Me</button>

</div>

			);

	}

}

const mapStateToProps=state => ({
messageVisibility:state.message.messageVisibility


});

export default connect(mapStateToProps)(Toggle);