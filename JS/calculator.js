// triangle area calculation
function triangleArea() {
    const triangleBase = valueCoverter('triangle-base');
    const triangleHeight = valueCoverter('triangle-height');
    const result = document.getElementById('triangle-result');
    result.innerText = "Result is: " + (0.5 * triangleBase * triangleHeight);

}
// rectangle area calculation
function rectangleArea() {
    const rectangleLength = valueCoverter('rectangle-length');
    const rectangleWidth = valueCoverter('rectangle-width');
    const result = document.getElementById('rectangle-result');
    result.innerText = "Result is: " + (rectangleLength * rectangleWidth);

}

// parallelogram area calculation
function paralleloArea() {
    const paralleloBase = valueCoverter('parallelo-base');
    const paralleloHeight = valueCoverter('parallelo-height');
    const result = document.getElementById('parallelo-result');
    result.innerText = "Result is: " + (paralleloBase * paralleloHeight);

}

// Rhombus area calculation
function rhombusArea() {
    const rhombusD1 = valueCoverter('rhombus-d1');
    const rhombusD2 = valueCoverter('rhombus-d2');
    const result = document.getElementById('rhombus-result');
    result.innerText = "Result is: " + (0.5 * rhombusD1 * rhombusD2);

}

// Pentagon area calculation
function pentagonArea() {
    const pentagonP = valueCoverter('pentagon-p');
    const pentagonB = valueCoverter('pentagon-b');
    const result = document.getElementById('pentagon-result');
    result.innerText = "Result is: " + (0.5 * pentagonP * pentagonB);

}
// Pentagon area calculation
function ellipseArea() {
    const ellipseA = valueCoverter('ellipse-a');
    const ellipseB = valueCoverter('ellipse-b');
    const result = document.getElementById('ellipse-result');
    result.innerText = "Result is: " + (3.1416 * ellipseA * ellipseB);

}

function valueCoverter(text) {
    const inputField = document.getElementById(text);
    const inputText = parseFloat(inputField.value);
    inputField.value = '';
    return inputText;
}

