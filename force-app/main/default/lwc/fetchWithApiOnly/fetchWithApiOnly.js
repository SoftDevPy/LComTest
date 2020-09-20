import { LightningElement, api } from 'lwc';
// below is how you can fethch data by default without using Apex or Wire etc
// how to get the current record id, object api name and current user id
//  and below the default path to get the logged in user info
import USER_ID from '@salesforce/user/Id';

export default class FetchWithApiOnly extends LightningElement {
    // coming to us from parent so it has to be mapped accordingly, so use proper name recordId etc
    @api recordId
    // bjectApiName this gives the fetching service info on the type of object required, Account or Conatct etc
    @api objectApiName
    userId = USER_ID




}