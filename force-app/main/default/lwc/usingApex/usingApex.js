import { LightningElement, api, wire} from 'lwc';
import USER_ID from '@salesforce/user/Id';
import getContactList from '@salesforce/apex/fazalController.getContactList'

export default class UsingApex extends LightningElement {
    // wire is an inbuilt method to fetch data based on some adapter or some method in an apex class
    // imperical approach means that you do not used any of the adapters given by salesforce, rather you use your own methods
    
    // 1st step is wire a property and pass the method to the wire
    // Wire as a propery is different from wire as a function
    //  You can handle the data or call the wire in those two ways either as a property variable or as a function variable
    // next line define the name of the property that is going to catch the data of the wire in the next line
    @api recordId
    @api objectApiName
    userId = USER_ID
    // hold data as an array so you have it as it came in and don't manipulate this array below
    actualData ={}

    contactListDetails ={}
    
     // Wire as a property
    @wire(getContactList)
    contactList

   
    // wire as a function
    // remember the data will come as an array of objects always and the data will always have a result and error as a property
    @wire(getContactList)
    contactListHandler(result){   
        console.log(result) 
        this.contactListDetails = result
    }
    
    //  so getContactList is the object holding the data, and it will return success or error

    


}