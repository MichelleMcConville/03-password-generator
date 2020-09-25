# PSEUDO CODE

## 1. Ask how long to make the password

- `prompt("Please make password between 8 to 128 characters long.")`
  - VALIDATE that only `Numbers` can be entered

## 2. Ask if they want to use upper case letters

- `confirm("Do you want to use "UPPER" case letters?")`

## 3. Ask if they want to use lower sase letters

- `confirm("Do you want to use "lower" case letters?")`

## 4. Ask if they want numbers

- `confirm("Do you want to use Numbers?")`

## 5. Ask if they want to use special characters

- `confirm("Do you want to use Special Characters?")`

## 6. If all responses are "False" than

- `alert("You must choose at least one option!")`

## 7. If any one response above is "True" than

## 8. Create a `function`

`If` statements for each of the 4 questions above (will include new array w/ `.concat` of old array)

- Will contain the `confirms` & `alerts` above
- Will contain the `if` statements that will concatenate the new array

## 9. Password Generator Loop

- Create a `forLoop`
- Loop thru this the # of times for PW length given
  - Generate `math.random()` number w/ provided PW length (w/ `math.floor` function)
  - The `math.random()` number and lookup index on parent array
  - `return` new password

---

## Variables

1. Array for Upper Case
2. Array for Lower Case
3. Array for Numbers
4. Array for Special Characters
5. Empty var for New Combined Array
6. Empty var for New User Password
