def calculator():
    try:
        print("\nSimple Calculator")
        print("Operations: +  -  *  / // ^")
        print("Type 'exit' to quit")

        user_input = input("Enter calculation (e.g., 5 + 3): ")

        
        if user_input.lower() == "exit":
            print("Calculator closed.")
            return

        
        num1, operator, num2 = user_input.split()

        
        num1 = float(num1)
        num2 = float(num2)

       
        if operator == "+":
            result = num1 + num2
        elif operator == "-":
            result = num1 - num2
        elif operator == "%":
            result = num1 % num2
        elif operator == "//":
            result = num1 // num2
        elif operator == "*":
            result = num1 * num2
        elif operator == "/":
            if num2 == 0:
                raise ZeroDivisionError("Cannot divide by zero!")
            result = num1 / num2
        elif operator == "^":
            result = num1 ** num2
        else:
            raise ValueError("Invalid operator!")

        print("Result:", result)

    except ValueError:
        print("Error: Invalid input format! Please use: number operator number")
    except ZeroDivisionError as e:
        print("Error:", e)
    except Exception as e:
        print("Unexpected error:", e)

    
    calculator()



calculator()
    