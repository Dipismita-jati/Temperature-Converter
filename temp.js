function convertTemperature(inputeType)
{

    const celsiusInpute = document.getElementById('celsius');
    const fahrenheitInpute = document.getElementById('fahrenheit');

    if(inputeType === 'celsius')
    {
        const celsiusValue = celsiusInpute.value;
        if(celsiusValue !== '')
        {
            const fahrenheitValue=(celsiusValue * 9/5) + 32;
            fahrenheitInpute.value = fahrenheitValue.toFixed(2);
        }
        else{
            fahrenheitInpute.value='';
        }
    }
    else if(inputeType === 'fahrenheit'){
        const fahrenheitValue = fahrenheitInpute.value;
        if(fahrenheitValue !==''){
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            celsiusInpute.value = celsiusValue.toFixed(2);
        }
        else{
            celsiusInpute.value='';
        }
    }
}