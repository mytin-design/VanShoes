# BUG001
- Carousel next/previous button seems to go over elements that cannot be seen.

-- Next and previous buttons loop over items with display:none;

# cause
- the script loops over every item in the html with the class name "crsl-bx"

there are eight elements with such class

--the first carousel should loop over 4 items 
--however it loops over 8 

# solution
-change class 
-add another class - problem will persist
