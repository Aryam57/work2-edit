function calculateWeightLoss() {
                        const caloriesPerHour = {
                            running: 185,
                            cycling: 225,
                            walking: 164
                        };
                        
                        const runningHours = document.getElementById('running').value;
                        const cyclingHours = document.getElementById('cycling').value;
                        const walkingHours = document.getElementById('walking').value;
                        
                        if (runningHours === '' || cyclingHours === '' || walkingHours === '') {
                            alert('Please fill out all fields to make the calculation.');
                            return;
                        }
                        
                        
                        
                        const totalCaloriesBurned = (runningHours * caloriesPerHour.running) +
                                                     (cyclingHours * caloriesPerHour.cycling) +
                                                     (walkingHours * caloriesPerHour.walking);
                        
                        const weightLoss = totalCaloriesBurned / 3800;
                        
                        alert('Thank you for using the weight loss website.Number of calorise brrmed is: ' + totalCaloriesBurned.toFixed(2) +
                        '،  Number of kilograms worked off is' + weightLoss.toFixed(2));
                        
                    }
                    
                    document.getElementById('resetButton').addEventListener('click', function() {
                        const confirmReset = confirm('Your entered values are incomplete. please try again');
                        if (confirmReset) {
                            resetForm();
                        }
                    });
                    
                    function resetForm() {
                        document.getElementById('caloriesForm').reset();
                        document.getElementById('result').innerHTML = ''; 
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    