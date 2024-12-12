/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

function convertTemperature(){

    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");

    if(!isNaN(celsiusInput.value)){

        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);

    }else if(!isNaN(fahrenheitInput.value)){

        const fahrenheitValue = fahrenheitInput.value;
        const celsiusValue = (fahrenheitValue - 32) * 5/9;

        celsiusInput.value = celsiusValue.toFixed(2);

    }
    
    else{
        alert("Please enter a Valid Number")
    }
}