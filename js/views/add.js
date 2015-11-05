import React from 'react';

export default React.createClass({

	cancelHandler(){
		this.props.onCancelClick();
	},

	submitHandler() {
		event.preventDefault();
		this.props.onUploadSelect(this.state.Image, this.state.Description);
	},

updateImage(event) {
	let newImage ={file: file,imageUrl:event.target.result};
	this.setState({
		Image: newImage
	});
},

updateDescription(event){
	let newDescription = event.currentTarget.value;
		this.setState({
			Description: newDescription
	});
},

updateName(event) {
	let newName = event.currentTarget.value;
		this.setState({
			Name: newName
	});
},

	render(){
		return(
			<div>
				<div className="container">
					<form>
						<ul>
							<li><input className="addup dup"  onChange={this.updateImage} type='file' multiple ref='fileInput' placeholder="photo url" id="photoURL"/></li>
							<li><input className="addup" onChange={this.updateName} type="text" placeholder="Artist" id="artist"/></li>
							<li><textarea className="addup" rows="4" cols="50" onChange={this.updateDescription} placeholder="Description" id="description"/></li>
						</ul>
						<button className="hip" onClick={this.submitHandler} type="submit" id="submit">Submit</button>
						<button className="hip" onClick={this.cancelHandler} type="submit" id="submit">Cancel</button>
					</form>
				</div>
			</div>
			);
	}

});