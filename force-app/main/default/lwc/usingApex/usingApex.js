import { LightningElement, api, wire} from 'lwc';
import getContactList from '@salesforce/apex/FaizalController.getContactList'

export default class UsingApex extends LightningElement {
    // wire is an inbuilt method to fetch data based on some adapter or some method in an apex class
    // imperical approach means that you do not used any of the adapters given by salesforce, rather you use your own methods
    
    // 1st step is wire a property and pass the method to the wire
    // next line define the name of the property that is going to catch the data of the wire in the next line

    @wire(getContactList)
    getContactList















}