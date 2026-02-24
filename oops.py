# Define a class called Student
class Student:
    # Constructor to initialize object
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
    
    # Method to display student details
    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Grade: {self.grade}")
    
    # Method to check if the student passed
    def has_passed(self):
        if self.grade >= 50:
            return True
        else:
            return False

# Create objects of the class
student1 = Student("Alice", 18, 75)
student2 = Student("Bob", 19, 45)

# Call methods
student1.display_info()
print("Passed:", student1.has_passed())

print("\n")  # Line break

student2.display_info()
print("Passed:", student2.has_passed())