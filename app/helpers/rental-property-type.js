import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

/*
 * Handlebars passes an array of arguments from our template to our helper.
 * We are using ES2015 destructuring to get the first item in the array and name it 'type'.
 * Then we can check to see if type exists in our communityPropertyTypes array.
 */
export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyTypes.includes(type)) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
