import React from 'react';

export default React.createClass({


render(){

	return(

		<div>
			<div class="container">
				<form>
					<ul>
						<li><input type="text" placeholder="artist" id="artist"/></li>
						<li><textarea placeholder="description" id="description"/></li>
					</ul>
					<button onClick={this.submitClickHandler} type="submit" id="submit">Submit</button>
					<button onClick={this.descriptionClickHandler}>Cancel</button>
				</form>
			</div>
		</div>

		);
}

});