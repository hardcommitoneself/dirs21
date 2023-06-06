## Implementation

1. What libraries did you add to the frontend? What are they used for?

- API  
  I have used `faker js` to get seed data initialized.
- APP
  1. Axios - to call apis of backend
  2. pinia - state management
  3. formkit - build form with high dev experience
  4. tailwindcss - styling

2. What would you change about your implementation if you had to handle thousands of items?  
   I'd like to implement infite scroll component for DishList

## General

1. If you had more time, what further improvements or new features would you add?  
   I've added a tiny extra functionalities like searching dishes.  
   what I'd like to add further features are...
   - implement taglist component for category
   - notification system
   - typescript(for now, the app has low readable like it's hard to find type definitions, types of props, state etc)
   - storybook for devs
   - lint
   - i18n
   - etc
2. Which parts are you most proud of? And why?  
   I am proud of formkit and pinia part as those tech are most up to dated and powerful, easy to use.

3. Which parts did you spend the most time with? What did you find most difficult?  
   I spent most of time with implementing DishEditForm as it seems more like complicated than other parts. Also spent a bit more time to implement basic layouts and components...

4. How did you find the test overall? Did you have any issues or have difficulties completing? If you have any suggestions on how we can improve the test, we'd love to hear them.  
   I just have some suggestions...
   - hopefully the app is based on typescript
   - unit tests & e2e tests implementation
