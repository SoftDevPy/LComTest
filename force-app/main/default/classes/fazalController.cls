public with sharing class fazalController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList() {
        return [select Id, Name FROM Contact Limit 5];
        // this is going to return an object with 2 properties of Id and Name that we can then access with dot notation
    }


    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountById(Id accId) {
        return [select Id, Name FROM Account WHERE Id = accId];
        // this is going to return an object with 2 properties of Id and Name that we can then access with dot notation
    }





}
