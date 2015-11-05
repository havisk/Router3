import React from 'react';

export default React.createClass({

getInitialState() {
	return {
		Name: this.props.Name,
		Image: this.props.Image,
		Description: this.props.Description
	};
},

submitHandler(adder){
	adder.preventDefault();
	this.props.onSubmit(this.state.Name, this.state.Image, this.state.description);
},

cancelHandler(){
	this.props.onCancelClick();
},

updateImage(adder){
	let newImage = adder.currentTarget.value;

	this.setState({
		Image: newImage
	});
},

updateName(adder){
	let newName = adder.currentTarget.value;

	this.setState({
		Name: newName
	});
},

updateDescription(adder){
	let newImage = adder.currentTarget.value;

	this.setState({
		Description: newDescription
	});
},

render(){
	console.log(this);

	return(

		<div>
			<div className="editC">
				<form onSubmit={this.submitHandler}>
					<ul className="showem">
						<li><label className="file"><input onChange={this.updateImage} type='file' multiple ref='fileInput' placeholder="photo url" id="photoURL"/></label></li>
						<li><label className="namel"><input onChange={this.updateName} type="text" value={this.state.Name} placeholder="Artist" id="artist"/></label></li>
						<li><label className="descript" > <textarea onChange={this.updateDescription} rows="4" cols="50" value={this.state.Description} placeholder="Description" id="description"/></label></li>
					</ul>
				</form>
				<div>
					<button className= "run" onClick={this.submitHandler} type="submit" id="submit">Submit</button>
					<button className= "run" onClick={this.cancelHandler}>Cancel</button>
				</div>
			</div>
		</div>

		);
}

});