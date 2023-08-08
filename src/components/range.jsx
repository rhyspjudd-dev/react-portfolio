// Unpublished as of first launch

function handleRangeInput (event) {
    const rangeValues = ['reckless', 'fuzzy duck', 'morph', 'BFI']
    const inputRange = event.target;
    const rv = rangeValues[inputRange.value] 
    console.log(rv)
}

function Range() {

    return (
        <input 
        onChange={handleRangeInput} 
        className="w-96 vertical-range"
        type="range" 
        id="range" 
        name="range" 
        //value="0"
        defaultValue="0"
        min="0" 
        max="3" 
        step="1" 
        aria-valuetext="Range slider" 
        />
    )
  }
  
  export default Range