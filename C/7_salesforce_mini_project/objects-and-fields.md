# Salesforce Objects and Fields

## Student__c
- Name
- Email__c
- Mobile__c
- Department__c

## Course__c
- Name
- Course_Code__c
- Credits__c

## Enrollment__c
- Student__c - Lookup to Student__c
- Course__c - Lookup to Course__c
- Enrollment_Date__c
- Status__c

## Tabs
- Students
- Courses
- Enrollments

## App
Student Course Management
