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
    let Name;
    let email;
    let age;
    let password;
    let password_confirmed;
    



    let email1;
    let password1;
    let a = "@";

        if (useranswer === "1") {
            let NameIsValid = false;
            let name1;

            while (!NameIsValid) {
                name1 = prompt("Please enter your name: (it should start with a capital letter and rest lowercase and it should not contain numbers or special characters and it should be at least 5 characters long)");
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
                Name = name1;
            }
            
            let EmailIsValid = false;

            while (!EmailIsValid) {
                email1 = prompt("Please enter your email: (it should not contain spaces and it should be at least 10 characters long and it should contain exactly one @ symbol and it should be unique (should contain a number and a special character))").toLowerCase();
                email1 = email1.trim();
                if (email1.length === 0) {
                    alert("Email cannot be empty");
                    continue;
                }
                if (email1.length < 10) {
                    alert("Email must be at least 10 characters long");
                    continue;
                }
                if (!email1.includes(a)) {
                    alert("Email must contain exactly one @ symbol");
                    continue;
                }
                if (!numbers.test(email1)) {
                    alert("Email must contain a number");
                    continue;
                }
                if (!specialCharacters.test(email1)) {
                    alert("Email must contain a special character");
                    continue;
                }
                console.log("Email is valid");
                EmailIsValid = true;
                email = email1;
            }

            let AgeIsValid = false;
            let age1;

            while (!AgeIsValid) {
                age1 = prompt("Please enter your age: (it should be at least 18 years old)");
                if (isNaN(age1)) {
                    alert("Age must be a number");
                    continue;
                }
                if (age1.length > 2) {
                    alert("Age must be at most 2 digits long");
                    continue;
                }
                age1 = age1.trim();
                if (age1.length === 0) {
                    alert("Age cannot be empty");
                    continue;
                }
                if (age1 < 18) {
                    alert("Age must be at least 18 years old");
                    continue;
                }
                console.log("Age is valid");
                AgeIsValid = true;
                age = age1;
            }

            let PasswordIsValid = false;
            while (!PasswordIsValid) {
                password1 = prompt("Please enter your password: (it should be at least 7 characters long and it should contain at least one uppercase letter and one lowercase letter and one number and one special character)");
                password1 = password1.trim();
                if (password1.includes(" ")) {
                    alert("Password cannot contain spaces");
                    continue;
                }
                if (password1.length === 0) {
                    alert("Password cannot be empty");
                    continue;
                }
                if (password1.length < 7) {
                    alert("Password must be at least 7 characters long");
                    continue;
                }
                if (!specialCharacters.test(password1)) {
                    alert("Password must contain a special character");
                    continue;
                }

                console.log("Password is valid");
                PasswordIsValid = true;
                password = password1;
            }

            let PasswordConfirmedIsValid = false;
            let password_confirmed1;
            while (!PasswordConfirmedIsValid) {
                password_confirmed1 = prompt("Please confirm your password");
                password_confirmed1 = password_confirmed1.trim();
                if (password_confirmed1.length === 0) {
                    alert("Password cannot be empty");
                    continue;
                }
                if (password_confirmed1 !== password1) {
                    alert("Passwords do not match");
                    continue;
                }
                console.log("Password confirmed is valid");
                PasswordConfirmedIsValid = true;
                password_confirmed = password_confirmed1;
            }
    }
    console.log("Name: " + Name);
    console.log("Email: " + email);
    console.log("Age: " + age);
    console.log("Password: " + password);
    console.log("Password confirmed: " + password_confirmed);


    if (useranswer === "2") {
        let loginemail = prompt("Please enter your email");
        let loginpassword = prompt("Please enter your password");
        
        if (!email1 || !password1) {
            alert("No account found. Please sign up first.");
            return;
        }
        while (loginemail && loginpassword) {
            if (loginemail === email && loginpassword === password) {
                alert("Login successful");
                break;
            }else {
                alert("Login failed");
                loginemail = prompt("Please enter your email");
                loginpassword = prompt("Please enter your password");
            }
        }
        let balanceanswer = prompt("Welcome to the bank.\n would u like to know how much money u have?");
        let userbalance = 1000;
        if (balanceanswer === "1") {
            alert("You have " + userbalance + " Dh");
        }
        
        let loginanswer = prompt("1-Logout \n 2-withdraw Money \n 3-deposit Money \n 4-take a loan \n 5- invest");
        if (loginanswer === "1") {
            alert("Logout successful");
        }
        if (loginanswer === "2") {
            let withdraw = Number(prompt("Please enter the amount you want to withdraw"));
            if (withdraw > userbalance) {
                alert("You don't have enough money");
            }else {
                userbalance -= withdraw;
                alert("Withdraw successful");
            }
        }
        if (loginanswer === "3") {
            let deposit = Number(prompt("Please enter the amount you want to deposit"));
            userbalance += deposit;
            alert("Deposit successful");
        }
        if (loginanswer === "4") {
            let loan = Number(prompt("Please enter the amount you want to loan"));
            userbalance += loan;
            alert("Loan successful");
            alert("You have " + userbalance + " Dh");

        }
        if (loginanswer === "5") {
            let invest = Number(prompt("Please enter the amount you want to invest"));
            userbalance -= invest;
            alert("Invest successful");
            alert("You have " + userbalance + " Dh");
        }
    }

    if (useranswer === "3") {
        let email2 = prompt("Please enter your email");
        if (email2 === email1) {
            alert("Email is valid");
        }else {
            alert("Email is not valid");
        }
        if (email2 === email1) {
            newpassword = prompt("Please enter your new password : ");
            password1 = newpassword;
            alert("Password changed successfully");
        }
    }

    
    
