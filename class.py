# Define a class
class Student:
    
    # Constructor (initialization method)
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # Method to display student details
    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)


# Create an object of the class
student1 = Student("John", 20)

# Call the method
student1.display()