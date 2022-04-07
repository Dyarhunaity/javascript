
const LongestName = names => {
    const longestNameLength = names.reduce((longestLength, names) => {
      return names.name.length > longestLength ? names.name.length : longestLength
    }, 0)
    return names.filter(names => names.name.length === longestNameLength)
  }
  
  console.log(LongestName([
    {name: "Samuel"},
    {name: "Jeremiah"},
    {name: "Ophilia"},
    {name: "Donald"}
  ]));
  
  