// script.js

function startTimer() {
    alert('Starting workout timer...');
    
    let workoutDuration = 30; // You can customize the duration as needed
    const timer = setInterval(() => {
        if (workoutDuration > 0) {
            workoutDuration--;
            console.log(workoutDuration + ' minutes remaining');
        } else {
            clearInterval(timer);
            alert('Workout complete! Great job!');
        }
    }, 6); // Set to 1 minute intervals
}
