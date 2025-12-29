// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.

    let useranswer = prompt("Welcome to our bank, please choose an option: \n 1- Sign up \n 2- Login \n 3- Change password \n type exit to exit");
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbers = /[0-9]/;


        if (useranswer === "1") {
            let NameIsValid = false;
            let name1;

            while (!NameIsValid) {
                name1 = prompt("Please enter your name: (it should start with a capital letter and rest lowercase and it should not contain numbers or special characters and it should be at least 5 characters long)");
                if (!name1) {
                    alert("Name cannot be empty");
                    continue;
                }
                name1 = name1.trim();
                if (name1.length === 0) {
                    alert("Name cannot be empty");
                    continue;
                }
                if (name1.length < 5) {
                    alert("Name must be at least 5 characters long");
                    continue;
                }
                if (specialCharacters.test(name1)) {
                    alert("Name cannot contain special characters");
                    continue;
                }
                if (numbers.test(name1)) {
                    alert("Name cannot contain numbers");
                    continue;
                }
                let words = name1.split(" ").filter(Boolean);
                let capitalizationError = false;
                for (let word of words) {
                    if (word[0] !== word[0].toUpperCase() || word.slice(1) !== word.slice(1).toLowerCase()) {
                        capitalizationError = true;
                        break;
                    }
                }
                if (capitalizationError) {
                    alert("Each word must start with a capital letter and rest lowercase");
                    continue;
                }

                console.log("Name is valid");
                NameIsValid = true;
            }
   
    }
