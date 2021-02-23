import React, { Component } from "react";

//a modal pop up that shows scheduling availability for any given day

//
//TO DO
//
//Grab value from react calendar and pass as props
//
//grab pre-scheduled appointments from the day's date and load/reserve times
//
//allow blocks of time to be selected/reserved
//
//confirm reservation does not conflict with anything else
//
//toggle modal to be brought up with date selected
function TimeAvails(props) {
	return (
		<div
			className='modal fade'
			id='exampleModalCenter'
			tabindex='-1'
			role='dialog'
			aria-lavelledby='exampleModalCenterTitle'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalCenterTitle'>
							{props.selectedDate}
						</h5>
						<button
							type='button'
							class='close'
							data-dismiss='modal'
							aria-label='Close'
						>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<div className='container-fluid'>Here are the available times</div>
					</div>
					<div class='modal-footer'>
						<button
							type='button'
							class='btn btn-secondary'
							data-dismiss='modal'
						>
							Close
						</button>
						<button type='button' class='btn btn-primary'>
							Book Appointment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TimeAvails;
