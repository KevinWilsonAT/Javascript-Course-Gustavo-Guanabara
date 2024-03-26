/* DOM:     Document Object Model

            ex006.html DOM tree
===========================================================

          +--[...]
          |
          +--[location]--[...]
          |          
          |              +--[...]
          |              |
          |              |
          |              |
          |              |
[window]--+--[document]--+
          |              |
          |              |                     +--[script]
          |              |                     |
          |              |          +--[head]--+--[meta]
          |              |          |          |
          |              |          |          +--[title]
          |              |          |
          |              +--[html]--+
          |                         |          +--[h1]
          |                         |          |
          |                         |          +--[p]
          |                         +--[body]--+
          |                                    +--[p]--[strong]
          |                                    |
          |                                    +--[div]
          |
          +--[history]--[...]
*/

/*
    innerText .......... take a text without formatting
    innerHTML .......... take a text with HTML formatting
*/

/*
    SELECTING ELEMENTS (EACH ONE OF THOSE [RECTANGLES] ABOVE)

    by Tag ............. getElementsByTagName()
    by ID .............. getElementById()
    by Name ............ getElementsByName()
    by Class ........... getElementsByClassName()
    by Selector ........ querySelector()
    querySelectorAll()
    
    #       used in selector for id tag in HTML (in CSS works the same way)
    .       used in selector for class tag in HTML (in CSS works the same way)    
*/
    