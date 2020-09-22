# PSEUDO CODE

### 1. Ask how long to make the password

- `prompt("Please make password between 8 to 128 characters long.")`

### 2. Ask if they want to use upper case letters

- `confirm("Do you want to use "UPPER" case letters?")`

### 3. Ask if they want to use lower sase letters

- `confirm("Do you want to use "lower" case letters?")`

### 4. Ask if they want numbers

- `confirm("Do you want to use Numbers?")`

### 5. Ask if they want to use special characters

- `confirm("Do you want to use Special Characters?")`

### 6. If all responses are "False" than

- `alert("You must choose at least one option!")`

### 7. If any one response above is "True" than

### 8. Password Generator Loop

- Concatenate `True` Array(s) w/ `If` statement(s) (parent array built)
- Loop thru this the # of times for PW length given
    - Generate `math.random()` number with provided PW length (w/ `math.floor` function)
    - The `math.random()` number and lookup index on parent array
    - Then pull back that value from the array
    - Append that element to the PW Variable
- Return PW

### 9. Generate output in dotted box provided in `HTML`
