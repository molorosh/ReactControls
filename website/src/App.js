import React, { Component } from 'react';
import './App.css';
import './Control.css';
import DateTimePicker from './DateTimePicker';

class App extends Component {
	
	constructor(props){
        super(props);
        this.state = {
            demoDateString: "2008-08-28T23:30"
        }
        // DatePicker events
        this.handleDatePickerChange = this.handleDatePickerChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
	
	handleDatePickerChange(dateString){
        console.log("handleDatePickerChange(...)");
        console.log("dateString:");
        console.log(dateString);
        this.setState(
            {demoDateString: dateString}
            , ()=> {
                console.log("finished update");
            }
        );
    }
	
	handleFormSubmit(event){
        event.preventDefault();
    }
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>molorosh React.js controls</h1>
				</header>
				<article>
					<p><em>Pop-up free, in-place editing.</em></p>
					<section>
						<h2>DateTime Picker</h2>
						<h3>Demo One: Date and Time</h3>
						<p>
							React.js does not like having Javascript objects like <code>new Date()</code> as child elements, 
							so we usually use a canonical date time format string instead.</p>
						<DateTimePicker
							title="demo date time"
							isEdit={false}
							isEditable={true}
							value={this.state.demoDateString}
							onChange={this.handleDatePickerChange}
							// updating with a key is a simple
							// way to ensure the child component is redrawn
							// from scratch if the principal data is changed
							key={this.state.demoDateString}
						/>
						<p>The value of <code>state.demoDateString</code> is <code>{this.state.demoDateString}</code></p>
					</section>
				</article>
			</div>
		);
	}
}

export default App;
