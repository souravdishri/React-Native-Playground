- (coffee) if we are using () means group 
### List Views
- FlatList:
    The FlatList component displays a scrolling list of changing, but similarly structured, data. 
    FlatList works well for long lists of data, where the number of items might change over time.
    FlatList only renders elements that are currently showing on the screen, not all the elements at once.

    The FlatList component requires two props: data and renderItem.
     data:  is the source of information for the list. 
     renderItem: takes one item from the source and returns a formatted component to render.
      
- SectionList:
    If you want to render a set of data broken into logical sections, maybe with section headers, similar to UITableViews on iOS, then a SectionList is the way to go.

### SafeAreaView 
- The purpose of SafeAreaView is to render content within the safe area boundaries of a device. 
  It is currently only applicable to iOS devices with iOS version 11 or later.

- SafeAreaView renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views. 
- Moreover, and most importantly, Safe Area's paddings reflect the physical limitation of the screen, such as rounded corners or camera notches (i.e. the sensor housing area on iPhone 13).

- To use, wrap your top level view with a SafeAreaView with a flex: 1 style applied to it. 
  You may also want to use a background color that matches your application's design.



`npx create-expo-app@latest`
`npx expo start`