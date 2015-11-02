import React from 'react';

export default React.createClass({

	cancelClickHandler(){
		this.props.onHomeClick();
	},

	submitClickHandler() {
		this.prop.onSubmitClick();
	},

	render(){
		return(
			<div>
				<div class="container">
					<form>
						<ul>
							<li><input type="text" placeholder="artist" id="artist"/></li>
							<li><input type="text" placeholder="photo url" id="photoURL"/></li>
							<li><textarea placeholder="description" id="description"/></li>
						</ul>
						<button onClick={this.submitClickHandler} type="submit" id="submit">Submit</button>
						<button onClick={this.homeClickHandler} type="submit" id="submit">Cancel</button>
					</form>
				</div>
			</div>
			);
	}

});