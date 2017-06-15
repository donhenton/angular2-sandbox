export interface Restaurant
{
  name: string,
  zipCode: string,
  city: string,
  state: string,
  version: number 
  id: number,
  reiviews: Reviews[]
}


export interface Reviews
{
    starRating: number,
    reviewListing: string,
    stampDate: Date,
    id: number


}