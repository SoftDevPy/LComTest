public with sharing class FaizalController {
    
    @AuraEnabled(cacheable = true)
    
    public static List<Contact> getContactList() {
        return [select Id, Name FROM Contact];

    }
    
}
