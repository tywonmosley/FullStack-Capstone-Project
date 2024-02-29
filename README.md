# FullStack-Capstone-Project

## Individual E-Commerce App Requirements 

### Tier 1: MVP (Minimum Viable Product)

- Tier 1 relies on this third party API [ https://fakestoreapi.com ] Links to an external site.. This allows you to complete all aspects below. We highly encourage you to “go all the way” and make a back-end application. It is, however, not required.

- Create a fully-functional front-end application from scratch or use the template provided by your instructor. 

### AS A USER (NOT LOGGED IN), I SHOULD BE ABLE TO:
- Access the website via the internet so I can browse and purchase products. (Deployed on a front end host)
- View all available products.
- View the details for an individual product, including product descriptions, photos, price, etc.
- Sort products by certain characteristics (name, price, etc.).
- Filter products by certain characteristics (category, type, maximum/minimum price, etc.).
- Enjoy an aesthetically pleasing website with intuitive and easy to use UI/UX

### AS A USER (LOGGED IN), I SHOULD BE ABLE TO:

- Add an item to my cart
- Have a persistent cart to revisit and pick up where I left off.

  - For example, I add items to my cart, close my window and go back to the website later, those items should persist.

- Edit my cart if I change my mind:
  - Change the quantity of a product in my cart.
  - Remove a product from my cart.

- "Check out" the items in my cart, i.e., purchase the products.

Think of the user experience when checking out on a typical e-commerce site like Amazon, etc. You can start by simulating the experience of checking out with a simple confirmation page.


## TIER 2: E-Commerce Stretch
Optional: Create a fully-functional back-end application from scratch or using this starter for back-endLinks to an external site.  

## AS A USER (NOT LOGGED IN), I WANT TO BE ABLE TO:
- All website features usable no matter my device type (phone, tablet, laptop, desktop)
- UI tailored to my device size (phone, tablet, laptop, desktop)
- Navigate the website successfully regardless of ability.
  - This is a great opportunity to dive into ADA Compliance (screen-reader friendliness, keyboard navigation, colorblind-friendly, etc.).
  - Resources:
    - A11y ChecklistLinks to an external site. [ https://www.a11yproject.com/checklist/ ]
    - WebAIM Contrast CheckerLinks to an external site. [ https://webaim.org/resources/contrastchecker/ ]
- Know when content is loading or if there is an error, so I can manage my expectations as a user
  - Examples: 
    -  Show loading indicators while the frontend is waiting for a backend response.
    - If I visit a product page that does not exist, notify me and give me a link to go to a list of all products or back to the previous page.
- Enhance shopping cart functionality
  - When I open the browser on a different device and log in, I want to see those items in my cart (Requires persistent DB and API)
  - No one else should be able to edit my cart except me (Requires persistent DB and API)
  - There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following cases:
    - Guest-only: I do not want to create an account, but I want my cart to persist between browser refreshes. (Requires custom back end (DB and API) OR localStorage)
    - Guest-to-logged-in-user: Initially, I am not logged in, and I add items to my cart. When I eventually log in, I want to see those same items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged-in session. (Requires custom back end (DB and API) OR localStorage)
- Add a real Stripe API to the checkout workflow (Requires custom back end (DB and API) OR localStorage)
- Write a review for a product. This can be a modal, an on-page form, or a rating icon (Five Stars)

## AS A USER (LOGGED IN), I SHOULD BE ABLE TO:
- Remain logged in on separate sessions. (Requires custom back end (DB and API) OR localStorage)
- See my order history to remember my previously purchased items and their prices at the time of purchase. (Requires custom back end (DB and API) OR localStorage)
- View and edit my user profile so I can update my information when necessary. (Requires custom back end (DB and API) OR localStorage)
- Product reviews should be associated with the correct user. (Requires custom back end (DB and API) OR localStorage)

## Milestone 1 - Wireframe and Schema
Now that you have determined you project and planned for completion using GitHub, it is time to develop a high-level plan by creating a wireframe and/or schematic.

### Procedure
- Complete a wireframe and/or schema for for your selected project. 
  - Note: A wireframe or schema can be a hand-drawn sketch, a sharable link to a resource used to create the wireframe and/or schema, or a simple white boarding screenshot. Any artifact that demonstrates planning of the application and its functionality will work for this milestone. 
- Open and copy this milestone one resourceLinks to an external site.. Complete the prompts and submit it below as a sharable link that your instructional team can view. 

## Milestone 2 Deliverables
If you are working individually, submit proof of the following deliverables:

- Unit tests for critical React components
- Tests for different scenarios, such as edge cases and error conditions
- Login/Logout functionality finished
- Fetch functions used for all products, login, signup, and logout
- Single Product and Cart Components rendering using dummy data
- 50% MVP Completion
- Test written 

## Milestone 3 Deliverables
If you are working individually, submit proof of the following deliverables:

- Basic styles implemented
- Logged-out User functionality finished
- Single Product Component renders using fetch
- “Add item to cart” functionality working
- Checkout page has a form to take customer billing information (dummy info)

## Milestone 4 Deliverables
If you are working individually, submit proof of the following deliverables:

- CSS animations on pseudo-class selector rulesets
- Logged in User can view and edit their cart
- Checkout Page takes form information for a successful checkout
- Cohesive styling is implemented

## Capstone Project Grading
Your instructional team members will review your capstone project in its completed state and score it based on the rubric, so review the requirements thoroughly. Please submit a link to your GitHub repository.

 

### Reflect on the process in your Professional Tech Journal.

- Did your project plan run seamlessly? Or did you have to revise throughout? 
- How did your team communicate? What could you have improved on? What went well? 
- What were your major lessons learned? 
- Which part of full-stack development did you enjoy the most? The least? 
- Record anything else you think might be of value to remember!

### Capstone Rubric - Individual (Core)

#### This criterion is linked to a Learning Outcome

- Deployment
  - The project is properly deployed and accessible to the internet.

  - The website loads and can be interacted with.

- Project Management 
  - The status of tickets and issues accurately reflects the state of the website. i.e. Features described as "done" are actually working.

  -  The Github repository shows an active history with consistent and meaningful commit messages and pull requests.

- Frontend
  - The website is styled with CSS and effort has been made towards usable and elegant UX.

  - There is effective use of React components, hooks, and state management.

  - React Router is used appropriately to handle separate pages in the application.

  - Redux Toolkit and RTK Query are effectively used to handle global state and communication with the API.


- Backend
  - The Prisma schema defines appropriate models for the database.

  - The database is seeded with appropriate data.

  - API endpoints are implemented and send responses with the correct data and status codes.

  - API endpoints use Prisma Client to perform the proper CRUD operations.

  - bcrypt and JWT are used to implement authentication.


- Testing
  - There are unit tests for each API endpoint.

  - There are unit tests for critical React components.

  - There is evidence of testing for different scenarios, such as edge cases and error conditions.


- Documentation
  - The README contains clear instructions for setting up and running the project locally.

  - The README contains a clear and concise overview of the project's purpose and functionality.


  - Complex or non-obvious sections of code are explained in comments.


- Code Quality
  - Code is consistently styled and formatted.

  - Variables and functions have meaningful names and follow consistent naming conventions.

  - There is evidence of effort towards keeping the code well-organized and modular.
