# CC Assignment 7 - Salesforce Cloud Mini Project

## Aim
Design and develop a custom application mini project using Salesforce Cloud.

## Mini Project Title
Student Course Management System

## Objective
Create a Salesforce application to manage students, courses and enrollments.

## Custom Objects

### Student
| Field | Type |
|---|---|
| Student Name | Text |
| Email | Email |
| Mobile | Phone |
| Department | Picklist |

### Course
| Field | Type |
|---|---|
| Course Name | Text |
| Course Code | Text |
| Credits | Number |

### Enrollment
| Field | Type |
|---|---|
| Student | Lookup(Student) |
| Course | Lookup(Course) |
| Enrollment Date | Date |
| Status | Picklist |

## Procedure

1. Login to Salesforce Developer Org.
2. Open Setup.
3. Go to App Manager.
4. Click New Lightning App.
5. Enter app name as Student Course Management.
6. Create custom objects: Student, Course and Enrollment.
7. Add required custom fields.
8. Create tabs for each object.
9. Add tabs to the Lightning App.
10. Create sample records.
11. Create report for enrolled students.
12. Create dashboard to show course-wise enrollment count.

## Validation Rule Example

Student email should not be blank:

```text
ISBLANK(Email__c)
```

Error message:

```text
Email is required.
```

## Report
Create a report on Enrollment object showing student name, course name and status.

## Dashboard
Create a dashboard with:
- Total students
- Total courses
- Enrollment count by course

## Conclusion
A custom Salesforce Cloud application was designed and developed for student course management.
